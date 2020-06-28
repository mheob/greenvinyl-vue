/**
 * Validate the input for allowing only integer
 * @param event The event
 */
export function validateNumericInput(event: KeyboardEvent) {
  const element = event.target as HTMLInputElement
  if (
    /[0-9]/i.test(String.fromCharCode(event.keyCode)) &&
    (element.value.length < element.maxLength || element.maxLength === -1)
  ) {
    return true
  }
  event.preventDefault()
}
