import React from 'react';
import {
	Row,
	Col,
	Carousel
} from 'react-bootstrap';

import './style.scss';

const Banner = ({ items, type }) =>
	<Row className="banner">
		<a name="what" />
		<Col className="nopadding">
			<Carousel
				controls={type === 'secondary'}
				indicators={type === 'primary'}
			>
				{
					items.map(item =>
						<Carousel.Item key={item.id}>
							<span className="carousel-item d-none d-sm-block">
								<img
									className="w-100"
									src={item.img.web}
									alt={item.id}
								/>
								{ item.text &&
									<div className="banner-text web">
										<p><mark>{ item.text.line1 }</mark></p>
										<p>{ item.text.line2 }</p>
									</div>
								}
							</span>

							<span className="carousel-item d-block d-sm-none">
								<img
									className="w-100"
									src={item.img.mobile}
									alt={item.id}
								/>
								{ item.text &&
									<div className="banner-text mobile">
										<p><mark>{ item.text.line1 }</mark></p>
										<p>{ item.text.line2 }</p>
									</div>
								}
							</span>
						</Carousel.Item>
					)
				}
			</Carousel>
		</Col>
	</Row>;

export default Banner;