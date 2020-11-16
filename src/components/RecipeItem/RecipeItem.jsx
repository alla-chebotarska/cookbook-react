import { Avatar, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DeleteIcon from '@material-ui/icons/Delete';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import React from 'react';

export default function RecipeItem(props) {

    return (
        <ListItem
            button
            onClick={props.onItemClick}>
            <ListItemAvatar>
                <Avatar>
                    <RoomServiceIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={props.children}
            />
            <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete"
                        onClick={props.onDeleteClick}>
                      <DeleteIcon />
                    </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}