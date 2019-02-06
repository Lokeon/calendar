import React from 'react';

import './style.scss';
import Helmet from './helmet';

const Layout = ({ children }) => (
	<div>
		<Helmet />
	</div>
);

export default Layout;
