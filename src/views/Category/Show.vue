<template>
  <div class="container mx-auto mt-4">
    <div v-if="category" class="bg-white border border-gray-300 rounded-md shadow-sm ">
      <div class="px-4 py-3 border-b border-gray-300">
        <h2 class="text-xl font-medium">{{ category.name }}</h2>
        <div class="flex items-center justify-end space-x-2">
          <router-link :to="{ name: 'edit-category', params: { id: category.id } }" class="inline-block px-3 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">Edit</router-link>
          <router-link to="/categories" class="inline-block px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Back to Categories</router-link>
        </div>
      </div>
      <div class="p-4">
        <p class="mb-2"><strong>Description:</strong> {{ category.description }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ShowCategory',
  props: ['id'],
  data() {
    return {
      category: null,
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
  },
};
</script>

