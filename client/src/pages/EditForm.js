import Button from "@mui/material/Button";
import Form from "@mui/material/FormControl";

const EditForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control type="text" placeholder="Name *" name="name" required />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address"
          rows={3}
          name="address"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Phone" name="phone" />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Edit Food Item
      </Button>
    </Form>
  );
};

export default EditForm;
