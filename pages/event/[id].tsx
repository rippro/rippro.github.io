/** @format */

import { VFC } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout'
import { EventDetails, EventDetailType } from '../../components/EventList'
import { useState, useEffect } from 'react'

import styles from '../../components/section.module.css'
import detailsStyle from '../../styles/details.module.css'

const defaultId = 'rupc2018'
const getEntries: Function = (contentId: string, key: keyof EventDetailType) => {
  if (contentId in EventDetails) {
    if (key in EventDetails[contentId]) {
      return EventDetails[contentId][key]
    } else {
      return ''
    }
  } else {
    if (key in EventDetails[defaultId]) {
      return EventDetails[defaultId][key]
    } else {
      return ''
    }
  }
}

const extension: Function = (filename: string) => {
  const parts = filename.split('.')
  return parts[parts.length - 1]
}

type IODataProps = {
  iodata?: JSX.Element | null | undefined
}
const IODataElement: VFC<IODataProps> = (Props: IODataProps) => {
  if (Props.iodata) {
    return (
      <>
        <h3>問題文・入出力データ</h3>
        {Props.iodata}
      </>
    )
  } else {
    return <></>
  }
}

type PlaceProps = {
  place?: string | null | undefined
}
const PlaceElement: VFC<PlaceProps> = (Props: PlaceProps) => {
  if (Props.place) {
    return (
      <>
        <h3>会場</h3>
        <p>{Props.place}</p>
      </>
    )
  } else {
    return <></>
  }
}

type PictureProps = {
  link?: string | null | undefined
  contestId?: string | null | undefined
}
const PictureElement: VFC<PictureProps> = (Props: PictureProps) => {
  if (Props.link) {
    return (
      <div style={{ textAlign: 'center' }}>
        <img src={`/static/contestData/${Props.contestId}/${Props.link}`} />
      </div>
    )
  } else {
    return <></>
  }
}

type ScheduleProps = {
  schedule?: JSX.Element | null | undefined
}
const ScheduleElement: VFC<ScheduleProps> = (Props: ScheduleProps) => {
  if (Props.schedule) {
    return (
      <>
        <h3>合宿内容</h3>
        {Props.schedule}
      </>
    )
  } else {
    return <></>
  }
}

type EventDetailProps = {
  detailURL?: string | null | undefined
}
const EventDetailElement: VFC<EventDetailProps> = (Props: EventDetailProps) => {
  if (Props.detailURL) {
    return (
      <>
        <h3>イベント概要</h3>
        <a href={Props.detailURL}>{Props.detailURL}</a>
      </>
    )
  } else {
    return <></>
  }
}

type JudgeSiteProps = {
  judgeURL?: string | null | undefined
}
const JudgeSiteElement: VFC<JudgeSiteProps> = (Props: JudgeSiteProps) => {
  if (Props.judgeURL) {
    return (
      <>
        <h3>ジャッジシステム</h3>
        <a href={Props.judgeURL}>{Props.judgeURL}</a>
      </>
    )
  } else {
    return <></>
  }
}

type EventDateProps = {
  date: { begin: string; end?: string | null | undefined }
}
const EventDateElement: VFC<EventDateProps> = (Props: EventDateProps) => {
  return (
    <>
      <h3>開催日時</h3>
      {Props.date.begin}
      {Props.date.end ? ` - ${Props.date.end}` : ''}
    </>
  )
}

type WriterProps = {
  writer?: string[] | null | undefined
}
const WriterElement: VFC<WriterProps> = (Props: WriterProps) => {
  if (Props.writer) {
    return (
      <>
        <h3>問題作成・ジャッジ</h3>
        <ul>
          {Props.writer.map((writer: string) => {
            return (
              <li key={writer}>
                <a href={`https://twitter.com/${writer}`}>{`@${writer}`}</a>
              </li>
            )
          })}
        </ul>
      </>
    )
  } else {
    return <></>
  }
}

type CommentaryProps = {
  contestId: string
  day: 'Day 1' | 'Day 2' | 'Day 3' | undefined
  commentary: { title: string; link: string }[]
}
const CommentaryElement: VFC<CommentaryProps> = (Props: CommentaryProps) => {
  return (
    <>
      <h3>{Props.day + ' ' || ''}解説</h3>
      <table className={detailsStyle.table}>
        <tr className={detailsStyle.tr}>
          <td className={detailsStyle.td}>問題</td>
          <td className={detailsStyle.td}>解説</td>
        </tr>
        {Props.commentary.map((commentary) => {
          return (
            <tr className={detailsStyle.tr} key={commentary.title}>
              <td className={detailsStyle.td}>{commentary.title}</td>
              <td className={detailsStyle.td}>
                <a href={`/static/contestData/${Props.contestId}/${commentary.link}`}>{extension(commentary.link)}</a>
              </td>
            </tr>
          )
        })}
      </table>
    </>
  )
}

type ProblemSetProps = {
  problemSet: { college: string; link: string }[]
  contestId: string
}
const ProblemSetElement: VFC<ProblemSetProps> = (Props: ProblemSetProps) => {
  return (
    <>
      <h3>問題セット</h3>
      <ul>
        {Props.problemSet.map((college) => {
          return (
            <li key={college.college}>
              {college.link ? <a href={college.link}>{college.college}</a> : <>{college.college}</>}
            </li>
          )
        })}
      </ul>
    </>
  )
}

const EventDetail: VFC = () => {
  const router = useRouter()
  const [contestId, setId] = useState<string>()
  useEffect(() => {
    if (router.asPath !== router.route) {
      setId(String(router.query.id))
    }
  }, [router])

  return (
    <Layout
      title={`${getEntries(contestId, 'title')} - RiPPro(立命館大学情報理工学部プロジェクト団体)`}
      description="過去に開催したイベント一覧ページ"
    >
      <div className={styles.section}>
        <h2>{getEntries(contestId, 'title')}</h2>
        <PictureElement contestId={contestId || defaultId} link={getEntries(contestId, 'picture')} />
        <EventDateElement date={getEntries(contestId, 'date')} />
        <JudgeSiteElement judgeURL={getEntries(contestId, 'judge')} />
        <EventDetailElement detailURL={getEntries(contestId, 'detailURL')} />
        <PlaceElement place={getEntries(contestId, 'place')} />
        <ProblemSetElement problemSet={getEntries(contestId, 'problemSet')} contestId={contestId || defaultId} />
        <CommentaryElement
          contestId={contestId || defaultId}
          day={getEntries(contestId, 'day')}
          commentary={getEntries(contestId, 'commentary')}
        />
        <IODataElement iodata={getEntries(contestId, 'iodata')} />
        <ScheduleElement schedule={getEntries(contestId, 'schedule')} />
        <WriterElement writer={getEntries(contestId, 'writer')} />
      </div>
    </Layout>
  )
}

export default EventDetail
