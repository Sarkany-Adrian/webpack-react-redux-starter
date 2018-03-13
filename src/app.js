import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import './styles/style.scss'
import rootReducer from './reducers'
import {configureStore} from './store'
import Layout from './layout'
// pages
import Landing from './pages/Landing'
import Inner from './pages/Inner'

const store = configureStore({}, rootReducer);

class App extends Component {
  render() {

    return(
      <Provider store={store}>
        <Router>
          <Switch>
            <Layout path="/" exact component={Landing} />
            <Layout path="/inner" component={Inner} />
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
