"use client"


import {useState} from "react";

const Button = () =>{
    const [posts, setPosts] = useState([]);

    return (
        <button onClick={()=> {alert('Cliquee')}}>Clique ici</button>
    );
}

export default Button;