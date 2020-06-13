<template>
  <pre class="language-js"><code><slot /></code></pre>
</template>

<script>
export default {
  name: 'CodeHighlight',
}
</script>

<style>
code[class*='language-'],
pre[class*='language-'] {
  font-size: 0.9em;
}
</style>
