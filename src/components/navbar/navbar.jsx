import React from 'react';        
import './navbar.scss';  
import logo from '../../assets/img/logo.png';    
/**
 * @author Mauricio ross
 * @name NavBar
 * @description Componente que contiene el navbar con logo
 * @example <Navbar/>
 */  
class navbar extends React.Component {        
	constructor(props) {        
		super(props);        
			this.state = {}        
	}        
	render() {        
		return(        
			<div className="navbar"><img src={logo} alt=""/></div>        
		);        
	}        
}        
export default navbar;