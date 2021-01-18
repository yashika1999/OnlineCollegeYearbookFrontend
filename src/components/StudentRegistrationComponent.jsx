import React, { Component } from 'react';
import StudentService from '../services/StudentService';
import { FaUserAlt, FaUserCheck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { HiBookOpen, HiPencil, HiPhone } from 'react-icons/hi';
import { TiCancel } from 'react-icons/ti';
import { FcBusinessman } from "react-icons/fc";
import Spacer from 'react-add-space';

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

class StudentRegistrationComponent extends Component {
    constructor(props){
        super(props)

        this.state = initialState;
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeBranchHandler = this.changeBranchHandler.bind(this);
        this.changeYearHandler = this.changeYearHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }

validate = () => {
    let nameError= '';
    let emailError= '';
    let addressError= '';
    let contactError= '';
    let branchError= '';
    let yearError= '';
    let passwordError= '';
    
    if(!this.state.name){
        nameError = "Name field is empty"
    }

    if((!this.state.email.includes("@"))  || (!this.state.email)){
        emailError = "Invalid email";
    }

    if(!this.state.address){
        addressError = "Address field is empty"
    }

    if(!this.state.contact.match("[7-9]{1}[0-9]{9}")){
        contactError = "Please mention 10 digit number"
    }
    if(!this.state.branch){
        branchError = "Please mention your branch"
    }

    if(!this.state.year){
        yearError = "Please mention your year"
    }
    if(!this.state.password){
        passwordError = "Invalid password";
    }
    if(nameError || emailError || addressError || contactError || branchError || yearError || passwordError){
        this.setState({nameError, emailError, addressError, contactError, branchError, yearError});
        return false;
    }
    return true;
};

    saveStudent = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid)
        {
            alert("Registration Successful");
        e.preventDefault();
        let student = {name: this.state.name, email: this.state.email, address: this.state.address,
            contact: this.state.contact, branch: this.state.branch, year: this.state.year, password: this.state.password};
        console.log('student => ' + JSON.stringify(student));

        StudentService.createStudent(student).then(res =>{
            this.props.history.push('/login');
        })
        //clear form
        this.setState(initialState);
        }
    }


    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changeContactHandler= (event) => {
        this.setState({contact: event.target.value});
    }
    changeBranchHandler= (event) => {
        this.setState({branch: event.target.value});
    }
    changeYearHandler= (event) => {
        this.setState({year: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    cancel(){
        this.props.history.push('/students');
    }
   

    render() {
        return ( 
            <div style={{ backgroundColor: "#83d886"}}>
                <nav className=" navbar-dark" style={{ backgroundColor: "#15683f"}}>
                    <div className="navbar-brand">
                        <h3><b><i>
                            <Spacer amount ={50}/>
                            <FcBusinessman size={40}/>
                            Student Registration Form
                            <FcBusinessman size={40}/>
                        </i></b></h3>
                    </div>
                </nav>
                <br/>

                <div className = "container">
                <div id="reg">
                    <div className = "row">
                    
                    <div className = "card-body">                        

                                <form className="myform">
                                <div className = "form-group">
                                            {/* <label>  Name: </label> */}
                                            <label><b>Name <FaUserAlt size={13}/>: </b> </label>
                                            <input placeholder=" Enter Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler} pattern="[A-Za-z]{3,15}" required="required"/>
                                                 <div style={{fontSize:15, color: "red"}}> </div>
                                            
                                   <div style={{color: "red"}}>{this.state.nameError}
                                   </div> 
                                   
                                 </div>

                                 <div className = "form-group">
                                            {/* <label>  Email: </label> */}
                                            <label><b> Email <MdEmail size={17}/>: </b></label>
                                            <input placeholder="Enter Email e.g abc@gmail.com" name=" email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>

                                <div style={{fontSize:15, color: "red"}}>{this.state.emailError}</div>
                                
                                 </div>
                                 <div className = "form-group">
                                            {/* <label> Address: </label> */}
                                            <label><b> Address <TiLocation size={18}/>:</b> </label>
                                            <textarea  placeholder="Enter Address e.g. street name,city" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler} required />
                                                <div style={{fontSize:15, color: "red"}}>{this.state.addressError}</div>
                                 </div>
                                 <div className = "form-group">
                                            {/* <label> Contact: </label> */}
                                            <label><b> Contact <HiPhone siz={18}/>: </b> </label>
                                            <input type="number" placeholder="Enter 10 digit mobile no" name="contact" className="form-control" 
                                                value={this.state.contact} onChange={this.changeContactHandler} pattern="[7-9]{1}[0-9]{9}" required/>
                                                <div style={{fontSize:15, color: "red"}}>{this.state.contactError}</div>
                                 </div>
                                 <div className = "form-group">
                                            {/* <label>  Branch: </label> */}
                                            <label><b> Branch <HiBookOpen size={18}/>: </b></label>
                                            <input placeholder="Enter Branch" name="branch" className="form-control" 
                                                value={this.state.branch} onChange={this.changeBranchHandler} required />
                                                <div style={{fontSize:15, color: "red"}}>{this.state.branchError}</div>
                                 </div>

                                 <div className = "form-group">
                                            {/* <label>  Year: </label> */}
                                            <label><b> Year <HiPencil size={18}/>: </b></label>
                                            <input type="number" placeholder="Enter Year" name="year" className="form-control" 
                                                value={this.state.year} onChange={this.changeYearHandler} required />
                                                <div style={{fontSize:15, color: "red"}}>{this.state.yearError}</div>
                                 </div>

                                 <div className = "form-group">
                                            {/* <label>  Password: </label> */}
                                            <label><b> Password <RiLockPasswordFill size={18}/>: </b> </label>
                                            <input type="password" placeholder="Enter Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler} pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}" required />
                                                <div style={{fontSize:15, color: "red"}}>{this.state.passwordError}</div>
                                                 
                         
                                 </div>
                                 <button className="btn btn-success" onClick={this.saveStudent}> <FaUserCheck size={18}/> Register</button>
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

export default StudentRegistrationComponent;