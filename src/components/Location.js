import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLocation } from '../actions/locationActions';

class Location extends Component {
  componentDidMount() {
    this.props.getLocation();
  }

  render() {
    const { location } = this.props;

    return (
      <div>
        <ul>
          <li>{location[0].city}</li>
          <li>{location[0].state}</li>
        </ul>
      </div>
    );
  }
}

Location.propTypes = {
  location: PropTypes.array.isRequired,
  getLocation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  location: state.location.currentLocation
});

export default connect(
  mapStateToProps,
  { getLocation }
)(Location);
