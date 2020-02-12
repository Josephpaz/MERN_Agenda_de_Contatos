import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {contact: []};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/contact/')
        .then(response => {
            this.setState({contact: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    tabRow(){
        return this.state.contact.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Lista de Contatos</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th colSpan="2" style={{textAlign: 'center'}}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}