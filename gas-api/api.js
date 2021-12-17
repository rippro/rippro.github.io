/* ユーザ情報取得API */
const getUsersInfo = () => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('index')
  const lastRow = sheet.getLastRow()
  const data = sheet.getRange(`A2:A${sheet.getLastRow()}`).getValues()
  let responseData = []
  for (let r = 0; r < lastRow - 1; r++) {
    responseData.push(data[r][0])
  }
  return responseData
}

function doGet(e) {
  const usersInfo = getUsersInfo()
  const json = JSON.stringify(usersInfo)
  return ContentService.createTextOutput().setMimeType(ContentService.MimeType.JSON).setContent(json)
}

/* レート更新API */

const saveUserIDs = () => {
  // シートをクリア
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('usersInfo')
  sheet.clear()

  // ユーザIDを取得
  const userIDs = getUsersInfo()

  const userInfo = userIDs.map((userID) => {
    const ACCount = request(userID)
    return [userID, ACCount]
  })

  // ユーザID, レートをシートに保存
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
