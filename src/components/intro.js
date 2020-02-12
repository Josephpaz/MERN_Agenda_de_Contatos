import React, {Component} from 'react';
import Logo from '../mern_app_stack.jpeg';
import '../center.css'

export default class Intro extends Component {
    render(){
        return (
            <div className="intro">
            <div className="container-div">
              <img src={Logo} style={{width: '70%'}}/>
            </div>
            <h2 style={{textAlign: 'center'}}>Aplicação Web - MERN</h2> <br />
            <h4 style={{textAlign: 'center'}}>MongoDB, Express, ReactJS, NodeJS</h4> <br />
            <h5 style={{textAlign: 'center'}}>Sendo feita a interação entre servidor e cliente. CRUD aplicado no cenário de uma agenda de contatos.</h5><br />
            <h6 style={{textAlign: 'center'}}>feito por Joseph Paz</h6>
          </div>
        );
    }
}