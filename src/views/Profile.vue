<template>
  <div>
    <div class="hero">
      <div class="title">
        {{ username }}
      </div>
      <div class="title is-3">
        {{ bio }}
      </div>
      <section class="cards-wrapper">
       <div class="columns cards-holder">
        <div class="sets">
          <FlashCardDeck v-bind:key="set" v-for="set in sets" :title="set.title" :description="set.description" />
        </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import FlashCardDeck from '@/components/FlashCardDeck.vue'
export default {
  name: 'Profile',
  components: {
    FlashCardDeck
  },
  data() {
    return {
      sets: [{
        title: 'Title',
        description: 'Description'
      }],
      username: 'User',
      bio: 'I am a 20 year old CS student.'
    }
  },
  mounted() {
    console.log(this.sets)
  }
}
</script>