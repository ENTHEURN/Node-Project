<template>
  <div class="hello">
    <table class="border-collapse m-5 mr-5 border border-slate-400 min-w-full divide-y divide-gray-400">
      <thead>
        <tr>
          <th class="border border-slate-400">ID</th>
          <th class="border border-slate-400">First name</th>
          <th class="border border-slate-400">Last name</th>
          <th class="border border-slate-400">Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-400">001</td>
          <td class="border border-slate-400">Pro theun</td>
          <td class="border border-slate-400">kak</td>
          <td class="border border-slate-400">200</td>
        </tr>
        <tr>
          <td class="border border-slate-400">001</td>
          <td class="border border-slate-400">Pro theun</td>
          <td class="border border-slate-400">kak</td>
          <td class="border border-slate-400">200</td>
        </tr>
        <tr>
          <td class="border border-slate-400">001</td>
          <td class="border border-slate-400">Pro theun</td>
          <td class="border border-slate-400">kak</td>
          <td class="border border-slate-400">200</td>
        </tr>
        <tr>
          <td class="border border-slate-400">001</td>
          <td class="border border-slate-400">Pro theun</td>
          <td class="border border-slate-400">kak</td>
          <td class="border border-slate-400">200</td>
        </tr>
        <tr>
          <td class="border border-slate-400">001</td>
          <td class="border border-slate-400">Pro theun</td>
          <td class="border border-slate-400">kak</td>
          <td class="border border-slate-400">200</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
