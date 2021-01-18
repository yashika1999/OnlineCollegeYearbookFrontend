import React, { Component } from 'react';
import AchievementService from '../services/AchievementService';
import Spacer from 'react-add-space';
import { BsTrophy } from "react-icons/bs";
import { FaUserAlt, FaUserCheck } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
import { TiCancel } from 'react-icons/ti';

import { BsFillPersonLinesFill, BsFillPeopleFill } from "react-icons/bs";
class UpdateAchievementComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name:'',
            year:'',
            description:'',
            role:''
        }
        
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeYearHandler = this.changeYearHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.updateAchievementAchievement = this.updateAchievement.bind(this);
    }

    componentDidMount(){
        AchievementService.getAchievementById(this.state.id).then((res) =>{
            let achievement = res.data;
            this.setState({id: achievement.id,
                name: achievement.name,
                year: achievement.year,
                description : achievement.description,
                role : achievement.role
            });
        });
    }

    updateAchievement = (e) =>
    {
        e.preventDefault();

        let achievement = {id: this.state.id, name: this.state.name, year: this.state.year, description: this.state.description, role: this.state.role};
        console.log('achievement => ' + JSON.stringify(achievement));

        AchievementService.updateAchievement(achievement,this.state.id).then((res) =>
        {
            this.props.history.push('/achievements');
        });

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
            <div style={{backgroundColor: "#dae381" ,  height: "570px"}}>
                <nav className=" navbar-dark" style={{ backgroundColor: "#4c5211"}}>
                    <div className="navbar-brand">
                        <h3><b><i>
                            <Spacer amount ={50}/>
                            <BsTrophy size={40}/> <BsTrophy size={40}/>
                            <Spacer amount ={1}/>
                                Update Achievement
                            <Spacer amount ={1}/>
                            <BsTrophy size={40}/> <BsTrophy size={40}/>
                        </i></b></h3>
                    </div>
                </nav>

                <div className ="container">
                    <form>
                        <br/>
                        <div className ="form-group">
                            <label><b>Achiever's Id <FaUserAlt size={13}/> :</b></label>
                            <input placeholder ="Enter ID" name ="id" className="form-control"
                            value ={this.state.id} onChange = {this.changeIdHandler}/>
                        </div>
                        <div className ="form-group">
                            <label><b>Achiever's Name <FaUserAlt size={13}/> :</b></label>
                            <input placeholder ="Enter Name" name ="name" className="form-control"
                            value ={this.state.name} onChange = {this.changeNameHandler}/>
                        </div>
                        <div className ="form-group">
                            <label><b>Achievement Year <AiFillCalendar/> :</b></label>
                            <input placeholder ="Enter Achievement Year" name ="year" className="form-control"
                            value ={this.state.year} onChange = {this.changeYearHandler}/>
                        </div>
                        <div className ="form-group">
                            <label><b>Achievement Description <BsFillPersonLinesFill/> :</b></label>
                            <input placeholder ="Enter Achievement Description" name ="description" className="form-control"
                            value ={this.state.description} onChange = {this.changeDescriptionHandler}/>
                        </div>
                        <div className ="form-group">
                            <label><b>Achiever's Role <BsFillPeopleFill/> :</b></label>
                            <input placeholder ="Enter Role" name ="role" className="form-control"
                            value ={this.state.role} onChange = {this.changeRoleHandler}/>
                        </div>

                        <button className ="btn btn-success" onClick = {this.updateAchievement}> <FaUserCheck size={18}/> Save</button>
                        <button className = "btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> <TiCancel size={20}/>Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateAchievementComponent;