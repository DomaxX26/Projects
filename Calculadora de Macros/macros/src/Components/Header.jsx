import React from "react";
import '../css/header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="header-container">
                <div className="header-tittle">
                    <h2>Calculadora de Macros</h2>
                </div>
                <div>
                    <h4>Aquí íra el switch para elegir el modo Light o Dark</h4>
                </div>
            </div>
        )
    }
}

export default Header;