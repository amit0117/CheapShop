import React,{useEffect, useState} from 'react'
import { Alert } from 'react-bootstrap'
const Message = ({variant,children}) => {
    // console.log(props.children)
    const [showmessage,setShowMessage]=useState(true)
    useEffect(()=>{
      setShowMessage(showmessage)
    },[showmessage])
    if(showmessage){
    return (
    <Alert variant={variant} onClose={()=>setShowMessage(false)} dismissible={true}>
        {children}
    </Alert>
    )
    }
}
Message.defaultProps={
    variant:'info'
}
export default Message
