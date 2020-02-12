import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            tel: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/contact/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                  name: response.data.name, 
                  email: response.data.email,
                  tel: response.data.tel });
            })
            .catch(function (error) {
                console.log(error);
            })
      }

      onChangeName(e) {
          this.setState({
              name: e.target.value
          });
      }

      onChangeEmail(e) {
          this.setState({
              email: e.target.value
          });
      }

      onChangeTel(e) {
          this.setState({
              tel: e.target.value
          });
      }

      onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            email: this.state.email,
            tel: this.state.tel
        };
        axios.post('http://localhost:4000/contact/update/'+this.props.match.params.id, obj)
        .then(res => {
        console.log(res.data);
        window.location.reload()
        });
        this.props.history.push('/index');
        }

    render() {
        return (
            <div>
                <h3>Atualizar Contato</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} required/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="mail" className="form-control" value={this.state.email} onChange={this.onChangeEmail} required/>
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <input type="text" className="form-control" value={this.state.tel} onChange={this.onChangeTel} required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Atualizar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}