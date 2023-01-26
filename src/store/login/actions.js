export default {
    setAccessToken(context, payload) {
        context.commit('setAccessToken', payload);
    },

    setUser(context, payload) {
        context.commit('setUser', payload);
    }
}