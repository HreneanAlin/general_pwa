import React, {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";

function NavigationBar(props) {
    const {closeMenu} = props;
    const linkEl1 = useRef()
    const linkEl2 = useRef()
    const linkEl3 = useRef()
    const linkEl4 = useRef()
    const linkEl5 = useRef()
    const linkEl6 = useRef()
    const linkEl7 = useRef()
    const links = [linkEl1,linkEl2,linkEl3,linkEl4,linkEl5,linkEl6,linkEl7]



    useEffect(()=>{


            links.map(linkEl => {
                 if(linkEl.current.href === document.baseURI){

                    return  linkEl.current.classList.add("active")
                 }
            })


    },[])
    return (
        <nav className="menu-bar">
            <ul>
                <li>
                    <Link to={"/"}
                          onClick={closeMenu}
                          ref={linkEl1}
                    >Home</Link>

                </li>
                <li>
                    <Link to={"/about"}
                          onClick={closeMenu}
                          ref={linkEl2}>
                        About Us
                    </Link>
                </li>
                <li><Link to={"/money-converter"}
                          onClick={closeMenu}
                          ref={linkEl3}>Money Convertor</Link></li>
                <li><Link
                    to={"/users"}
                    onClick={closeMenu}
                    ref={linkEl4}>Users</Link></li>
                <li><Link
                    to={"/quiz"}
                    onClick={closeMenu}
                    ref={linkEl5}>Quiz</Link></li>
                <li><Link to={"/pokemon"}
                          onClick={closeMenu}
                          ref={linkEl6}>Pokemon</Link></li>
                <li><Link to={"/weather"}
                          onClick={closeMenu}
                          ref={linkEl7}>Weather</Link></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;