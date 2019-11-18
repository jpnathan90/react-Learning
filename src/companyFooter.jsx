import React, {Component} from 'react';
class CompanyFooter extends Component {
	constructor () {
		super();
	}
	
	render() {
		return (
			<footer id="footer" className="section-bg">
			<div className="container">
			  <div className="copyright">
				&copy; Copyright <strong>Rapid</strong>. All Rights Reserved
			  </div>
			  <div className="credits">
				Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
			  </div>
			</div>
	  </footer>
		);
	} 
}

export default CompanyFooter;
