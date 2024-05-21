/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {
  SUN = 'Sun',
  MON = 'Mon',
  TUE = 'Tue',
  WED = 'Wed',
  THR ='Thr',
  FRI = 'Fri',
  SAT ='Sat',
}


function isWeekend(day: Week): boolean {
   return day === Week.SAT || day === Week.SUN;
}

export {};