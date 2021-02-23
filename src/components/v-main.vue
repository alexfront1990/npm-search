<template>
  <div class="wrapper">
    <v-header
      @searchInputHadler="setResult"

    />
    <v-result/>
    <v-footer/>
  </div>
</template>


<script>

import vHeader from '@/components/v-header.vue'
import vResult from '@/components/v-result.vue'
import vFooter from '@/components/v-footer.vue'
import {mapActions} from 'vuex'


export default {

  components: {
    vHeader,
    vResult,
    vFooter
  },
  methods: {
    ...mapActions([
      'GET_SEARCH'
    ]),

    //send to Store

    setResult(data) {
      
      setTimeout(() => this.GET_SEARCH(data), 500 )
    }

    
  }

}
</script>