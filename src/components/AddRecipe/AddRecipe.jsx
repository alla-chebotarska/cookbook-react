import { Button, ButtonGroup, Card, Grid, IconButton, MenuItem, List, ListItem, ListItemText,ListItemSecondaryAction, TextField, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import LocalStorageService from '../../services/LocalStorageService';
import nextPath from '../../services/LocationService';
import './AddRecipe.css';


export default class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            ingridients: [{ key: Date.now(), quantity: '200', unit: 'gr', value: 'first' }],
            inputQuantity: '',
            inputUnit: 'gr',
            inputValue: '',
            instruction: '',
        }
        this.localStorage = new LocalStorageService();
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
            inputUnit: event.target.value
        })
    }

    inputValueChanged = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    instrictionChanged = (event) => {
        this.setState({
            instruction: event.target.value
        })
    }

    onClearClick = (key) => {
        let newIngridientsArr = this.state.ingridients;
        const elementToDeleteIndex = newIngridientsArr.findIndex((ingridient) => ingridient.key === key);
        newIngridientsArr.splice(elementToDeleteIndex, 1);
        this.setState({
            ingridients: newIngridientsArr,
        })
        
    }

    onAddButtonClick = () => {
        if (this.state.inputQuantity.length === 0 || this.state.inputValue.length === 0) {
            toast.warning("Please fill all ingridient fields");
            return;
        }
        let newIngridient = {
            key: Date.now(),
            quantity: this.state.inputQuantity,
            unit: this.state.inputUnit,
            value: this.state.inputValue
        };
        this.setState({
            ingridients: this.state.ingridients.concat(newIngridient),
            inputQuantity: '',
            inputValue: '',
        })
    }

    onSaveRecipeBtnClick = () => {
        if (this.state.title.length === 0) {
            toast.warning("Please fill title field");
            return;
        } else if (this.state.instruction.length === 0) {
            toast.warning("Please fill the instruction field");
            return;
        }
        this.saveRecipe();
        toast.success("The recipe saved");
        this.goToRecipeList();
    }

    saveRecipe() {
        let recipe = {
            id: Date.now(),
            title: this.state.title,
            listIngridients: this.state.ingridients,
            instruction: this.state.instruction,
        }
        this.localStorage.saveRecipe(recipe);
        this.setState({
            id: '',
            title: '',
            ingridients: [],
            instruction: '',
        })
    }

    goToRecipeList() {
        this.props.history.push('/recipelist');
    }

    render() {
        return (
            <div>
                <Card className='new-recipe-container'>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                label='Recipe name'
                                variant="outlined"
                                fullWidth
                                onChange={this.titleChanged}
                                value={this.state.title}
                            ></TextField>
                        </Grid>
                        <Grid container item xs={12} justify="center">
                            <Typography variant='h6' component='h6'>Ingridients</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List>
                                {this.state.ingridients
                                    .map((item) =>
                                        <ListItem button key={item.key}>
                                            <ListItemText>{item.quantity} {item.unit} {item.value}</ListItemText>
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end" aria-label="clear"
                                                    onClick={() => this.onClearClick(item.key)}>
                                                    <ClearIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>)}
                            </List>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                type='number'
                                label='Amount'
                                onChange={this.inputQuantityChange}
                                value={this.state.inputQuantity}>
                            </TextField>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                fullWidth
                                label="Units"
                                select
                                onChange={this.inputUnitChanged}
                                value={this.state.inputUnit}>
                                <MenuItem value='gr'>gr</MenuItem>
                                <MenuItem value='ml'>ml</MenuItem>
                                <MenuItem value='pieces'>pieces</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                type='text'
                                label='Value'
                                onChange={this.inputValueChanged}
                                value={this.state.inputValue}></TextField>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton
                                variant="outlined"
                                color="default"
                                size="medium"
                                onClick={this.onAddButtonClick}>
                                <AddIcon />
                            </IconButton>
                        </Grid>
                        <Grid container item xs={12} justify="center">
                            <Typography variant='h6' component='h6'>Instructions</Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                multiline
                                rows={4}
                                variant='outlined'
                                fullWidth
                                placeholder='Create step by step instruction. Separete each step by pressing Enter.'
                                onChange={this.instrictionChanged}>
                            </TextField>
                        </Grid>
                        <Grid container item xs={12} justify="center">
                            <Button
                                variant="outlined"
                                color="default"
                                onClick={this.onSaveRecipeBtnClick}>
                                Save recipe
                    </Button>
                        </Grid>
                    </Grid>
                </Card>
                <div className='navigation-btn'>
                    <ButtonGroup disableElevation variant="contained" color="default" >
                        <Button onClick={() => nextPath(this.props, '/')}>Home</Button>
                        <Button onClick={() => nextPath(this.props, '/recipelist')}>Recipe List</Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}
