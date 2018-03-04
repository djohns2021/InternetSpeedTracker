import * as React from "react";
import * as ReactDOM from "react-dom";
import { Component } from 'react';
import { CronJob } from 'cron';

import { SpeedtestService } from './services/speedtest.service';
import * as Request from 'superagent';
const speedtestUrlBase = 'https://www.broadbandmap.gov/broadbandmap/';

import { Hello } from "./components/Hello";

export class InternetTrackingApp extends Component {
  render() {
    return (
      <div>
        <Hello compiler='TypeScript' framework='React' />
        <button onClick={this.handleSpeedtest.bind(this)}>Run Test</button>
      </div>
    );
  }


  ayylmao() {
    var CronJob = require('cron').CronJob;
    
  }

  handleSpeedtest() {
    console.log('Hello!');
    this.basicTest();
  }

  basicTest() {
    Request.get(`${speedtestUrlBase}speedtest/nation?format=json`)
    .end((err, res) => {
      debugger;
    });
  }
}

ReactDOM.render(
  <InternetTrackingApp></InternetTrackingApp>,
  document.getElementById("example")
);
