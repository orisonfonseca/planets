import React, {useContext,useState,useEffect} from 'react';
import {planetsConsumer} from './Context1';
import {withRouter, Link} from 'react-router-dom';
import { TextField } from '@material-ui/core';


export default function Registration() {
   
    const [user,setuser] = useContext(planetsConsumer);
    const [formdata,setformdata] = useState({name:"", email:"", password:""});
    const [msg,setmsg]=useState(null);

    const handle=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value});
    }

    const add=()=>{
        const temp = JSON.parse(localStorage.getItem('users'));
        console.log(temp);
        if(formdata.name.length!=0 && formdata.email.length!=0 && formdata.password.length!=0){
            if(temp){
                const temp1 = temp.find(el=> {return el.email==formdata.email});
                if(temp1==undefined){
                   // alert("hi");
                  setuser({type:"REG",payload:formdata});
                  setformdata({name:"", email:"", password:""});
                }
                else if(temp1.email==formdata.email){
                  setmsg("user already exists");
                  setformdata({name:formdata.name, email:"", password:""});
                }
                else{
                    //alert("hi");
                  setuser({type:"REG",payload:formdata});
                  setformdata({name:"", email:"", password:""});
                }
              }
              else{
                  //alert("hi");
                  setuser({type:"REG",payload:formdata});
                  setformdata({name:"", email:"", password:""});
              }
        }
        else{
            setmsg("Enter All Fields");

        }
        
        
        
        
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 card py-5">
                <div className="text-danger">{msg}</div>
                <label className="trp">Register</label>
                    <div className="form-group">
                        <label></label>
                        <TextField type="text" name="name" placeholder="Enter name" className="form-control" value={formdata.name} onChange={handle} id="outlined-basic" label="Name" variant="outlined" />

                    </div>
                    <br></br>
                    <div className="form-group">
                        <label></label>
                        <TextField type="email" name="email" placeholder="Enter email" className="form-control" value={formdata.email} onChange={handle} id="outlined-basic" label="Username" variant="outlined" />

                    </div>
                    <br></br>
                    <div className="form-group">
                        <label></label>
                        <TextField type="password" name="password" placeholder="Enter password" className="form-control" value={formdata.password} onChange={handle} id="outlined-basic" label="Password" variant="outlined" />

                    </div>
                    <br></br>
                    <button className="btn btn-success" onClick={add}>Register</button>
                    <p>Already Registered <Link to="/login">Click</Link> To Login</p>
                </div>
                
            </div>
        </div>
    )
}
