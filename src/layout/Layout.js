import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, withRouter} from 'react-router-dom'
import './Layout.scss'

class Layout extends Component {
  static propTypes = {component: PropTypes.func.isRequired};

  render() {

    const {
      component: Component,
      ...props
    } = this.props;

    return(
      <Route
        {...props}
        render={matchProps => <Component {...matchProps} />}
      />
    )
  }
}

export default withRouter(Layout);
