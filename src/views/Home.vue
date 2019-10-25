<template>
  <div class="home">
    <h1>Get a new friend</h1>
    <button class="btn btn-primary" @click="togglePetForm">Add new pett</button>
    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pets Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets Breed:" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.breed" required placeholder="Enter Breed"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select id="input-3" v-model="formData.species" :options="['cat', 'dog']" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.gender"
          :options="['male', 'female']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets Age:" label-for="input-2">
        <b-form-input type="number" id="input-2" v-model="formData.age" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets Color:" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.color" required placeholder="Enter Color"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets Weight:" label-for="input-2">
        <b-form-input type="number" id="input-2" v-model="formData.weight" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets Location:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.location"
          required
          placeholder="Enter Location"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Notes:" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.notes" required placeholder="Notes about pet"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {
      showPetForm: false,
      formData: {
        name: "",
        breed: "",
        species: null,
        gender: null,
        age: 0,
        color: "",
        weight: 0,
        locations: "",
        notes: ""
      }
    };
  },
  computed: {
    //...mapGetters(["animalsCount", "getAllCats"])
  },
  methods: {
    ...mapActions(["addPet"]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      let {
        name,
        breed,
        species,
        gender,
        age,
        color,
        weight,
        location,
        notes
      } = this.formData;
      const payload = {
        name,
        breed,
        species,
        gender,
        age,
        color,
        weight,
        location,
        notes
      };
      this.addPet(payload);
      this.formData = {
        name: "",
        age: 0,
        species: null
      };
    }
  }
};
</script>
