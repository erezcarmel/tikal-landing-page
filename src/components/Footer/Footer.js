import React from 'react';
import {
	Row,
	Col,
	Navbar,
	Nav
} from 'react-bootstrap';
import Social from '../Social';

import './style.scss';

const Footer = () =>
	<Row className="footer">
		<Col xs={12} sm={2}>
			<Social />
		</Col>
		<Col className="d-none d-sm-block" sm={8}>
			<Navbar>
				<Nav>
					<Nav.Item>
						<Nav.Link href="#" className="highlight">למשרות הפתוחות</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href="#contact">דברו איתנו</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href="#tikalists">הטיקליסטים</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href="#what">מה זה?</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		</Col>
		<Col xs={12} sm={2}>
			<img src="assets/tikal_logo_white.svg" className="logo" alt=""/>
		</Col>
	</Row>;

export default Footer;