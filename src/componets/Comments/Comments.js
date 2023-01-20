import React from "react";
import { kidsList } from "../../actions/kidsListActions";
import { useDispatch } from "react-redux";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

export default function Coments({ props }) {
  const dispatch = useDispatch();

  const onUpdateClick = (id) => {
    dispatch(kidsList(id));
  };

  return (
    <>
      {props && (
        <div key={props.id} id={props.id}>
          <p>
            <strong>Author:</strong> <i>{props.by}</i>
          </p>
          <hr />
          <div>
            {props.deleted ? (
              <i>The comment has been deleted</i>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: props.text }} />
            )}
          </div>
          <strong>Published at: </strong>
          <i>{new Date(props.time * 1000).toString()}</i>;
          {props.kids && (
            <div>
              <hr />
              <Button
                onClick={() => {
                  onUpdateClick(props.kids);
                }}
                id={props.id}
              >
                View{" "}
                <strong>
                  <FontAwesomeIcon icon={faReply} /> {props.kids.length}{" "}
                  {props.kids.length === 1 ? "reply" : "replies"}
                </strong>
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
