import React from 'react';
import {
	Container
} from 'react-bootstrap';
import {
	Banner,
	Grid,
	Header,
	Footer,
	JobsAccordion,
	ApplicationForm
} from '../../components';

import Content from './content';
import './style.scss';

const Homepage = () =>
	<Container className="homepage">
		<Header />
		<Banner items={Content.mainBanner} type="primary"/>
		<Grid items={Content.grid}/>
		<JobsAccordion items={Content.jobs}/>
		<Banner items={Content.secondaryBanner} type="secondary" />
		<ApplicationForm />
		<Footer />
	</Container>;


export default Homepage;