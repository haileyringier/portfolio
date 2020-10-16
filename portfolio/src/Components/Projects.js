import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Projects(){
    
    const classes = useStyles();

    return(
        <div>
            <p>My Projects</p>
        <Grid container spacing={3}>
            <Grid item >
                <Paper className={classes.paper}>Flappy Bird</Paper>
            </Grid>
            <Grid item>
                <Paper className={classes.paper}>Productivity Journal</Paper>
            </Grid>
                

        </Grid>
        </div>
        
    )
}