<template>
  <main>
    <div class="main-result" v-if="!this.RESULT_FOUNDED.length">
      <v-items-top />
    </div>
    <div v-else>
      <v-items-result/>
    </div>
  </main>
</template>

<script>
  import vItemsTop from '@/components/v-items-top.vue'
  import vItemsResult from '@/components/v-items-result.vue'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      vItemsTop,
      vItemsResult
    },
    computed: {
      ...mapGetters([
        'RESULT_FOUNDED'
      ])
    }

  }
</script>


<style lang="scss">
.main-result {
  position: relative;
}
</style>