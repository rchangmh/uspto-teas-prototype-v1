import React, { Component } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { Segment, Menu } from 'semantic-ui-react'

import Teas from '/src/containers/Teas'
import Vision from '/src/containers/Vision'
import Review from '/src/containers/Review'

export default class App extends Component {
  state = {
    activeItem: window.location.pathname,
    links: ['teas', 'vision', 'review'],
    submitted: {
      'Owner of Mark': 'test',
      Representing: 'test',
      'Entity Type': 'test',
      'Internal Address': 'test',
      'Street Address': 'test',
      'Phone Number': 'test',
      'Fax Number': 'test',
      'Email Address': 'test',
      'Website Address': 'test'
    }
  }

  vp_style = {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh'
  }

  container_style = {
    textAlign: 'center',
    width: '80%',
    maxWidth: '1000px',
    minWidth: '600px',
    maxHeight: '100vh',
    overflow: 'auto',
    padding: '20px'
  }

  onSubmit = submittedValues => {
    this.setState({ submitted: submittedValues })
  }

  render() {
    return (
      <div style={this.vp_style}>
        <Segment style={this.container_style}>
          <Menu inverted widths={this.state.links.length}>
            {this.state.links.map((link, index) => (
              <Menu.Item
                key={index}
                as={Link}
                to={`/${link}`}
                name={link}
                active={this.state.activeItem === `/${link}`}
                onClick={(e, { to }) => this.setState({ activeItem: to })}
              />
            ))}
          </Menu>
          <Switch>
            <Route
              exact
              path="/teas"
              render={props => <Teas submit={this.onSubmit} />}
            />
            <Route path="/vision" component={Vision} />
            <Route
              exact
              path="/review"
              render={props => <Review values={this.state.submitted} />}
            />
          </Switch>
        </Segment>
      </div>
    )
  }
}
