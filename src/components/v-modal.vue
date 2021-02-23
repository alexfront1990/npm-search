<template>
  
    <v-dialog
      v-model="closePopup"
      width="600px"
      @click:outside="closePopup"
    >
      <v-card>
        
          <slot></slot>
        
        
      </v-card>
    </v-dialog>
  
</template>





<script>

  import {mapActions} from 'vuex';

  export default {
    data () {
      return {
        dialog: this.$store.state.deatailsModal,
      }
    },
    getters: {
      modalContent: {}
    },
    methods: {
      ...mapActions([
      'DETAIL_POPUP_ACTION'
    ]),
    closePopup() {
      this.DETAIL_POPUP_ACTION();
    },
    

    },
    
    

  }
</script>