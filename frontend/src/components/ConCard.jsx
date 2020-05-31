import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { getUser, getFarmPost } from "../utils/apiWrapper";

export default function VolunteerCard(props) {
  const [event, setEvent] = useState([]);
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerEmail, setVolunteerEmail] = useState("");

  const getVolunteerInfo = async volunteers => {
    const userResp = await getUser(volunteers[0]);
    if (userResp.status === 200) {
      const { name, email } = userResp.data.data;
      setVolunteerName(name);
      setVolunteerEmail(email);
    } else {
      console.log(userResp.message);
    }
  };

  useEffect(() => {
    const getEvents = async () => {
      const { eventId } = props;
      const eventResp = await getFarmPost(eventId);
      if (eventResp.status === 200) {
        const eventObj = eventResp.data.data;
        setEvent(eventObj);
        getVolunteerInfo(eventObj.volunteers);
      } else {
        console.log(eventResp.message);
      }
    };
    getEvents();
  }, [props]);

  return (
    <Card style={{ marginTop: "2.5%", width: "100%" }}>
      <Card.Content>
        <Card.Header>{event.name}</Card.Header>
        <Card.Meta>{event.email}</Card.Meta>
        <Card.Description>
          <p>
            <b>Drop-off Window: </b> {event.time}
          </p>
          <p>
            <b>Volunteer Name: </b> {volunteerName}
          </p>
          <p>
            <b>Volunteer Contact:</b> {volunteerEmail}
          </p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
