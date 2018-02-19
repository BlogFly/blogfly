<template>
  <div class="home">
    This is the home page!
  </div>
</template>

<script>

import { db } from '../db'

export default {
  name: 'home',
  data() {
    return {
      source: ''
    }
  },
  firebase: {
    blogposts: {
      source: db.ref('blogposts'),
      cancelCallback(err){
        console.log(err);
      }
    }
  },
  methods: {
    getBlogs: function() {
        this.$http.get('https://www.googleapis.com/blogger/v3/blogs/6368604020124655232?key=AIzaSyDhuNvnWrLjFdl1IoDS5jDGNedEjnbUrn0')
        .then(response => {
            this.blogs = response.body.blogs;
        });
    }
  },
  created: function(){
      this.getBlogs();
      console.log()
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
