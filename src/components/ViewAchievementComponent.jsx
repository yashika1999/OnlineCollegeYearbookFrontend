import React, { Component } from 'react';
import AchievementService from '../services/AchievementService';
import Spacer from 'react-add-space';
import { BsTrophy } from "react-icons/bs";

class ViewAchievementComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            id: this.props.match.params.id,
            achievement:{}
        }
    }

    componentDidMount()
    {
        AchievementService.getAchievementById(this.state.id).then(res => {
            this.setState({achievement: res.data});
        })
    }

    render() 
    {
        return (
            <div style={{backgroundColor: "#dae381" , height: "480px"}}>
                <div  style={{backgroundColor: "#dae381", height: "4px" }}>
                <nav className=" navbar-dark" style={{ backgroundColor: "#4c5211"}}>
                    <div className="navbar-brand">
                        <h3><b><i>
                            <Spacer amount ={50}/>
                            <BsTrophy size={40}/> <BsTrophy size={40}/>
                            <Spacer amount ={1}/>
                                View Achievement
                            <Spacer amount ={1}/>
                            <BsTrophy size={40}/> <BsTrophy size={40}/>
                        </i></b></h3>
                    </div>
                </nav>
                <br/>

        
            <div class="row">
            <Spacer amount ={15}/>
                <div className = "card card-body col-md-5 ">                    
                        <div className ="row">
                            <label>
                                <Spacer amount ={10}/>
                                Achiever's Id: 
                                <Spacer amount ={1}/> 
                            </label>
                            <b><i>{this.state.achievement.id}</i></b>
                        </div>
                        <div className ="row">   
                            <label>
                                <Spacer amount ={10}/>
                                Achiever's Name: 
                                <Spacer amount ={1}/> 
                            </label>
                            <b><i>{this.state.achievement.name}</i></b> 
                        </div>
                        <div className ="row">
                            <label>
                                <Spacer amount ={10}/>
                                Achievement Year: 
                                <Spacer amount ={1}/> 
                            </label>
                            <b><i>{this.state.achievement.year}</i></b>
                        </div>
                        <div className ="row">
                            <label>
                                <Spacer amount ={10}/>
                                Achievement Description: 
                                <Spacer amount ={1}/> 
                            </label>
                            <b><i>{this.state.achievement.description}</i></b>
                        </div>
                        <div className ="row">    
                            <label>
                                <Spacer amount ={10}/>
                                Achiever's Role 
                                <Spacer amount ={1}/> 
                            </label>
                            <b><i>{this.state.achievement.role}</i></b>
                        </div>
                </div>
                <div className = " col-md-2">
                    <img src ="/images/StudentTrophy.jpg" alt ="StudentTrophy" height="300px"  width="500px" ></img> 
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default ViewAchievementComponent;