import React from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import "./Post.scss";

function Post(props) {
  const { title, contents } = props.post;
  return (
    <Card className="post">
      <CardBody>
        <h3 className="card-title">{title}</h3>
        <CardText>{contents}</CardText>
        <Button color="info">Edit</Button>
        <Button color="danger">Delete</Button>
      </CardBody>
    </Card>
  );
}

export default Post;
