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
import Cart from "./components/Cart";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";




function App() {
  const user = useSelector<{ user: { user: OneUser } }>((state) => state.user.user) as OneUser

  const dispatch=useDispatch()
  const { token, setToken } = useToken()
  const [signup, setSignup] = useLocalStorage<boolean>('signup', false)
  function getUser() {
        return axios.get('http://localhost:3001/users')
    }
    const {data:theUser,isSuccess,refetch,isFetching}=useQuery({
        queryKey: ['users'],
        queryFn: getUser,
      select: (data) => data.data.find((TheUser: OneUser) => TheUser.id === user.id),
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
        <NavBar user={theUser as OneUser} isSuccess={isSuccess} setSignup={setSignup as (e:boolean) => boolean}  />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route  path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
          <Route path="/shop/:id" element={<ProductPage isSuccess={isSuccess} user={theUser as OneUser} refetch={refetch} />} />
          <Route path="/cart" element={<Cart refetch={refetch} isFetching={isFetching} isSuccess={isSuccess} user={theUser as OneUser} />} />
          <Route path="/profile/:id" element={<Profile user={user } refetch={refetch} /> } />
        </Routes>
            <Footer/>
          </>
    </div>
  );
}

export default App;