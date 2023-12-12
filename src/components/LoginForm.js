import React from 'react'

const LoginForm = () => {
    return(
        <>
        <form>
            <label htmlFor='email'>Email: </label>
                <input type='email' id='email' name='email' require />
            <label htmlFor='password'>Age: </label>
                <input type='password' id='password' name='password' require />     
            <input type='submit' name='submit' value='Save'/>
        </form>

        <button> Click here to reset password </button>
        
        </>
    )
}

export default LoginForm;