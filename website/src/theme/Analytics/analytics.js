import { Component } from 'react';
import ReactGA from 'react-ga';

export default class Analytics extends Component {
  constructor() {
    super();

    this.gaID = 'UA-40204156-9';
  }

  componentDidMount() {
    window.addEventListener('oil_optin_done', this.addAnalytics.bind(this));
    window.addEventListener('oil_has_optedin', this.addAnalytics.bind(this));
  }

  componentWillUnmount() {
    window.addEventListener('oil_optin_done', this.addAnalytics.bind(this));
    window.addEventListener('oil_has_optedin', this.addAnalytics.bind(this));
  }

  addAnalytics() {
    console.log("[GA:✅] Analytics added.");
    ReactGA.initialize(this.gaID);
  }

  render() {
    return null;
  }
}