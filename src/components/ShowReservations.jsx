import React from "react";
import { Spinner, ListGroup, ListGroupItem, Alert } from "reactstrap";
import Moment from "react-moment";

class ShowReservations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reservations: [],
      isLoading: true,
      errMess: undefined
    };
  }

  render() {
    return (
      <>
        {this.state.isLoading && (
          <div className="container d-flex justify-content-center my-5">
            Fetching reservations...
            <div>
              <Spinner color="success" />
            </div>
          </div>
        )}
        {!this.state.isLoading && this.state.errMess === undefined && (
          <div className="container my-5">
            {this.state.reservations.length > 0 &&
              this.state.reservations.map((reservation, index) => (
                <ListGroup key={index}>
                  <ListGroupItem>
                    from: {reservation.name} for {reservation.numberOfPersons} at{" "}
                    <Moment format="YYY/MM/DD hh:mm">{reservation.dateTime}</Moment>
                  </ListGroupItem>
                </ListGroup>
              ))}
            {this.state.reservations.length === 0 && <div>No reservations for your restaurant</div>}
          </div>
        )}
        {this.state.errMess && <Alert color="warning">Cannot load the reservations: {this.state.errMess}</Alert>}
      </>
    );
  }

  componentDidMount = async () => {
    try {
      var response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/reservation");
      var json = await response.json();
      this.setState({
        reservations: json,
        isLoading: false
      });
    } catch (ex) {
      this.setState({
        isLoading: false,
        errMess: ex.message
      });
    }
  };
}

export default ShowReservations;
