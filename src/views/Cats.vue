<template>
  <div>
    <PetTable species="cats" :pets="cats" />
  </div>
</template>

<script>
import PetTable from "@/components/PetTable.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    PetTable
  },
  computed: {
    ...mapState(["cats"])
  }
};
</script>