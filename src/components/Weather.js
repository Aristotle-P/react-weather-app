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
        <div className="wrapper">
          <h3 className="tempature">{weather[0].temp}</h3>
          <ul className="add-weather">
            <li>Current Contions</li>
            <li>{weather[0].weather}</li>
            <li>Humidity</li>
            <li>{weather[0].humidity}</li>
            <li>Pressure</li>
            <li>{weather[0].pressure}</li>
          </ul>
        </div>
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
