import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Button, Card, Icon, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Notiflix from "notiflix";
import MapContainer from "./MapContainer";
const place = "Archbishop Mitty";

export default function Explore() {
  return (
    <div>
      <iframe
        className="map"
        src={`https://maps.google.com/maps?q=${place}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        style={{
          height: "500px",
          width: "80%",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "2.5%",
          borderRadius: "1%"
        }}
      >
        <MapContainer style={{ float: "center" }} />
      </iframe>
      <Button
        animated
        style={{ width: "10%" }}
        onClick={() => Notiflix.Notify.Success("Just Testing Notiflix")}
      >
        <Button.Content visible>Your Events</Button.Content>
        <Button.Content hidden>
          <Icon name="right arrow" />
        </Button.Content>
      </Button>
    </div>
  );
}
