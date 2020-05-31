import React, {useState, useEffect} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Grid, Button, Card, Icon, Image } from 'semantic-ui-react';
import {getUser} from "./utils/apiWrapper";

export default function ProfileEvents() {
    useEffect(()=> {
        async function getCurrentUser() {
            let name =  await getUser("5ed2d2d2b81278eceffe1fe2").data.name
            console.log(name)
        }
        getCurrentUser();
    },[]);
    // console.log(name)
    return(
        <div >
            Profile
            {/* {name} */}
        </div>
    );
}