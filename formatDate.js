//ДД/ММ/ГГГГ ЧЧ:ММ
export function formatDateToRU(date) {
  return `
 ${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}/${date.getFullYear()} ${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
  `;
}

//ММ-ДД-ГГГГ ЧЧ:ММ
export function formatDateToUS(date) {
  return `
 ${date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}-${
   date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
 }-${date.getFullYear()} ${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
  `;
}
