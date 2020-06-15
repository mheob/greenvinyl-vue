<template>
  <div v-if="type === Type.CHECKBOX" class="form-element-checkbox" :class="classesElement">
    <label class="cursor-pointer">
      <input
        :id="idString"
        class="form-checkbox"
        :class="classesInput"
        :name="name"
        :type="Type.CHECKBOX"
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

// TODO: Add more (all) HTML input element types
export enum Type {
  CHECKBOX = "checkbox",
  MAIL = "mail",
  NUMBER = "number",
  TEL = "tel",
  TEXT = "text"
}

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
      type: String as () => Type,
      default: Type.TEXT
    }
  },

  computed: {
    idString(): string {
      return `form-input-${this.name}`
    }
  }
})
</script>
