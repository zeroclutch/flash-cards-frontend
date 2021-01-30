<template>
    <section class="has-text-centered is-vertical-aligned is-fullwidth">
        <h1 class="title is-1">{{ errorCode || 404 }}</h1>
        <h3 class="title is-4">{{ errorMessage || 'The page could not be loaded.' }}</h3>
    </section>
</template>

<script>
export default {
    name: 'NotFound',
    props: {
        errorCode: Number,
        errorMessage: String,
    }
}
</script>

<style lang="scss" scoped>
    .is-fullwidth {
        width: 100vw;
    }
    .is-vertical-aligned {
        top: 50%;
        position: absolute;
        translate: transform(-50%);
    }
</style>