<template>
    <div></div>
</template>

<script>
export default {
    name: 'Authorized',
    components: {

    },
    mounted() {
        const fragment = new URLSearchParams(window.location.hash);
        const accessToken = fragment.get('access_token');
        const maxAge = fragment.get('expires_in');
        let cookie = `token=${encodeURIComponent(accessToken)}; max-age=${maxAge}; `
        document.cookie = cookie

        this.$root.currentToken = accessToken

        fetch('/api/user/create/me', this.$root.getRequestOptions('POST', {
            user: 'User',
            bio: 'bio'
        }))

        window.location = decodeURIComponent(fragment.get('state') || '%2F')
    }
}
</script>