import React, { useEffect, useState } from "react";
import "./styles.css";
import "./stylewid.css";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
const imgmob = "https://images.hindustantimes.com/tech/htmobile4/P35360/heroimage/140876-v3-apple-iphone-13-mobile-phone-large-1.jpg?impolicy=new-ht-20210112&width=120&height=120";
const imgLap = "https://m.media-amazon.com/images/I/41sT-ej9Q-L._SX300_SY300_QL70_FMwebp_.jpg";
function Contains(){
   
    const ProductList=[
        {
            name : "Mobile",
            price : "15000",
            id : "1",
            imgSrc: imgmob
        },
        {
            name : "Laptop",
            price : "45000",
            id : "2",
            imgSrc: imgLap
        }
      ];
      const dispatch = useDispatch();

      const HandleEvent =(options)=>{        
        dispatch({type:"addToCart", payload: options});
        toast.success("Added to Cart!");
      }
      const [sec,setsec] = useState(0);
      const [min,setmin] = useState(0);
      
      useEffect(()=>{
        var timer;
        timer = setInterval(() => {
            setsec((sec)=>(sec+=1))
        }, 1000);
        if(sec>59){
            setmin((min)=>(min+=1));
            setsec((sec)=>sec=0);
        }
        return ()=> clearInterval(timer)
      },[sec]);
    return(
        <>  
            <p>Time since shopping : {min<10? "0"+min:min}:{sec<10? "0"+sec:sec}</p>
            <div className="containsection">
                {
                ProductList.map((i)=>(
                    <ProductCard key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={HandleEvent}/>
                ))
                }
            </div>
        </>
    );
}
export default Contains;

const ProductCard =({name, id, price, imgSrc, handler})=>{
    return(
        <div className="ProductCard">
            <img src={imgSrc} alt="" />
            <p>{name}</p>
            <h4>₹{price}</h4>
            <button onClick={()=>handler({name,id,price,quantity:1,imgSrc})}>Add to Cart</button>  {/*()= is added so it will run when button is clicked*/}
        </div>
    )
}