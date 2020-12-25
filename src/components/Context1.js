import React, {createContext,useState,useReducer,useEffect} from 'react';

export const planetsConsumer = createContext();
export const favouriteConsumer = createContext();


export function PlanetProvider(props) {
  const reducer=(user,action)=>{
    switch(action.type){
        case "REG":
            return [...user,action.payload];   
        default:
            return user;    
    }
}
const initialState = JSON.parse(localStorage.getItem('users')) || []
const [user,setuser]=useReducer(reducer,initialState);


    useEffect(() => {
        localStorage.setItem('users',JSON.stringify(user))
      }, [user])

const[planets, setplanets] = useState([]);
const[favourite,setfavourite] = useState([]);




    return (
      <planetsConsumer.Provider  value = {[user,setuser,planets,setplanets,favourite,setfavourite]}>
     {props.children}
      </planetsConsumer.Provider>
      
    )
}
