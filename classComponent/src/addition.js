import React,{Component} from "react";

class Addition extends Component
{
    constructor()
    {
        super();
        this.state = {a:"",b:"",c:""}
    }
    handleFirstNumText = (evt) =>{
        this.setState({a:evt.target.value});
    }
    handleSecondNumText = (evt) =>{
        this.setState({b:evt.target.value});
    }
    handleSumButton=()=>{
        var s = parseInt(this.state.a)+parseInt(this.state.b);
        this.setState({c:"Sum is "+s})
    }
    handleMultiButton=()=>{
        var m = parseInt(this.state.a)+parseInt(this.state.b);
        this.setState({c:"Multi is "+m})
    }
    render()
    {
        return(
            <div><center>
                <table border="1">
                    <tr>
                        <td>First Number</td>
                        <td>
                           <input type="text" onChange={this.handleFirstNumText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Second Number</td>
                        <td>
                           <input type="text" onChange={this.handleSecondNumText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Result</td>
                        <td>
                           <input type="text" value={this.state.c}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" onClick={this.handleSumButton}>Sum</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" onClick={this.handleMultiButton}>Multi</button>
                        </td>
                    </tr>
                </table>
            
            </center></div>
        )
    }
}

export default Addition;