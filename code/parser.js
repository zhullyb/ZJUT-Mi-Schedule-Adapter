function scheduleHtmlParser(json_str) {
  courses_json = JSON.parse(json_str)
  const courseInfos = []

  for (course of courses_json) {
    const name = course.kcmc
    const position = course.cdmc
    const teacher = course.xm
    const weeksTemp = course.zcd.replace('周', '').split(',')
    const weeks = []
    weeksTemp.forEach(w => {
      w = w.split('-')
      if (w.length === 1) {
        weeks.push(parseInt(w))
      } else {
        for (let i = parseInt(w[0]); i <= parseInt(w[1]); i += 1) {
          weeks.push(i)
        }
      }
    })
    const day = parseInt(course.xqj)
    const sectionsTemp = course.jcor.split('-')
    const sections = []
    if (sectionsTemp.length == 1) {
      sections.push(parseInt(sectionsTemp[0]))
    } else {
      for (let i = parseInt(sectionsTemp[0]); i <= parseInt(sectionsTemp[1]); i += 1) {
        sections.push(i)
      }
    }

    courseInfos.push({
      name,
      teacher,
      position,
      weeks,
      day,
      sections,
    })
  }

  return courseInfos
}