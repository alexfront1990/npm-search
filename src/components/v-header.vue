<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            label="Search Package..."
            placeholder="Search Package..."
            hide-details
            @input="searchInput"
            ref="searchInput"
          >
          </v-text-field>
         
        </v-col>
      </v-row>
    </v-container>
  </v-form>  
</template>


<script>

export default {
  methods: {
    searchInput() {
      this.$emit('searchInputHadler', this.$refs.searchInput.$el.getElementsByTagName('input')[0].value)
    }
  }
  
}
</script>

