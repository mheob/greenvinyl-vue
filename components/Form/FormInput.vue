<template>
  <div v-if="type === 'checkbox'" class="form-element-checkbox" :class="classesElement">
    <label class="cursor-pointer">
      <input
        :id="idString"
        class="form-checkbox"
        :class="classesInput"
        :name="name"
        :type="type"
        :required="required"
      />
      {{ label }}
    </label>
  </div>

  <div v-else class="form-element-default" :class="classesElement">
    <label :for="idString" class="sr-only">{{ label }}</label>
    <input
      :id="idString"
      class="form-input"
      :class="classesInput"
      :name="name"
      :type="type"
      :placeholder="label"
      :required="required"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
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
    // TODO: Add a better validation for all form elements
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    }
  },
  computed: {
    idString(): string {
      return `form-input-${this.name}`
    }
  }
})
</script>
