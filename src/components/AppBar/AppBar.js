import React  from 'react'; 
import { AppBar as App,   Toolbar } from '@material-ui/core';
// import logo from './../../assets/forward-24px.svg';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'; 
import {useStyles} from './useStyles';
import './AppBar.scss';
 
const AppBar = () => {
  const classes = useStyles(); 
  return ( 
    <Grid
      className={classes.app}
      container
      spacing={3}
    >
      <Grid
        item
        xs={12}
      >
        <Typography>A Web Page</Typography>
      </Grid> 
      <Grid
        alignItems='center' 
        container
        direction='row'
        item
        justify='space-evenly'
        xs={3}
      >
        <ArrowBackIcon  /> 
        <ArrowForwardIcon  />
        <CloseIcon  />
        <HomeOutlinedIcon /> 
      </Grid>
      <Grid
        item
        xs={6}
      >
        <input
          className={classes.textInput}
          placeholder='www.google.com'
        />  
      </Grid>
      <Grid
        item
        xs={3}
      >
        <div className={classes.textSearch}>
          <input
            className={classes.text} 
          /> 
          <SearchOutlinedIcon  className={classes.iconSearch}/> 
        </div>
      </Grid>
  
    </Grid> 
  )
} 

export default AppBar


