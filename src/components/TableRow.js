import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/contact/delete/'+this.props.obj._id)
            .then(res => {
                console.log("Contato Deletado");
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    render() {
        return( 
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.tel}</td>
                <td>
                    <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Editar</Link>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={this.delete}>Excluir</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
