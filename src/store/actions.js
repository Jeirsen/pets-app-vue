import axios from "axios";
export default {
  loadPets({ commit }) {
    axios.get("/pets/get-pets").then(response => {
      commit("SET_PETS", response.data.pets);
    });
  },
  addPet({ commit, state }, payload) {
    console.log(payload);
    axios.post("/pets/add-pet", payload).then(response => {
      console.log(response);
      commit("ADD_NEW_PET", payload);
    });
  },
  clearNewPet({ commit }) {
    commit("CLEAR_NEW_PET");
  }
};
