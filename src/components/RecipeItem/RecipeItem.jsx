import React from 'react';
import { Avatar, Grid, List, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


export default function RecipeItem(props) {
    return (
        <ListItem
            button
            onClick={props.onClick}>
            <ListItemAvatar>
                <Avatar>
                    <RoomServiceIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={props.children}
            />
        </ListItem>
    );
}