<template>
  
  <v-container>
    <v-modal
        v-if="this.DETAIL_POPUP">
        
        <div class="modal-content"
          v-for="item in lastItemModal"
          :key="item.name"
          >
          <div class="modal-content__title">
            <div>{{item.name}}</div>
          </div>
          <div class="modal-content__version">
            <div><span>Last version: </span>{{item.version}}</div>
          </div>
          <div class="modal-content__description">
            {{item.description}}
          </div>
          <div class="modal-content__links">
            <a v-bind:href='item.links.npm'>{{item.links.npm}}</a>
          </div>
          <div class="modal-content__description">
            {{item.links.repository}}
          </div>
          <div class="modal-content__publisher">
            <div class="title">About publisher</div>
            <div>{{item.publisher.email}}</div>
            <div>{{item.publisher.name}}</div>
          </div>

      </div>
      
      </v-modal>
   
      <div class="pagination-result">
          <div class="pagination-result__wrap"> 
            <v-btn
              v-for="page in pagesLength"
              :key="page"
              @click="pageClick(page)"
             >
           {{page}}
           </v-btn>
          </div>
      </div>
      
      <v-item-result
        v-for="searchResult in splitPages"
        :key="searchResult.date"
        :searchResult="searchResult"
        @showDetail="showDetail"
      />
  </v-container>
</template>


<script>

import vItemResult from '@/components/v-item-result.vue'
import vModal from '@/components/v-modal.vue'
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex'

export default {
  components: {
    vItemResult,
    vModal
  },
  data() {
    return {
      pageN: 1,
      itemsPerPage: 10
    }
  },
  computed: {
    ...mapGetters([
      'RESULT_FOUNDED',
      'DETAIL_POPUP',
      'SEARCH_HISTORY'
    ]),
    pagesLength() {
      return Math.ceil(this.RESULT_FOUNDED.length / this.itemsPerPage)
    },
    splitPages() {
      let oldValue = (this.pageN - 1) * this.itemsPerPage 
      let newValue = oldValue + this.itemsPerPage

      return this.RESULT_FOUNDED.slice(oldValue,newValue)
    },
    lastItemModal() {
      return this.SEARCH_HISTORY.slice(-1)
    }
  },
  methods: {
    ...mapActions([
      'GET_USER_SEARCH'
    ]),
    pageClick(page) {
      this.pageN=page;
    },
    showDetail(dataEl) {
      this.GET_USER_SEARCH(dataEl)
    } 
  }


}
</script>

<style lang="scss">
  .pagination-result {
    margin: 20px 0px 20px 0px;
    &__wrap {
      display: flex;
      white-space: nowrap;
      overflow-x: auto;
      padding: 0px 20px 10px 10px;
      box-sizing: border-box;
      button {
        margin: 0px 10px 0px 0px;
        &:last-child {
          margin: 0px 0px 0px 0px;
        }
      }
    }
  }
</style>