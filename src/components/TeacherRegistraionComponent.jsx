import React, { Component } from 'react';
import TeacherService from '../services/TeacherService';
import Spacer from 'react-add-space';
import { FaUserAlt, FaUserCheck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { HiBookOpen, HiPencil, HiPhone } from 'react-icons/hi';
import { TiCancel } from 'react-icons/ti';
import { FcBusinessman } from "react-icons/fc";

const initialState ={
    id: '',
    name: '',
    email: '',
    password: '',
    address: '',
    contact: '',
    designation: '',
    qualification: '',
    
    nameError: '',
    emailError: '',
    passwordError: '',
    addressError: '',
    contactError:'',
    designationError: '',
    qualificationError: ''
}
class TeacherRegistraionComponent extends Component 
{
    constructor(props) {
        super(props)
        this.state = initialState;
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeDesignationHandler = this.changeDesignationHandler.bind(this);
        this.changeQualificationHandler = this.changeQualificationHandler.bind(this);
        this.saveTeacher = this.saveTeacher.bind(this);
    }

    validate = () => {
        let nameError= '';
        let emailError= '';
        let passwordError= '';
        let addressError= '';
        let contactError= '';
        let designationError= '';
        let qualificationError= '';
        
        if(!this.state.name){
            nameError = "Name field is empty"
        }

        if((!this.state.email.includes("@"))  && (!this.state.email)){
            emailError = "Invalid email";
        }

        if(!this.state.password){
            passwordError = "Invalid password";
        }

        if(!this.state.address){
            addressError = "Address field is empty"
        }

        if(!this.state.contact.match("[7-9]{1}[0-9]{9}")){
            contactError = "Please mention 10 digit number"
        }

        if(!this.state.designation){
            designationError = "Please mention your designation"
        }

        if(!this.state.qualification){
            qualificationError = "Please mention your qualification"
        }

        if(emailError || nameError || passwordError || addressError || contactError || designationError || qualificationError){
            this.setState({nameError, emailError, passwordError ,addressError, contactError, designationError, qualificationError});
            return false;
        }
        return true;
    };

    saveTeacher = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid)
        {
            alert("Registration Successful");
            let teacher = {name: this.state.name, email: this.state.email, password: this.state.password,
             address: this.state.address, contact: this.state.contact, 
            designation: this.state.designation, qualification: this.state.qualification};
            console.log('teacher => ' + JSON.stringify(teacher));

            TeacherService.createTeacher(teacher).then(res =>{
                this.props.history.push('/login');
            }); 
            //clear form
            this.setState(initialState);
        }       
    }


    changeNameHandler= (e) => {
        this.setState({name: e.target.value});
    }

    changeEmailHandler= (e) => {
        this.setState({email: e.target.value});
    }

    changePasswordHandler= (e) => {
        this.setState({password: e.target.value});
    }

    changeAddressHandler= (e) => {
        this.setState({address: e.target.value});
    }

    changeContactHandler= (e) => {
        this.setState({contact: e.target.value});
    }

    changeDesignationHandler= (e) => {
        this.setState({designation: e.target.value});
    }

    changeQualificationHandler= (e) => {
        this.setState({qualification: e.target.value});
    }

    cancel(){
        this.props.history.push('/teacher');
    }

    render() {
        return (
            <div style={{ backgroundColor: "#83d886"}}>
                <nav className=" navbar-dark" style={{ backgroundColor: "#15683f"}}>
                    <div className="navbar-brand">
                        <h3><b><i>
                            <Spacer amount ={50}/>
                            <FcBusinessman size={40}/>
                            Teacher Registration Form
                            <FcBusinessman size={40}/>
                        </i></b></h3>
                    </div>
                </nav>

                <div className = "container"> 
               <div id="reg">
                    <div className = "row">
                            <div className = "card-body">
                           
                                <form className = "myform">
                                    <div className = "form-group">

                                    <label><b>Name <FaUserAlt size={13}/>: </b> </label>         
                                        <input type="text"  placeholder="Enter Full Name" name="name" className="form-control" 
                                        value={this.state.name} onChange={this.changeNameHandler}  pattern="[A-Za-z]{3,15}" required="required"/>                                   
                                        <div style={{fontSize:15, color: "red"}}>{this.state.nameError}</div>
                                    </div>    
                                   
                                    <div className = "form-group">
                                        <label><b> Email <MdEmail size={17}/>: </b></label>
                                        <input type="text" placeholder="Enter Email eg. abc@gmail.com " name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeEmailHandler} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                                        <div style={{fontSize:15, color: "red"}}>{this.state.emailError}</div>
                                    </div>
                                    
                                    <div className = "form-group">
                                        <label><b> Password <RiLockPasswordFill size={18}/>: </b> </label>
                                        <input type="password" placeholder="Enter 8 digit Password" name="epassword" className="form-control"
                                        value={this.state.password} onChange={this.changePasswordHandler} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                                        <div style={{fontSize:15, color: "red"}}>{this.state.passwordError}</div>
                                    </div>
                                    
                                    <div className = "form-group">
                                        <label><b> Address <TiLocation size={18}/>:</b> </label>
                                        <textarea placeholder="Enter currrent Address including street number" name="address" className="form-control" rows="2"
                                        value={this.state.address} onChange={this.changeAddressHandler} required />
                                        <div style={{fontSize:15, color: "red"}}>{this.state.addressError}</div>
                                    </div>

                                    <div className = "form-group">
                                        <label><b> Contact <HiPhone siz={18}/>: </b> </label>
                                        <input type="number" placeholder="Enter 10 Digit Mobile number" name="contact" className="form-control" 
                                         value={this.state.contact} onChange={this.changeContactHandler} pattern="[7-9]{1}[0-9]{9}" required/>  
                                        <div style={{fontSize:15, color: "red"}}>{this.state.contactError}</div>
                                    </div>

                                    <div className = "form-group">
                                        <label><b> Designation <HiBookOpen size={18}/>: </b></label>
                                        <input type="text" placeholder="Enter current Designation " name=" Designation " className="form-control" 
                                          value={this.state.designation} onChange={this.changeDesignationHandler} required /> 
                                        <div style={{fontSize:15, color: "red"}}>{this.state.designationError}</div> 
                                    </div>
                                    
                                    <div className = "form-group">
                                        <label><b> Qualification <HiPencil size={18}/>: </b></label>
                                        <input type="text" placeholder="Enter current Qualification" name="Qualification" className="form-control" 
                                         value={this.state.qualification} onChange={this.changeQualificationHandler} required/>  
                                        <div style={{fontSize:15, color: "red"}}>{this.state.qualificationError}</div>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveTeacher} > <FaUserCheck size={18}/> Register</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><TiCancel size={20}/> Cancel</button>
                                </form>
                            </div>
                        </div>
                        </div>
                    
               </div>

            </div>
        );
    }
}

export default TeacherRegistraionComponent;