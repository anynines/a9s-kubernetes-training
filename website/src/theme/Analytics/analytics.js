import { React, Component } from 'react';
import TagManager from 'react-gtm-module';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default class Analytics extends Component {
  constructor(props) {
    super(props);

    this.tagManagerArgs = {
      gtmId: 'GTM-000000'
    };
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseEventListeners) {
      console.log('Add event listeners');
      window.addEventListener('oil_optin_done', this.addAnalytics);
      window.addEventListener('oil_has_optedin', this.addAnalytics);
    }
  }

  componentWillUnmount() {
    if (ExecutionEnvironment.canUseEventListeners) {
      window.removeEventListener('oil_optin_done', this.addAnalytics);
      window.removeEventListener('oil_has_optedin', this.addAnalytics);
    }
  }

  addAnalytics() {
    console.log("[GTM:✅] Analytics added.");
    TagManager.initialize(this.tagManagerArgs);
  }

  render() {
    return null;
  }
}