import { Card, CardContent, Typography } from '@material-ui/core'
import React,{forwardRef} from 'react'
import './Message.css'


//const App = forwardRef((param,ref)=>{my code}) ----> FlipMove to work (Higher Order function)
const Message=forwardRef(({message,username},ref)=> {
  //Checks if the current user and user typing is signed-in user are same or not 
  const isUser = username === message.username;
  return (
    //ref = {ref} is for FlipMove to work
    <div ref={ref} className={`message ${isUser && 'message-user'}`}>
      <Card className={isUser ? 'message-user' : 'message-guestuser'}>
        <CardContent>
          <Typography color="white" variant='h5' component='h4'>
      <p>{!isUser && `${message.username}:`} {message.message}</p>
     
      </Typography>
      </CardContent>
      </Card>
    </div>
  )
})

export default Message
