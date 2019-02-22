<template>
    <div>
        <h1>Este es un componente hijo</h1>
        <local-component></local-component>
    </div>
</template>

<script>
import localComponent from "./localComponent"
export default{
    components:{
        localComponent: localComponent
    }
}
</script>

<style>

</style>