export default function isEventOngoing(eventStringDate, startTime, endTime) {
  const eventStartDate = new Date(`${eventStringDate}T${startTime}`)
  const eventEndDate = new Date(`${eventStringDate}T${endTime}`)

  if (eventStartDate < Date.now()) return 'past'
  if (eventStartDate >= Date.now() && eventEndDate <= Date.now()) return 'ongoing'
  if (eventStartDate > Date.now()) return 'not_started'
}