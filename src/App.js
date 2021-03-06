import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


// icons section import
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import AspectRatioOutlinedIcon from '@material-ui/icons/AspectRatioOutlined';
import "./App.css"
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex:"-1"
  },
  drawerPaper: {
    width: drawerWidth,
    opacity:.3,
    backgroundColor:"#041420",
    // border:"1px solid #041420",
    // background:"none"
   

    
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    zIndex:"-1"
   
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}  id="full_page">
      <CssBaseline />

      {/* menu wala section */}
      <AppBar  id="AppBar"   
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })  } 
      >
        <Toolbar style={{display:"flex",justifyContent:"space-between",zIndex:1}}>
         <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}> 
         <div>
             <IconButton
                color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}>
                     <MenuIcon />
              </IconButton>
         </div>
         <div>

         <Typography variant="h6" noWrap  color="inherit"
           
            
            >
            Russian Market
          </Typography>
         
         </div>
          
        </div>


        
          <div id="right"  style={{flex:.3,display:'flex',justifyContent:"space-between",alignItems:"center",border:"2px solid green"}}>
       <div  style={{}}>  <MailOutlineIcon   /></div>
     
       <div style={{display:"hide"}}><NotificationsNoneOutlinedIcon /></div>
       <div><ShoppingCartOutlinedIcon  /></div>
       <div>< LocalMallOutlinedIcon /></div>
       <div><AspectRatioOutlinedIcon /></div>
       <div><PaletteOutlinedIcon /></div>
            <div style={{}}><Typography variant="h6" noWrap>
              $0
              </Typography></div>
          </div>



        </Toolbar>
      </AppBar>

{/* menu wala section */}



      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}

        id="Drawer"


      >
       
        <img   
        onClick={handleDrawerClose} 
        style={{marginTop:"25px",width:"200px",marginLeft:"10px",zIndex:1}} src="https://russianmarket.gs/resources/logo/zhAG7DczoD.png"></img>
         
         <div style={{padding:"20px",color:"white",display:"flex",border:"2px solid red",justifyContent:'center',alignItems:"center"}} >
          <div>
         <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}> <img style={{flex:".6"}} src="https://russianmarket.gs/resources/logo/user.png"></img> 
         <p style={{flex:".6"}}>subhanakram300</p>
         <p className="user" style={{color:"blue",marginTop:"-35px",marginLeft:"75px",fontSize:"17px"}}>user</p>
         
         
         </div>


      
           
          </div>
           </div>
         {/* <h3 style={{color:"white",marginLeft:"25px"}} onClick={handleDrawerClose}>RUSSIAN MARKET</h3> */}
        <div className={classes.drawerHeader} >
       
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        
        </div>
       
        <Divider  />
    
        <List style={{color:"white"}} >
        {/* 'Paypal','Checkers','Tools','My Purchase','Support' */}
          {['News', "Cvv", 'Dump', 'Rdp','Stealer Logs',].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List  style={{color:"white"}}>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
       <div  style={{flex:".4",paddingTop:"25px",backgroundColor:"#041420",color:"white",opacity:.8,display:"flex",flexDirection:"column"}}>
             
             <div  style={{display:"flex",justifyContent:'space-evenly',flexWrap:"wrap"}}>
                         
                  <div>
                    <label>Database:</label><br></br>
                    <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                  </div>
                  <div>
                    <label>Bin:</label><br></br>
                    <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                  </div>
                  <div>
                    <label>Country:</label><br></br>
                    <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                  </div>
                  <div>
                    <label>State:</label><br></br>
                    <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                  </div>
                  <div>
                    <label>Zip:</label><br></br>
                    <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                  </div>


             </div>
             
             <div  style={{display:"flex",justifyContent:'space-evenly',flexWrap:"wrap",flex:".4",marginTop:"15px"}}>
                         
                         <div>
                           <label>Type:</label><br></br>
                           <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                         </div>
                         <div>
                           <label>Code:</label><br></br>
                           <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                         </div>
                         <div>
                           <label>Level:</label><br></br>
                           <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                         </div>
                         <div>
                           <label>Class:</label><br></br>
                           <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                         </div>
                         <div>
                           <label>Bank:</label><br></br>
                           <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                         </div>
       
       
                    </div>
          {/* third row */}


          <div  style={{display:"flex",justifyContent:'space-evenly',flexWrap:"wrap",flex:".4",marginTop:"15px"}}>
                         
                         <div>
                           <label>last 4:</label><br></br>
                           <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                         </div>
                         <div>
                           <label>Track 1:</label><br></br>
                           <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                         </div>
                         <div>
                           <label>Vendor:</label><br></br>
                           <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                         </div>
                         <div>
                           <label>Per page:</label><br></br>
                           <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                         </div>
                         <div>
                           <label>Price:</label><br></br>
                           <textarea style={{marginTop:"5px",backgroundColor:"#041420"}}></textarea>
                         </div>
       
       
                    </div>

          {/* third row */}
       </div>


           
          

    
       
      </main>
    </div>
  );
}
