/** @format */

import React from 'react'
import styles from './AtCoderGraph.module.css'

import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'

type Props = {}

type State = {
  userIDs: string[]
  acceptedCounts: number[]
}

type UserInfoType = {
  userID: string
  acceptedCount: number
}

class AtCoderGraph extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      userIDs: [],
      acceptedCounts: []
    }
    this.getUsersInfo()
  }
  getUsersInfo = () => {
    const url =
      'https://script.google.com/macros/s/AKfycbxCUIAch1pPH3mvu0czg01F6w2S_4FjvhDDBBu0oWySDoMjbjy9YdNtnj0SXGb0sMDE/exec'
    this.request(url).then((responseData: any) => {
      const usersInfo: UserInfoType[] = responseData
        .map((data: any) => {
          return { userID: data.userID as string, acceptedCount: data.count as number }
        })
        .sort((user1: UserInfoType, user2: UserInfoType) => user2.acceptedCount - user1.acceptedCount)
      this.setState({
        userIDs: usersInfo.map((userInfo: UserInfoType) => userInfo.userID),
        acceptedCounts: usersInfo.map((userInfo: UserInfoType) => userInfo.acceptedCount)
      })
    })
  }
  request = (url: string) => {
    return fetch(url)
      .then((res) => res.json())
      .catch((error) => {
        console.error('Fetch Error:', error)
      })
  }
  RenderSummary: React.VFC = (): JSX.Element => {
    if (typeof Highcharts === 'object') {
      HighchartsExporting(Highcharts)
    }
    const options = {
      chart: {
        polar: true,
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
    }
    return <HighchartsReact highcharts={Highcharts} options={options} />
  }

  render() {
    return <div className={`${styles.body}`}>{<this.RenderSummary />}</div>
  }
}

export default AtCoderGraph
