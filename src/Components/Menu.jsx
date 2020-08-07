import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import NavigationBar from "./NavigationBar";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useTransition, animated} from 'react-spring'


function Menu(props) {

    const [showNavigation, setShowNavigation] = useState(false)


    let navigationBar = null;

    const transitions = useTransition(showNavigation, null, {
        from: {position: 'fixed', opacity: 0, transform: 'scale(1,0)'},
        enter: {opacity: 1, transform: 'scale(1,1)'},
        leave: {opacity: 0, transform: 'scale(1,0)'},
    })

    function closeMenu(e) {

        setShowNavigation(false);

    }

    if (showNavigation) {
        navigationBar = <NavigationBar
                         closeMenu={closeMenu}

                         />
    }

    return (
        <header>
            <div className='menu-header'>
                <FontAwesomeIcon
                    className="icon"
                    icon={faBars}
                    onClick={() => setShowNavigation(!showNavigation)}
                />

            </div>
            {transitions.map(({item, key, props}) =>
                item && <animated.div key={key} style={props}>{navigationBar}</animated.div>
            )}

        </header>
    );
}

export default Menu;