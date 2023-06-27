'use client'
import React,{useReducer, useState} from 'react'
import styles from '../styles/common.module.css'

const index = () => {

  const [user, setuser] = useState({
    username :"",
    email: "",
    phoneNumber:"",
    message:""
  })
  const [status, setStatus] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
     const response = await fetch("/api/contact", {
      method:'POST',
      headers:{'Content_Type':'application/json'},
      body: JSON.stringify({
        username : user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        message: user.message,
      })
     });
     if(response.status === 200){
      setuser({
        user:"",
        email:"",
        phoneNumber:"",
        message:"",
      })
      setStatus('success');
    }else{
      setStatus('error');
    }
    }catch(e){
      console.log(e);
    }
  }
  console.log(user);
  const handleChange = (e) => {
     const name = e.target.name;
     const value = e.target.value;

     setuser((prev)=>({...prev, [name]:value}));
  }

  return (
    <>
    <div className={styles.contact_main}>
      <form onSubmit={handleSubmit}>
      <div className={styles.contact_sec}>
      <div>
        <label>Name</label>
        <input placeholder='Enter your name' name="username" value={user.username} onChange={handleChange}/>
      </div>
      <div>
        <label>Email</label>
        <input placeholder='Enter your email' name="email" value={user.email} onChange={handleChange}/>
      </div>
      <div>
        <label>Phone Number</label>
        <input placeholder='Enter your phone number' name="phoneNumber" value={user.phoneNumber} onChange={handleChange}/>
      </div>
      <div>
        <label>Message</label>
        <textarea placeholder='Enter your message' name="message" value={user.message} onChange={handleChange}/>
      </div>
      {status === 'success' && <p>Message send successfully</p>}
      {status === 'error' && <p>There was a error submitting message</p>}
      <button type='submit'>Submit</button>
      </div>
      </form>
    </div>
    </>
  )
}

export default index
