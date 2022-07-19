import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const FormComponents = ({
  nama,
  deskripsi,
  harga,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <div>
      <Row>
        <Col>
          <h1>{id ? "Edit Data" : "Tambah Data"}</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="deskripsi"
                value={deskripsi}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Harga Makanan</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                value={harga}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" className="mt-4 mb-4" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FormComponents;
