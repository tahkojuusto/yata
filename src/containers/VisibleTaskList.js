import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import { VisibilityFilters } from '../actions';

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return tasks;
    case VisibilityFilters.SHOW_COMPLETED:
      return tasks.filter(task => task.completed);
    case VisibilityFilters.SHOW_UNCOMPLETED:
      return tasks.filter(task => !task.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  tasks: getVisibleTasks(state.tasks, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
