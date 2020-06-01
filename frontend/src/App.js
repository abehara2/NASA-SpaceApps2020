import React, { useState, useEffect } from "react";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Grid, Button, Card, Icon, Image } from 'semantic-ui-react';
import ProfileEvents from "./ProfileEvents.js";
import Explore from "./Explore.js";
import DataVis from "./DataVis.js";
import Application from "./mapb.js";


export default function App() {
  const [explore, setExplore] = useState(2);
  const project = () => {
          switch(explore) {
    
    //         case 0:   return <DataVis/>;
            case 0:   return <DataVis/>;
            case 1:   return <ProfileEvents/>;
            case 2: return <Explore/>;
          }
        }
  return(
    <>
      <div style={{fontSize: "2rem", paddingTop:'25px', fontFamily: "Avenir Next", backgroundColor: "#FF5A60"}}>
        <Grid style={{marginRight: "2.%", marginLeft: "2.5%"}}>
          <Grid.Row>
            <Grid.Column width={10}>
            <div style={{marginTop: "10px", color: "white"}}>
                <b>Food4Thought</b>
              </div>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button animated style={{width: "100%"}} onClick={() => setExplore(0)}>
                <Button.Content visible>Data Vis</Button.Content>
                <Button.Content hidden>
                  <Icon name='chart bar outline'/>
                </Button.Content>
              </Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button animated style={{width: "100%"}} onClick={() => setExplore(1)}>
                <Button.Content visible>Your Events</Button.Content>
                <Button.Content hidden>
                  <Icon name='calendar'/>
                </Button.Content>
              </Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button animated style={{width: "100%"}} onClick={() => setExplore(2)}>
                  <Button.Content visible>Explore</Button.Content>
                    <Button.Content hidden>
                      <Icon name='globe' />
                    </Button.Content>
              </Button>
            </Grid.Column>
        </Grid.Row>
        </Grid>
        <hr style={{marginTop: '25px'}}/>
      </div>
      <div>{ project() }</div>
    </>
    
  );
  
  }


// comment