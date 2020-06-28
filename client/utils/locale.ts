/**
 * Convert a number to a locale string
 * @param value The number to convert
 * @param locale The locale (default: "de")
 * @param minDigits The minimumFractionDigits (default: 2)
 * @param maxDigits The maximumFractionDigits (default: 2)
 */
export const localeNumberFormat = (value: number, locale = "de", minDigits = 2, maxDigits = 2) => {
  return value.toLocaleString(locale, { minimumFractionDigits: minDigits, maximumFractionDigits: maxDigits })
}
