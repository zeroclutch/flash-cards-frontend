<!-- SECOND STEP in creating a deck -->
<template>
    <div class="card-editor">
        <h6 class="is-title is-6">Add flashcards</h6>
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

        <b-button type="is-primary" v-on:click="$emit('add', currentCard)">Add Card</b-button>
        <b-button type="is-primary" inverted v-on:click="submitCards(setInfo)">Continue</b-button>
        
        <!-- Current card list -->
        <section class="cards-holder columns is-multiline is-3 is-variable">
            <div class="flash-card-preview card column is-4" v-bind:key="card.id" v-for="(card, index) in setInfo.cards">
                <div class="card-content">
                    <span class="front">{{ card.front }}</span><br>
                    <span class="back" >{{ card.back }}</span><br>
                    <span class="back" >{{ card.id }}</span>
                </div>
                <footer class="card-footer">
                    <a v-on:click="$emit('edit', index)" class="card-footer-item"><b-icon type="is-primary" icon="edit"></b-icon></a>
                    <a v-on:click="$emit('delete', index)" class="card-footer-item"><b-icon type="is-danger" icon="trash-alt"></b-icon></a>
                </footer>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .cards-holder {
        margin-top: 2rem;
    }

    .flash-card-preview {
        padding: 0;
    }
</style>

<script>
export default {
    name: 'FlashCardEditor',
    props: {
        setInfo: Object,
        cardIndex: Number,
    },
    data() {
        return {
            frontType: 'is-info',
            backType: 'is-info',
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