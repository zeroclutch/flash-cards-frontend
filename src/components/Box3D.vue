<template>
    <KinesisContainer>
        <KinesisElement class="box-3d box" :strength="strength" type="depth" >
            <slot></slot>
        </KinesisElement>
    </KinesisContainer>
</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'

export default {
    name: 'Box3D',
    props: {
        strength: Number
    },
    components: {
        KinesisContainer,
        KinesisElement
    },
}
</script>

<style lang="scss" scoped>
.box {
    padding: 0;
}
</style>