<template>
  <div>
    <div class="hero is-medium is-primary">
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
      <h3 class="title is-3 has-text-left">My sets</h3>
      <div class="columns cards-holder">
        <router-link class="hoverable column is-4" :to="`/study/${set._id}`" v-for="set in sets" :key="set._id">
        <box-3-d  :strength="10" >
          <div class="content-wrapper">
            <h4 class="title is-h4">{{ set.title }}</h4>
            <p class="paragraph description">{{ set.description }}</p>
          </div>
        </box-3-d>
        </router-link>
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

 .content-wrapper {
   padding: 20px;
 }
</style>

<script>
import Box3D from '../components/Box3D.vue'
export default {
  name: 'Profile',
  components: {
    Box3D
  },
   data() {
    return {
      sets: [{
        title: 'Capitals',
        description: 'A cool set about capitals',
        _id: '6016d6e6ce16b9b1337ef314'
      },{
        title: 'OChem',
        description: 'A nice set about chemistry',
        _id: '6016d6e6ce16b9b1337ef314'
      },{
        title: 'Mandarin',
        description: 'A fun set about Mandarin',
        _id: '6016d6e6ce16b9b1337ef314'
      }],
      username: 'Edmund Zhi',
      bio: 'I\'m a 19 year old Molecular Biology major at UCLA.'
    }
  },
  mounted() {
    this.loading = true
    fetch(`/api/user/get/me`, this.$root.getRequestOptions('GET'))
      .then(res => res.json())
      .then(json => {
        this.username = json.username || 'User'
        this.bio = json.bio || 'I am a user'
        this.sets = json.sets || [] // may have to doubly parse 
        this.loading = false
      })
      .catch(() => this.loading = false)
      //.catch(() => window.location = '/404')
      // Fetch deck based on $route.params.id, or redirect to deck selection (profile)
      console.log(this)
      // get defaultSide (either from params or from settings (maybe add configuration panel before start))
  }
}
</script>