import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { addTask } from '../actions';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export const AddTask = props => {
  const classes = useStyles();
  let input;

  return (
    <div>
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          props.addTask(input.value);
          input.value = '';
        }}
      >
        <Input
          className={classes.textField}
          placeholder="Add todo item here"
          inputRef={node => (input = node)}
        />
        <Button variant="outlined" className={classes.button} type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task)),
});

export default connect(
  null,
  mapDispatchToProps
)(AddTask);
