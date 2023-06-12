import { createStore } from "vuex";
const store = createStore({
    state:{
        openModal:false,
        comics:[],
        favorites:[]
    },
    mutations:{
        pushFavorites(state,favId){
            state.favorites.push(favId)
            }

    },
    actions:{
        pushFavorites({commit},favId){
            commit('pushFavorites',favId)
          }
    }
})

export default store; 
