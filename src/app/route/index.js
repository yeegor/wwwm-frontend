import { PureComponent, cloneElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import HomePage from 'Route/HomePage';

const BEFORE_ITEMS_TYPE = 'BEFORE_ITEMS_TYPE';
const AFTER_ITEMS_TYPE = 'AFTER_ITEMS';
const SWITCH_ITEMS_TYPE = 'SWITCH_ITEMS_TYPE';

export const history = createBrowserHistory({ basename: '/' });

class AppRouter extends PureComponent {
    [BEFORE_ITEMS_TYPE] = [];

    [SWITCH_ITEMS_TYPE] = [
        {
            component: <Route path='/' exact component={ HomePage }/>,
            position: 10
        }
    ];

    [AFTER_ITEMS_TYPE] = [];

    getSortedItems(type) {
        return (this[type] || []).reduce(
            (acc, { component, position }) => {
                if (!component) {
                    console.warn('There is an item without a component property declared in main router');
                    return acc;
                }
                if (acc[position]) {
                    console.warn(`There is already an item with ${ position } declared in router.`)
                    return acc;
                }

                return { ...acc, [position]: component };
            }, {}
        );
    }

    renderItemsOfType(type) {
        return Object.entries(this.getSortedItems(type)).map(
            ([key, component]) => cloneElement(component, { key })
        );
    }

    renderRouterContent() {
        return (<>
            { this.renderItemsOfType(BEFORE_ITEMS_TYPE) }
            <Switch>
                { this.renderItemsOfType(SWITCH_ITEMS_TYPE) }
            </Switch>
            { this.renderItemsOfType(AFTER_ITEMS_TYPE) }
        </>)
    }

    render() {
        return (
            <Router history={ history }>
                { this.renderRouterContent() }
            </Router>
        )
    }
}

export default AppRouter;