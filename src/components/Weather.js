import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeather } from '../actions/weatherActions';

class Weather extends Component {
  componentDidMount() {
    this.props.getWeather('New York');
  }

  render() {
    const { currWeather, conditions, wind } = this.props;

    return (
      <div>
        <div className="wrapper">
          <h3 className="tempature">{Math.trunc(currWeather.temp)}°</h3>
        </div>
        <div className="weather-wrapper">
          <div className="conditions weather-container">
            <p className="weather-heading">Conditions</p>
            <p>{(conditions[0] || {}).main}</p>
          </div>
          <div className="wind weather-container">
            <p className="weather-heading">Wind</p>
            <p>{wind.speed} MPH</p>
          </div>
          <div className="humidity weather-container">
            <p className="weather-heading">Humidity</p>
            <p>{currWeather.humidity}%</p>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

Weather.propTypes = {
  currWeather: PropTypes.object.isRequired,
  conditions: PropTypes.array.isRequired,
  wind: PropTypes.object.isRequired,
  getWeather: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currWeather: state.weather.currentWeather,
  conditions: state.weather.weatherConditions,
  wind: state.weather.wind
});

export default connect(
  mapStateToProps,
  { getWeather }
)(Weather);
