import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

class Todos extends Component {
	render() {
		return this.props.todos.map((todo) => (
			<TodoListItem 
				key={todo.id}
				todo={todo}
				toggleComplete={this.props.toggleComplete}
				deleteTodo={this.props.deleteTodo}
			/>
		));
	}
}

// PropTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
}

export default Todos;