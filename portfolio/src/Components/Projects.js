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
      height: '100%',
    },
  }));

export default function Projects(){
    
    const classes = useStyles();

    return(
        <div className='project-section'>
            <p>My Projects</p>
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <h3>Flappy Bird</h3>
                    <ul>
                        <li>React</li>
                        <li>HTML</li>
                        <li>classes</li>
                    </ul>
                    <img></img>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <h3>Productivity Journal</h3>
                    <ul>
                        <li>React</li>
                        <li>Material-UI</li>
                        <li>Chart.js</li>
                        <li>Node</li>
                        <li>Express</li>
                    </ul>
                    <img></img>
                </Paper>
            </Grid>
                

        </Grid>
        </div>
        
    )
}