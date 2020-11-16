
import { ButtonGroup, Card, Grid, List, TextField, IconButton, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import React, { Component } from 'react';
import LocalStorageService from '../../services/LocalStorageService';
import nextPath from '../../services/LocationService';
import RecipeItem from '../RecipeItem/RecipeItem';
import './RecipeList.css';

export default class RecipeList extends Component {

    constructor(props) {
        super(props);
        this.storage = new LocalStorageService();
        this.state = {
            searchField: '',
            recipes: this.storage.getAllRecipes(),
        }
    }

    searchFieldChanged = (event) => {
        this.setState({
            searchField: event.target.value,
        })
    }

    goToRecipePage = (id) => {
        this.props.history.push(`/recipe/${id}`);
    }

    deleteItem = (id) => {
        let newRecipeArr = this.state.recipes;
        newRecipeArr.splice(newRecipeArr.findIndex((recipe) => recipe.id === id), 1);
        this.setState({
            recipes: newRecipeArr,
        });
        this.storage.saveAll(newRecipeArr);
    }

    render() {
        let items = this.state.recipes
            .filter((recipe) => recipe.title.toLowerCase().includes(this.state.searchField.toLowerCase()))
            .map((recipe) =>
                <RecipeItem key={recipe.id}
                    onItemClick={() => this.goToRecipePage(recipe.id)}
                    onDeleteClick={() => this.deleteItem(recipe.id)}>
                    {recipe.title}
                </RecipeItem>)

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
                        <Grid container spacing={1} alignItems="flex-end" className='search-recipe'>
                            <Grid item xs={11}>
                                <TextField
                                    id="input-with-icon-grid"
                                    label="Search recipe"
                                    fullWidth
                                    
                                    onChange={this.searchFieldChanged} />
                            </Grid>
                            <Grid item>
                                    <SearchIcon />

                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div>
                                    <List dense={false} fullwidth>
                                        {items.length !== 0 ? items :
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
                <div className='navigation-btn'>
                    <ButtonGroup disableElevation variant="contained" color="default" >
                        <Button onClick={() => nextPath(this.props, '/')}>Home</Button>
                        <Button onClick={() => nextPath(this.props, '/addrecipe')}>Add new recipe</Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}
