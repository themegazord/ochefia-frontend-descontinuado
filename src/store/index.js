import { createStore } from 'vuex';

export default createStore({
    state: {
        links: [
            {
                url: '/about',
                name: 'Quem somos'
            },
            {
                url: '/contact',
                name: 'Contatos'
            },
            {
                url: '/signup',
                name: 'Crie sua conta'
            },
            {
                url: '/signin',
                name: 'Login'
            }
        ]
    },
    getters: {
        getAllConfiguredLinks (state) {
            return state.links;
        }
    },
    mutations: {
        setLinks (state, { links }) {
            state.links = links
        },
        clearLinks (state) {
            state.links = []
        }
    }
})
