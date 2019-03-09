<template>
    <div>
        <slot name="title">
            <h1>Este es un componente hijo</h1>
        </slot>
        <slot name="body">

        </slot>

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