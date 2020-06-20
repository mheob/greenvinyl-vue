<template>
  <div class="py-12 my-12 text-2xl text-center lg:pt-48">
    <h1 class="text-5xl">
      Oops …<br />
      an error occurred :(<br />
      We're sorry about that!
    </h1>
    <p class="mt-10 text-2xl">
      The Error Code for more information is:<br />
      <code class="text-gray-700">{{ `${error.statusCode} - ${error.message}` }}</code>
    </p>
    <p class="mt-6 text-2xl">
      Go back to <a class="text-red-600 hover:text-red-800 active:text-red-800" href="/">safety, running page</a>!
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  // eslint-disable-next-line vue/require-prop-types
  props: ["error"]
})
</script>
