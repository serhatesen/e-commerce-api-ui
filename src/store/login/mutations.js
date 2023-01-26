export default {
    setAccessToken(state, payload) {
        state.accessToken = payload.accessToken;
    },

    setUser(state, payload) {
        state.user = payload.user;
    }
}