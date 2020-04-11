import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoListItem extends Component {
	getStyle = () => {
		return {
			background: 'gainsboro',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			color: 'black',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}

	render() {
		const { id,title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.props.toggleComplete.bind(this,id)}/>
					{ title }
					<button onClick={this.props.deleteTodo.bind(this,id)} style={btnStyle}>X</button>
				</p>
			</div>
		)
	}
}

// PropTypes
TodoListItem.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
}

// Custom style variables
const btnStyle = {
	backgroundColor: 'red',
	color: 'white',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default TodoListItem
