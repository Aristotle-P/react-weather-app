import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLocation } from '../actions/locationActions';
import { getWeather } from '../actions/weatherActions';

class Location extends Component {
  // componentDidMount() {
  //   this.props.getLocation();
  // }

  state = {
    city: ''
  };

  onSubmit = e => {
    e.preventDefault();

    const { city } = this.state;

    const newCity = {
      city
    };

    this.props.getLocation(newCity);
    this.props.getWeather(newCity.city);

    this.setState({
      city: ''
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { location } = this.props;
    const { city } = this.state;

    return (
      <div>
        <form className="search-container" onSubmit={this.onSubmit}>
          <input
            type="search"
            name="city"
            className="search"
            value={city}
            onChange={this.onChange}
          />

          <button type="submit" className="search-button">
            <span className="fas fa-search-location" />
          </button>
        </form>
        <div className="city-container">
          <p className="city">{location.city}</p>
        </div>
      </div>
    );
  }
}

Location.propTypes = {
  location: PropTypes.object.isRequired,
  getLocation: PropTypes.func.isRequired,
  getWeather: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  location: state.location.location
});

export default connect(
  mapStateToProps,
  { getLocation, getWeather }
)(Location);
