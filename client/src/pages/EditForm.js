import Button from "@mui/material/Button";
import Form from "@mui/material/FormControl";

const EditForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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

      <Button variant="success" type="submit" block>
        Edit Food Item
      </Button>
    </Form>
  );
};

export default EditForm;
