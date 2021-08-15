import React from "react";
import {
  Form,
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
  Table,
} from "react-bootstrap";

const Redux = () => {
  return (
    <div>
      <div className="form-wrapper">
        <Form>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Car Name
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Car Name"
              />
            </Col>
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Car Price
              </Form.Label>
              <InputGroup className="mb-2">
                
                <FormControl id="inlineFormInputGroup" placeholder="Car Price" />
              </InputGroup>
            </Col>
            <Col xs="auto"></Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Send
              </Button>
            </Col>
          </Row>
        </Form>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Car Name</th>
              <th>Car Price</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>Thornton</td>
              
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Redux;
