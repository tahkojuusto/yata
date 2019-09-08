/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { toggleCompleted, removeTask } from '../actions';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

const TaskList = ({
  tasks,
  pending,
  toggleCompleted: _toggleCompleted,
  removeTask: _removeTask,
}) => {
  const classes = useStyles();

  const toggleCompleted = (e, id, completed) => {
    e.preventDefault();
    const task = tasks.find(task => task.id === id);
    if (!task || task.completed === completed) {
      return;
    }

    _toggleCompleted(id, completed);
  };

  const removeTask = (e, id) => {
    e.preventDefault();
    _removeTask(id);
  };

  const table = (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Completed</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(task => (
            <TableRow key={task.id}>
              <TableCell key={task.id}>{task.content}</TableCell>
              <TableCell>
                <Checkbox
                  color="primary"
                  checked={task.completed}
                  onChange={e => toggleCompleted(e, task.id, !task.completed)}
                  value={task.completed}
                />
              </TableCell>
              <TableCell>
                <a href="#" onClick={e => removeTask(e, task.id)}>
                  Remove
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );

  const spinner = (
    <div>
      <CircularProgress className={classes.progress} />
    </div>
  );

  if (pending) {
    return spinner;
  } else {
    return table;
  }
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = state => {
  return {
    tasks: state.taskState.tasks,
    pending: state.taskState.pending,
  };
};

const mapDispatchToProps = {
  toggleCompleted,
  removeTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
