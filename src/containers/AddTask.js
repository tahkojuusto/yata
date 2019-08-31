import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

const AddTask = props => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          props.addTask(input.value);
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Request help</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addTask,
};

export default connect(
  null,
  mapDispatchToProps
)(AddTask);
