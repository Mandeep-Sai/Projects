import React from "react";
import { Card } from "react-bootstrap";

export default function LaunchItem({
  item: { flight_number, mission_name, launch_date_number },
}) {
  return (
    <Card style={{ color: "black" }}>
      <Card.Body>
        <Card.Text>Mission name : {mission_name}</Card.Text>
      </Card.Body>
    </Card>
  );
}
