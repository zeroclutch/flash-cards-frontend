<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="@/assets/logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        
        <template #start>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item v-if="authorized" tag="router-link" :to="{ path: '/profile/me' }">
                Profile
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button tag="router-link" :to="{ path: '/create' }" type="is-primary" icon="plus">
                        <strong>Create Set</strong>
                    </b-button>
                    <b-button tag="a" :href="href" type="is-primary" inverted icon="user">
                        <strong>{{ authorized ? 'Log out' : 'Log in' }}</strong>
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
      href() {
          let href
          if(!this.authorized) {
          let redirect_uri = `http://127.0.0.1:8080/authorized`
          href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=591191830884-iesl69sb9n8hukk9jldkhjjbdmgf2hpi.apps.googleusercontent.com&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&state=${this.$route.path}`
          } else {
              this.$root.logout()
              href = '/'
          }
        console.log(href)
        return href
      },
      authorized() {
        let row = document.cookie.split('; ').find(row => row.startsWith('token')),
        token
        if (row) {
            console.log(row)
            token = decodeURIComponent(row.split('=')[1])
        } else {
            return false
        }
        return token != undefined && token != 'null'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
