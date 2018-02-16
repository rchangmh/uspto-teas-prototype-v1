import React, { Component } from 'react'
import { Input, container, Form, Radio, Button } from '/src/styles'

export default class TeasForm extends Component {
  state = {
    forms: [
      'Owner of Mark',
      'Internal Address',
      'Street Address',
      'Phone Number',
      'Fax Number',
      'Email Address',
      'Website Address'
    ],
    representing: '',
    representingFields: [
      'Also known as',
      'Trading as',
      'Formerly',
      'Doing business as'
    ],
    entityType: '',
    entityTypes: [
      'Individual',
      'Corporation',
      'LLC',
      'Partnership',
      'Joint Venture',
      'Sole Proprietorship',
      'Trust',
      'Estate',
      'Other'
    ]
  }

  render() {
    return (
      <div style={container}>
        {this.state.forms.slice(0, 1).map(form => (
          <div style={{ padding: '10px' }} key={form}>
            <Input label={form} placeholder={form} key={form} />
          </div>
        ))}

        <Form>
          <Form.Field>
            <b>Representing: {this.state.representing}</b>
          </Form.Field>
          {this.state.representingFields.map(field => (
            <Form.Field>
              <Radio
                key={field}
                label={field}
                name="representingRadio"
                value={field}
                checked={this.state.representing === field}
                onChange={(e, { value }) =>
                  this.setState({ representing: value })
                }
              />
            </Form.Field>
          ))}

          <Form.Field>
            <b>Entity Type: {this.state.entityType}</b>
          </Form.Field>
          {this.state.entityTypes.map(entity => (
            <Form.Field>
              <Radio
                key={entity}
                label={entity}
                name="entityRadio"
                value={entity}
                checked={this.state.entityType === entity}
                onChange={(e, { value }) =>
                  this.setState({ entityType: value })
                }
              />
            </Form.Field>
          ))}
        </Form>

        {this.state.forms.slice(1).map(form => (
          <div style={{ padding: '10px' }} key={form}>
            <Input label={form} placeholder={form} key={form} />
          </div>
        ))}

        <Button>Submit</Button>
      </div>
    )
  }
}
