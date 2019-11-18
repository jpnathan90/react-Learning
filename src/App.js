import React, {Component} from 'react';
import './App.css';
import CompanyHeader from './companyHeader';
import CompanyBody from './companyBody';
import CompanyFooter from './companyFooter';


function App() {
  return (
	<div>
		<CompanyHeader />
		<CompanyBody />
		<CompanyFooter />
	</div>
  );
}


export default App;
