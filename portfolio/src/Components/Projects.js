import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    //   height: '100%',
    },
  }));

export default function Projects(){
    
    const classes = useStyles();

    return(
//         <div className='project-section'>
//             <p>My Projects</p>
//         <Grid container spacing={4}>
//             
//             </Grid>
//             <Grid item xs={4}>
//                 
//             </Grid>
//         </Grid>
//         </div>
//     )
// }
<Grid>
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Productivity Journal dashboard"
          height="140"
          image="../Pictures/Dashboard.png"
          title="Productivity Journal"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Flappy Bird
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Remake of the popular game Flappy Bird using React.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Github
        </Button>
        <Button size="small" color="primary">
          Demo
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Productivity Journal dashboard"
        height="140"
        image="/Users/haileyringier/Projects/portfolio/portfolio/Pictures/Dashboard.png"
        title="Productivity Journal"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Productivity Journal
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Final Project with Flatiron created using React, Material-UI, 
          Node and Express.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Github
      </Button>
      <Button size="small" color="primary">
        Demo
      </Button>
    </CardActions>
  </Card>
  </Grid>
    )
}