import { Grid, Card, ButtonGroup, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Button } from '@material-ui/core';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import React, { Component } from 'react';
import LocalStorageService from '../../services/LocalStorageService';
import nextPath from '../../services/LocationService' 

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
            <div>
                <Card className='recipe-container'>
                    <CardContent>
                        {this.recipe === null ?
                            "Incorrect recipy id " : (
                                <Grid>
                                    <Grid container item xs={12} justify="center">
                                        <Typography container variant='h6' justify='center'>{this.recipe.title}</Typography>
                                    </Grid>
                                    <List>
                                        {this.recipe.listIngridients.map((ingridient) =>
                                            <ListItem
                                                button
                                                dense={true}
                                                key={Date.now()}>

                                                <ListItemIcon>
                                                    <FiberManualRecordOutlinedIcon fontSize='small' />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={`${ingridient.quantity} ${ingridient.unit} ${ingridient.value}`}
                                                />
                                                
                                            </ListItem>)}
                                        <Divider />
                                    </List>
                                    <Grid container item xs={12} justify="center">
                                        <Typography variant='h6' component='h6'>Instructions</Typography>
                                    </Grid>
                                    <Typography>{this.recipe.instruction}</Typography>
                                </Grid>
                            )}
                    </CardContent>
                </Card>
                <div className='navigation-btn'>
                    <ButtonGroup disableElevation variant="contained" color="default" >
                        <Button onClick={() => nextPath(this.props, '/')}>Home</Button>
                        <Button onClick={() => nextPath(this.props, '/recipelist')}>Recipe List</Button>
                        <Button onClick={() => nextPath(this.props, '/addrecipe')}>Add new recipe</Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}
