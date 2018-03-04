import * as Request from 'superagent';
const speedtestUrlBase = 'https://www.broadbandmap.gov/broadbandmap/';

export class SpeedtestService {
  public basicTest() {
    Request.get(`${speedtestUrlBase}speedtest/nation?format=json`)
    .end((err, res) => {
      debugger;
    });
  }
}