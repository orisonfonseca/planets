import React,{useContext,useState,useEffect} from 'react';
import axios from 'axios';
import {planetsConsumer} from './Context1';
import { FormControlLabel } from '@material-ui/core';
import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FaReact} from "react-icons/fa";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import {withRouter, Link,Redirect,Route,useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));  

const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  export default function Viewplanets(props) {
    useEffect(() => {
      document.getElementById('navigation-bar').style.display = "flex";
  }, []);
    const[user,setuser,planets,setplanets,favourite,setfavourite] = useContext(planetsConsumer);
    const[loading,setloading] = useState("");    
    const classes = useStyles();
    const [flag1,setflag1] = useState("");
    if(localStorage.getItem('flags')==null){
    
      return(
       <div><Redirect to='/login'/></div> 

      )
    }
    else{
        console.log("hi")
    }

    if(planets.length===0){
      if(loading==""){
        setloading(true)
      }
      else{
        console.log("hi");
      }
          axios.get("https://assignment-machstatz.herokuapp.com/planet").then(res=>{
            //console.log(res.data);
            setplanets(res.data); 
            //console.log(planets);
            if(loading==true){
              setloading(false);
            }
            else{
              console.log("hi");
            }
        }).catch(err=>{
            console.log(err);
        })
       

    }
    const handle=(id,check,name)=>{
        
        if(check===false){
        const newplanet = planets.map(data => (data.id === id ? {isFavourite:true,id:id,name:name} : data));
        setplanets(newplanet);
        const fav = newplanet.filter(el=>{return el.isFavourite===true})
        setfavourite(fav);
        
        }
        else{
            const newplanet = planets.map(data => (data.id === id ? {isFavourite:false,id:id,name:name} : data));
        setplanets(newplanet);
        const fav = newplanet.filter(el=>{return el.isFavourite===true})
        setfavourite(fav);
       

        }
        
    }


    return (
      <div>
      {loading ? (<Backdrop className={classes.backdrop} open ><CircularProgress color="inherit" />loading....</Backdrop>) :
     ( <div class="container bg-light p-5">
      <div class="col-md-12 "></div>
       <div class="row ">
         
         {planets.map(el=>(
           <div class="col-md-4 mt-4 ">
          <div className="card p-3 expand text-white bg-dark ">
          <p>{el.name}</p>  
          <p><FaReact className="icons " /></p>
           <FormControlLabel className="btr"
           control={<IOSSwitch size="small" checked={el.isFavourite} onChange={()=>handle(el.id,el.isFavourite,el.name)} />}
           label="Add to Favourites"
           />
          </div>
          </div>
           ))}
       
       </div>
       </div>)
       
    }
    </div>
        

        


    )
}
