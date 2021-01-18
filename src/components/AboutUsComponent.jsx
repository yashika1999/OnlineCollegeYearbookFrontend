import React, { Component } from 'react';

import Spacer from 'react-add-space';

class AboutUsComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state ={

        }
    }
    render() {
        return (
            <div  style={{backgroundColor: "#f5cef9", height: "1100px" }}>
                <nav className=" navbar-dark" style={{ backgroundColor: "#3b0541"}}>
                    <div className="navbar-brand">
                        <h3><b><i>
                            <Spacer amount ={3}/>
                                About Us
                            <Spacer amount ={1}/>
                        </i></b></h3>
                    </div>
                </nav>
                <br/>
            <div className ="container">
            <h5><i>
                Online College YearBook is designed each year by a team of student staff 
                who work to complete a new edition from cover to cover. Like its namesake, it 
                aims to provide a warm, glowing reminder of the experiences that graduates 
                shared together long after those experiences have passed. The yearbook staff, 
                under the supervision and guidance of faculty advisors, is led by an 
                editor-in-chief who oversees an editorial board consisting of student 
                leaders representing the major sections of the book:

                <ul>
                    <li>
                        <b>Teacher Section :</b> Where, after login into the portal, teacher can update 
                        his/her profile and can view 
                        achievements of all teachers and students. 
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>Student Section :</b> Where, after login into the portal, student can update 
                        his/her profile and can view 
                        achievements of all teachers and students 
                    </li>
                </ul>
                <ul>
                    <li>
                        <b>Admin Section :</b> Where, after login into the portal, admin can update the 
                        achievement details of all teachers and students.
                    </li>
                </ul>

            </i></h5>
            </div>
            
            <br/><br/>
            <div class="row">
            <Spacer amount ={4}/>
                <div className = "col-md-4 ">                    
                    <img src ="/images/staff2020.jpg" alt ="StudentTrophy" height="250px"  width="350px" ></img> <br/>
                    <h5><b><i>Staff 2020</i></b></h5>
                </div>
                <div className = " col-md-4">
                    <img src ="/images/staff2019.jpg" alt ="StudentTrophy" height="250px"  width="350px" ></img> <br/>
                    <h5><b><i>Staff 2019</i></b></h5>
                </div>
                <div className = "col-md-2 ">                    
                    <img src ="/images/staff2018.jpg" alt ="StudentTrophy" height="250px"  width="350px" ></img> <br/>
                    <h5><b><i>Staff 2018</i></b></h5>
                </div>
            </div>
            <br/><br/>
            <div class="row">
            <Spacer amount ={4}/>
                <div className = "col-md-4 ">                    
                    <img src ="/images/staff2017.jpg" alt ="StudentTrophy" height="250px"  width="350px" ></img> <br/>
                    <h5><b><i>Staff 2017</i></b></h5>
                </div>
                <div className = " col-md-4">
                    <img src ="/images/staff2016.jpg" alt ="StudentTrophy" height="250px"  width="350px" ></img> <br/>
                    <h5><b><i>Staff 2016</i></b></h5>
                </div>
                <div className = "col-md-2 ">                    
                    <img src ="/images/staff2020.jpg" alt ="StudentTrophy" height="250px"  width="350px" ></img> <br/>
                    <h5><b><i>Staff 2015</i></b></h5>
                    
                </div>
                
            </div>
            
        </div>          



        );
    }
}

export default AboutUsComponent;