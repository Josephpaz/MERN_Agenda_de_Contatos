import React, {  Component } from 'react';
import axios from 'axios';
export default class Create extends Component{

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            tel: '',
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    onChangeTel(e){
        this.setState({
            tel: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`The values are ${this.state.name}, ${this.state.email}, ${this.state.tel}`)
        const obj = {
            name: this.state.name,
            email: this.state.email,
            tel: this.state.tel
        };
        axios.post('http://localhost:4000/contact/add', obj).then(res => console.log(res.data));
       
        this.setState({
            name: '',
            email: '',
            tel: ''
        });
        this.props.history.push('/index');
    }
    
    render(){
        return (
            <div style={{marginTop: '10'}}>
                <h3>Add New Contact</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} required/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} required/>
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <input type="text" className="form-control" value={this.state.tel} onChange={this.onChangeTel} required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Salvar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}