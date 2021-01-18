import React, { Component } from 'react';
import Spacer from 'react-add-space';
import { HiPhone } from "react-icons/hi";

class ViewAchievementComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
        }
    }

    render() 
    {
        return (
            <div  style={{backgroundColor: "#e79372", height: "800px" }}>
                <nav className=" navbar-dark" style={{ backgroundColor: "#a83b10"}}>
                    <div className="navbar-brand">
                        <h3><b><i>
                            <Spacer amount ={3}/>
                               Contact Us
                            <Spacer amount ={1}/>
                            <HiPhone size={40}/> 
                        </i></b></h3>
                    </div>
                </nav>
                <br/>

                <div class="row">
                        <Spacer amount ={7}/>
                        <div className = "card col-md-4">
                            <br/>
                            <h5><i><b>Yashika</b></i></h5>
                            <h5><i>Capgemini India</i></h5>
                            <hr style= {{border: "1px solid black"}}></hr>
                            <h5><i>Address: </i></h5>
                            <h6><i>Room No: G 02 <br/>
                                Ground Floor , E 2 <br/>
                                Cagpemini, Sector-125,<br/>
                                Bangalore, India <br/>
                                Pin Code : 201303
                            </i></h6>
                            <hr style= {{border: "1px solid black"}}></hr>
                            <h5><i>Telephone : <b>011 28873647</b> </i></h5>
                            <hr style= {{border: "1px solid black"}}></hr>
                            <h5><i>Email Address: <b>yashika@capgemini.com</b></i></h5>

                        
                        </div>
                        <Spacer amount ={7}/>
                        <div className = "card col-md-7">
                            <h4><b><i><u>Order Past Editions of Yearbook</u></i></b></h4>
                            <h6><i>Lost your yearbook??....<br/>
                                Never got one in the first place??....<br/> 
                                Luck–copies of yearbooks from previous years 
                                are still available! 
                                Prices and inventory are subject to change. 
                                If you’re interested, simply complete the form below and 
                                we’ll contact you with the availability and price of your 
                                desired edition. 
                            </i></h6>
                            <br/>
                            <h6><b>PLEASE NOTE THAT WE DO NOT HAVE ANY ADDITIONAL COPIES OF THE 2021 EDITION.</b></h6>
                            <form>
                                    <div className ="form-group">
                                        <label><b>Name</b></label>
                                        <input placeholder ="Enter Name" name ="name" className="form-control"
                                        // value ={this.state.id} onChange = {this.changeIdHandler}
                                        />
                                    </div>
                                    <div className ="form-group">
                                        <label><b>Email Address</b></label>
                                        <input placeholder ="Enter Email Id" name ="email" className="form-control"
                                        // value ={this.state.name} onChange = {this.changeNameHandler}
                                        />
                                    </div>
                                    <div className ="form-group">
                                        <label><b>Phone Number</b></label>
                                        <input placeholder ="Enter Phone Number" name ="phone" className="form-control"
                                        // value ={this.state.year} onChange = {this.changeYearHandler}
                                        />
                                    </div>
                                    <div className ="form-group">
                                        <label><b>Quantity of yearbooks listed above</b></label>
                                        <input placeholder ="Enter number of books" name ="quantity" className="form-control"
                                        // value ={this.state.description} onChange = {this.changeDescriptionHandler}
                                        />
                                    </div>
                                    <div className ="form-group">
                                        <label><b>Other questions/comments</b></label>
                                        <input placeholder ="Enter your queries" name ="query" className="form-control"
                                        // value ={this.state.role} onChange = {this.changeRoleHandler}
                                        />
                                    </div>
                                    <button className ="btn btn-danger" >Submit</button>
                                    <br/><br/>
                            </form>
                        </div>


                    </div>
            </div>
        );
    }
}

export default ViewAchievementComponent;