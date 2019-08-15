import React from 'react';
import { connect } from 'dva';

class Header extends React.Component {
	render () {
		return (
			<div className="header">111</div>
		)
	}
}

const headerProps = (props) => {
	return {
		props
	}
}

export default connect(headerProps)(Header)
