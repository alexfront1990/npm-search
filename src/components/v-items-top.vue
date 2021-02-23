<template>
  <v-container>
    <v-modal
      v-if="this.DETAIL_POPUP"
    >
    </v-modal>
    <div class="items">
      <div class="items__title"><h1>Press search to find new packages</h1></div>
    
    </div>
    <div class="text-center">
      
    </div>
  </v-container>
</template>
<script>


import vModal from '@/components/v-modal.vue'


import {mapGetters} from 'vuex'

export default {
  components: {
    vModal
  },
  computed: {
    ...mapGetters([
      'DETAIL_POPUP'
    ])
  },
  methods: {
   
  }
}
</script>

<style lang="scss">
.items {
  &__title {
    text-align: left;
    h1 {
      margin-bottom: 10px;
    }
  }
}
</style>