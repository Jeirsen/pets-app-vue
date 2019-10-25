export default {
  SET_PETS(state, pets) {
    state.pets = pets;
  },
  ADD_NEW_PET(state, petObject) {
    state.pets.push(petObject);
  },
  CLEAR_NEW_PET(state) {
    state.newPet = {
      name: "",
      breed: "",
      species: "",
      gender: "",
      age: null,
      color: "",
      weight: 0,
      location: "",
      notes: ""
    };
  }
};
