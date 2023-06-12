// classStore.js
import MaClassService from "@/services/MaClassService";
export const classStore ={
    namespaced: true,
    state: {

        classOfGradeList: [],
        serverDataClassSearch: [],
    },
    getters:{
        serverDataClass: (state) => state.classList,
        classOfGradeList: (state) => state.classOfGradeList,
    },
    mutations: {

        SET_ClassOfGradeList(state, classOfGradeList) {
            state.classOfGradeList = classOfGradeList;
        },
        setServerDataClassSearch(state, data) {
            state.serverDataClassSearch = data;
        },
    },
    actions: {

        fetchDataClassFromServer({ commit }) {
            return  MaClassService.getAllClassCommon()
                .then(response => {
                    commit('serverDataClass', response.data.data);
                    console.log(response.data)
                })
                .catch(error => {
                    console.error(error);
                });
        },
      // lấy dữ liệu class trong khối từ serve tạo ra 'classOfGradeList'
        fetchDataClassOfGradeList({ commit },idGrade) {
            return MaClassService.getClassInGrade(idGrade)
                .then(response => {
                    commit('SET_ClassOfGradeList', response.data.data);
                    console.log(response.data)
                })
                .catch(error => {
                    console.error(error);
                });
        },

    }
};
