import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Grid, Button, Card, Icon, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Notiflix from "notiflix";

export default function Explore() {
    return(
        <div >
            Explore
            <Button animated style={{width: "10%"}} onClick={() => Notiflix.Notify.Success('Just Testing')}>
                <Button.Content visible>Your Events</Button.Content>
                <Button.Content hidden>
                  <Icon name='right arrow'/>
                </Button.Content>
              </Button>
        </div>
    );
}