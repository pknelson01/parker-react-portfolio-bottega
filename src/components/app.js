import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from "./portfolio/portfolio-container";
import PortfolioItem from './portfolio/portfolio-item';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>The Chosen Ones Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
