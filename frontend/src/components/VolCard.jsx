import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { getUser, getFarmPost } from "../utils/apiWrapper";

export default function VolunteerCard(props) {
  const [event, setEvent] = useState([]);
  const [dropOffLocs, setDropOffLocs] = useState([]);

  const getDropOffLocs = async consumers => {
    let dropOffLocArr = [];
    for (let userId of consumers) {
      console.log(userId);
      const userResp = await getUser(userId);
      if (userResp.status === 200) {
        const { address } = await userResp.data.data;
        await dropOffLocArr.push(address);
        // console.log(address);
      } else {
        // console.log(userResp.message);
      }
    }
    setDropOffLocs(dropOffLocArr);
  };

  useEffect(() => {
    const getEvents = async () => {
      const { eventId } = props;
      const eventResp = await getFarmPost(eventId);
      if (eventResp.status === 200) {
        const eventObj = await  eventResp.data.data;
        await setEvent(eventObj);
        await getDropOffLocs(eventObj.consumers);
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
