import React from "react";
import { Jumbotron, Table, Container, Row, Col, Badge } from "react-bootstrap/";
import { Link } from "react-router-dom";

function Home({ lessons }) {
  return (
    <>
      <Jumbotron className="text-center">
        <h1>Welcome to my React example page!</h1>
        <p className="lead">
          In each lesson I will show you something cool that can be done with{" "}
          <strong>pure javascript</strong> and a corresponding example how to do
          the same using <strong>react</strong>!
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Tags</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {lessons.map(({ id, nr, title, description, tags }) => (
                  <tr key={id}>
                    <td>{nr}</td>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>
                      {tags.map((tag, i) => (
                        <Badge key={i} variant="info" className="mr-1">
                          {tag}
                        </Badge>
                      ))}
                    </td>
                    <td>
                      <Link
                        to={`/lesson-${nr}`}
                        className="btn btn-primary"
                        role="button"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        lesson {nr}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
