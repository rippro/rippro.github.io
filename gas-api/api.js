/* ユーザ情報取得API */
const doGet = (e) => {
  const usersInfo = getUsersInfo()
  const json = JSON.stringify(usersInfo)
  return ContentService.createTextOutput().setMimeType(ContentService.MimeType.JSON).setContent(json)
}

const getUsersInfo = () => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('usersInfo')
  const data = sheet.getRange(`A1:B${sheet.getLastRow()}`).getValues()
  const usersInfo = data.map((user) => {
    return { userID: user[0], count: user[1] }
  })
  console.log(usersInfo)
  return usersInfo
}

/* ユーザID取得API */
const getUserIDs = () => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('index')
  const data = sheet.getRange(`A2:A${sheet.getLastRow()}`).getValues()
  const responseData = data.map((user) => user[0])
  return responseData
}

/* userInfoシート更新API */
const saveUserIDs = () => {
  // シートを取得
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('usersInfo')

  // ユーザIDを取得
  const userIDs = getUserIDs()
  const userInfo = userIDs.map((userID) => {
    const ACCount = request(userID)
    return [userID, ACCount]
  })

  // シートをクリアにしてからユーザID, AC Countをシートに保存
  sheet.clear()
  sheet.getRange(1, 1, userInfo.length, userInfo[0].length).setValues(userInfo)
}

/* AtCoder API へのリクエスト */

const request = (userID) => {
  const url = `https://kenkoooo.com/atcoder/atcoder-api/v2/user_info?user=${userID}`
  const response = UrlFetchApp.fetch(url).getContentText()
  const resJson = JSON.parse(response)
  console.log(`fetched! ${JSON.stringify(resJson)}`)
  if ('accepted_count' in resJson) {
    return JSON.parse(response).accepted_count
  } else {
    return 0
  }
}
