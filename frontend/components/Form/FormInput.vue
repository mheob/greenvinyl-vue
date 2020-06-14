<template>
  <div v-if="type === 'checkbox'" class="form-element-checkbox" :class="classesElement">
    <label>
      <input :id="idString" class="form-checkbox" :class="classesInput" :name="name" :type="type" /> {{ label }}
    </label>
  </div>

  <div v-else class="form-element-default" :class="classesElement">
    <label :for="idString" class="sr-only">{{ label }}</label>
    <input :id="idString" class="form-input" :class="classesInput" :name="name" :type="type" :placeholder="label" />
  </div>
</template>

<script>
export default {
  props: {
    classesElement: {
      type: String,
      default: ""
    },
    classesInput: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: null,
      required: true
    },
    label: {
      type: String,
      default: null,
      required: true
    },
    type: {
      type: String,
      default: "text"
    }
  },

  computed: {
    idString() {
      return `form-input-${this.name}`
    }
  }
}
</script>
