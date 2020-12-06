import Vue from 'vue'

const uppercaseFirstCharacterFilter = (value: string) => {
  return value[0].toUpperCase() + value.slice(1)
}

Vue.filter('upperFirstChar', uppercaseFirstCharacterFilter)
