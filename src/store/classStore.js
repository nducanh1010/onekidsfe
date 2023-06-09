// classStore.js
import MaClassService from "@/services/MaClassService";
export const classStore ={
    namespaced: true,
    state: {
        serverDataClassSearch: [],
        listClassInGrade: [],
    },
    getters:{
        serverDataClass: (state) => state.classList,
        listClassInGrade: (state) => state.listClassInGrade,
    },
    mutations: {
        SET_ClassList(state, classes) {
            state.classList = classes;
        },
        SET_ListClassInGrade(state, listClassInGrade) {
            state.listClassInGrade = listClassInGrade;
        },
        setServerDataClassSearch(state, data) {
            state.serverDataClassSearch = data;
        },
    },
    actions: {
        fetchDataClassSearchFromServer({ commit },pageNumber, maxPageItem, className) {
            return MaClassService.searchClassNew(pageNumber, maxPageItem, className)
                .then((resp) => {
                    this.responseList = resp.data.data.responseList;
                    this.pageTotal = resp.data.data.total;
                    commit('serverDataClassSearch', resp.data);
                })
                .catch((err) => {
                    console.log(err);
                    this.pageTotal = 1;
                    this.responseList = [];
                })
                .finally(() => {
                    if (this.responseList.length === 0) {
                        this.textTable = this.$tableEmpty;
                    }
                    this.loadingData = false;
                })
        },

      // lấy dữ liệu class trong khối từ serve tạo ra 'listClassInGrade'
        fetchDataListClassInGrade({ commit },idGrade) {
            return MaClassService.getClassInGrade(idGrade)
                .then(response => {
                    commit('SET_ListClassInGrade', response.data);
                    console.log(response.data)
                })
                .catch(error => {
                    console.error(error);
                });
        },

        fetchDataClassFromServer({ commit }) {
            return  MaClassService.getAllClassCommon()
                .then(response => {
                    commit('serverDataClass', response.data);
                    console.log(response.data)
                })
                .catch(error => {
                    console.error(error);
                });
        },
    }
};
