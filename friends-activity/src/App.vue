<template>
  <main>
    {{name}} is mounted!
  </main>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style scoped>
main {
  border: 2px dashed #1864ab;
  height: 100%;
}
</style>