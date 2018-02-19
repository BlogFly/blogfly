<template>
    <div class="contact-form">
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name">
            </div>
            <div class="form-group email-form-group">
                <label for="exampleFormControlSelect1">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Comments</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group form-group-btn">
                <button type="button" class="btn btn-secondary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'contact-form'
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
    margin: 0 10px;
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
.form-group{
    padding:20px;
    margin:0;
}
.btn-secondary{
    width:100%;
}
.email-form-group{
    padding:0 20px;
}
.form-group-btn{
    padding:0 20px;
}
</style>
