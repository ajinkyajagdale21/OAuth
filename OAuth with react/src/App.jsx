import './App.css'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect , isAuthenticated,user,logout } = useAuth0();
  return (
    <div className="App">
      {
        isAuthenticated ?   <h1 className='mt-5'>Welcome {user.name} </h1>:
        <h1 className='mt-5'>Sign In </h1>
      }
      {
        isAuthenticated?
        <button className='loginBtn' onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
        :
        <button className='loginBtn' onClick={()=>loginWithRedirect()}>Login</button>
      } 
    </div>
  )
}

export default App
