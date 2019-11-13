import React from 'react';
import {
	Row,
	Col
} from 'react-bootstrap';

import './style.scss';

const Grid = ({ items }) =>
	<Row className="grid">
		<a name="tikalists" />
		{
			items.map((item, index) =>
				<Col
					key={item.id}
					xs={{ span: 6, order: item.mobileOrder }}
					md={{ span: 4, order: index }}
					className={`grid-item ${index === 8 ? 'd-xs-none' : ''}`}
				>
					{
						item.img ?
							<img src={item.img} alt=""/> :
							<div className="testimony">
								<div className="title">
									<img src={item.icon}  alt=""/>
									<p>{ item.title }</p>
								</div>
								<p>{ item.text }</p>
							</div>
					}
				</Col>
			)
		}
	</Row>;

export default Grid;