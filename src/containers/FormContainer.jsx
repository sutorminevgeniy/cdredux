import React from 'react';

import { addTodo } from '../actions';
import Form from '../components/Form';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;

        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleAdd(title) {
        this.store.dispatch(addTodo(title));
    }

    render() {
        return (
            <Form onAdd={this.handleAdd} />
        );
    }
}

export default FormContainer;