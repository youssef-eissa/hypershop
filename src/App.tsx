import Login from "./components/Login";
import useToken from "./components/hooks/useToken";
import { UserToken } from "./types/app";
import useLocalStorage from "use-local-storage";
import { useDispatch, useSelector } from 'react-redux';
import { UserInfo } from "./types/app";
import {resetUser } from "./redux/user";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";



function App() {
  const user=useSelector<{user:{user:UserInfo}}>((state)=>state.user.user)
  const dispatch=useDispatch()
  const { token, setToken } = useToken()
  const [correctPassword, setcorrectPassword] = useLocalStorage<boolean>('password', false)
const [signup,setSignup]=useLocalStorage<boolean>('signup',false)


  return (
    <div >
      {token === undefined &&!signup && !correctPassword ?
        <Login setToken={setToken as (userToken: UserToken) => void} user={user as UserInfo} dispatch={dispatch as () => UserInfo} setcorrectPassword={setcorrectPassword as () => boolean} setSignup={setSignup as () => boolean} /> : <>
        <Routes>
      <Route path="/signup" element={<Signup />} />
            <Route path="/" element={ <Home/>} />
        </Routes>
        <button onClick={() => { localStorage.clear(); window.location.reload(); dispatch(resetUser())}}>logout</button>
        </>
        
      }
      
    </div>
  );
}

export default App;

      
