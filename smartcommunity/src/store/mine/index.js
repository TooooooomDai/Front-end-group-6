import axios from 'axios';
export default {
    namespaced: true,
    state: {
        offset: 0,
        limit: null,
        total: null,
        expectMovies: []
    },
    mutations: {
        offset(state, offset) {
            state.offset = offset;
        },
        limit(state, limit) {
            state.limit = limit;
        },
        total(state, total) {
            state.total = total;
        },
        expectMovies(state, expectMovies) {
            state.expectMovies = expectMovies;
        },
        moreExpectMovies(state, moreExpectMovies) {
            state.expectMovies = [...state.expectMovies, ...moreExpectMovies];
        }
    },
    actions: {
        async getExpectMovies(context) {
            await axios.get(`/ajax/mostExpected?ci=50&limit=10&offset=${context.state.offset}&token=`).then((result) => {
                let paging = result.data.paging;
                context.commit('offset', paging.offset + paging.limit);
                context.commit('limit', paging.limit);
                context.commit('total', paging.total);
                if (paging.offset === 0) {
                    context.commit('expectMovies', result.data.coming);
                } else {
                    context.commit('moreExpectMovies', result.data.coming);
                }
                if (paging.offset + paging.limit+69 >= paging.total) {
                    alert('没电影啦！')
                }
            })
        }
    }
}