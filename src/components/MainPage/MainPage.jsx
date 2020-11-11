import { ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import React, { Component } from 'react';
import './MainPage.css';

export default class MainPage extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return (
            <ButtonGroup className='button-group'
                orientation="vertical"
                color="default"
                size="large"
                aria-label="vertical contained primary button group"
                variant="contained">
                <Button
                    endIcon={<AddIcon />}
                    onClick={() => this.nextPath('/addrecipe')}>
                    Add new recipe
                    </Button>
                <Button
                    endIcon={<ListIcon />}
                    onClick={() => this.nextPath('/recipelist')}>
                    Recipe List
                    </Button>
            </ButtonGroup>
        )
    }
}


