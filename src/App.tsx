import Login from "./components/Login";
import useToken from "./components/hooks/useToken";
import { UserToken , ProductsArray,OneUser} from "./types/app";
import useLocalStorage from "use-local-storage";
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Footer from "./components/Footer";



function App() {
  const user = useSelector<{ user: { user: OneUser } }>((state) => state.user.user)
console.log(user);
  
  const dispatch=useDispatch()
  const { token, setToken } = useToken()
  const [correctPassword, setcorrectPassword] = useLocalStorage<boolean>('password', false)
  const [signup, setSignup] = useLocalStorage<boolean>('signup', false)
    function getData() {
    return axios.get('https://dummyjson.com/products?limit=0')
    }
    const {data:allProducts } = useQuery({
        queryKey: ['products'],
        queryFn: getData,
        select: (data) => data.data.products
    })




  return (
    <div >
      {token === undefined &&!signup && !correctPassword ?
        <Routes>
          <Route  path="/" element={ <Login setToken={setToken as (userToken: UserToken) => void} user={user as OneUser} dispatch={dispatch as () => OneUser} setcorrectPassword={setcorrectPassword as () => boolean} setSignup={setSignup as () => boolean} />} />
        </Routes> : token === undefined &&signup && !correctPassword ? <Routes>
      <Route path="/signup" element={<Signup setSignup={setSignup as () => boolean} />} />
        </Routes>
          : <>
            <NavBar setSignup={setSignup as (e:boolean) => boolean} setcorrectPassword={setcorrectPassword as (e:boolean) => boolean} />
            <Routes>
              <Route path="/home" element={<Home user={user as OneUser} allProducts={allProducts as ProductsArray} />} />
            </Routes>
            <Footer/>
          </>
      }

    </div>
  );
}

export default App;