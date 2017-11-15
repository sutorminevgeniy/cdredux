import React from 'react';
import PropTypes from 'prop-types';

import { addTodo } from '../actions';
import Form from '../components/Form';

class FormContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.store = this.context.store;

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

FormContainer.contextTypes = {
  store: PropTypes.object
};

export default FormContainer;