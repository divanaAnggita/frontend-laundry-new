import React from "react";
import axios from "axios"

//import base_url dari file config.js
import { base_url } from "../config";

export default class login extends React.Component{
    constructor(){
        super();
        //tambah state sesuai dengan kebutuhan anda
            this.state = {
                username: "",
                password: "",
                message: "",
                logged: true
            }
    }
    login = event => {
        event.preventDefault()
        let sendData = {
            username: this.state.username,
            password: this.state.password
        }
        let url = base_url + "/auth"

        // console.log(sendData)
        axios.post(url,sendData)
        .then(res => {
            this.setState({logged:res.data.logged})
            if(this.state.logged){
                let user = res.data.data
                let token = res.data.token
                localStorage.setItem("user",JSON.stringify(user))
                localStorage.setItem("token",token)
                this.props.history.push("/")
            } else {
                this.setState({message: res.data.message})
            }
        })
        .catch(error => console.log(error))
    }
    render(){
        return(
            <div className="container d-flex h-100 justify-content-center align-items-center">
                <div className="col-sm-6 card my-5">
                    <div className="card-header bg-primary text-white text-center">
                        <h4>Laundry</h4>
                        <strong className="text-warning">Admin Sign In</strong>
                    </div>
                    <div className="card-body">
                        { !this.state.logged ? 
                        (
                            <div className="alert alert-danger mt-1">
                                { this.state.message }
                            </div>
                        ) : null }
                        <form onSubmit={ev => this.login(ev)}>
                            {/* username */}
                            <input type="text" className="form-control mb-1" value={this.state.username}
                            onChange={ev => this.setState({username: ev.target.value})} />

                            {/* password */}
                            <input type="password" className="form-control mb-1" value={this.state.password}
                            onChange={ev => this.setState({password: ev.target.value})}
                            autoComplete="false" />
                            <button className="btn btn-block btn-primary mb-1" type="submit">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}