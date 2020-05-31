import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Button, Card, Icon, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Notiflix from "notiflix";
import MapContainer from "./MapContainer";
const place = "Gingrich Farms Illinois";

export default function Explore() {
  return (
    <div>
       <iframe
        className="map"
        src={`https://maps.google.com/maps?q=${place}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        style={{
          height: "400px",
          width: "60%",
          marginLeft: "20%",
          marginRight: "20%",
          marginTop: "2.5%",
          borderRadius: "1%"
        }}
      >
      {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrWk-gOi0LEVcfJMq_uqds2j-WCz78sP4&callback=initMap"
  type="text/javascript"></script> */}
        {/* <MapContainer style={{ float: "center" }} /> */}
      </iframe>
      <Grid>
        <Grid.Row justify="center" align="middle">
          <div justify="center" align = "middle" style={{fontFamily: "Avenir Next", fontSize: "2rem", width: "20%", marginLeft: "40%", marginRight: "40%", marginTop: "2%"}}>
            <b>Gingrech Farms</b>
          </div>
          <div justify="center" align = "middle" style={{fontFamily: "Avenir Next", fontSize: "1.75rem", width: "40%", marginLeft: "30%", marginRight: "30%", marginTop: "2%"}}>
            <b>Address: </b> 1442 IL-133, Lovington, IL 61937
          </div>
          <div justify="center" align = "middle" style={{fontFamily: "Avenir Next", fontSize: "1.75rem", width: "40%", marginLeft: "30%", marginRight: "30%", marginTop: "2%"}}>
            <b> Pick Up Time: </b>2:00 - 4:35
          </div>
          <div justify="center" align = "middle" style={{fontFamily: "Avenir Next", fontSize: "1.75rem", width: "40%", marginLeft: "30%", marginRight: "30%", marginTop: "2%"}}>
            There are <b> 2 </b> eaters signed up
          </div>
          <div justify="center" align = "middle" style={{fontFamily: "Avenir Next", fontSize: "1.75rem", width: "40%", marginLeft: "30%", marginRight: "30%", marginTop: "2%"}}>
            There are <b> 0 </b> volunteers signed up
          </div>
          
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}> </Grid.Column>
          <Grid.Column width={4}>
          <Button
          animated
          style={{ width: "100%" }}
          onClick={() => Notiflix.Notify.Success("Signed up to Volunteer!")}
        >
          <Button.Content visible>Volunteer!</Button.Content>
          <Button.Content hidden>
            <Icon name="right arrow" />
          </Button.Content>
        </Button>
          </Grid.Column>
          <Grid.Column width={4}>
          <Button
          animated
          style={{ width: "100%" }}
          onClick={() => Notiflix.Notify.Success("Signed up to get Delivery!")}
        >
          <Button.Content visible>I want food!</Button.Content>
          <Button.Content hidden>
            <Icon name="right arrow" />
          </Button.Content>
        </Button>
            </Grid.Column>
          <Grid.Column width={4}> </Grid.Column>
        
        </Grid.Row>
      </Grid>
    </div>
  );
}
