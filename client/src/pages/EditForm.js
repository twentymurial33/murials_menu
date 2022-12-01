import Button from "@mui/material/Button";
import Form from "@mui/material/FormControl";
import { useState } from "react";

const EditForm = () => {
  const [editing, setEditing] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function isEditing(id) {
    console.log("edit mode activated");
    setEditing(id);
  }

  //   const editItem = (id) => {
  //     const newEditItem = data.find(() => {
  //       return data.id === id;
  //     });
  //     console.log(newEditItem);
  //   };

  return (
    <Form onSubmit={handleSubmit}>
      <Form>
        <Form
          as="textarea"
          placeholder="Enter Food Item"
          rows={3}
          name="address"
        />
      </Form>

      <Button variant="success" type="submit" block onClick={isEditing}>
        Edit Food Item
      </Button>
    </Form>
  );
};

export default EditForm;
