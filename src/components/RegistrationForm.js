import React from 'react'

const RegistrationForm = () => {
    return(
    <>
    <form>
        <label htmlFor='name'>Name: </label>
            <input type='text' id='name' name='name' require />
        <label htmlFor='age'>Age: </label>
            <input type='number' id='age' name='age' require />
        <label htmlFor='email'>Email: </label>
            <input type='email' id='email' name='email' require />
        <input type='submit' name='submit' value='Save'/>
    </form>
    </>
    )
}

export default RegistrationForm;