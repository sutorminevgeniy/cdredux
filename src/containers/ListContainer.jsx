import React from 'react';

import { deleteTodo, toggleTodo, editTodo } from '../actions';
import List from '../components/List';

class ListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;

        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);        
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleDelete(id) {
        this.store.dispatch(deleteTodo(id));
    }

    handleToggle(id) {
        this.store.dispatch(toggleTodo(id));
    }

    handleEdit(id, title) {
        this.store.dispatch(editTodo(id, title));
    }

    render() {
        const todos = this.store.getState();

        return (
            <List
                todos={todos}
                onDelete={this.handleDelete}
                onToggle={this.handleToggle}
                onEdit={this.handleEdit}
            />
        );        
    }
}

export default ListContainer;