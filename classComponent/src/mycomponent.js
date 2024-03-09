import React,{ Component } from "react";

class Mycomponent extends Component
{
    constructor()
    {
        super();
        this.state = {name: "" };
    }

    // Event Creation 

    handleTextChange = (evt)=>{
        this.setState({name:evt.target.value})
    }
    handleButtonClick = ()=>{
        alert("Welcome "+this.state.name);
    }

    // Web Design / Layout

    render()
    {
        return(
            <div>
            <center>
                Enter Name <input type="text" onChange={this.handleTextChange} />
                <p>
                <button type="submit" onClick={this.handleButtonClick}>Click Me</button>
                </p>
            </center>
            </div>
        );
    }
}

export default Mycomponent;