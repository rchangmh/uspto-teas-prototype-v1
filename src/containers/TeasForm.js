import React, { Component } from 'react'
import { Input, container, Form, Radio } from '/src/styles'

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
		name: '',
		value: ''
	}

	render() {
		return (
			<div style={container}>
				{this.state.forms.map(form => (
					<div style={{ padding: '10px' }}>
						<Input label={form} placeholder={form} />
					</div>
				))}
				<Form>
					<Form.Field>
						Selected value: <b>{this.state.value}</b>
					</Form.Field>
					<Form.Field>
						<Radio
							label="Choose this"
							name="radioGroup"
							value="this"
							checked={this.state.value === 'this'}
							onChange={() => this.setState({ value: 'this' })}
						/>
					</Form.Field>
					<Form.Field>
						<Radio
							label="Or that"
							name="radioGroup"
							value="that"
							checked={this.state.value === 'that'}
							onChange={() => this.setState({ value: 'that' })}
						/>
					</Form.Field>
				</Form>
			</div>
		)
	}
}
