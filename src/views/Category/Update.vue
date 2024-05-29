<template>
  <div class="container mx-auto mt-4">
    <h1 class="mb-4 text-2xl font-bold">Edit Category</h1>
    <form @submit.prevent="updateCategory" class="bg-white border border-gray-300 rounded-md shadow-sm p-4">
      <div class="mb-4">
        <label for="category-name" class="block font-medium text-gray-700 mb-2">Name</label>
        <input type="text" class="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" id="category-name" v-model="category.name" required />
      </div>
      <div class="mb-4">
        <label for="category-description" class="block font-medium text-gray-700 mb-2">Description</label>
        <textarea class="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" id="category-description" v-model="category.description" required></textarea>
      </div>
      <button type="submit" class="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Update Category</button>
    </form>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'edit-category',
    props: ['id'],
    data() {
      return {
        category: {
          name: '',
          description: '',
        },
      };
    },
    mounted() {
      this.fetchCategoryDetails();
    },
    methods: {
      async fetchCategoryDetails() {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/category/show/${this.id}`);
          if (response.data.success) {
            this.category = response.data.data;
          }
        } catch (error) {
          console.error('Error fetching category details:', error);
        }
      },
      async updateCategory() {
        try {
          const response = await axios.put(`http://127.0.0.1:8000/api/category/update/${this.id}`, this.category);
          if (response.data.success) {
            this.$router.push('/categories');
          }
        } catch (error) {
          console.error('Error updating category:', error);
        }
      },
    },
  };
  </script>
  