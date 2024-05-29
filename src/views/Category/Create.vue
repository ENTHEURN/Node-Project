<template>
  <div class="container mx-auto mt-4">
    <h1 class="mb-4 text-2xl font-bold">Create Category</h1>
    <form @submit.prevent="createCategory" class="space-y-4">
      <div>
        <label for="category-name" class="block mb-2 font-medium">Name</label>
        <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="category-name" v-model="category.name" required />
      </div>
      <div>
        <label for="category-description" class="block mb-2 font-medium">Description</label>
        <textarea class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="category-description" v-model="category.description" required></textarea>
      </div>
      <button type="submit" class="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Create Category</button>
    </form>
  </div>
</template>
  <script>
  import axios from 'axios';
  
  export default {
    name:'create-category',
    data() {
      return {
        category: {
          name: '',
          description: '',
        },
      };
    },
    methods: {
      async createCategory() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/category/create', this.category);
          if (response.data.success) {
            this.$router.push('/categories');
          }
        } catch (error) {
          console.error('Error creating category:', error);
        }
      },
    },
  };
  </script>
  