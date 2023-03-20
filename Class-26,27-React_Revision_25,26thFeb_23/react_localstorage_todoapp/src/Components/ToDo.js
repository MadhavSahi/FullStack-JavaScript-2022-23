import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
// ListGroupItem
const ToDo = ({ todos, markcomplete }) => {
  return (
    <>
      <ListGroup className="mt-5 mb-2 items">
        {todos?.map((todo) => (
          <ListGroupItem key={todo.id}>
            {todo.input}
            <span
              className="float-end"
              onClick={() => {
                markcomplete(todo.id);
              }}
            >
              <FaCheckDouble />
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default ToDo;
