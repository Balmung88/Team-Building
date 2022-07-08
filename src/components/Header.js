import logo from '../img/logo.svg';
import React, {Component} from "react";

class Header extends React.Component {
  render() {
   const subject = "My Laddies, Lasses and Lassoes";
    return (
      <div>
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		  <p> Hello, {subject}! </p>
		</header>
	  </div>
	);
      }
     }
    
export default Header;
