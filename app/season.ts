/**
 * Holiday decorations (berries on the sprigs, stars and the "Felices fiestas"
 * pill) are shown automatically from November 1st to January 7th, Buenos Aires
 * time. Outside that window the page keeps the plain spring sprigs.
 */
export function isHolidaySeason(now: Date = new Date()): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Argentina/Buenos_Aires",
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);

  return month === 11 || month === 12 || (month === 1 && day <= 7);
}
