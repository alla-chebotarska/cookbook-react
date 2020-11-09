import React, { Component } from 'react';
import Button from '../Button/Button';

import './MainPage.css';

export default class MainPage extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return (
            <div>
                <div className='button-group'>
                    <div >
                        <Button
                            onClick={() => this.nextPath('/addrecipe')}>
                            Add new recipe
                </Button>
                    </div>
                    <Button
                        onClick={() => this.nextPath('/recipelist')}>
                        Recipe List
                </Button>
                </div>
            </div>
        )
    }
}


