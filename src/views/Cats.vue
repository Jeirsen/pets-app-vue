<template>
  <div>
    <PetTable species="cats" :pets="getCats" />
  </div>
</template>

<script>
import PetTable from "@/components/PetTable.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("loadPets");
  },
  components: {
    PetTable
  },
  computed: {
    ...mapGetters(["getCats"])
  }
};
</script>