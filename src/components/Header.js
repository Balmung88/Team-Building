import logo from '../logo.svg';
import React, {Component} from "react";

class Header extends React.Component {
  render() {
   const subject = "Cloud Course";
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
