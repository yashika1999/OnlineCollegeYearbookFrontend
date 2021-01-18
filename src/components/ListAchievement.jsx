import React, { Component } from 'react';
import AchievementService from '../services/AchievementService';
import {FaTrashAlt, FaEye, FaEdit, FaPlus, FaSearch} from 'react-icons/fa';
import Spacer from 'react-add-space';
import { BsTrophy } from "react-icons/bs";

class ListAchievementComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state ={
            achievements: []
        }
        // this.addAchievement= this.addAchievement.bind(this);
        // this.editAchievement = this.editAchievement.bind(this);
        // this.deleteAchievement = this.deleteAchievement.bind(this);
    }

    // editAchievement(id){
    //     this.props.history.push(`/updateAchievement/${id}`)
    // }

    componentDidMount(){
        AchievementService.getAchievement().then((res) =>{
            this.setState({achievements:res.data});
        });
    }

    // addAchievement(){
    //     this.props.history.push('/addAchievement');
    // }

    // deleteAchievement(id)
    // {
    //     AchievementService.deleteAchievement(id).then( res =>{
    //         this.setState({achievements : this.state.achievements.filter(achievement => achievement.id!==id)});
    //     });
    // }

    viewAchievement(id)
    {
        this.props.history.push(`/viewAchievement/${id}`)
    }

    render() {
        return (
           
            <div style={{backgroundColor: "#dae381" , height: "480px"}}>
                <div >
                <nav className=" navbar-dark" style={{ backgroundColor: "#4c5211"}}>
                    <div className="navbar-brand">
                        <h3><b><i>
                        <Spacer amount ={50}/>
                        <BsTrophy size={40}/> <BsTrophy size={40}/>
                        <Spacer amount ={1}/>
                            Achievement Details
                        <Spacer amount ={1}/>
                        <BsTrophy size={40}/> <BsTrophy size={40}/>
                        </i></b></h3>
                    </div>
                </nav>
                </div >

                <br/>
                <div className ="container">
                <div className ="row">
                    {/* <button className ="btn btn-primary" onClick ={this.addAchievement}>
                        <FaPlus/> Add Achievement
                    </button> */}

                    {/* <div className = "col">
                        <Spacer amount ={150}/>
                        <FaSearch/> <b>Search</b> 
                        <Spacer amount ={1}/>
                        <input label="Search Achievement By Name" onChange={this.onchange}/>
                    </div> */}
                </div>

                    <br/>
                    <table  style={{ backgroundColor: "white"}} className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Achiever's Id</th>
                                <th>Achiever's Name</th>
                                <th>Achievement Year</th>
                                <th>Achievement Description</th>
                                <th>Achiever's Role</th>
                                <th>Action</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.achievements.map(
                                    achievement =>
                                    <tr key = {achievement.id}>
                                        <td>{achievement.id}</td>
                                        <td>{achievement.name}</td>
                                        <td>{achievement.year}</td>
                                        <td>{achievement.description}</td>
                                        <td>{achievement.role}</td>
                                        <td>
                                            {/* <button onClick = {() => this.editAchievement(achievement.id)} className = "btn btn-info">
                                                <FaEdit/> Edit
                                            </button> */}
                                            <button style={{marginLeft: "10px"}} onClick = {() => this.viewAchievement(achievement.id)} className = "btn btn-success">
                                                <FaEye/> View
                                            </button>
                                            {/* <button style={{marginLeft: "10px"}} onClick = {() => this.deleteAchievement(achievement.id)} className = "btn btn-danger">
                                                <FaTrashAlt/> Delete
                                            </button> */}
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListAchievementComponent;