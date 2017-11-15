import React from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';

function App({store}) {
    return (
        <main>
            <HeaderContainer store={store} />

            <ListContainer store={store} />

            <FormContainer store={store} />
        </main>
    );
}

App.propTypes = {
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

export default App;
