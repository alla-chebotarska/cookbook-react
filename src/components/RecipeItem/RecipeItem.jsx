import React from 'react';
import { Avatar, Grid, List, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import FolderIcon from '@material-ui/icons/Folder';

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

export default function RecipeItem() {
    const [dense] = React.useState(false);
    const [secondary] = React.useState(false);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div>
                        <List dense={dense} fullWidth>
                            {generate(
                                <ListItem button>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <RoomServiceIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
