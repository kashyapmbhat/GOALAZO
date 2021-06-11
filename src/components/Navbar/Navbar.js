import {NavLink} from 'react-router-dom'
// import {useLocation} from 'react-router-dom'
import {useState} from 'react'
import './Navbar.css'
const Navbar = ({userStatus}) => {
    const [click , setClick] = useState(false);
    const toggleMenu = () =>setClick(!click);
    const disableMenu = () => setClick(false);

    // const location = useLocation();
    // const { pathname } = location;
    // const splitLocation = pathname.split("/");


    return (
        <>
            <nav>
                <ul className={click ? 'menu active': 'menu'}>

                    <li className="logo" onClick={disableMenu}><NavLink className ='a' to="/" >GOALAZO <i className="fas fa-futbol"></i></NavLink></li>
                    <li className='item' onClick={disableMenu}><NavLink exact className ='a' to="/" activeClassName="activ">Home</NavLink></li>
                    <li className="item" onClick={disableMenu}><NavLink className ='a' to="/fixtures" activeClassName="activ">Fixtures</NavLink></li>
                    <li className="item" onClick={disableMenu}><NavLink className ='a' to="/laliga" activeClassName="activ">La Liga</NavLink></li>
                    <li className="item" onClick={disableMenu}><NavLink className ='a' to="/epl" activeClassName="activ">EPL</NavLink></li>
                    <li className="item" onClick={disableMenu}><NavLink className ='a' to="/seriea" activeClassName="activ">Serie A</NavLink></li>
                    {/* <li className="item" onClick={disableMenu}><NavLink className ='a' to="/favourites" activeClassName="activ">Favourites</NavLink></li> */}
                    <li className="item button" onClick={disableMenu}><NavLink className ='a' to={(userStatus === 'success')? "/favourites":"/login"} activeClassName="activ">{(userStatus === 'success')? "My profile":"Log In"}</NavLink></li>
                    <li className="toggle a" onClick={toggleMenu}><i className={click ? 'fas fa-times' : "fas fa-bars"}></i></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
