import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Order(){
    const {prices} = useSelector(state => state.cart)
    return(
        <>
            <Link to="/cart"><button>Back</button></Link>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'auto',alignContent:'center'}}>
                <div style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'auto',alignContent:'center'}}>
                
                    <p>Total price: ₹{prices}</p>
                    <form style={{display:"grid",gap:'15px'}}>
                        Wing/Floor: <input type="text"/>
                        Society: <input type="text"/>
                        Pincode: <input type="number"/>
                        <Link to="/place"><button >Submit</button></Link>
                    </form>
                </div>
            </div>
        </>
        
    );
}

export default Order;