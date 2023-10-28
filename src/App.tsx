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

  const dispatch=useDispatch()
  const { token, setToken } = useToken()
  const [signup, setSignup] = useLocalStorage<boolean>('signup', false)
    function getData() {
    return axios.get('https://dummyjson.com/products?limit=0')
    }
    const {data:allProducts } = useQuery({
        queryKey: ['products'],
        queryFn: getData,
        select: (data) => data.data.products
    })


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
              <Route path="/" element={<Home user={user as OneUser} allProducts={allProducts as ProductsArray} token={token as string} />} />
            </Routes>
            <Footer/>
          </>
    </div>
  );
}

export default App;