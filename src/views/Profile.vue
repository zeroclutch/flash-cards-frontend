<template>
  <div>
    <div class="hero is-medium is-link">
      <div class="hero-body">
        <p class="title">
          {{ username }}
        </p>
        <p class="subtitle">
          {{ bio }}
        </p>
      </div>
    </div>
    <section class="cards-wrapper">
      <h3 class="title is-3">My sets</h3>
      <div class="columns cards-holder">
        <FlashCardDeck v-bind:key="set.title" v-for="set in sets" :title="set.title" :description="set.description" />
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
</style>

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