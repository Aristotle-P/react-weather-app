import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeather } from '../actions/weatherActions';

class Weather extends Component {
  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    const { currWeather, conditions, wind } = this.props;

    return (
      <div>
        <div className="wrapper">
          <h3 className="tempature">{Math.trunc(currWeather.temp)}</h3>
          <ul className="add-weather">
            <li>Current Contions</li>
            <li>{(conditions[0] || {}).main}</li>
            <li>{(conditions[0] || {}).pressure}</li>
            <li>Humidity</li>
            <li>{currWeather.humidity}%</li>
            <li>Wind Speed</li>
            <li>{wind.speed} MPH</li>
          </ul>
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  currWeather: PropTypes.object.isRequired,
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
