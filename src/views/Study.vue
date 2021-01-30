<template>
  <div>
    <div class="hero is-medium is-link">
      <div class="hero-body">
        <p class="title">
            Now studying
        </p>
        <p class="subtitle">
            {{ $route.params.set }}
        </p>
      </div>
    </div>
    <section class="cards-wrapper">
      <div class="columns cards-holder">
      <div class="sets">
        <div class="flashcard-wrapper" v-on:click="flipCard()" >
            <FlashCard class="flashcard" :loading="loading" :side="side" :content="currentCardContent"/>
        </div>
        <b-button type="is-primary" :disabled="isFirstCard" v-on:click="skipForward(-1)">Previous</b-button>
        <b-button type="is-primary" :disabled="isLastCard" v-on:click="skipForward(1)">Next</b-button>
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
    }
    .sets {
        margin: 0 auto;
    }
</style>

<script>
import FlashCard from '@/components/FlashCard.vue'
export default {
  name: 'Study',
  components: {
    FlashCard
  },
  data() {
    return {
        defaultSide: 'front',
        side: 'front',
        deck: [
            {
                front: `What's the capital of France?`,
                back: `Paris`
            },
            {
                front: `What's the capital of England?`,
                back: `London`
            },
            {
                front: `What's the capital of Spain?`,
                back: `Madrid`
            },
            {
                front: `What's the capital of Japan?`,
                back: `Tokyo`
            },
            {
                front: `What's the capital of North Korea?`,
                back: `Pyongyang`
            },
        ],
        index: 0,
        loading: true
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
      }
  },
  methods: {
      skipForward(index) {
          if(this.isInRange(this.index + index, 0, this.deck.length - 1)) {
            this.side = this.defaultSide
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
      }
  },
  mounted() {
      setTimeout(function() {
          this.loading = false
      }.bind(this), 500)
      // Fetch deck based on $route.params.id, or redirect to deck selection (profile)
      console.log(this.currentCard)
      // get defaultSide (either from params or from settings (maybe add configuration panel before start))
  }
}
</script>