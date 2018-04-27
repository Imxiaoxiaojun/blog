<template>
    <div id="app">
        <!--<Test></Test>-->
        <IHeader></IHeader>
        <IContainer></IContainer>
        <IFoot></IFoot>
    </div>
</template>
<script>
    import IHeader from './Header.vue'
    import IContainer from './Container.vue'
    import IFoot from './Foot.vue'
    import Test from './Test.vue'
    export default {
        name: 'app',
        data: {

        },
        components: {
           IHeader,IContainer,IFoot,Test
        },

    }

</script>

<style>

</style>