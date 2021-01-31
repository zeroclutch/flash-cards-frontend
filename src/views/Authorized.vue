<template>
    <div></div>
</template>

<script>
export default {
    name: 'Authorized',
    components: {

    },
    mounted() {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const accessToken = fragment.get('access_token');
        const maxAge = fragment.get('expires_in');
        let cookie = `access-token=${encodeURIComponent(accessToken)}; max-age=${maxAge}`
        this.$root.token = accessToken
        document.cookie = cookie
        window.location
    }
}
</script>