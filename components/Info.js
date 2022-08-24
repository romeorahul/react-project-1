   import React from "react"
   import ReactDOM from "react-dom"
   
   export default function Info() {
       return (
           <div className="top">
           <img src ="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0" height="50px" width="80px" />
           <h2 className="top-items">RAHUL SINGH</h2>
           <p className="top-items">FULL STACK DEVELOPER</p>
           <div className="btn">
           <button className="btn-inner">About</button>
           <button className="btn-inner">Contact</button>
           </div>
           </div>
       )
   }