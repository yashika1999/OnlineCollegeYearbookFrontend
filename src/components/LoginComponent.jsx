import React, { Component } from 'react';
import { BiLogInCircle } from "react-icons/bi";
import { Dropdown } from 'react-bootstrap';
import Spacer from 'react-add-space';

class HeaderComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state ={

        }
    }

    login = (e) =>
    { 
         this.props.history.push('/achievements');
    }

    render() {
        return (
            <div  style={{backgroundColor: "#f69da8", height: "430px" }}>
                <nav className=" navbar-dark" style={{ backgroundColor: "#460911"}}>
                    <div className="navbar-brand">
                        <h3><b><i>
                            <Spacer amount ={65}/>
                               Login 
                            <Spacer amount ={1}/>
                            <BiLogInCircle size={40}/>                             
                        </i></b></h3>
                    </div>
                </nav>
                <div>
                    <form>
                    <div className ="form-group">
                        
                        <Spacer amount ={110}/>
                        <label><b> </b></label>
                        
                        <div className ="container">
                            <div className ="form-group">
                            <label><b>User Name : </b></label>
                            <input placeholder ="Enter username" name ="id" className="form-control"
                             required/>
                            </div>
                            <div className ="form-group">
                            <label><b>Password : </b></label>
                            <input placeholder ="Enter password" name ="id" className="form-control"
                             required/>
                            </div>
                        
                        <label><b>Role : </b></label> <br/>
                        <a className="navbar-brand">
                                <Dropdown>
                                <Dropdown.Toggle style={{ backgroundColor: "#460911"}}>
                                        <Spacer amount ={10}/>Select Role<Spacer amount ={10}/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/achievements">Admin</Dropdown.Item>
                                    <Dropdown.Item href="/achievement">Teacher</Dropdown.Item>
                                    <Dropdown.Item href="/achievment">Student</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                        </a>
                        <br/>
                        <Spacer amount ={120}/>
                        <button className ="btn btn-success" onClick = {this.login}>  Login</button>

                    </div>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;