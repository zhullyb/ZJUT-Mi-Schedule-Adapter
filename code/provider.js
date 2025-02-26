// SPDX-License-Identifier: MIT

async function scheduleHtmlProvider() {
  await loadTool('AIScheduleTools')
  try {
    const year = await AISchedulePrompt({
      titleText: '学年',
      tipText: '请输入本学年开始的年份',
      defaultText: '2024',
      validator: value => {
        try {
          const v = parseInt(value)
          if (v < 2000 || v > 2100) {
            return '请输入正确的学年'
          }
          return false
        } catch (error) {
          return '请输入正确的学年'
        }
      }
    })

    const term = await AISchedulePrompt({
      titleText: '学期',
      tipText: '请输入本学期的学期(1,2,3 分别表示上、下、短学期)',
      defaultText: '1',
      validator: value => {
        if (value === '1' || value === '2' || value === '3') {
          return false
        }
        return '请输入正确的学期'
      }
    })

    const xqm = {
      '1': '3',
      '2': '12',
      '3': '16',
    }[term]

    const res = await fetch("http://www.gdjw.zjut.edu.cn/jwglxt/kbcx/xskbcx_cxXsgrkb.html?gnmkdm=N2151", {
      "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        "x-requested-with": "XMLHttpRequest"
      },
      "referrer": "http://www.gdjw.zjut.edu.cn/jwglxt/kbcx/xskbcx_cxXskbcxIndex.html?gnmkdm=N2151&layout=default",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": `xnm=${year}&xqm=${xqm}&kzlx=ck&xsdm=`,
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    })

    const ret = await res.json()
    return JSON.stringify(ret.kbList)

  } catch (error) {
    await AIScheduleAlert('请确定你已经登陆了教务系统')
    return 'do not continue'
  }
}
