import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import './home.css'

const Home = () => {
const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    if(!token){
      navigate('/login')
    }
  }, []);



  return (
    <div className='container'>
      <div className='home-wrapper'>
        <p className='success-message'>
          You have successfully logged in
        </p>
      </div>
    </div>
  )
}

export default Home