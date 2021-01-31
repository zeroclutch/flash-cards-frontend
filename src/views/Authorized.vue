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

        fetch('/api/user/create/me', this.$root.getRequestOptions('POST', {
            sets: []
        }))

        window.location = decodeURIComponent(fragment.get('state') || '%2F')
    }
}
</script>