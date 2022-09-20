import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";
import axios from 'axios';


export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Hello there!",
      isLoading: false,
      data: []
      // data: [
      //   { title: "Home Depot", category: "Work Experience", slug: 'work-exp-home-depot' },
      //   { title: "Chubbys", category: "Work Experience", slug: 'work-exp-chubbys' },
      //   { title: "Allied Universal", category: "Work Experience", slug: 'work-exp-allied-universal' },

      //   { title: "Westlake High School", category: "Education", slug: 'education-whs' },
      //   { title: "Bethany College", category: "Education", slug: 'education-bc' },
      //   { title: "Bottega University", category: "Education", slug: 'education-bu' },

      //   { title: "Coding", category: "Hobbies", slug: 'hobbies-coding' },
      //   { title: "Drawing / Building", category: "Hobbies", slug: 'hobbies-drawing-building' },
      //   { title: "Basketball", category: "Hobbies", slug: 'hobbies-basketball' },

      //   { title: "Python", category: "Skills", slug: 'skills-python' },
      //   { title: "JavaScript", category: "Skills", slug: 'skills-javascript' },
      //   { title: "HTML & CSS", category: "Skills", slug: 'skills-html-css' },
      // ]
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.portfolioItems = this.portfolioItems.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }
  getPortfolioItems() {
    axios.get('https://parkernelson.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        })
      })
      .catch(error => {
        console.log(error);
      })
  }


  portfolioItems() {
    // Data that we'll need:
    // - background Image : thumb_image_url
    // - logo
    // - description : description
    // - id : id
    return this.state.data.map(item => {
      debugger;
      return <PortfolioItem key={item.id} title={item.name} description={item.description} url={item.url} slug={item.id} />
    })
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        <hr />
        {/* buttons */}
        <button onClick={() => { this.handleFilter('Work Experience') }}>Work Experience</button>
        <button onClick={() => { this.handleFilter('Education') }}>Education</button>
        <button onClick={() => { this.handleFilter('Hobbies') }}>Hobbies</button>
        <button onClick={() => { this.handleFilter('Skills') }}>Skills</button>
        <hr />
        {this.portfolioItems()}
      </div>
    )
  }
}