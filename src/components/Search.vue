<template>
    <div class="search">
        <div class="input-group stylish-input-group">
            <input type="text" v-on:keyup.enter="emitTitle" class="form-control search-input" placeholder="Search">
            <span class="input-group-addon">
                <button type="submit">
                    <span class="glyphicon glyphicon-search"></span>
                </button>
            </span>
        </div>

    </div>
</template>

<script>

export default {
    name: 'search',
    methods: {
        emitTitle: function(evt) {
            this.$emit("searchByTitleClick", evt.target.value);
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
    margin: 0 10px;
}

a {
    color: #42b983;
}

.search-btn {
    border: 1px solid #000;
    width: 20%;
    text-align: center;
    background-color: lightgray;
    margin-left: 5px;
    cursor: pointer;
    user-select: none;
}

.search-input {
    display: flex;
}

#imaginary_container {
    margin-top: 20%;
    /* Don't copy this */
}

.stylish-input-group .input-group-addon {
    background: white !important;
}

.stylish-input-group .form-control {
    border-right: 0;
    box-shadow: 0 0 0;
    border-color: #ccc;
}

.stylish-input-group button {
    border: 0;
    background: transparent;
    user-select: none!important;
}
.search{
    padding-top:25px
}
</style>
