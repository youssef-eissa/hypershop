import Login from "./components/Login";
import useToken from "./components/hooks/useToken";
import { UserToken } from "./types/app";
import useLocalStorage from "use-local-storage";
import { useDispatch, useSelector } from 'react-redux';
import { UserInfo } from "./types/app";
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
        <Routes>
          <Route  path="/" element={ <Login setToken={setToken as (userToken: UserToken) => void} user={user as UserInfo} dispatch={dispatch as () => UserInfo} setcorrectPassword={setcorrectPassword as () => boolean} setSignup={setSignup as () => boolean} />} />
        </Routes> : token === undefined &&signup && !correctPassword ? <Routes>
      <Route path="/signup" element={<Signup setSignup={setSignup as () => boolean} />} />
            <Route path="/home" element={ <Home/>} />
        </Routes>
          : <>
            <Routes>
              <Route path="/home" element={<Home/>} />
            </Routes>
          </>
      }

    </div>
  );
}

export default App;

      
