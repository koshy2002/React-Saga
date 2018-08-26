import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './../App.css';
import AddNewToDo from './AddNewToDo';
import TaskCard from './TaskCard';
import * as TaskActions from '../actions/TaskActions';
import { bindActionCreators } from 'redux';

class Main extends Component {

    

    render() {

        let taskCard;
        if (this.props.tasks.length > 0) {
            taskCard = (
                this.props.tasks.map(taskList => {
                    return (<TaskCard taskList={taskList} key={taskList.id} index={taskList.id}> </TaskCard>);

                })
            )
        }
        return (
            <div className="App">
                <AddNewToDo />
                <div>
                    {taskCard}
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.object,
    tasks: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        tasks: state.tasks
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(Object.assign({}, TaskActions), dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
