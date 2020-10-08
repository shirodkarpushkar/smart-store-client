---
to: "src/router/views/<%= h.inflection.dasherize(name) %>.vue"
---
<%
  const fileName = h.inflection.dasherize(name)
  const importName = h.inflection.camelize(fileName.replace(/-/g, '_'))
%><script>


export default {
  page: {
    title: '<%= importName %>',
    meta: [{ name: 'description', content: '<%= importName %>' }],
  },
  components: {  }
}
</script>

<template>
  <div>
    <%= h.inflection.titleize(name.replace(/-/g, '_')) %>
  </div>
</template>
<%

if (useStyles) { %>
<style scoped>

</style>
<% } %>
