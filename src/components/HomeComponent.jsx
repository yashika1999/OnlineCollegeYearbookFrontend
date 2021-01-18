import React, { Component } from 'react';
import Spacer from 'react-add-space';

class HomeComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state ={

        }
    }
    render() {
        return (
            <div >
                    <div style={{backgroundColor: "#93adf2", height: "430px", width: "1220px"}}>  
                        <br/> <br/> 
                        <Spacer amount ={30}/>
                        <img src ="/images/Yearbook.jpg" alt ="Yearbook" height="300px"  ></img>
                    </div>
            </div>
        );
    }
}

export default HomeComponent;