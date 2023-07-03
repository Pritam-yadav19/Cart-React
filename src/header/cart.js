import React from "react";
import "./styless.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Carts(){
    
    const {carts} = useSelector(state => state.cart)
    
    const dispatch = useDispatch();
    const deletes = (id)=>{
        dispatch({type:"delete",payload:id})
    }
    return(
        <div className="CartSect">
            {
                carts.length > 0 ? (
                carts.map((i)=>{
                   
                return(    <Cartitem key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} qty={i.quantity} dlt={deletes} 
                    id={i.id}/>
                )
                    
            })
                ) : <h2>No items yet</h2>
            }            
            {carts.length>0 && <Link to="/order"><button>Order now</button></Link>}
            
        </div>
    );
}
const Cartitem =({imgSrc,name,price,qty,dlt,id})=>(
    <div className="Cartitem">
        <div>
            <img src={imgSrc} alt="" className="cartimg"/>
        </div>
        <div>
            <p>{name}</p>
            <h4>Total quantity={qty}</h4>
        </div>
        <div>
            <p>Total Price=₹{price*qty}</p>
            <button onClick={()=>dlt({id,price,qty})}>delete</button>
        </div>
    </div>
)
export default Carts;