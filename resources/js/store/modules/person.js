import router from '../../router';

const state = {
    person: null,
    people: null,
}

const getters = {
    person: () => state.person,
    people: () => state.people,
}

const actions = {
    getPerson({state, commit, dispatch}, id) {
        axios.get(`/api/people/${id}`)
            .then(response => {
                commit('setPerson', response.data.data)
            })
    },

    getPeople({commit}) {
        axios.get("/api/people")
            .then(response => {
                commit('setPeople', response.data.data)
            })
    },

    deletePerson({dispatch}, id) {
        axios.delete(`/api/people/${id}`)
            .then(response => {
                dispatch('getPeople')
            })
    },

    updatePerson({}, data) {
        axios.patch(`/api/people/${data.id}`, {name: data.name, age: data.age, job: data.job})
            .then(response => {
                router.push({
                    name: 'person.show', params: {id: data.id}
                })
            })
    },

    store({}, data) {
        axios.post('/api/people/store', {name: data.name, age: data.age, job: data.job})
            .then(response => {
                router.push({ name: 'person.index' });
            });
    },
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    },

    setPeople(state, people) {
        state.people = people
    }
}

export default {
    state, mutations, getters, actions
}
