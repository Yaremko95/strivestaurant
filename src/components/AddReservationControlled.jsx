import React from "react";

import { LocalForm, Control } from "react-redux-form";
import { Button, Container, Row, FormGroup, Label, Input } from "reactstrap";

class AddReservationControlled extends React.Component {
  handleChange(values) {
    //console.log("CHANGE", values);
  }
  handleUpdate(form) {
    //console.log("UPDATE", form);
  }
  handleSubmit(values) {
    console.log("SUBMIT", values);
  }
  render() {
    return (
      <Container>
        <h3>Reserve your table now!</h3>

        <LocalForm
          model="reservation"
          onUpdate={form => this.handleUpdate(form)}
          onChange={values => this.handleChange(values)}
          onSubmit={values => this.handleSubmit(values)}
        >
          <Row>
            <FormGroup className="col-md-6">
              <Label for="name">Name</Label>
              <Control.text id="name" model=".name" className="form-control" placeholder="Your name" />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="phone">Phone</Label>
              <Control.text id="phone" model=".phone" className="form-control" placeholder="Your phone" />
            </FormGroup>
          </Row>

          <Row>
            <Row className="col-md-6">
              <FormGroup className="col-md-6">
                <Label for="numberOfPersons">Number of persons</Label>
                <Control.select type="select" className="form-control" id="numberOfPersons" model=".numberOfPersons">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </Control.select>
              </FormGroup>

              <FormGroup check style={{ display: "flex", alignSelf: "center" }}>
                <Label check>
                  <Control.checkbox id="smoking" model=".smoking" /> Smoking?
                </Label>
              </FormGroup>
            </Row>
            <FormGroup className="col-md-6">
              <Label for="dateTime">Date &amp; Time</Label>
              <Control.text
                type="datetime-local"
                id="dateTime"
                className="form-control"
                placeholder="Date &amp; Time"
                model=".dateTime"
              />
            </FormGroup>
          </Row>
          <FormGroup>
            <Label for="specialRequests">Special Requests</Label>
            <Control.textarea className="form-control" id="specialRequests" model=".specialRequests" />
          </FormGroup>

          <Control.button model="reservation" disabled={{ valid: false }}>
            Submit!
          </Control.button>
        </LocalForm>
      </Container>
    );
  }
}

export default AddReservationControlled;
