import { Link } from "react-router-dom"
import Button from "./Button"


const Header = () => {
  return (
    <>
        <nav className="navbar container pt-3 bt-3 align-items-start">
            <Link className="navbar-brand text-light" to="/">Stock Prediction Portal</Link>

            <div>
                <Button text='Login' class="btn-outline-info" url="/login" />
                    &nbsp;
                <Button text='Register' class="btn-info" url="/register"  />
            </div>
        </nav>
    </>
  )
}

export default Header