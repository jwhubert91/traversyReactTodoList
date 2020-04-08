import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

class Todos extends Component {
	render() {
		return this.props.todos.map((todo) => (
			<TodoListItem key={todo.id} todo={todo}/>
		));
	}
}

// PropTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Todos;