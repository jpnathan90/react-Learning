import React, {Component} from 'react';

class CompanyHeader extends Component {
  constructor() {
    super();
  }
  render() {
    return (
	<div>
      <header id="header">
    <div id="topbar">
      <div className="container">
        <div className="social-links">
          <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
          <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
          <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
          <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    </div>

    <div className="container">

      <div className="logo float-left">
        <h1 className="text-light"><a href="#intro" className="scrollto"><span>Rapid</span></a></h1>
      </div>

      <nav className="main-nav float-right d-none d-lg-block">
        <ul>
          <li className="active"><a href="#intro">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li className="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="drop-down"><a href="#">Drop Down 2</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#footer">Contact Us</a></li>
        </ul>
      </nav>
      
    </div>
  </header>
		</div>
    );
  };
}

export default CompanyHeader;