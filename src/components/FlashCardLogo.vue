<template>
    <KinesisContainer>
        <KinesisElement class="flashcard-card box" :strength="10" type="depth" >
            <div class="wrapper">
            <KinesisElement class="title box-title" :strength="10" type="depth">
                <span class="has-text-primary">FLASH<span class="has-text-primary-light">.ME</span> </span>
            </KinesisElement>
            <KinesisElement class="title box-subtitle is-3" :strength="10" type="depth">
                <span class="has-text-light">the better way to remember.</span>
            </KinesisElement>
            </div>
        </KinesisElement>
    </KinesisContainer>
</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'

export default {
    name: 'FlashCardLogo',
    components: {
        KinesisContainer,
        KinesisElement
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>

.box-title {
    font-size: 85px;
}

.flashcard-card {
    height: 300px;
    width: 500px;
    position: relative;       
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $family-secondary;
    margin: 0 auto;
}

.box-subtitle {
    font-size: 0.75rem;
    font-family: $family-primary;
    color: $light;
}

.hoverable {
    cursor: pointer;
}
</style>