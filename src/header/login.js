import React from "react";
function Login(){
    return(
        <>
        <div style={{height:'600px',display:'flex',alignItems:'center',flexDirection:'column',gap:'40px',marginLeft:'150px',marginRight:'150px',marginTop:'40px'}}>
            <div style={{
                
                display:'flex',
                flexDirection:'column',
                gap:'10px',
                justifyContent:'center',
                alignItems:'center'
                }}>
            <div style={{display:'flex',height:'20px',alignItems:'center',justifyContent:'center'}}>
                    <p style={{marginRight:'10px'}}>username</p><input type="text" placeholder="username"></input>
                </div>
                <div style={{display:'flex',height:'20px',alignItems:'center',justifyContent:'center'}}>
                    <p style={{marginRight:'10px'}}>password</p><input type="password" placeholder="password"></input>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <button style={{width:'100px'}}>Register</button>
                </div>
            </div>
            <div style={{
                
                display:'flex',
                flexDirection:'column',
                gap:'10px',
                justifyContent:'center',
                alignItems:'center'
                }}>
                <div style={{display:'flex',height:'20px',alignItems:'center',justifyContent:'center'}}>
                    <p style={{marginRight:'10px'}}>username</p><input type="text" placeholder="username"></input>
                </div>
                <div style={{display:'flex',height:'20px',alignItems:'center',justifyContent:'center'}}>
                    <p style={{marginRight:'10px'}}>password</p><input type="password" placeholder="password"></input>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <button style={{width:'50px'}}>Login</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Login;