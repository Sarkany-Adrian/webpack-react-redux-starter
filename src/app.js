import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './styles/style.scss'

import rootReducer from './reducers'
import {configureStore} from './store';
const store = configureStore({}, rootReducer);

// pages
import Landing from './pages/Landing'

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={Landing} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
);
