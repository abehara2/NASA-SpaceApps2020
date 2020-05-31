import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { getUser, getFarmPost } from "../utils/apiWrapper";

export default function ConCard(props) {
  const [volunteer, setVolunteer] = useState("");

  const getVolunteerInfo = async volunteers => {
    const userResp = await getUser(volunteers[0]);
    if (userResp.status === 200) {
      setVolunteer(userResp.data.data);
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
        <Card.Header>Volunteer: {volunteer.name}</Card.Header>
        <Card.Meta>{volunteer.email}</Card.Meta>
        <Card.Description>
          <p>
            <b>Drop-off Window: </b> {volunteer.time}
          </p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
