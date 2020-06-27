import Vue from "vue"

const digitsRangeFilter = (value: number) => {
  const digits = value < 10 ? 1 : 0
  return value.toLocaleString("de", { maximumFractionDigits: digits })
}
Vue.filter("digitsRange", digitsRangeFilter)

const digitsFilter = (value: number, digits: number) => {
  return value.toLocaleString("de", { minimumFractionDigits: digits, maximumFractionDigits: digits })
}
Vue.filter("digits", digitsFilter)
