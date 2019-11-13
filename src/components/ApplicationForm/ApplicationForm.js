import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
	Form,
	Button
} from 'react-bootstrap';
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './style.scss';

class ApplicationForm extends Component {
	onSubmit = e => {
		e.preventDefault();
		const data = new FormData(e.target);
		console.log(data);
	};

	render() {
		return <Container className="application-form">
			<a name="contact"/>
			<img className="timi-arm top-left d-none d-sm-block" src="assets/timi-arm.png" alt=""/>
			<img className="timi-arm bottom-right d-none d-sm-block" src="assets/timi-arm.png" alt=""/>
			<Row className="form-container">
				<Col xs={12} sm={{span: 6, offset: 3}}>
					<p>מעניין? דברו איתנו</p>
					<div className="address">
						<Container>
							<Row>
								<Col xs={6}>
									<img src="assets/icons/email.png" alt=""/>
									<a href="mailto:info@tikalk.com">info@tikalk.com</a>
								</Col>
								<Col xs={6}>
									<img src="assets/icons/cellphone.png" alt=""/>
									<a href="tel:+97236488618">(+972) 3 6488618</a>
								</Col>
							</Row>
							<Row>
								<Col xs={12}>
									<a href="https://goo.gl/maps/v5JuaxDs1LdFK5WD8" target="_blank">קריית עתידים, בניין 7, קומה 3,
										תל-אביב</a>
								</Col>
							</Row>
						</Container>
					</div>
					<Form onSubmit={this.onSubmit}>
						<Form.Row>
							<Col xs={12} sm={6}>
								<Form.Control size="sm" type="text" placeholder="שם"/>
							</Col>
							<Col xs={12} sm={6}>
								<Form.Control size="sm" type="text" placeholder="משפחה"/>
							</Col>
						</Form.Row>
						<Form.Row>
							<Col xs={12}>
								<Form.Control size="sm" type="tel" placeholder="טלפון"/>
							</Col>
						</Form.Row>
						<Form.Row>
							<Col xs={12}>
								<Form.Control size="sm" type="email" placeholder="דואל"/>
							</Col>
						</Form.Row>
						<Form.Row>
							<Col>
								<FontAwesomeIcon icon={faPlusCircle} className="form-icon cv"/>
								<Form.Control size="sm" type="text" placeholder="צרף קורות חיים"/>
							</Col>
							<Col xs={12} sm={1}>
								<p>- או -</p>
							</Col>
							<Col>
								<FontAwesomeIcon icon={faLinkedinIn} className="form-icon linkedin"/>
								<Form.Control size="sm" type="text" placeholder="פרופיל לינקדאין"/>
							</Col>
						</Form.Row>

						<Button type="submit">
							שלח
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>;
	}
}

export default ApplicationForm;