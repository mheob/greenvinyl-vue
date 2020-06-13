<template>
  <div class="text-2xl error-page">
    <h1>
      Oops …<br />
      an error occurred :(<br />
      We're sorry about that!
    </h1>
    <p>Go back to <a href="/">safety, running page</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
}

.error-page h1 {
  margin-bottom: 3rem;
  font-size: 3rem;
}

.error-page p {
  font-size: 1.5rem;
}

.error-page a {
  color: red;
  text-decoration: none;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
