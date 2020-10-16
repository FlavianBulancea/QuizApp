import React , { useState } from 'react'

import Axios from 'axios'
import { connect } from 'react-redux'

import { url } from '../env'
import Checkbox from "./Checkbox";

import {updateCategory} from '../actions/categoryActions'




const Category = ({dispatch, questions, history}) => {
    const [showSelect, setShowSelect] = useState(false)
    const [listOfCategories, setListOfCategories] = useState([])

    
    const goToQuestions = () => {
        const localCategories = [...listOfCategories]
        let ids = []
        for (let i=0; i<localCategories.length;i++) {
            if (localCategories[i].isSelected === true) {
                ids.push(localCategories[i].id)
            }
        }

        if(ids.length > 0) {
            console.log('ids.....'+ids)
            Axios.post(url.selected+ids, {ids})
            .then((res) => {
                let localCat = res.data
                console.log(localCat)
                dispatch(updateCategory(localCat))
                history.push(`/questions/${localCat[0]?.id}`)
            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })
            
            
        }else {
            console.log('Alege o categorie')
            alert('choose a category')
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
        <div className='home-div'>
            <div className='categories'>
                <div className='choose-category'>Choose a Category:</div>
                <div onChange={(e) => categoryList(e)} className='radio-button'>
                    <input type="radio" name="choise" value="all" className='all'/> All
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
                <button className='next-button' onClick={() => goToQuestions()}>Next</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      questions: state.categoryReducer.questions,
    }
}
export default connect(mapStateToProps)(Category)
  