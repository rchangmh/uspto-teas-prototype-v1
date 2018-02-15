import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Segment, viewport, container } from '/src/styles'
import NavBar from '/src/components/NavBar'
import Form from '/src/containers/Form'
import Vision from '/src/containers/Review'
import Review from '/src/containers/Review'

export default class App extends Component {
  render() {
    return (
      <div style={viewport}>
        <Segment style={container}>
          <NavBar elements={['1', '2', '3']} />
          <Switch>
            <Route exact path="" component={Form} />
            <Route exact path="/1" component={Form} />
            <Route exact path="/2" component={Vision} />
            <Route exact path="/3" component={Review} />
          </Switch>
        </Segment>
      </div>
    )
  }
}