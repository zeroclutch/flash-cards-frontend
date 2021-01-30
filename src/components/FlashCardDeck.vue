<!-- Represents the top of a flash card deck-->
<template>
    <div class="box">
        <h4 class="title is-h4">{{ title }}</h4>
        <p class="paragraph description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'FlashCardDeck',
    props: {
        title: String,
        description: String
    }
}
</script>

<style lang="scss" scoped>
    
</style>