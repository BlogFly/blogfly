<template>
  <div class="home">
    <div class="container">
      <div class="title">
        <h5>Our Latest Blog</h5>
      </div>
      <div class="default-posts" v-if="searchedPosts.length === 0">
        <ul>
          <li class="blah" v-for="post in posts">
            <h1>
              <a v-bind:href="post.url">{{ post.title }}</a>
            </h1>
            <p>{{ post.content | truncate(300) }}</p>
            <button v-on:click="deleteBlog">Delete Post</button>
          </li>
        </ul>
      </div>
      <div class="searched-posts" v-else-if="searchedPosts.length >= 1">
        <ul>
          <li class="blah" v-for="post in searchedPosts">
            <h1>
              <a v-bind:href="post.url">{{ post.title }}</a>
            </h1>
            <p>{{ post.content | truncate(300) }}</p>
            <button v-on:click="deleteBlog">Delete Post</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>

import { db } from '../db'

let blogsRef = db.ref('blogPosts')

export default {
  name: 'home',
  props: ["title"],
  data() {
    return {
      posts: [],
      searchedPosts: []
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
    },
    deleteBlog: function(post) {
      alert('This button would delet the selected blog.')
    },
    filterPostsByTitle: function(title) {
      this.searchedPosts = [];
      for (var i = 0; i < this.posts.length; i++) {
        var allThePosts = this.posts[i];
        var str = allThePosts.title;
        var lowCaseStr = str.toLowerCase();
        var lowCaseTitle = title.toLowerCase();
        if (lowCaseStr.search(lowCaseTitle) > -1) {
          this.searchedPosts.push(allThePosts);
        }
      }
      if (this.searchedPosts.length === 0) {
        alert('Your search returned no results');
      }
    }
  },
  created: function() {
    this.getBlogs();
  },
  watch: {
    title: function(title) {
      this.filterPostsByTitle(title);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {

  display: inline-block;
  border: 1px solid #b7b7b7;
  width: 100%;
  margin: 30px 0;
  padding: 10px 10px;
}

a {
  color: #42b983;
}

.title {
  width: 100%;
  border-bottom: 1px solid #ccc;
}

.home {
  width: 100%;
  margin-left: 5%;
}

h5 {
  font-weight: bold;
  text-align: center;
  font-size: 1.5vw;
}

.the-posts {
  height: 20px;
}

.container {
  width: 100%;
}
</style>
