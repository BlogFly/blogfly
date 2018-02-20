<template>
  <div class="home">
    This is the home page!
    <div class="container">
      <ul>
        <li class="blah" v-for="post in posts">
          <h1>{{ post.title }}</h1>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { db } from '../db'

let blogsRef = db.ref('blogPosts')

export default {
  name: 'home',
  data() {
    return {
      posts: []
    }
  },
  firebase: {
    blogPosts: blogsRef
  },
  methods: {
    getBlogs: function() {
        this.$http.get('https://www.googleapis.com/blogger/v3/blogs/6368604020124655232/posts?key=AIzaSyDH9lNHLS17CKILohCrOqxQOqhvorwbKck')
        .then(response => {
            this.posts = response.body.items;
        });
    }
  },
  created: function(){
      this.getBlogs(); 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
