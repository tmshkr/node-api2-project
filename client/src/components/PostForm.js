import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label } from "reactstrap";
import axios from "../utils/axios";

function PostForm(props) {
  const { getPosts } = props;
  const { handleSubmit, register, errors, setError, setValue } = useForm();

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      axios.get(`/api/posts/${id}`).then(({ data }) => {
        console.log(data);
        const values = [];
        for (let field in data[0]) {
          values.push({ [field]: data[0][field] });
        }
        setValue(values);
      });
    }
    // eslint-disable-next-line
  }, [id]);

  const addPost = (values) => {
    axios
      .post("/api/posts", values)
      .then(() => {
        getPosts().then(() => {
          history.push("/posts");
        });
      })
      .catch((err) => console.dir(err));
  };

  const editPost = (values, id) => {
    axios
      .put(`/api/posts/${id}`, values)
      .then(() => {
        getPosts().then(() => {
          history.push("/posts");
        });
      })
      .catch((err) => console.dir(err));
  };

  const onSubmit = (values) => {
    id ? editPost(values, id) : addPost(values);
  };

  return (
    <form className="form post-form" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="title">Title</Label>
        <input
          className="form-control"
          name="title"
          type="text"
          id="title"
          ref={register({
            required: "Required",
          })}
        />
        <span className="error">{errors.title && errors.title.message}</span>
      </FormGroup>
      <FormGroup>
        <Label for="contents">Body</Label>
        <textarea
          className="form-control"
          name="contents"
          id="contents"
          ref={register({
            required: "Required",
          })}
        />
        <span className="error">
          {errors.contents && errors.contents.message}
        </span>
      </FormGroup>
      <Button type="submit" color="primary" size="lg" block>
        {id ? "Edit Post" : "Create Post"}
      </Button>
      <span className="error">
        {errors.response && errors.response.message}
      </span>
    </form>
  );
}

export default PostForm;
