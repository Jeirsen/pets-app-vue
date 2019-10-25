export default {
  // animalsCount: state => {
  //   return state.cats.length + state.dogs.length;
  // },
  // getAllCats: state => {
  //   return state.pets.filter(pet => pet.species === "cat");
  // }

  getCats: state => {
    return state.pets.filter(pet => pet.species === "cat");
  },
  getDogs: state => {
    return state.pets.filter(pet => pet.species === "dog");
  }
};
