import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ description }) => <li>{description}</li>;

Task.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Task;
