import React,{useContext,useState,useEffect} from 'react';
import {planetsConsumer} from './Context1';
import { FaReact} from "react-icons/fa";
import {withRouter, Link,Redirect,Route,useHistory } from 'react-router-dom';

export default function Favourite() {
   
    const[user,setuser,planets,setplanets,favourite,setfavourite] = useContext(planetsConsumer);
    if(favourite.length==0){
        return(
            <div class="container  p-5">
            <div class="col-md-12"></div>
                <div class="row">
                    <div class="col-md-4 mt-4">
                        <h1 className="">Please Select Favourites</h1>  
                            </div>
                        </div>
                </div>
            
        )
    }
    else{
        return (
            <div class="container bg-light p-5">
            <div class="col-md-12"></div>
                <div class="row">
                  
                  {favourite.map(el=>(
                    <div class="col-md-4 mt-4">
                   <div className="card p-3 text-white bg-dark">
                   <p>{el.name}</p>  
                   <p><FaReact className="icons" /></p>
                   </div>
                   </div>
                    ))}
                
                </div>
                </div>
                
                   
            )
    }
    
    
    
}
