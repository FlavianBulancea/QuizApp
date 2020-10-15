import React , { useState } from 'react'

import { url } from '../env'
import Axios from 'axios'
import Checkbox from "./Checkbox";




const Category = (props) => {
    const [showSelect, setShowSelect] = useState(false)
    const [listOfCategories, setListOfCategories] = useState([])
    
    const goToQuestions = () => {
        const localCategories = [...listOfCategories]
        let ids = localCategories.filter(item => item.isSelected === true)

        if(ids.length > 0) {
            Axios.post(url.selected, {ids})
            .then((res) => {
                let localCat = res.data
                console.log(localCat)
                localStorage.setItem('QuestionList', JSON.stringify(localCat));
            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })
            let quest = JSON.parse(localStorage.getItem('QuestionList'));
            const { history } = props;
            history.push(`questions/${quest[0].id}`);
        }else {
            console.log('Alege o categorie')
            alert('choose a category muistule')
        }    
    }

    
    const handleCheckboxChange = (e) => {
        const { name } = e.target;
        let localOb = [...listOfCategories]
        localOb.map((item) => {
            if(item.category === name) {
                item.isSelected = !item.isSelected
            }
        })
        setListOfCategories(localOb)
    }
    

    
    const categoryList = (e) => {
        
        if(e.target.value === 'custom') {
            setShowSelect(true)
            Axios.get(url.categories)
            .then((res) => {
                const localList = res.data.map((item) => {
                    return {
                        id: item.id,
                        category: item.category,
                        isSelected: false,
                    };
                });
                setListOfCategories(localList);
            })
            .catch((err) => {
                console.error(err)
                alert(err)
            })
        }
        if(e.target.value === 'all') {
            setShowSelect(false)
            Axios.get(url.categories)
            .then((res) => {
                const localList = res.data.map((item) => {
                    return {
                        id: item.id,
                        category: item.category,
                        isSelected: true,
                    };
                });
                setListOfCategories(localList);
            })
            .catch((err) => {
                console.error(err)
                alert(err)
            })
        }
    }
    


    return (
        <div>
            <div>Choose a Category:</div>
            <div onChange={(e) => categoryList(e)}>
                <input type="radio" name="choise" value="all"/> All
                <input type="radio" name="choise" value="custom"/> Custom
            </div>
            {showSelect && 
                <div className='category-list'>
                        {listOfCategories.map((item, index) => {
                            return <Checkbox
                            label={item.category}
                            isSelected={item.isSelected}
                            onCheckboxChange={(e) => handleCheckboxChange(e)}
                            key={index}
                            />
                        })}
                </div>
            }
            <div>
                <button onClick={() => goToQuestions()}>Next</button>
            </div>
        </div>
    )
}

export default Category;