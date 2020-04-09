import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardText, CardBody, Button } from "reactstrap";
import axios from "../utils/axios";
import "./Post.scss";

function Post(props) {
  const { id, title, contents } = props.post;
  const history = useHistory();
  const deletePost = (id) => {
    axios.delete(`/api/posts/${id}`).then(() => props.getPosts());
  };
  return (
    <Card className="post">
      <CardBody>
        <h3 className="card-title">{title}</h3>
        <CardText>{contents}</CardText>
        <Button color="info" onClick={() => history.push(`/posts/${id}/edit`)}>
          Edit
        </Button>
        <Button color="danger" onClick={() => deletePost(id)}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
}

export default Post;
