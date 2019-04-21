<template>
  <TypeInformation :type="typeInformation"></TypeInformation>
</template>

<script>
import TypeInformation from '@/components/TypeInformation';
import axios from 'axios';

export default {
  components: {
    TypeInformation,
  },
  data: () => ({
    typeInformation: null,
  }),
  created() {
    this.showType();
  },
  watch: {
    $route() {
      this.showType();
    },
  },
  methods: {
    async showType() {
      const name = this.$route.params.name;
      const info = await axios.get(`https://pokeapi.co/api/v2/type/${name}`);
      this.typeInformation = {
        name,
        data: info.data.damage_relations,
      };
    },
  },
};
</script>