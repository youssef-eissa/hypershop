import './NavBar.css'
import ResponsiveAppBar from './materialUI/AppBar';
import { OneUser } from '../types/app';
import { useEffect, useRef, useState } from 'react';

type TNavBar = {
    setSignup: (e: boolean) => boolean;
    user: OneUser;
    isSuccess: boolean;
}
function NavBar({ setSignup, user, isSuccess }: TNavBar) {
    const NavRef=useRef<HTMLDivElement|null>(null)
    const [scroll,setScroll]=useState<number>(0)
    function handleScroll() {
        const currentScroll = window.scrollY
        if (currentScroll >scroll+100 && NavRef.current) {
            NavRef.current.style.transform = 'translateY(-100px)'
            // NavRef.current.style.backgroundColor = "#778899"
            setScroll(currentScroll)
            
        }  

        
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return()=>window.removeEventListener('scroll',handleScroll)
    })
return (
    <div className='container position-absolute navbarCon'>
        <div className='row'>
            <div ref={NavRef} className='col-12 rounded'>
                <ResponsiveAppBar user={user as OneUser} isSuccess={isSuccess} setSignup={setSignup as (e : boolean) => boolean} />
            </div>
        </div>

    </div>
)
}

export default NavBar