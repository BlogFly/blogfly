<template>
    <div class="contact-form">
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="text" class="form-control form-control-no-border" id="exampleFormControlInput1" placeholder="Enter your name">
            </div>
            <div class="form-group email-form-group">
                <label for="exampleFormControlSelect1">Email</label>
                <input type="email" class="form-control form-control-no-border" id="exampleFormControlInput2" placeholder="name@example.com">
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Mobile</label>
                <input type="number" class="form-control form-control-no-border" id="exampleFormControlInput3" placeholder="02712345678">
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Comments</label>
                <textarea class="form-control form-control-no-border" id="exampleFormControlTextarea1" rows="3"></textarea>
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

.form-group {
    padding: 20px;
    margin: 0;
}

.btn-secondary {
    width: 100%;
}

.email-form-group {
    padding: 0 20px;
}

.form-group-btn {
    padding: 0 20px;
    font-weight: bold;
}

button {
    background-color: #eebc62;
    font-weight: bold;
}

button:hover {
    color: #fff;
}

textarea {
    height: 220px;
}

.contact-form {
    padding-top: 50px;
}

.form-control-no-border:focus {
    border-color: #ccc;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}

label {
    color: #eebc62;
}
</style>
