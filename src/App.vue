<template>
    <div id="app">
        <IHeader></IHeader>
        <IContainer></IContainer>
        <IFoot></IFoot>
    </div>
</template>
<script>
    import IHeader from './Header.vue'
    import IContainer from './Container.vue'
    import IFoot from './Foot.vue'
    export default {
        name: 'app',
        components: {
           IHeader,IContainer,IFoot
        },
    }

</script>

<style>

</style>