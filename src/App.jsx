import { Button,InputLabel,Input } from '@material-ui/core';
import React, { useEffect } from 'react'
import {useState} from 'react'
import Message from './Message';
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import './App.css'
function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]= useState([]);
  const [ username,setUserName] = useState('');

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc').onSnapshot((snapshot)=>{
      setMessages(snapshot.docs.map((doc)=>{return {id:doc.id, message:doc.data()}}))
    })
    
  },[])

useEffect(()=>{
  setUserName(prompt('What is your name ?'));
},[])

  const sendMessage=(e)=>{
    e.preventDefault();
  db.collection('messages').add({
    message : input,
    username : username,
    timestamp : firebase.firestore.FieldValue.serverTimestamp()
  });
  setInput('')
  }
  return (
    <div>
     
      <h1>Welcome to Group chat</h1>
      
 <form className='app-form'>    
  <InputLabel></InputLabel>
  <Input className='sap' type="text" placeholder='Enter a message' value={input} onChange={(e)=>{setInput(e.target.value)}} />
  
  <Button variant='contained'color='primary' disabled={!input} type='submit' onClick={sendMessage}>Send</Button>
      </form>
<FlipMove>
{messages.map(({id,message}) => {
        return <Message key={id} username = {username} message={message} />
      })}
</FlipMove>
     
    </div>
  )
}

export default App
