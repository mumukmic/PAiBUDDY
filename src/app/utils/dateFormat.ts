const THAI_DAYS = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
const THAI_MONTHS = [
  'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม',
];

/** Format: "จันทร์ที่ 22 มีนาคม 2569" */
export function formatHeaderDate(date: Date): string {
  return `${THAI_DAYS[date.getDay()]}ที่ ${date.getDate()} ${THAI_MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

/** Format: "22 มีนาคม 2569" */
export function formatThaiDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return `${d.getDate()} ${THAI_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}
