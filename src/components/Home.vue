<template>
  <div class="home">
    <div class="title">
      <h5>Our Latest Blog</h5>
    </div>
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
        this.$http.get('https://www.googleapis.com/blogger/v3/blogs/6368604020124655232?key=AIzaSyDH9lNHLS17CKILohCrOqxQOqhvorwbKck')
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
.title{
  width:100%;
  border-bottom:1px solid #ccc;
}
.home{
  width:100%;
  margin-left:5%;
}
h5{
  font-weight:bold;
  text-align: center;
  font-size:1.5vw;
}

</style>
