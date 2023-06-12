// gradeStore.js
//luu cac khối trong truờng
import GradeService from "@/services/GradeService";

export const gradeStore={
    namespaced: true,
    state: {
        gradeOfSchoolList: [],
    },
    getters: {
        gradeOfSchoolList: (state) => state.gradeOfSchoolList

    },
    mutations: {
        SET_GradeOfSchoolList(state, gradeOfSchoolList) {
            state.gradeOfSchoolList = gradeOfSchoolList;
        }
    },
    actions: {
        fetchDataGradeOfSchoolList({ commit }) {
           return GradeService.getGradeInPrinciple()
                .then(response => {
                    commit('SET_GradeOfSchoolList', response.data.data);
                    console.log(response.data.data)
                })
                .catch(error => {
                    this.$message({
                        message: error.response.data.message,
                        type: "error",
                    });
                    console.error(error);
                });
        }
    },

};
