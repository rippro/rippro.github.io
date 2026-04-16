/** @format */

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';

type Props = {};

type State = {
  userIDs: string[];
  acceptedCounts: number[];
  loaded: boolean;
};

type UserInfoType = {
  userID: string;
  acceptedCount: number;
};

class AtCoderGraph extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userIDs: [],
      acceptedCounts: [],
      loaded: false
    };
  }

  componentDidMount() {
    import('highcharts/modules/exporting')
      .then((module: any) => {
        const HighchartsExporting = module.default ?? module;
        if (typeof HighchartsExporting === 'function') {
          HighchartsExporting(Highcharts);
        }
      })
      .catch(() => {
        // Silently ignore exporting module loading failures
      });
    this.getUsersInfo();
    this.setState({ loaded: true });
  }

  getUsersInfo = () => {
    const url =
      'https://script.google.com/macros/s/AKfycbxZEjsW21O2Tg4IqwHZOS8T-JpoRIbyMwBvcvFtZI92LOT6yz-PfFjVdUihBlmZxzsH/exec';
    this.request(url).then((responseData: any) => {
      const usersInfo: UserInfoType[] = responseData
        .map((data: any) => {
          return {
            userID: data.userID as string,
            acceptedCount: data.count as number
          };
        })
        .sort((user1: UserInfoType, user2: UserInfoType) => user2.acceptedCount - user1.acceptedCount);
      this.setState({
        userIDs: usersInfo.map((userInfo: UserInfoType) => userInfo.userID),
        acceptedCounts: usersInfo.map((userInfo: UserInfoType) => userInfo.acceptedCount)
      });
    });
  };
  request = (url: string) => {
    return fetch(url)
      .then((res) => res.json())
      .catch((error) => {
        console.error('Fetch Error:', error);
      });
  };

  RenderSummary = () => {
    const options = {
      accessibility: {
        enabled: false
      },
      chart: {
        type: 'bar',
        height: '100%'
      },
      title: {
        text: 'AC Counts'
      },
      subtitle: {
        text: 'Source: <a href="https://kenkoooo.com">https://kenkoooo.com</a>'
      },
      pane: {
        size: '80%'
      },
      series: [
        {
          name: 'Solved',
          data: this.state.acceptedCounts
        }
      ],
      xAxis: {
        categories: this.state.userIDs,
        title: {
          text: null
        }
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'horizontal'
              },
              pane: {
                size: '70%'
              }
            }
          }
        ]
      }
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  };

  render() {
    if (!this.state.loaded) {
      return <div className="mx-10" />;
    }

    return <div className="mx-10">{<this.RenderSummary />}</div>;
  }
}

export default AtCoderGraph;
