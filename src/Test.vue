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
          setCookie: function (cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            console.info(cname + "=" + cvalue + "; " + expires);
            document.cookie = cname + "=" + cvalue + "; " + expires;
            console.info(document.cookie);
          },

            getArticle() {
                // this.setCookie("vueCookieTest","test",1);
                this.$axios.get('api/article/detail/100')
                    .then(function (response) {
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })

               /* var url =  'api/article/detail/100';
                this.$axios.get(url).then(function (response) {
                    console.log(response);
                }).catch(function (response) {
                    console.log(response);
                });*/
            }


        }

    }
</script>
