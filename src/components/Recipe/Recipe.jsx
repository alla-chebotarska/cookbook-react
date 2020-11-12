import { Card, CardContent, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import LocalStorageService from '../../servises/LocalStorageService';

import './Recipe.css';

export default class Recipe extends Component {

    constructor(props) {
        super(props);
        this.localStorage = new LocalStorageService();
        this.recipe = this.localStorage.getRecipeById(this.props.match.params.id);
        console.log(this.recipe.listIngridients);
    }

    render() {
        return (
            <Card className='recipe-container'>
                <CardContent>
                    {this.recipe === null ?
                        "Incorrect recipy id " : (
                            <div>
                                <Typography variant='h6'>{this.recipe.title}</Typography>
                                <ul>
                                    {this.recipe.listIngridients.map((ingridient) => 
                                    <li key={Date.now()}>{ingridient.quantity} {ingridient.unit} {ingridient.value}</li>)}
                                </ul>
                                <Typography variant='h6'>Instruction</Typography>
                                    <Typography>{this.recipe.instruction}</Typography>
                            </div>
                        )}
                </CardContent>
            </Card>
        )
    }
}
