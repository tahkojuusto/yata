import React from 'react';
import { connect } from 'react-redux';
import { toggleCompleted } from '../actions';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
}));

const TaskList = ({ tasks, toggleCompleted: _toggleCompleted }) => {
  const classes = useStyles();

  const toggleCompleted = (e, id, completed) => {
    e.preventDefault();
    const task = tasks.find(task => task.id === id);
    if (!task || task.completed === completed) {
      return;
    }

    _toggleCompleted(id, completed);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Completed</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      status: PropTypes.oneOf(['AWAITING_SYNC', 'SYNC_OK']).isRequired,
    }).isRequired
  ).isRequired,
};

const mapDispatchToProps = {
  toggleCompleted,
};

export default connect(
  null,
  mapDispatchToProps
)(TaskList);
