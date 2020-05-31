import React, {useState, useEffect} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Grid, Button, Card, Icon, Image } from 'semantic-ui-react';
import {getUser} from "./utils/apiWrapper";

export default function ProfileEvents() {
    // let name = getUser("5ed2d2d2b81278eceffe1fe2")
    // console.log(name)
    return(
        <div >
            Profile
            {/* {name} */}
        </div>
    );
}