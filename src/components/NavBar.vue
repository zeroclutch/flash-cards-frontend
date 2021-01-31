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
            <b-navbar-item v-if="$root.isLoggedIn()" tag="router-link" :to="{ path: '/profile/user2432' }">
                Profile
            </b-navbar-item>
            <b-navbar-item v-if="$root.isLoggedIn()" tag="router-link" :to="{ path: '/study/set2343' }">
                Study
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button tag="router-link" :to="{ path: '/create' }" type="is-primary" icon="plus">
                        <strong>Create Set</strong>
                    </b-button>
                    <b-button tag="a" href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=591191830884-iesl69sb9n8hukk9jldkhjjbdmgf2hpi.apps.googleusercontent.com&redirect_uri=http%3A%2F%2F127.0.0.1%3A5000%2Fgoogle_login%2Fgoogle%2Fauthorized&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&state=uy2hFn1JnEGWywL4ETOzhUSnMW59GK&flowName=GeneralOAuthFlow" type="is-primary" inverted icon="plus">
                        <strong>Log in</strong>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
