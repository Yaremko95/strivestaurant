import React from "react";

import { LocalForm, Control, Errors } from "react-redux-form";
import { Container, Row, FormGroup, Label, Spinner, Alert } from "reactstrap";

const requiredValidator = val => val && val.length;
const emailValidator = val =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    val
  );
const phoneValidator = val => /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(val);
const maxLengthValidator = len => val => !val || val.length <= len;
const minLengthValidator = len => val => !val || val.length >= len;

const minMaxVal = (min, max) => val => !val || (val.length >= min && val.length <= max);

class AddReservationControlled extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      isLoading: false,
      errMess: null
    };
  }

  //   handleChange(values) {
  //     //console.log("CHANGE", values);
  //   }
  //   handleUpdate(form) {
  //     //console.log("UPDATE", form);
  //   }
  handleSubmit = async values => {
    console.log("SUBMIT", values);

    this.setState({
      isLoading: true
    });

    try {
      var response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/reservation", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        //reset the form
        this.setState({
          errMess: null,
          isLoading: false
        });
      } else {
        var error = await response.json();
        this.setState({
          errMess: error.message,
          isLoading: false
        });
      }
    } catch (ex) {
      console.log(ex);
      this.setState({
        errMess: ex.message,
        isLoading: false
      });
    }
  };
  render() {
    return (
      <Container>
        <h3>Reserve your table now!</h3>

        <LocalForm
          initialState={{ numberOfPersons: 1 }}
          //   onUpdate={form => this.handleUpdate(form)}
          //   onChange={values => this.handleChange(values)}
          onSubmit={values => this.handleSubmit(values)}
        >
          <Row>
            <FormGroup className="col-md-6">
              <Label for="name">Name</Label>

              <Control.text
                id="name"
                model=".name"
                className="form-control"
                placeholder="Your name"
                validators={{
                  requiredValidator,
                  minLengthValidator: minLengthValidator(2),
                  maxLengthValidator: maxLengthValidator(20)
                }}
              />

              <Errors
                model=".name"
                show="touched"
                className="form-error-message"
                messages={{
                  requiredValidator: "The name field is required",
                  minLengthValidator: "The name field should have at least 2 chars",
                  maxLengthValidator: "The name field should have max 20 chars"
                }}
              />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="phone">Phone</Label>
              <Control.text
                id="phone"
                model=".phone"
                className="form-control"
                placeholder="Your phone"
                validators={{
                  phoneValidator,
                  minLengthValidator: minLengthValidator(10),
                  maxLengthValidator: maxLengthValidator(15)
                }}
              />

              <Errors
                model=".phone"
                show="touched"
                className="form-error-message"
                messages={{
                  phoneValidator: "The phone number should be a proper phone number ",
                  minLengthValidator: "The phone field should have at least 10 chars",
                  maxLengthValidator: "The phone field should have max 15 chars"
                }}
              />
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
                validators={{
                  requiredValidator
                }}
              />
              <Errors
                model=".dateTime"
                show="touched"
                className="form-error-message"
                messages={{
                  requiredValidator: "The date time is required"
                }}
              />
            </FormGroup>
          </Row>
          <FormGroup>
            <Label for="specialRequests">Special Requests</Label>
            <Control.textarea className="form-control" id="specialRequests" model=".specialRequests" />
          </FormGroup>

          <Control.button className="btn btn-secondary" model="local" disabled={{ valid: false }}>
            Submit!
          </Control.button>
        </LocalForm>
        {this.state.isLoading && (
          <div className="container d-flex justify-content-center my-5">
            Reserving your table, please wait
            <div>
              <Spinner color="success" />
            </div>
          </div>
        )}

        {this.state.errMess && this.state.errMess.length > 0 && (
          <Alert color="danger">We encountered a problem while processing your request: {this.state.errMess}</Alert>
        )}
      </Container>
    );
  }
}

export default AddReservationControlled;
