<<<<<<< HEAD
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
=======
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
>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
