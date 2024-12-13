import { useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"


function Register() { 
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [errors, setErrors] = useState("")
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleRegistration = async (e) => {
        // console.log("test")
        e.preventDefault()
        setLoading(true)
        

        const userData = {email, password1, password2}
        // console.log("userData ==>", userData)

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/v1/register/", userData)
            console.log("response.data ==>",  response.data)
            console.log("Registration successful")
            setErrors({})
            setSuccess(true)
        } catch(error) {
            setErrors(error.response.data)
            console.log("Registration error:", error.response.data)

        } finally {
            setLoading(false)
        }
    }

   
    return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 bg-light-dark p-5 rounded">
                    <h3 className="text-light text-center mb-4">Create an account</h3>
                    <form onSubmit={handleRegistration}>
                        <div className="mb-3">
                            <input type="email"  className="form-control" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <small>{errors.email && <div className="text-danger">{errors.email}</div>}</small>
                        </div>

                        <div className="mb-3">
                            <input type="password"  className="form-control" placeholder="Set password" value={password1} onChange={(e) => setPassword1(e.target.value)} />
                        </div>

                        <div className="mb-4">
                            <input type="password"  className="form-control" placeholder="Validate password" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                            <small>{errors.password2 && <div className="text-danger">{errors.password2}</div>}</small>
                        </div>

                        {success && <div className="alert alert-success">Regsitration Successful</div>}
                        {loading ? (
                            // <button type="submit" className="btn btn-info d-block mx-auto">Please wait ...</button>
                            
                            // <button type="submit" className="btn btn-info d-block mx-auto" disabled>
                            //     <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            //     <span className="ms-2">Loading...</span>
                            // </button>

                            <button type="submit" className="btn btn-info d-block mx-auto" disabled><FontAwesomeIcon icon={faSpinner} spin /> Please wait ...</button>
                        ) : (
                            <button type="submit" className="btn btn-info d-block mx-auto">Register</button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register