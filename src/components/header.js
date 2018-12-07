import React from 'react'
import Logo from '../images/logo.png';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
  render(){

const burgerToggle = () => {
  let toggleSwitch = document.querySelector('.mobile-list');
          toggleSwitch.classList.toggle('active');
}

const Burger = () => (
      <span className="navbar-toggle" id="js-navbar-toggle">
        <FontAwesomeIcon icon={faBars} className="menu-burger" onClick={burgerToggle}/>
       </span>
    );

  return (
    <section id="header">
        <div className="logo-container">
            <img src={Logo} />
        </div>

        <nav className="menu-container">

            <ul id="menu" className="nav-desktop">
                <li><a href="#">About</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>

            <ul id="menu" className="nav-mobile">
                <Burger />
                <div className="mobile-list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Integrations</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contacts</a></li>
                </div>
            </ul>
        </nav>
    </section>
    )
  }
}

export default Header;
