import Login from "./components/Login";
import useToken from "./components/hooks/useToken";
import { UserToken ,OneUser} from "./types/app";
import useLocalStorage from "use-local-storage";
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import ProductPage from "./components/ProductPage";



function App() {
  const user = useSelector<{ user: { user: OneUser } }>((state) => state.user.user)

  const dispatch=useDispatch()
  const { token, setToken } = useToken()
  const [signup, setSignup] = useLocalStorage<boolean>('signup', false)


  if (!token && !signup) {
    return <Login
    token={token as string} setToken={setToken as (userToken: UserToken) => void} user={user as OneUser} dispatch={dispatch as () => OneUser}  setSignup={setSignup as () => boolean}
    />

  } else if (!token && signup) {
    return <Routes>
          <Route path="/signup" element={<Signup setSignup={setSignup as () => boolean} />}/>
    </Routes>
  }

  return (
    <div >
      <>
        <NavBar setSignup={setSignup as (e:boolean) => boolean}  />
        <Routes>

          <Route  path="/shop" element={<Shop />} />
        <Route path="/" element={<Home user={user as OneUser}  />} />
          <Route path="/shop/:id" element={<ProductPage user={ user as OneUser} /> } />
        </Routes>
            <Footer/>
          </>
    </div>
  );
}

export default App;