<template>
  <div v-if="type === FormInputType.CHECKBOX" class="form-element-checkbox" :class="classesElement">
    <label class="cursor-pointer">
      <input
        :id="idString"
        class="form-checkbox"
        :class="classesInput"
        :name="name"
        :type="FormInputType.CHECKBOX"
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

// See for more types https://www.w3schools.com/html/html_form_input_types.asp
export enum FormInputType {
  CHECKBOX = "checkbox",
  DATE = "date",
  EMAIL = "email",
  NUMBER = "number",
  PASSWORD = "password",
  RADIO = "radio",
  SEARCH = "search",
  TEL = "tel",
  TEXT = "text",
  URL = "url"
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
      type: String as () => FormInputType,
      default: FormInputType.TEXT
    }
  },

  data() {
    return { FormInputType }
  },

  computed: {
    idString(): string {
      return `form-input-${this.name}`
    }
  }
})
</script>
