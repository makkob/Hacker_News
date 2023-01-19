import React from "react";
import { Button } from "react-bootstrap";

export default function Coments({ props }) {
  return (
    <div>
      {props && (
        <div key={props.id}>
          <p>{props.by}</p>
          <p>{props.text}</p>
          <i>{new Date(props.time * 1000).toString()}</i>;
          {props.kids && <Button variant="secondary"> Open coment </Button>}
        </div>
      )}
    </div>
  );
}
