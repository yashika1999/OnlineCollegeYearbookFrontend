import React, { Component } from 'react';
import { AiOutlineCopyrightCircle } from "react-icons/ai";


class FooterComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state= {

        }
    }
    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">Copyright <AiOutlineCopyrightCircle/> 2020 OnlineCollegeYearBook, Inc</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;