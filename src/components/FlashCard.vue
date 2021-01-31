<template>
    <KinesisContainer  v-on:click="flip">
        <KinesisElement class="flashcard-card box hoverable"  v-on:click="flip" :strength="10" type="depth" >
            <KinesisElement class="title box-title is-vertical-align"  v-on:click="flip" :strength="10" type="depth">
                <span v-if="!loading"> {{ content }} </span>
                <b-skeleton size="is-large" :active="loading"></b-skeleton>
            </KinesisElement>
            <KinesisElement class="card-footer" :strength="10" type="depth">
                <span class="tag is-medium is-primary-light">
                {{ (side || '').toUpperCase() }}
                </span>
            </KinesisElement>
        </KinesisElement>
    </KinesisContainer>
</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'

export default {
    name: 'FlashCard',
    props: {
        content: String,
        loading: Boolean,
        side: String,
    },
    components: {
        KinesisContainer,
        KinesisElement
    },
    data () {
        return {
            timeElapsed: 0
        }
    },
    methods: {
        flip() {
            this.$emit('flip', this.content)
        }
    },
    computed: {
    },
    mounted() {
        this.timeElapsed = Date.now()
    },
    beforeDestroy() {
        this.$emit('studied', this.timeElapsed)
    }
}
</script>

<style lang="scss" scoped>

.flashcard-card {
    min-height: 300px;
    min-width: 500px;
    position: relative;       
    display: flex;
    align-items: center;
   justify-content: center;
}

.box-title {
    width: 100%;
    color: $primary-dark;
}

.card-footer {
    display:block;
    position: absolute;
    bottom: calc(0% + 1rem);
    font-size: 0.75rem;
    text-align: right;
}

.hoverable {
    cursor: pointer;
}
</style>