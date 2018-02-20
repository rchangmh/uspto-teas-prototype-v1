import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Input, Radio, Button } from 'antd'
import { Link } from 'react-router-dom'

export default class Teas extends Component {
  state = {
    fields: {
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

  onChangeRepresenting = event => {
    this.setState({
      representing: event.target.value
    })
  }

  onChangeEntity = event => {
    this.setState({
      entityType: event.target.value
    })
  }

  onSubmit = () => {
    const newObj = (({ representing, entityType }) => ({
      representing,
      entityType
    }))(this.state)
    const returnObj = {
      ...this.state.fields,
      ...newObj
    }
    this.props.submit(returnObj)
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.fields).map(field => (
          <Input
            size="large"
            style={{ padding: '10px' }}
            placeholder={field}
            addonBefore={field}
            onChange={event =>
              this.setState({
                fields: {
                  ...this.state.fields,
                  [field]: event.target.value
                }
              })
            }
          />
        ))}

        <div style={{ padding: '10px' }}>
          <b>Representing: </b>
          <Radio.Group onChange={this.onChangeRepresenting}>
            {this.state.representingOptions.map(option => (
              <Radio.Button value={option}>{option}</Radio.Button>
            ))}
          </Radio.Group>
        </div>
        <div style={{ padding: '10px' }}>
          <b>Entity Type: </b>
          <Radio.Group onChange={this.onChangeEntity}>
            {this.state.entityTypes.map(entity => (
              <Radio.Button value={entity}>{entity}</Radio.Button>
            ))}
          </Radio.Group>
        </div>
        <Button as={Link} to={'/vision'} onClick={this.onSubmit} type="primary">
          Submit
        </Button>
        <Button as={Link} to={'/vision'}>
          Submit
        </Button>
      </div>
    )
  }
}
