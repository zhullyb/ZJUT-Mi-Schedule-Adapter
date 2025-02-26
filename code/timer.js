// SPDX-License-Identifier: MIT

async function scheduleTimer({
} = {}) {
  return {
    totalWeek: 16,
    startSemester: '',
    startWithSunday: false,
    showWeekend: false,
    forenoon: 5,
    afternoon: 4,
    night: 3,
    sections: [
      {
        section: 1,
        startTime: '08:00',
        endTime: '08:45',
      },
      {
        section: 2,
        startTime: '08:55',
        endTime: '09:40',
      },
      {
        section: 3,
        startTime: '09:55',
        endTime: '10:40',
      },
      {
        section: 4,
        startTime: '10:50',
        endTime: '11:35',
      },
      {
        section: 5,
        startTime: '11:45',
        endTime: '12:30',
      },
      {
        section: 6,
        startTime: '13:40',
        endTime: '14:15',
      },
      {
        section: 7,
        startTime: '14:25',
        endTime: '15:10',
      },
      {
        section: 8,
        startTime: '15:25',
        endTime: '16:10',
      },
      {
        section: 9,
        startTime: '16:20',
        endTime: '17:05',
      },
      {
        section: 10,
        startTime: '18:30',
        endTime: '19:15',
      },
      {
        section: 11,
        startTime: '19:25',
        endTime: '20:10',
      },
      {
        section: 12,
        startTime: '20:20',
        endTime: '21:05',
      },
    ],
  }

}