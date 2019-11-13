import React from 'react';
import {
	Container,
	Row,
	Col,
	Accordion,
	Card,
	Button
} from 'react-bootstrap';
import {
	Link
} from "react-router-dom";

import './style.scss';

const JobsAccordion = ({ items }) =>
	<Row className="jobs-accordion">
		<Col xs={12} className="nopadding">
			<Accordion>
				<Card.Header className="jobs-ticker">
					<Container>
						<Row>
							<Col xs={12} sm={6}>
								<p>אם זה בשבילך, בוא לעשות קריירה בטיקל</p>
							</Col>
							<Col xs={12} sm={6}>
								<Accordion.Toggle as={Button} variant="link" eventKey="0" className="toggle-btn">
									למשרות הפתוחות שלנו
									<img src="/assets/icons/arrow.svg" className="arrow" />
								</Accordion.Toggle>
							</Col>
						</Row>
					</Container>
				</Card.Header>

				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<Container>
							<Row className="jobs-list">
								{ items.map(job =>
									<Col xs={12} sm={4} key={job.title}>
										<Link
											to={job.url}
											className="job-item"
										>{`${job.title} >`}
										</Link>
									</Col>
								)}
							</Row>
						</Container>
					</Card.Body>
				</Accordion.Collapse>
			</Accordion>
		</Col>
	</Row>;

export default JobsAccordion;