<template>
  <div>
    <PetTable species="dogs" :pets="getDogs" />
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
    ...mapGetters(["getDogs"])
  }
};
</script>