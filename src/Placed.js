import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Placed(){
    
    const dispatch = useDispatch();
    function deletes(){
        dispatch({type:"clear"});
    }
    return(
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignContent:'center',margin:'auto'}}>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignContent:'center',margin:'auto'}}>
            <h1>Order Placed!</h1>
            <Link to="/"><button style={{margin:'auto',display:'flex'}} onClick={deletes}>Home</button></Link>
            </div>
        </div>
    );
}
export default Placed;