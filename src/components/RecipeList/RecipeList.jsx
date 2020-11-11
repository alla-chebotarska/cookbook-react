
import { Card, Grid, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import React, { Component } from 'react';
import RecipeItem from '../RecipeItem/RecipeItem'

import './RecipeList.css';

export default class RecipeList extends Component {

    render() {
        return (
            <div className='recipe-list'>
                <Card>
                    <Grid>
                        <Grid 
                            container
                            item xs={12}
                            justify='center' 
                            className='recipe-list-title'>
                            <Typography variant="h6">
                                Recipe List
                            </Typography>
                        </Grid>
                        <RecipeItem></RecipeItem>
                    </Grid>
                    
                </Card>
            </div>
        )
    }
}
