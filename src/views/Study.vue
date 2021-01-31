<template>
  <div class="study-holder">
    <section class="cards-wrapper">
      <div class="columns cards-holder">
        <div class="sets">
        <div class="title-holder title has-text-primary-dark">
          Studying <span class="has-text-primary">{{ title }}</span>
        </div>
        <div class="flashcard-wrapper" v-on:click="flipCard()" >
            <FlashCard class="flashcard" :loading="loading" :side="side" :content="currentCardContent"/>
        </div>
        <div class="flashcard-after">
          CLICK CARD TO FLIP
        </div>
      </div>
      
        <div class="footer-buttons columns">
          <div class="column is-4">
          <b-button type="is-danger">End session</b-button>
          </div>
          
          <div class="column is-4 session-info has-text-centered">
            <strong>
              <span class="has-text-primary">
                {{ correctCards }} correct,
              </span>
              <span class="has-text-primary-light">
                {{ incorrectCards }} incorrect,
              </span>
              <span class="has-text-primary-dark">
                {{ remainingCards }} remaining
              </span>
            </strong>
          </div>
          
          <div class="column is-4">
          <b-button type="is-primary" :disabled="isFirstCard" v-on:click="skipForward(-1)">Previous</b-button>
          &nbsp;
          <b-button type="is-primary" :disabled="isLastCard" v-on:click="skipForward(1)">Next</b-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
    .cards-wrapper {
        padding: 1rem;
        max-width: 750px;
        margin: 20px auto;
        margin-top: 20vh;
    }

    .flashcard-after {
      margin-top: 20px;
      color: $primary;
      text-align: right;
    }
    .sets {
        margin: 0 auto;
    }
    .footer-buttons {
        position: absolute;
        bottom: 0;
        background-color: white;
        width: 100vw;
        left: 0;
        margin: 0 !important;
        .session-info {
          line-height: 2.5rem;
        }
    }
</style>

<script>
import FlashCard from '@/components/FlashCard.vue'
export default {
  name: 'Study',
  components: {
    FlashCard,
  },
  data() {
    return {
        title: 'Capitals',
        description: 'About this set',
        defaultSide: 'front',
        side: 'front',
        deck: [
            {
                front: `What's the capital of France?`,
                back: `Paris`,
                _id: 'id'
            },
            {
                front: `What's the capital of England?`,
                back: `London`,
                _id: 'id'
                
            },
            {
                front: `What's the capital of Spain?`,
                back: `Madrid`,
                _id: 'id'
            },
            {
                front: `What's the capital of Japan?`,
                back: `Tokyo`,
                _id: 'id'
            },
            {
                front: `What's the capital of North Korea?`,
                back: `Pyongyang`,
                _id: 'id'
            },
        ],
        correctCards: 0,
        incorrectCards: 0,
        index: 0,
        loading: true,
        timeElapsed: Date.now()
    }
  },
  computed: {
      currentCard() {
          return this.deck[this.index]
      },
      isLastCard() {
          return this.index >= this.deck.length - 1
      },
      isFirstCard() {
          return this.index <= 0
      },
      currentCardContent() {
          return this.currentCard[this.side]
      },
      setId() {
          return this.$route.params.id
      },
      remainingCards() {
        return this.cards.length - this.index - 1
      }
  },
  methods: {
      skipForward(index) {
          if(this.isInRange(this.index + index, 0, this.deck.length - 1)) {
            this.side = this.defaultSide
            this.timeElapsed = Date.now()
            this.index += index
          } else {
            return {
                error: 'No more flashcards'
            }
          }
      },
      isInRange(x, min, max) {
          return x >= min && x <= max
      },
      flipCard() {
        this.side = this.side === 'front' ? 'back' : 'front'
      },
      studied(correct) {
        let cardId = this.currentCard.id
        fetch(`/api/flashcard/study/${this.setId}/${cardId}`, this.$root.getRequestOptions('POST', {
          timeElapsed: Date.now() - this.timeElapsed,
          correct
        }))
        .then(res => res.json())
        .catch(console.error)
      }
  },
  mounted() {
      fetch(`/api/sets/get/${this.setId}`, this.$root.getRequestOptions('GET'))
      .then(res => res.json())
      .then(json => {
        this.deck = json.deck || []
        this.title = json.title || 'Set Title'
        this.description = json.description || 'Description'
        this.defaultSide = json.defaultSide || 'front'
        this.loading = false
      })
      .catch(() => this.loading = false)
      //.catch(() => window.location = '/404')
      // Fetch deck based on $route.params.id, or redirect to deck selection (profile)
      console.log(this.currentCard)
      // get defaultSide (either from params or from settings (maybe add configuration panel before start))
  }
}
</script>