import React, { useState, useEffect } from "react";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Grid, Button, Card, Icon, Image } from 'semantic-ui-react';
import ProfileEvents from "./ProfileEvents.js";
import Explore from "./Explore.js";


export default function App() {
  const [explore, setExplore] = useState(true);
  return(
    <>
      <div style={{fontSize: "2rem", marginTop:'25px', fontFamily: "Avenir Next"}}>
        <Grid style={{marginRight: "5%", marginLeft: "5%"}}>
          <Grid.Row>
            <Grid.Column width={4}>
              
            </Grid.Column>
            <Grid.Column width={8}>
              <div align="middle" justify="center" style={{marginTop: "10px"}}>
                <b>Food4Thought</b>
              </div>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button animated style={{width: "100%"}} onClick={() => setExplore(false)}>
                <Button.Content visible>Your Events</Button.Content>
                <Button.Content hidden>
                  <Icon name='calendar' />
                </Button.Content>
              </Button>
            </Grid.Column>
            <Grid.Column width={2}>
              <Button animated style={{width: "100%"}} onClick={() => setExplore(true)}>
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
      <div>
        { explore ? (<Explore/>) : (<ProfileEvents/>)}
      </div>
    </>
    
  );
  
  }


