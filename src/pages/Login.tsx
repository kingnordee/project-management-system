import { useEffect, useState } from "react";
// import { useHistory } from 'react-router-dom'

const Login = () => {


    const [ state, setState ] = useState({
        email:"", password:""
    })

    const handleSubmit = async () => {

    }

    return(
        <div className="formWrapper">
            <h2>User Login Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                       required
                       value={state.email}
                       onChange={(e => setState({...state, email:e.target.value}))}
                />

                <label htmlFor="password">Password</label>
                <input type="password" id="password"
                       required
                       value={state.password}
                       onChange={(e => setState({...state, password:e.target.value}))}
                />

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login
