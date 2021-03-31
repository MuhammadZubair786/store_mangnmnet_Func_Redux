import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {set_data} from './Store/Action'
import React,{useState} from 'react'
import { delete_data } from "./Store/Action";



function App(props) {

  const [name,setname] = useState()
  const [email,setemail] =useState()

  
const set_data2 = () =>{
  console.log(`Name :  ${name}  Email : ${email}`)
  const User ={
    name : name,
    email : email
  }
  props.set_data(User)  
}

const deletedata = (i)=>{
  console.log("key :",i)
  props.delete_data(i)

}





console.log("STORE DATA :",props.User)

  return (
    
    
    <div className="App">
      <h1>Hello</h1>
      UserName : <input value={name||''} onChange={(e)=>setname(e.target.value)}  type="text" placeholder="Enter Your Name" size='30' style={{backgroundColor:'orange',height:'30px',color:'blue',width:'40%',fontSize:30}} height="60"/>
      <br/>
      <br/>
      Email : &emsp;&emsp; <input value={email||''} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Enter Your Email" size='30' style={{backgroundColor:'orange',height:'30px',color:'blue',width:'40%',fontSize:30}} height="60"/>
      <br/>
      <br/>
      <button type="submit" onClick = {()=>set_data2()}>
        <h3>Submit</h3>
      </button>
      <br/>
      <br/>

      <ul style={{listStyle:'none',display:'inline-block'}}>
        {props.User.map((v,i)=>{
          return(
            <li key={i}>
              <h3>{i}</h3>
              <h1>Name : {v.name} </h1>
               <h2>Email : {v.email}</h2>
               <button onClick={()=>deletedata(i)}>Click Me</button>
            </li>

          )
        })}
      
      </ul>
    </div>
  );
}

const mapStateToProps = (state) =>({
  User : state.User
})

const mapDispatchToProps = (dispatch) =>({
  set_data : (data) =>{dispatch(set_data(data))},

  delete_data : (key)=> {dispatch(delete_data(key))}
})


export default  connect(mapStateToProps,mapDispatchToProps)(App);






