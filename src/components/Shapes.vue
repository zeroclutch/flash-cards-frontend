<template>
<div class="shapes">
    <KinesisElement :key="strength" v-for="strength in strengths" :strength="strength" type="depth" class="massive">
        <div class="shape circle" :style="getStyle()"></div>
    </KinesisElement>
</div>
</template>

<style lang="scss">
    .shape {
        background-color: $primary-light;
        position: absolute;
    }
    .circle {
        border-radius: 100%;
    }
  .shapes {
    z-index: 1;
    height: 0;
    position: absolute;
  }
</style>

<script>
import { KinesisElement } from 'vue-kinesis'
export default {
    name: 'Shapes',
    components: {
        KinesisElement
    },
    props: {
        height: Number,
        max: Number
    },
    data() {
        return {
            strengthList: [12, 14, -12, 9, -2, 3, -8, -5, -14, -15, 6, -10, 1, 2, -9, -3, -4, 10, 15],
            styles: []
        }
    },
    methods: {
        getStyle() {
            let size = Math.floor(Math.random() * 100 + 20)
            let x = Math.floor(Math.random() * 1.5 * (window.innerWidth - 500))
            let y = Math.floor(Math.random() * this.height )
            let style = { height: `${size}px`, width: `${size}px`, left: `${x}px`, top: `${y}px`}
            return style
        },
    },
    computed: {
        strengths() {
            return this.strengthList.slice(0, this.max || this.strengthList.length)
        }
    }
}
</script>