import React, { Component } from "react";

class EventListing extends Component {
  state = {
    events: [
      {
        id: 1,
        title: "Cricket Match GT vs MI",
        date: "2023-06-05",
        location: "Toronto",
        attendees: 6000,
      },
      {
        id: 2,
        title: "Football Match PSG vs MAN",
        date: "2023-08-01",
        location: "Montreal",
        attendees: 2500,
      },
      {
        id: 3,
        title: "Halifax Tech Summit",
        date: "2023-06-15",
        location: "Halifax",
        attendees: 100,
      },
      {
        id: 4,
        title: "Cricket Match GT vs CSK",
        date: "2023-06-18",
        location: "Vancouver",
        attendees: 5000,
      },
      {
        id: 5,
        title: "Halifax Marathon 2023",
        date: "2023-07-10",
        location: "Halifax",
        attendees: 1000,
      },
    ],
    defaultEvents: [
      {
        id: 1,
        title: "Cricket Match GT vs MI",
        date: "2023-06-05",
        location: "Toronto",
        attendees: 6000,
      },
      {
        id: 2,
        title: "Football Match PSG vs MAN",
        date: "2023-08-01",
        location: "Montreal",
        attendees: 2500,
      },
      {
        id: 3,
        title: "Halifax Tech Summit",
        date: "2023-06-15",
        location: "Halifax",
        attendees: 100,
      },
      {
        id: 4,
        title: "Cricket Match GT vs CSK",
        date: "2023-06-18",
        location: "Vancouver",
        attendees: 5000,
      },
      {
        id: 5,
        title: "Halifax Marathon 2023",
        date: "2023-07-10",
        location: "Halifax",
        attendees: 1000,
      },
    ],
  };

  handleSearch = (val) => {
    const events = this.state.defaultEvents.filter((e) =>
      e.title.toLowerCase().includes(val.toLowerCase())
    );
    this.setState({ events });
  };

  render() {
    return (
      <div className="container mt-4">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-brand">Event Management</button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <button class="nav-item nav-link active">
                Home <span class="sr-only"></span>
              </button>
              <button class="nav-item nav-link">Notifications</button>
              <button class="nav-item nav-link">Help</button>
              <button class="nav-item nav-link ">Profile</button>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder="Search..."
                  onChange={(e) => this.handleSearch(e.target.value)}
                />
                <div className="input-group-append m-2">
                  <select className="custom-select">
                    <option value="relevance">Relevance</option>
                    <option value="date">Date</option>
                    <option value="distance">Distance</option>
                    <option value="attendees">Attendees</option>
                  </select>
                  <button
                    className="btn btn-outline-secondary m-2"
                    type="button"
                  >
                    ^
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="form-row m-2 col-md-8">
              <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "25%" }}>
                  <select className="custom-select">
                    <option value="">Event Type</option>
                  </select>
                </div>
                <div style={{ width: "25%" }}>
                  <select className="custom-select">
                    <option value="">Location</option>
                  </select>
                </div>
                <div style={{ width: "25%" }}>
                  <select className="custom-select">
                    <option value="">Date Range</option>
                  </select>
                </div>
                <div style={{ width: "25%" }}>
                  <button className="btn btn-primary">Filter</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            {this.state.events.map((event, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">Date: {event.date}</p>
                    <p className="card-text">Location: {event.location}</p>
                    <p className="card-text">Attendees: {event.attendees}</p>
                    <button className="btn btn-outline-primary">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default EventListing;
