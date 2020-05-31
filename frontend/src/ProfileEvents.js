import React, { useState, useEffect } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Button, Card, Icon, Image } from "semantic-ui-react";
import { getUser } from "./utils/apiWrapper";
import VolCard from "./components/VolCard";

export default function ProfileEvents() {
  const [volEvents, setVolEvents] = useState([]);
  const [conEvents, setConEvents] = useState([]);
  useEffect(() => {
    const getCurrentUser = async () => {
      const userResp = await getUser("5ed2d2d2b81278eceffe1fe2");
      if (userResp.status === 200) {
        const user = userResp.data.data;
        const { volunteerEvents, consumerEvents } = user;
        setVolEvents(volunteerEvents);
        setConEvents(consumerEvents);
      }
    };
    getCurrentUser();
  }, []);
  // console.log(name)
  return (
    <div>
      <Grid
        style={{ marginLeft: "7.5%", marginRight: "7.5%", marginTop: "2.5%" }}
      >
        <Grid.Column width={8}>
          <div align="middle" justify="center">
            <b
              style={{
                fontSize: "1.75rem",
                fontFamily: "Avenir Next",
                marginLeft: "5%",
                marginRight: "5%"
              }}
            >
              Volunteer Trips
            </b>
          </div>
          {volEvents.map(volEvent => (
            <VolCard eventId={volEvent} />
          ))}
        </Grid.Column>
        <Grid.Column width={8}>
          <div align="middle" justify="center">
            <b
              style={{
                fontSize: "1.75rem",
                fontFamily: "Avenir Next",
                marginLeft: "5%",
                marginRight: "5%"
              }}
            >
              Deliveries
            </b>
          </div>
          <div>
            <Card style={{ marginTop: "2.5%", width: "100%" }}>
              <Card.Content header="Gregory Farms" />
              <Card.Content>
                <Grid.Row>
                  <b> Drop-off Window: </b>
                </Grid.Row>
                <Grid.Row>
                  <b> Volunteer Name: </b>
                </Grid.Row>
                <Grid.Row>
                  <b>Volunteer Contact: </b>
                </Grid.Row>
              </Card.Content>
            </Card>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
