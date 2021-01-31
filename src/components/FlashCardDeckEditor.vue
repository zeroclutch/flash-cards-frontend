<!-- FIRST STEP in creating a deck -->
<template>
    <div class="deck-editor">
        <b-field label="Set Name"
            :type='nameType'
            label-position="on-border"
            >
            <b-input v-model="setInfo.name"  maxlength="120"></b-input>
        </b-field>

        <b-field label="Set Description (Optional)"
            :type='descriptionType'
            label-position="on-border">
            <b-input v-model="setInfo.description" maxlength="500" type="textarea"></b-input>
        </b-field>

        <b-button type="is-primary" v-on:click="deckEditFinished">Continue</b-button>
    </div>
</template>

<script>
export default {
    name: 'FlashCardDeckEditor',
    props: {
        setInfo: Object
    },
    data() {
        return {
            nameType: 'is-info',
            descriptionType: 'is-info',
        }
    },
    methods: {
        deckEditFinished() {
            if (this.setInfo.name.length > 120 || this.setInfo.name.length < 1) {
                this.nameType = 'is-danger'
            } else if (this.setInfo.description.length > 500) {
                this.descriptionType = 'is-danger'
            } else {
                this.$emit('continue', this.setInfo)
            }
        }
    }
}
</script>