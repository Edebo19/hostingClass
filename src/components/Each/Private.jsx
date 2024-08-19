import React from 'react'
import { useSelector } from 'react-redux'

const Private = () => {
    const {vendors, buyers} = useSelector((state)=> state.App.users)
  return (
    <div>Private</div>
  )
}

export default Private