<template>
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path :class="{'hidden': isOpen, 'inline-flex': !isOpen}" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  <path :class="{'hidden': !isOpen, 'inline-flex': isOpen}" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div class="flex-shrink-0 flex items-center">
              <a href="#" class="text-xl font-bold text-gray-900">Tailwind</a>
            </div>
            <div class="hidden md:ml-6 md:flex md:space-x-8">
              <a href="/" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Home</a>
              <a href="/about" class="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">About</a>
              <a href="/categories" class="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">Category</a>
              <a href="/services" class="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">Services</a>
              <a href="/contact" class="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
  
      <div :class="{'block': isOpen, 'hidden': !isOpen}" class="md:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <a href="#" class="text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-indigo-500 bg-indigo-50 text-base font-medium">Home</a>
          <a href="#" class="text-gray-500 hover:text-gray-700 hover:bg-gray-50 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">About</a>
          <a href="#" class="text-gray-500 hover:text-gray-700 hover:bg-gray-50 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">Services</a>
          <a href="#" class="text-gray-500 hover:text-gray-700 hover:bg-gray-50 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
</style>