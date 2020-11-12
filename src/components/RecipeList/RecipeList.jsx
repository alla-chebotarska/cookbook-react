
import { Card, Grid, List, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import LocalStorageService from '../../servises/LocalStorageService';
import RecipeItem from '../RecipeItem/RecipeItem';
import './RecipeList.css';

export default class RecipeList extends Component {

    goToRecipePage = (id) => {
        this.props.history.push(`/recipe/${id}`);
    }

    render() {
        let storage = new LocalStorageService();
        let recipes = storage.getAllRecipes();
        let items = recipes.map((recipe) => <RecipeItem key={recipe.id} onClick={() => this.goToRecipePage(recipe.id)}>{recipe.title}</RecipeItem>)

        return (
            <div className='recipe-list'>
                <Card>
                    <Grid>
                        <Grid
                            container
                            item xs={12}
                            justify='center'
                            className='recipe-list-title'>
                            <Typography variant="h5">
                                Recipe List
                            </Typography>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div>
                                    <List dense={false} fullwidth>
                                        {items.length != 0 ? items :
                                            <Typography variant="h6">

                                                You don't have any recipes yet
                                            </Typography>
                                        }
                                    </List>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
    }
}
