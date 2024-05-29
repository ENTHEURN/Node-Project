<template>
  <div class="home">
    <TableView />
  </div>
</template>

<script>
// @ is an alias to /src
import TableView from "@/components/TableView.vue";

export default {
  name: "HomeView",
  components: {
    TableView,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.$axios
        .get("/users")
        .then((response) => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.logo {
  width: 130px;
}

</style>