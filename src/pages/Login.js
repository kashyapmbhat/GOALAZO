import { useState } from 'react'
import { useHistory } from 'react-router'
import './Login.css'
const Login = ({updateUserStatus}) => {
	const history = useHistory()
    const [signUpFlag, setSignUp] = useState(false)
    

	const [msg,setMsg] = useState('')
	
	const [suName,setSUName] = useState('')
	const [suEmail,setSUEmail] = useState('')
	const [suPwd,setSUPwd] = useState('')
	const [suFplayer,setSUFplayer] = useState('')
	const [suFteam,setSUFteam] = useState('')


	const [siEmail,setSIEmail] = useState('')
	const [siPwd,setSIPwd] = useState('')

	const changeToSignUp = () => {
		setSignUp(true) 
		setMsg('')
	}
	const changeToSignIn = () => {
		setSignUp(false)
		setMsg('')
	}

	const dbUpdate = async (userData,endpoint,flag) => {
		const res = await fetch(`${process.env.REACT_APP_SERVER_URL}${endpoint}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		})
		const resData = await res.json()
		let rmsg = resData.msg
		const resUserData = resData.user
		if(rmsg !== 'Please enter correct password' && rmsg !== 'success'){
			rmsg = (flag === 'si') ? 'Email ID doesnt exist, Try signing up!' : 'Email ID exists, Try signing in!'
		}
		setMsg(rmsg)
		if(rmsg === 'success'){
			
			sessionStorage.setItem('userStatus',rmsg)
      		sessionStorage.setItem('userID',resUserData.email)
			sessionStorage.setItem('userFP',resUserData.fplayer)
			sessionStorage.setItem('userFT',resUserData.fteam)
			console.log('successful login')
			updateUserStatus()
			history.push('/')
		}
	}

	const handleSignUp = (e) => {
		e.preventDefault();
		const userData = {
			name: suName,
			email: suEmail,
			pwd: suPwd,
			fplayer: suFplayer,
			fteam: suFteam

		}
		dbUpdate(userData,'api/users','su')

	} 

	const handleSignIn = (e) => {
		e.preventDefault();
		const userData = {
			email: siEmail,
			pwd: siPwd,
		}
		dbUpdate(userData,`api/users/${userData.email}`,'si')
	}
	
    return (
		<div className="loginpage-container">
			<div className={(signUpFlag) ?"container-login right-panel-active": "container-login"}>
				<div className="form-container sign-up-container">
					<form onSubmit={(e) =>handleSignUp(e)}>
						<h1 className="heading-login">Create Account</h1>
						<input type="text" placeholder="Name" onChange={(e)=> setSUName(e.target.value)} required/>
						<input type="email" placeholder="Email" onChange={(e)=> setSUEmail(e.target.value)} required/>
						<input type="password" placeholder="Password" onChange={(e)=> setSUPwd(e.target.value)} required/>
						<input type="text" placeholder="Favourite Player " onChange={(e)=> setSUFplayer(e.target.value)} required/>
						<input type="text" placeholder="Favourite Team" onChange={(e)=> setSUFteam(e.target.value)} required/>
						<button>Sign Up</button>
						<p id={(msg !== 'success') ? 'msg-err': 'msg-s'}>{msg}</p>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form onSubmit={(e) =>handleSignIn(e)}>
						<h1 className="heading-login">Sign in</h1>
						<input type="email" placeholder="Email" onChange={(e)=> setSIEmail(e.target.value)} required/>
						<input type="password" placeholder="Password" onChange={(e)=> setSIPwd(e.target.value)} required/>
						<button>Sign In</button>
						<p id={(msg !== 'success') ? 'msg-err': 'msg-s'}>{msg}</p>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1 className="heading-login">Hey, there!</h1>
							<p>Sign up and start an amazing journey with us!</p>
							<button className="ghost" onClick={changeToSignIn}>Sign In</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1 className="heading-login">Welcome Back!</h1>
							<p>Please login to get the best experience</p>
							<button className="ghost" onClick={changeToSignUp}>Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Login