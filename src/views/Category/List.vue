<template>
  <div class="container mx-auto mt-4 mb-4">
    <h1 class="mb-4 text-2xl font-bold">Create Category</h1>
    <router-link
      to="/categories/create"
      class="inline-block px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">New Category</router-link>
      <div class="flex flex-row flex-wrap justify-start">
  <div
    class="card-app w-full md:w-1/3 p-3"
    v-for="category in categories"
    :key="category.id">
    <div
      class="block rounded-lg bg-white mt-3 shadow-lg text-center text-surface border border-gray-300 rounded-md shadow-sm dark:bg-surface-dark dark:text-white">
      <div class="p-6">
        <h5 class="mb-2 text-xl font-medium leading-tight">
          Name: {{ category.name }}
        </h5>
        <p class="mb-4 text-base">Description: {{ category.description }}</p>
        <div class="mt-4 space-x-2">
          <router-link
            :to="{ name: 'edit-category', params: { id: category.id } }"
            class="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >Edit</router-link>
          <button
            class="inline-block px-3 py-2 bg-transparent hover:bg-red-500 text-white-700 border border-green-500 text-sm hover:border-transparent rounded font-medium text-black bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            @click="deleteCategory(category.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  name: "list-category",
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/category/list"
        );
        console.log(response);
        if (response.data.success) {
          this.categories = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async deleteCategory(categoryId) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/category/delete/${categoryId}`
        );
        if (response.data.success) {
          this.fetchCategories();
        }
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    },
  },
};
</script>
  