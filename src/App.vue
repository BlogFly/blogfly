<template>
  <div id="app">
    <div class="main-banner">
      <Banner></Banner>
    </div>
    <div class="main-container">
      <div class="main-blog">
        <Home v-bind:title="title"></Home>
      </div>
      <div class="sidebar">
        <div class="search-field">
          <Search v-on:searchByTitleClick="searchByTitle"></Search>
        </div>
        <div class="filter-field">
          <Filters></Filters>
        </div>
        <div class="contact-form">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'
import Search from './components/Search'
import Filters from './components/Filters'
import Banner from './components/Banner'
import ContactForm from './components/ContactForm'
export default {
  name: 'app',
  data() {
    return {
      title: ""
    }
  },
  components: {
    Banner,
    Home,
    Search,
    Filters,
    ContactForm
  },
  methods: {
    searchByTitle: function(title) {
      this.title = title;
    }
  }
}
</script>
<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 100%;
}

.sidebar {
  /*border: 2px solid red;*/
  width: 20%;
  margin-left: 50px;
  border: 1px solid #b7b7b7;
  height: 50vh;
  margin-top: 48px;
}

.main-blog {
  /*border: 2px solid blue;*/
  width: 75%;
  display: flex;
  justify-content: center;
}

.search-field {
  padding: 20px;
}

.filter-field {
  padding: 20px;
}

.dropdown-menu {
  text-align: center;
  width: 100%;
}

.main-container {
  display: flex;
}
</style>
