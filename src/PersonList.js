import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap";
import Person from "./Person.css";
export default class PersonList extends Component {
  constructor(props) {
    super(props);
    //Define state default values
    this.state = {
      persons: [],
    };
  }



  //Component Lifecycle Callback
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      const persons = res.data.results;
      this.setState({ persons });
      console.log(persons);
      console.log(this.state.persons);
    });
  }

  render() {
    return (
      <div>
        {this.state.persons.map((p) => (
          <Container class="container">
            <Row>
              <h3>
                {p.name.title}
                {p.name.first}
                {p.name.last} - {p.login.uuid}
              </h3>
            </Row>
            <hr />
            <Row>
              <Col className="my-auto text-center">
                <Image src={p.picture.large} roundedCircle />
                <br class="br" />
                <button>Details</button>
              </Col>
              <Col xs={10}>
                <table>
                  <tr>
                    <td>User Name:</td>
                    <td>{p.login.username}</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>{p.gender}</td>
                  </tr>
                  <tr>
                    <td>Time Zone Description:</td>
                    <td>{p.location.timezone.description}</td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>
                      {p.location.street.number} {p.location.street.name},{" "}
                      {p.location.city}, {p.location.state},{" "}
                      {p.location.country} - {p.location.postcode}
                    </td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{p.email}</td>
                  </tr>
                  <tr>
                    <td>Birth Date and Age:</td>
                    <td>
                      {p.dob.date} ({p.dob.age})
                    </td>
                  </tr>
                  <tr>
                    <td>Register Date:</td>
                    <td>{p.registered.date}</td>
                  </tr>
                  <tr>
                    <td>Phone#:</td>
                    <td>{p.phone}</td>
                  </tr>
                  <tr>
                    <td>Cell#:</td>
                    <td>{p.cell}</td>
                  </tr>
                </table>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    );
  }
}
