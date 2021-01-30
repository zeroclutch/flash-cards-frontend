<!-- Represents the top of a flash card deck-->
<template>
    <router-link class="box column is-3" to="">
        <h4 class="title is-h4">{{ title }}</h4>
        <p class="paragraph description">{{ description }}</p>
    </router-link>
</template>

<script>
export default {
    name: 'FlashCardDeck',
    props: {
        title: String,
        description: String,
        id: String
    }
}
</script>

<style lang="scss" scoped>
    
</style>