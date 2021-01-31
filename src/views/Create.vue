<template>
    <div class="create">
        <b-steps
        v-model="activeStep"
        :is-steps-clickable="true"
        :has-navigation="false"
        :animated="true"
        is-rounded
        >
            <b-step-item step="1" :clickable="true" label="Edit Set Info" icon="edit"></b-step-item>
            <b-step-item step="2" :clickable="true" label="Add Cards" icon="plus"></b-step-item>
            <b-step-item step="3" :clickable="false" label="Confirm" icon="check"></b-step-item>
        </b-steps>
        
        <div class="title-holder title has-text-primary-dark">
          Creating <span class="has-text-primary">{{ setInfo.name }}</span>
        </div>

        <FlashCardDeckEditor v-on:continue="deckEditFinished" v-if="activeStep == 0" :set-info="setInfo"/>
        <FlashCardEditor v-on:delete="deleteCard"  v-on:edit="editCard" v-on:add="addCard" v-on:submit="cardsEditFinished" :cardIndex="cardIndex" v-else-if="activeStep == 1" :set-info="setInfo"/>
        <div class="success" v-else-if="creationSuccess === true">
            <!-- if success, display a nice message and redirect user to profile -->
            <h3 class="title has-text-primary">Go to your <a href="/profile">profile</a> to view your new set</h3>
        </div>
        <div class="error" v-else>
        </div>
    </div>
</template>

<script>
import FlashCardDeckEditor from '../components/FlashCardDeckEditor.vue'
import FlashCardEditor from '../components/FlashCardEditor.vue'

export default {
    name: 'Create',
    components: {
        FlashCardDeckEditor,
        FlashCardEditor,
    },
    data() {
        return {
            activeStep: 0,
            setInfo: {
                cards: [{
                    front: '',
                    back: '',
                    id: '123456'
                }],
                name: 'New set',
                description: ''
            },
            cardIndex: 0,
            creationSuccess: false
        }
    },
    computed: {
        currentCard() {
            return this.setInfo.cards[this.cardIndex]
        },
        setId() {
            return this.$route.params.id
        },
        createSetIdea() {
            const ADJECTIVES = ['zany', 'fun', 'wacky', 'smart', 'comical', 'serious', 'neat', 'disorganized', 'three-by-five', 'flashcard', 'silly', 'confusing']
            const NOUNS = ['octopi', 'rectangles', 'tomato juice', 'the 1970s', 'important lectures', 'current affairs', 'colorful shapes', 'Kanye West', 'remixes', 'informercials']
            let adjective = ADJECTIVES[Math.floor(ADJECTIVES.length * Math.random())],
                noun = NOUNS[Math.floor(NOUNS.length * Math.random())]
            return {
                adjective, noun
            }
        },
    },
    methods: {
        deckEditFinished(setInfo) {
            console.log(setInfo)
            this.activeStep = 1
        },
        cardsEditFinished(setInfo) {
            console.log(setInfo)
            this.saveSet()
            this.activeStep = 2
        },
        newBlankCard() {
            return {
                front: '',
                back: '',
                id: Math.floor(Math.random() * Date.now()).toString(32)
            }
        },
        addCard() {
            this.setInfo.cards.push(this.newBlankCard())
            this.goToLastCard()
        },
        editCard(index) {
            console.log(index)
            // sets index to current card
            this.cardIndex = index
        },
        deleteCard(index) {
            console.log(index)
            // deletes an element at an index
            this.setInfo.cards.splice(index, 1)
            this.goToLastCard()
            // display toast
            this.$buefy.toast.open({
                message: 'Deleted card!',
                type: 'is-danger',
                position: 'is-bottom',
            })
        },
        saveSet() {
            this.creationSuccess = true
            return fetch('/api/sets/create/me', this.$root.getRequestOptions('POST', this.setInfo))
            .then(res => res.json())
            .then(res => console.log(res))
            .then(() => this.activeStep = 3)
            .catch(() => this.activeStep = 3)
        },
        goToLastCard() {
            if(this.setInfo.cards.length === 0) {
                this.addCard()
            } else {
                this.cardIndex = this.setInfo.cards.length - 1
            }
        }
    },
    mounted() {
        this.description = `A ${this.createSetIdea.adjective} set about ${this.createSetIdea.noun}.`
    }
}
</script>

<style lang="scss" scoped>
    .create {
        max-width: 750px;
        padding: 20px;
        margin: 0 auto;
    }

</style>