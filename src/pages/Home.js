import React, { useState } from "react";
import { Table, Container, Row, Col, Button } from "react-bootstrap/";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function Home() {
  const [lessons] = useState([
    {
      id: 1,
      title: "Lesson 1"
    }
  ]);

  return (
    <Container>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map(({ id, title }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>description</td>
                  <td>
                    <Link
                      to={`/lesson-${id}`}
                      class="btn btn-primary"
                      role="button"
                    >
                      lesson {id}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
