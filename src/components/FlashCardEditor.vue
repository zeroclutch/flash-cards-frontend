<!-- SECOND STEP in creating a deck -->
<template>
    <div class="card-editor">
        <h6 class="title is-6">Add flashcards</h6>
        <b-field label="Flashcard Front"
            :type='frontType'
            label-position="on-border"
            >
            <b-input v-model="currentCard.front"  :maxlength="maxLength"></b-input>
        </b-field>

        <b-field label="Flashcard Back"
            :type='backType'
            label-position="on-border">
            <b-input v-model="currentCard.back" :maxlength="maxLength"></b-input>
        </b-field>

        <b-button type="is-primary" v-on:click="$emit('add', currentCard)">Add Card</b-button>&nbsp;
        <b-button type="is-primary" inverted v-on:click="$emit('submit')">Continue</b-button>
        
        <!-- Current card list -->
        <section class="cards-holder columns is-multiline is-3 is-variable">
            <div class="preview-wrapper column is-4" v-bind:key="card.id" v-for="(card, index) in setInfo.cards">
                <box-3-d class="flash-card-preview card">
                    <div class="card-content">
                        <span class="front"><b class="has-text-primary">Front: </b> {{ card.front }}</span><br>
                        <span class="back" ><b class="has-text-primary">Back: </b> {{ card.back }}</span><br>
                    </div>
                    <footer class="card-footer">
                        <a v-on:click="$emit('edit', index)" class="card-footer-item"><b-icon type="is-primary" icon="edit"></b-icon></a>
                        <a v-on:click="$emit('delete', index)" class="card-footer-item"><b-icon type="is-danger" icon="trash-alt"></b-icon></a>
                    </footer>
                </box-3-d>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.card-editor {
    .cards-holder {
        margin-top: 2rem;
    }

    .flash-card-preview {
        padding: 0;
    }
    .preview-wrapper > * {
        padding: 0 !important;
    }
}
</style>

<script>
import Box3D from './Box3D.vue'
export default {
    name: 'FlashCardEditor',
    components: {
        Box3D
    },
    props: {
        setInfo: Object,
        cardIndex: Number,
    },
    data() {
        return {
            frontType: 'is-primary',
            backType: 'is-primary',
            maxLength: 200
        }
    },
    computed: {
        currentCard() {
            return this.setInfo.cards[this.cardIndex]
        }
    },
    methods: {
        validCards() {
            if (this.setInfo.name.length > this.maxLength) {
                this.frontType = 'is-danger'
                return false
            } else if (this.setInfo.description.length > this.maxLength) {
                this.backType = 'is-danger'
                return false
            } else {
                return true
            }
        },
        submitCards() {
            if(this.validCards()) {
                this.$emit('submit')
            }
        }
    }
}
</script>