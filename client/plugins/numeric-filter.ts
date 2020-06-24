import Vue from "vue"

const digitsFilter = (value: number) => {
  const digits = value < 10 ? 1 : 0
  return value.toLocaleString("de", { maximumFractionDigits: digits })
}

Vue.filter("digits", digitsFilter)
