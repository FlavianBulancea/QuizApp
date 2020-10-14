import React , { useState }from 'react'

import { url } from '../env'
import Axios from 'axios'
import Checkbox from "./Checkbox";



const Category = (props) => {
    const [showSelect, setShowSelect] = useState(false)
    const [listOfCategories, setListOfCategories] = useState([])
    const [listOfSelectedCategories, setListOfSelectedCategories] = useState([])


    const goToQuestions = () => {
        setListOfSelectedCategories(listOfCategories)
        const { history } = props;
        history.push('questions');
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
        }else {
            setShowSelect(!showSelect)
        }

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
            });
    };



    return (
        <div>
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