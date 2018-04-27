<template>
    <div>
        <div>hello</div>
        <button v-on:click="getArticle()">query</button>
    </div>
</template>

<script>
    export default {
        name: "Test",

        methods: {
            getArticle() {
                var url =  'article/detail/100';
                this.$axios.get(url).then(function (response) {
                    console.log(response);
                }).catch(function (response) {
                    console.log(response);
                });
            }

        }

    }
</script>