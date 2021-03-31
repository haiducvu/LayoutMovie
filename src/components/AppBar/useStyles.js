import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: '#777777', 
  },
  brand: {
    fontSize: 30,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400
  },
  userIcon:{
    paddingTop: 6
  },
  menuLinks: {
    flexGrow: 1,
    display: 'flex',
    textDecoration: 'none',
  },
  links: {
    width: 300,
    margin: 'auto',
    display: 'flex',
    textDecoration: 'none'
  },
  text:{
    color: '#000000', 
  },
  toolBar:{
    display: 'flex', 
  }, 
  textSearch:{
    position: 'relative',  
  },

  textInput:{
    width: '600px', 
  },

  iconSearch:{
    position: 'absolute',
    left: 0, 
    color: '#000000',
    paddingLeft: 75,
  }, 

}));

 