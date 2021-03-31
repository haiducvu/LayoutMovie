import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography'; 
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'; 
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './useStyle';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './HomePage.scss'; 
const HomePage=()=>{
  const classes = useStyles(); 
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
      width:200,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);
  return ( 
    <div>
      <Grid
        className={classes.root}
        container
        spacing={3}
      >
        <Grid
          alignItems='flex'
          container
          direction='row'
          justify='center'
          xs={6}
        > 
          <HomeIcon className={classes.homeIcon}/> 
          <Typography className={classes.homeText}>Funny Movie</Typography>  
        </Grid> 
        <Grid
          alignItems='flex'
          container
          direction='row'
          justify='center'
          xs={6}
        >
          <input placeholder='email' />
          <input placeholder='password'/>
          <input placeholder='Login/Register'/>
        </Grid> 
      </Grid>
      <Divider/>

      <Grid
        className={classes.root}
        container
        spacing={3}
      >
        <Grid xs={3}>  </Grid>
        <Grid xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='/static/images/cards/contemplative-reptile.jpg'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography
                  component='h2'
                  gutterBottom
                  variant='h5'
                >
            Lizard
                </Typography>
                <Typography
                  color='textSecondary'
                  component='p'
                  variant='body2'
                >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
                </Typography>
              </CardContent>
              <Grid
                alignItems='center'
                container
                direction='row'
                justify='center'
                xs={12}
              >
                <PlayCircleOutlineIcon/>
                <BorderLinearProgress
                  classes={classes.progressbar}
                  value={50}
                  variant='determinate'
                />
                <VolumeUpIcon/>
                <ZoomOutMapIcon/>
              </Grid>
            </CardActionArea> 
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='/static/images/cards/contemplative-reptile.jpg'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography
                  component='h2'
                  gutterBottom
                  variant='h5'
                >
            Lizard
                </Typography>
                <Typography
                  color='textSecondary'
                  component='p'
                  variant='body2'
                >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
                </Typography>
              </CardContent>
              <Grid
                alignItems='center'
                container
                direction='row'
                justify='center'
                xs={12}
              >
                <PlayCircleOutlineIcon/>
                <BorderLinearProgress
                  classes={classes.progressbar}
                  value={50}
                  variant='determinate'
                />
                <VolumeUpIcon/>
                <ZoomOutMapIcon/>
              </Grid>
            </CardActionArea> 
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image='/static/images/cards/contemplative-reptile.jpg'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography
                  component='h2'
                  gutterBottom
                  variant='h5'
                >
            Lizard
                </Typography>
                <Typography
                  color='textSecondary'
                  component='p'
                  variant='body2'
                >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
                </Typography>
              </CardContent>
              <Grid
                alignItems='center'
                container
                direction='row'
                justify='center'
                xs={12}
              >
                <PlayCircleOutlineIcon/>
                <BorderLinearProgress
                  classes={classes.progressbar}
                  value={50}
                  variant='determinate'
                />
                <VolumeUpIcon/>
                <ZoomOutMapIcon/>
              </Grid>
            </CardActionArea> 
          </Card>
      
        </Grid>
        <Grid xs={3}> 
          <Card className={classes.card}> 
            <CardContent>
              <Typography>Movie Title</Typography>
              <Typography>Share by: someone@gmail.com</Typography>
              <ThumbUpOutlinedIcon/>
              <ThumbDownOutlinedIcon/>
              <Typography>Description</Typography>
              <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            Why do we use it? 
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.card}> 
            <CardContent>
              <Typography>Movie Title</Typography>
              <Typography>Share by: someone@gmail.com</Typography>
              <ThumbUpOutlinedIcon/>
              <ThumbDownOutlinedIcon/>
              <Typography>Description</Typography>
              <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            Why do we use it? 
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.card}> 
            <CardContent>
              <Typography>Movie Title</Typography>
              <Typography>Share by: someone@gmail.com</Typography>
              <ThumbUpOutlinedIcon/>
              <ThumbDownOutlinedIcon/>
              <Typography>Description</Typography>
              <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            Why do we use it? 
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={3}>  </Grid>
      </Grid>
    </div>

  )
}
export default HomePage;