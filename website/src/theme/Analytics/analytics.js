import {
  React,
  Component,
  useCallback
} from 'react';
import TagManager from 'react-gtm-module';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default class Analytics extends Component {
  constructor(props) {
    super(props);

    this.tagManagerArgs = {
      gtmId: 'GTM-KFW8C8L'
    };
  }

  catchEvent(eventName, callback) {
    var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
    var messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';
    var eventer = window[eventMethod];

    // Callback to be executed when event is fired
    function receiveMessage(event) {
      function eventDataContains(str) {
        return JSON.stringify(event.data).indexOf(str) !== -1;
      }
      if (event && event.data && (eventDataContains(eventName))) {
        callback();
      }
    }

    // Register event handler
    eventer(messageEvent, receiveMessage, false);
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseEventListeners) {
      this.catchEvent('oil_optin_done', this.addAnalytics.bind(this));
      this.catchEvent('oil_has_optedin', this.addAnalytics.bind(this)); 
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