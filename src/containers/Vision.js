import React, { Component } from 'react'
import { Upload, Icon, message } from 'antd'

export default class Vision extends Component {
  state = {
    pictures: []
  }

  props = {
    name: 'file',
    multiple: true,
    action: '',
    onChange(info) {
      const status = info.file.status
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
        console.log(info.file.data)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=5')
      .then(results => results.json())
      .then(data => this.setState({ pictures: data.results }))
  }

  render() {
    return (
      <div style={{ height: '200px' }}>
        <Upload.Dragger {...this.props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Upload.Dragger>
        {this.state.pictures.map(picture => {
          return (
            <div key={picture.results}>
              <img src={picture.picture.medium} />
            </div>
          )
        })}
        }
      </div>
    )
  }
}
