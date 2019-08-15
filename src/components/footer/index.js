import React from 'react';
import { connect } from 'dva';

class Footer extends React.Component {
	render () {
		return (
			<div className="footer">222</div>
		)
	}
}

const footerProps = (props) => {
	return {
		props
	}
}

export default connect(footerProps)(Footer)
