<template>
  <div class="container mx-auto my-8">
    <h1 class="text-2xl font-bold mb-4">Create Category</h1>
    <form @submit.prevent="createCategory" class="bg-white shadow-lg border border-gray-300 rounded-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
      <div class="mb-4">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category-name" type="text" placeholder="Enter category name" v-model="category.name" required>
      </div>
      <div class="mb-4">
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category-description" placeholder="Enter category description" v-model="category.description" required></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Create Category
        </button>
      </div>
    </form>
  </div>
</template>


<script>

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
          const response = await this.$axios.post('category/create', this.category);
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
  