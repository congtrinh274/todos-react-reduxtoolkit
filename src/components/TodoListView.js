import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

//useSelector hook
const TodoListView = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoListView;