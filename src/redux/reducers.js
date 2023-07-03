import {createReducer} from "@reduxjs/toolkit"

export const cartReducer = createReducer({
    carts:[],
    prices:0,
    
},{
    addToCart: (state,action)=>{
        const item = action.payload;
        const isitemExist = state.carts.find((i)=> i.id===item.id);
        if(isitemExist){
            state.carts.forEach((i) => {
                if(i.id === item.id){
                    i.quantity+=1;
                    state.prices+=Number(item.price)*Number(item.quantity);
                }
            });
        }
        else{
            state.carts.push(item);
            state.prices+=Number(item.price);
        }
    },
    clear: (state)=>{
        state.carts.length=0;
        state.prices=0;
    },
    delete: (state,action)=>{
        const item = action.payload;
        state.carts = state.carts.filter((i)=>i.id!==item.id);           
        state.prices-= Number(item.price)*Number(item.qty);
    }
    
});