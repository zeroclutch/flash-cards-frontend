<template>
    <div class="box">
        <div class="title box-title">
            {{ getSide }}
        </div>
        <div class="description">
            {{ description }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        sides: {
            front: String,
            back: String,
        },
        defaultSide: String
    },
    data () {
        return {
            side: this.defaultSide || 'front'
        }
    },
    methods: {
        switchSide() {
            this.side = this.side === 'front' ? 'back' : 'front'
        }
    },
    computed: {
        getSide() {
            return this.sides[this.side]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>