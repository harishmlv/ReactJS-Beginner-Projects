// Calculator using Function in ReactJS 
// useState() HOOK used 

import React,{useState} from "react";

function Calc()
{
    const[num1, setNum1] = useState();
    const[num2, setNum2] = useState();
    const[result, setResult] = useState();

// Create Events 

const handleNum1TextChange =(evt)=>{
    setNum1(evt.target.value);
}
const handleNum2TextChange =(evt)=>{
    setNum2(evt.target.value);
}

const handleSumButton=()=>{
    var c = parseInt(num1)+parseInt(num2);
    setResult("Sum is "+c);
}
const handleMultiButton=()=>{
    var c = parseInt(num1)*parseInt(num2);
    setResult("Sum is "+c);
}
const handleSubButton=()=>{
    var c = parseInt(num1)-parseInt(num2);
    setResult("Sum is "+c);
}
const handleDivButton=()=>{
    var c = parseInt(num1)/parseInt(num2);
    setResult("Sum is "+c);
}
const handleClearButton=()=>{
    setNum1("");
    setNum2("");
    setResult("");
}

return(
    <div><center>
    <h1>Calculator using Function - ReactJS</h1>
    <table border={1}>
            <tr>
                 <td>Enter First Number</td>
                 <td>
                     <input type="number" onChange={handleNum1TextChange} placeholder="Input Number" value={num1}/>
                 </td>
            </tr>
            <tr>
                 <td>Enter Second Number</td>
                 <td>
                     <input type="number" onChange={handleNum2TextChange} placeholder="Input Number" value={num2}/>
                 </td>
            </tr>
            <tr>
                 <td>Result</td>
                 <td>
                     <input type="text" placeholder="Result" value={result}/>
                 </td>
            </tr>
    </table>
            <tr>
                <td>
                <button type="submit" onClick={handleSumButton}>Sum ( + )</button>
                </td>
            </tr>
            <tr>
                <td>
                <button type="submit" onClick={handleSubButton}>Sub ( - )</button>
                </td>
            </tr>
            <tr>
                <td>
                <button type="submit" onClick={handleMultiButton}>Multi ( x )</button>
                </td>
            </tr>
            <tr>
                <td>
                <button type="submit" onClick={handleDivButton}>Divide ( / )</button>
                </td>
            </tr>
            <tr>
                <td>
                <button type="submit" onClick={handleClearButton}>Clear</button>
                </td>
            </tr>
      </center>
    </div>
);
}

export default Calc;
