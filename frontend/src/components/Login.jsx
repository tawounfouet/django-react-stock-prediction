import { useContext, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { AuthContext } from '../AuthProvider'



const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext) 

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)

        const userData = {email, password}
        // console.log(userData)

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/v1/token/", userData)
            // console.log(response.data)
            localStorage.setItem("accesToken", response.data.access)
            localStorage.setItem("resfreshToken", response.data.refresh)
            console.log("Log in successful ")
            setIsLoggedIn(true)
            navigate("/")
        } catch(error) {
            console.error("Invalid credentials")
            setError("Invalid credentials:", error)
            // setError(error.response.data)
        } finally {
            setLoading(false)
        }
    }

  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 bg-light-dark p-5 rounded">
                    <h3 className="text-light text-center mb-4">Login to our Portal</h3>
                    
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <input type="email"  className="form-control" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <input type="password"  className="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                       
                        { error && <div className="text-danger"> {error} </div>}

                        {loading ? (

                            <button type="submit" className="btn btn-info d-block mx-auto" disabled><FontAwesomeIcon icon={faSpinner} spin /> Login in ...</button>
                        ) : (
                            <button type="submit" className="btn btn-info d-block mx-auto">Login</button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login