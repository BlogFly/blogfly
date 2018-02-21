<template>
    <div class="fltr">
        <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Archive post
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a href="#">Latest post</a>
                </li>
                <li>
                    <a href="#">By Date</a>
                </li>
                <li>
                    <a href="#">By subjects</a>
                </li>
                <li>
                    <a href="#">Most viewed</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'fltr'
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
    display: block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
.filter{
    width:100%;
}
.btn-group{
    width:100%;
}
.btn-group>.btn:first-child {
    width: 100%;
}
</style>
