import React, {useContext,useState,useEffect} from 'react';
import {planetsConsumer} from './Context1';
import {withRouter, Link,Redirect,Route,useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';


export default function Login() {
    useEffect(() => {
        document.getElementById('navigation-bar').style.display = "none";
        setflag(localStorage.getItem('flags'));
        }, []);

    const [user,setuser,planets,setplanets,favourite,setfavourite] = useContext(planetsConsumer);

    const [formdata,setformdata] = useState({email:"", password:""});
    const [msg,setmsg]=useState(null);
    const [flag,setflag]=useState("");
    

    const handle=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value});
    }

    const add=()=>{
        
        const temp = JSON.parse(localStorage.getItem('users'));
       // console.log(temp);
        
          const temp1 = temp.find(el=> {return el.email==formdata.email});
          if(formdata.email.length!=0 && formdata.password.length!=0){
            if(temp1==undefined){
                setmsg("User doesn't exists please click on registration link");
              }
              else if(temp1.email==formdata.email){
                 if(temp1.password==formdata.password){
                    localStorage.setItem('flags',"hi");
                    setflag(localStorage.getItem('flags')); 
                    
                }
                else{
                    setmsg("incorrect password");
                }
              }
              else{
                setmsg("user doesn't exists please click on registration link");
    
              }
          }
          else{
            setmsg("Please Enter all Fields");
          }
          
           
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 card py-5">
                <div className="text-danger">{msg}</div>
                <label className="trp">Login</label>
            
                    <div className="form-group">
                        <label ></label>
                        <TextField type="email" name="email" placeholder="Enter email" className="form-control" value={formdata.email} onChange={handle} id="outlined-basic" label="Username" variant="outlined" />

                    </div>
                    <br></br>
                    <div className="form-group">
                        <label></label>
                        <TextField type="password" name="password" placeholder="Enter password" className="form-control" value={formdata.password} onChange={handle} id="outlined-basic" label="Password" variant="outlined" />

                    </div>
                    <br></br>
                    <button className="btn btn-success" onClick={add}>Login</button>
                    <Link to="/register">Click</Link> To Register
                </div>
                
            </div>
            {flag?<Redirect to='/viewplanets'/>:null}
            
        </div>
    )
}
