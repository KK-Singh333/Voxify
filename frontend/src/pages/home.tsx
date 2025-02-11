import NavBar from "./components/navbar";
import BlogPage from "./components/BlogPage";
import { useState } from "react";
import './home.css'
import Cookies from 'js-cookie';
export default function Home() {
    console.log("Token from Cookies:", document.cookie);
    console.log(Cookies.get('token'));
    return (<div className="outer">
        <NavBar></NavBar>
        <BlogPage></BlogPage>
    </div>)
 }
