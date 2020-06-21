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
      {{ label }}<span v-if="required" class="text-yellow-700"> *</span>
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
      :placeholder="label + (required ? ' *' : '')"
      :required="required"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

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

@Component
export default class FormInput extends Vue {
  @Prop(String) readonly classesElement?: String
  @Prop(String) readonly classesInput?: String
  @Prop({ type: String, required: true }) readonly name!: String
  @Prop({ type: String, required: true }) readonly label!: String
  @Prop({ type: Boolean, default: false }) readonly required!: Boolean
  @Prop({ type: String, default: FormInputType.TEXT }) readonly type!: FormInputType

  FormInputType = FormInputType

  get idString(): string {
    return `form-input-${this.name}`
  }
}
</script>
