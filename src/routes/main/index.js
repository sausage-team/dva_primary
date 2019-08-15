import React from 'react';
import { connect } from 'dva';
import Header from '../../components/header';
import Footer from '../../components/footer';


class Main extends React.Component {
	render () {
		return (
			<div className="main">
        <Header />
        <Footer />
      </div>
		)
	}
}

const mainProps = (props) => {
	return {
		props
	}
}

export default connect(mainProps)(Main)
