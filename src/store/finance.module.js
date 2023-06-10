import fnFeesService from "@/services/FnFeesService";
import {FETCH_DATA} from "@/const/actions";
export const financeModule ={
    namespaced:true,
    state:{
       dataResponseList:[]
    },
    getters:{},
    mutations:{
        [FETCH_DATA](state, data){
            state.dataResponseList=data
        }

    },
    actions:{
    }
}