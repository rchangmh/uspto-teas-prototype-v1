import React, { Component } from 'react'
import { Card } from 'antd'

export default class Review extends Component {
  render() {
    return (
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Object.entries(this.props.values).map(([key, value]) => (
          <div style={{ padding: '15px' }}>
            <Card title={key} style={{ width: 150, height: 120 }}>
              <b>{value}</b>
            </Card>
          </div>
        ))}
      </div>
    )
  }
}
