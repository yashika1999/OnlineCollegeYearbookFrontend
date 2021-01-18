import React, { Component } from 'react';
import AchievementService from '../services/AchievementService';
import { FaUserAlt, FaUserCheck } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
import { BsFillPersonLinesFill, BsFillPeopleFill } from "react-icons/bs";
import { TiCancel } from 'react-icons/ti';
import Spacer from 'react-add-space';
import { BsTrophy } from "react-icons/bs";

const initialState ={
            id: '',
            name:'',
            year:'',
            description:'',
            role:'',    
            iderror: '',
            nameerror:'',
            yearerror:'',
            descriptionerror:'',
            roleerror:''
}
class AddAchievementComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = initialState;
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeYearHandler = this.changeYearHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.saveAchievement = this.saveAchievement.bind(this);
    }

    validate = () => 
    {
        let iderror = "";
        let nameerror = "";
        let yearerror = "";
        let descriptionerror = "";
        let roleerror = "";

        if(!this.state.id)
        {
            iderror = "id cannot be blank";
        }
        if(!this.state.name)
        {
            nameerror = "name cannot be blank";
        }
        if(!this.state.year)
        {
            yearerror = "year cannot be blank";
        }
        if(!this.state.description)
        {
            descriptionerror = "description cannot be blank";
        }
        if(!this.state.role)
        {
            roleerror = "role cannot be blank";
        }

        if(iderror || nameerror || yearerror || descriptionerror || roleerror)
        {
            this.setState({iderror, nameerror, yearerror, descriptionerror, roleerror});
            return false;
        }
        return true;
    }

    saveAchievement = (e) =>
    {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid)
        {
            let achievement = {id: this.state.id, name: this.state.name, year: this.state.year, description: this.state.description, role: this.state.role};
            console.log('achievement => ' + JSON.stringify(achievement));

            AchievementService.addAchievement(achievement).then(res =>
            {
                this.props.history.push('/achievements');
            });

            //clear form
            this.setState(initialState);
        }
    }
    
    changeIdHandler = (event) =>{
        this.setState({id : event.target.value});
    }
    changeNameHandler = (event) =>{
        this.setState({name : event.target.value});
    }
    changeYearHandler = (event) =>{
        this.setState({year : event.target.value});
    }
    changeDescriptionHandler = (event) =>{
        this.setState({description : event.target.value});
    }
    changeRoleHandler = (event) =>{
        this.setState({role : event.target.value});
    }
    cancel(){
        this.props.history.push('/achievements');
    }

    render() {
        return (
            <div style={{backgroundColor: "#dae381" , height: "700px"}}>
                <nav className=" navbar-dark" style={{ backgroundColor: "#4c5211"}}>
                    <div className="navbar-brand">
                        <h3><b><i>
                        <Spacer amount ={50}/>
                        <BsTrophy size={40}/> <BsTrophy size={40}/>
                        <Spacer amount ={1}/>
                            Add Achievement
                        <Spacer amount ={1}/>
                        <BsTrophy size={40}/> <BsTrophy size={40}/>
                        </i></b></h3>
                    </div>
                </nav>
                <br/>

                <div  className ="container">
                <form>
                                    <div className ="form-group">
                                        <label><b>Achiever's Id <FaUserAlt size={13}/> : </b></label>
                                        <input placeholder ="Enter ID" name ="id" className="form-control"
                                        value ={this.state.id} onChange = {this.changeIdHandler} required/>
                                        <div style={{color: 'red'}}>{this.state.iderror}</div>
                                    </div>
                                    
                                    <div className ="form-group">
                                        <label><b>Achiever's Name <FaUserAlt size={13}/> :</b></label>
                                        <input placeholder ="Enter Name" name ="name" className="form-control"
                                        value ={this.state.name} onChange = {this.changeNameHandler} required/>
                                        <div style={{color: 'red'}}>{this.state.nameerror}</div>
                                    </div>

                                    <div className ="form-group">
                                        <label><b>Achievement Year <AiFillCalendar/> :</b></label>
                                        <input placeholder ="Enter Achievement Year" name ="year" className="form-control"
                                        value ={this.state.year} onChange = {this.changeYearHandler} required/>
                                        <div style={{color: 'red'}}>{this.state.yearerror}</div>
                                    </div>

                                    <div className ="form-group">
                                        <label><b>Achievement Description <BsFillPersonLinesFill/> : </b></label>
                                        <input placeholder ="Enter Achievement Description" name ="description" className="form-control"
                                        value ={this.state.description} onChange = {this.changeDescriptionHandler} required/>
                                        <div style={{color: 'red'}}>{this.state.descriptionerror}</div>
                                    </div>

                                    <div className ="form-group">
                                        <label><b>Achiever's Role <BsFillPeopleFill/> :</b></label>
                                        <input placeholder ="Enter Role" name ="role" className="form-control"
                                        value ={this.state.role} onChange = {this.changeRoleHandler} required/>
                                        <div style={{color: 'red'}}>{this.state.roleerror}</div>
                                    </div>

                                    <button className ="btn btn-success" onClick = {this.saveAchievement}> <FaUserCheck size={18}/> Save</button>
                                    <button className = "btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> <TiCancel size={20}/> Cancel</button>
                                </form>
                        </div>
            </div>
        );
    }
}

export default AddAchievementComponent;