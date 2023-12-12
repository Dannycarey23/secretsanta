import React from 'react'
import { useNavigate } from 'react-router-dom'

const FrontPageTop = () => {
    
    const navigate = useNavigate()

    const toHome = () => {
        return navigate('/')
    }
    
    const toLogIn = () => {
        return navigate('/login')
    }   

    const toRegistration = () => {
        return navigate('/registration')
    }

    
    return(
        <div className="homepageMain">
            <div className="navBar">
                <button onClick={toHome}>Home</button>
                <button onClick={toLogIn}>Log In</button>
                <button onClick={toRegistration}>Register</button>
            </div>
            <div className='banner'>
                <h1>Secret Santa</h1>
            </div>
        </div>
    )
}
export default FrontPageTop;