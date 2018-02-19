<template>
  <div class="banner">
    <div class="banner-details">
        <h1>Life of a Blogfly!</h1>
        <p>This is just a life of a Blogfly</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner'
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

.banner-details{
    background-image: url(../../assets/images/flyfly.jpg);
    background-position: center;
    background-repeat:no-repeat;
    background-size: cover;
    /*border:1px solid red;*/
    height: 400px;
    margin-bottom:50px;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
}
h1{
    margin-top:0
}

</style>
