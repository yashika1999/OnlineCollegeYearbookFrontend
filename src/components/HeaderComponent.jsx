import React, { Component } from 'react';
import { BsHouseDoorFill,BsTrophy } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { HiPhone } from "react-icons/hi";
import { FcBusinessman } from "react-icons/fc";
import { FaPencilAlt } from "react-icons/fa";
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
    render() {
        return (
            <div style={{ width: "1220px"}} >
                    <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: "#090f4e"}}>
                    <div className="navbar-brand">
                        
                            <b><i>ONLINE COLLEGE YEARBOOK</i></b>
                            <Spacer amount ={10}/>
                            <a className="navbar-brand" href="/home">
                                <BsHouseDoorFill size={30}/>Home
                            </a>
                            <a className="navbar-brand" href="/aboutUs">
                                <FaPencilAlt/>About Us
                            </a>
                            <a className="navbar-brand">
                                <Dropdown>
                                <FcBusinessman size={40}/>SignUp
                                <Dropdown.Toggle style={{ backgroundColor: "#090f4e"}}>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/studentSignUp">Student Registration</Dropdown.Item>
                                    <Dropdown.Item href="/teacherSignUp">Teacher Registration</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                            </a>

                            <a className="navbar-brand" href="/login">
                                <BiLogInCircle size={30}/>Login
                            </a>
                            <a className="navbar-brand" href="/contactUs">
                                <HiPhone size={30}/>Contact Us 
                            </a>
                            <a className="navbar-brand" href="/achievements">
                                <BsTrophy size={30}/>Achievements 
                            </a> 

                    </div>
                    </nav>
            </div>
        );
    }
}

export default HeaderComponent;