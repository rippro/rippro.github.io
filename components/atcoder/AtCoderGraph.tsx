/** @format */

import React from 'react'
import styles from './AtCoderGraph.module.css'

import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'

type Props = {}

type State = {
  usersInfo: userInfoType[]
  userIDs: string[]
}

type userInfoType = {
  user: string
  count: number
}

class AtCoderGraph extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      usersInfo: [],
      userIDs: []
    }
    this.getUserIDs()
  }
  getUserIDs = () => {
    const url =
      'https://script.google.com/macros/s/AKfycbzOHe3hCcTYfAryVryiFmxXffXBPCI12Uk02psY0s_6leS4ukwxd2eE_c-BXNb80nvW/exec'
    this.request(url).then((data: any) => {
      this.setState({ userIDs: data as string[] })
    })
  }
  getUserInfo = () => {
    this.state.userIDs.forEach((user) => {
      this.getACCount(user)
    })
  }
  getACCount = (user: string) => {
    const url = `https://kenkoooo.com/atcoder/atcoder-api/v2/user_info?user=${user}`
    // 一度APIを叩いたら以降はできるだけ叩かない
    if (!this.state.usersInfo.find((x) => x.user === user)) {
      return this.request(url).then((data: any) => {
        const userInfo = {
          user: data.user_id as string,
          count: data.accepted_count as number
        }
        // 一度グラフにユーザを追加したら以降は追加しない
        if (!this.state.usersInfo.find((x) => x.user === userInfo.user)) {
          let usersInfo = this.state.usersInfo
          usersInfo.push(userInfo)
          usersInfo.sort((a, b) => b.count - a.count)
          this.setState({ usersInfo: usersInfo })
        }
        return userInfo
      })
    }
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
          data: this.state.usersInfo.map((userInfo) => userInfo.count)
        }
      ],
      xAxis: {
        categories: this.state.usersInfo.map((userInfo) => userInfo.user),
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
    this.getUserInfo()
    return <div className={`${styles.body}`}>{<this.RenderSummary />}</div>
  }
}

export default AtCoderGraph
