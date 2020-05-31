import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { getUser, getFarmPost } from "../utils/apiWrapper";

export default function VolunteerCard(props) {
  const [event, setEvent] = useState([]);
  const [dropOffLocs, setDropOffLocs] = useState([]);

  const getDropOffLocs = async volunteers => {
    let dropOffLocArr = [];
    for (let userId of volunteers) {
      const userResp = await getUser(userId);
      if (userResp.status === 200) {
        const { destination } = userResp.data.data;
        dropOffLocArr.push(destination);
      } else {
        console.log(userResp.message);
      }
    }
    setDropOffLocs(dropOffLocArr);
  };

  useEffect(() => {
    const getEvents = async () => {
      const { eventId } = props;
      const eventResp = await getFarmPost(eventId);
      if (eventResp.status === 200) {
        const eventObj = eventResp.data.data;
        setEvent(eventObj);
        getDropOffLocs(eventObj.volunteers);
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
            <b>Pick-up Address: </b> {event.address}
          </p>
          <p>
            <b>Pick-up Time: </b> {event.time}
          </p>
          <p>
            <b>Drop-off Locations:</b>
          </p>
          <ul>
            {dropOffLocs.map(loc => (
              <li>{loc}</li>
            ))}
          </ul>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
