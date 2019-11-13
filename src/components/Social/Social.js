import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faFacebookF,
	faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import './style.scss';

const Social = () =>
	<div className="social">
		<a href="https://www.facebook.com/TikalKnowledge/" target="_blank">
			<FontAwesomeIcon icon={faFacebookF} />
		</a>

		<a href="https://twitter.com/tikalk" target="_blank">
			<FontAwesomeIcon icon={faTwitter} />
		</a>

		<a href="https://www.linkedin.com/company/96195/" target="_blank">
			<FontAwesomeIcon icon={faLinkedinIn} />
		</a>
	</div>;

export default Social;