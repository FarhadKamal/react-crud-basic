import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })
  return (
    <Alert styles='width: 50vw;margin-top:1vw' variant='secondary'>
      {modalContent}
    </Alert>
  )
}

export default Message
