import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Input, Radio, Button } from 'antd'

export default class Teas extends Component {
  state = {
    fields: [
      'Owner of Mark',
      'Internal Address',
      'Street Address',
      'Phone Number',
      'Fax Number',
      'Email Address',
      'Website Address'
    ],
    fields2: {
      'Owner of Mark': '',
      'Internal Address': '',
      'Street Address': '',
      'Phone Number': '',
      'Fax Number': '',
      'Email Address': '',
      'Website Address': ''
    },
    representing: '',
    representingOptions: [
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

  radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  }

  onChange = event => {
    this.setState({ representing: event.target.value })
  }

  onChangeEntity = event => {
    this.setState({ entityType: event.target.value })
  }

  render() {
    return (
      <div>
        {this.state.fields2.keys
          .slice(0, 1)
          .map(field => (
            <Input
              size="large"
              style={{ padding: '10px' }}
              placeholder={field}
              addonBefore={field}
            />
          ))}

        <div style={{ padding: '10px' }}>
          <b>Representing: </b>
          <Radio.Group onChange={this.onChange}>
            {this.state.representingOptions.map(option => (
              <Radio.Button value={option}>{option}</Radio.Button>
            ))}
          </Radio.Group>
        </div>
        <div style={{ padding: '10px' }}>
          <b>Entity Type: </b> <br />
          <Radio.Group onChange={this.onChangeEntity}>
            {this.state.entityTypes.map(entity => (
              <Radio.Button value={entity}>{entity}</Radio.Button>
            ))}
          </Radio.Group>
        </div>
        {this.state.fields
          .slice(1)
          .map(field => (
            <Input
              size="large"
              style={{ padding: '10px' }}
              placeholder={field}
              addonBefore={field}
            />
          ))}
        <Button>Submit</Button>
      </div>
    )
  }
}
