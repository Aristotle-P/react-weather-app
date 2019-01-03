import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeather } from '../actions/weatherActions';

class Weather extends Component {
  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    const { weather } = this.props;

    return (
      <div>
        <h1>Your weather</h1>
        <ul>
          <li>{weather[0].city}</li>
          <li>{weather[0].temp}</li>
        </ul>
      </div>
    );
  }
}

Weather.propTypes = {
  weather: PropTypes.array.isRequired,
  getWeather: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  weather: state.weather.currentWeather
});

export default connect(
  mapStateToProps,
  { getWeather }
)(Weather);
