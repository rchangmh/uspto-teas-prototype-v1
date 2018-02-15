import React, { Component } from 'react'
import { Input } from '/src/styles'

export default class Form extends Component {
  state = {
    forms: [
      'Owner of Mark',
      'Internal Address',
      'Street Address',
      'Phone Number',
      'Fax Number',
      'Email Address',
      'Website Address'
    ]
  }

  render() {
    return (
      <div>
        {this.state.forms.map(form => (
          <Input label={form} placeholder={form} />
        ))}
      </div>
    )
  }
}
