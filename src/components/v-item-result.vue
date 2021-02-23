<template>
  <div style="margin-bottom: 20px;">
    <v-card
      class="mx-auto m-bottom-cards"
      max-width="100%"
    >
      <v-card-title>
        {{searchResult.package.name}}
      </v-card-title>

      <v-card-subtitle style="text-align: left">
        {{searchResult.package.description}}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="black lighten-2"
          text
          @click="showDetail" 
        >
          View Details
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text style="text-align: left;">
            
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>



<script>

import {mapActions} from 'vuex'

export default {

  props: {
    type: Object,
    searchResult: {}
  },
  components: {
    
  },
  data: () => ({
      show: false,
  }),
  methods: {
    ...mapActions([
      'DETAIL_POPUP_ACTION'
    ]),
    showDetail() {
      
      this.$emit('showDetail', this.searchResult.package)
      this.DETAIL_POPUP_ACTION()
      
    }
  }
  
}
</script>