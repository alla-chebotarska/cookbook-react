import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import LocalStorage from '../../servises/LocalStorage';

import './AddRecipe.css';

export default class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            ingridients: [{ key: Date.now(), quantity: '200', unit: 'gr', value: 'first' }],
            inputQuantity: '',
            inpitUnit: 'gr',
            inputValue: '',
        }
        this.localStorage = new LocalStorage();
    }

    titleChanged = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    inputQuantityChange = (event) => {
        this.setState({
            inputQuantity: event.target.value
        });
    }

    inputUnitChanged = (event) => {
        this.setState({
            inpitUnit: event.target.value
        })
    }

    inputValueChanged = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    onAddButtonClick = () => {
        if (this.state.inputQuantity.length == 0 || this.state.inputValue.length === 0) {
            toast.warning("Please fill all ingridient fields");
            return;
        }
        let newIngridient = {
            key: Date.now(),
            quantity: this.state.inputQuantity,
            unit: this.state.inpitUnit,
            value: this.state.inputValue
        };
        this.setState({
            ingridients: this.state.ingridients.concat(newIngridient),
            inputQuantity: '',
            inputValue: '',
        })
    }

    onSaveRecipeBtnClick = () => {
        if (this.state.title.length == 0) {
            toast.warning("Please fill title field");
            return;
        }
        this.saveRecipe();
        toast.success("The recipe saved");
        this.goToRecipeList();
    }

    saveRecipe() {
        let recipe = {
            title: this.state.title,
            listIngridients: this.state.ingridients
        }
        this.localStorage.saveRecipe(recipe);
        this.setState({
            title: '',
            ingridients: [],
        })
    }

    goToRecipeList() {
        this.props.history.push('/recipelist');
    }

    render() {
        return (
            <div className='new-recipe-container'>
                <form>
                    <input
                        type="text"
                        placeholder='Title'
                        onChange={this.titleChanged}
                        value={this.state.title}
                        ></input>
                    <ul>
                        {this.state.ingridients
                            .map((item) =>
                                <li key={item.key}>{item.quantity} {item.unit} {item.value}</li>)}
                    </ul>
                        <input type='number'
                            onChange={this.inputQuantityChange}
                            value={this.state.inputQuantity}></input>
                        <select
                            onChange={this.inputUnitChanged}
                            value={this.state.inpitUnit}>
                            <option>gr</option>
                            <option>ml</option>
                            <option>pieces</option>
                        </select>
                        <input
                            type='text'
                            onChange={this.inputValueChanged}
                            value={this.state.inputValue}></input>
                        <input
                            type='button'
                            value='Add'
                            onClick={this.onAddButtonClick} />
                    <div>
                        <input 
                            type='button' 
                            value='Save recipe'
                            onClick={this.onSaveRecipeBtnClick}/>
                    </div>
                </form>
            </div>
        )
    }
}
