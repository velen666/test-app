<template>
  <div>
    <md-table
      v-model="documents"
      md-sort="name"
      md-sort-order="asc"
      md-card
      md-fixed-header
    >
      <md-table-toolbar>
        <h1 class="md-title">Documents</h1>

        <md-divider></md-divider>

        <md-button class="md-primary md-raised" @click.prevent="openDialog({}, 'add')">Add Documents</md-button>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }" @click.native="openDialog(item, 'edit')">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Title" md-sort-by="title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Description" md-sort-by="description">{{ item.description }}</md-table-cell>
      </md-table-row>
    </md-table>
    <DocumentsDialog
      :dialog="dialog"
      :editedItem="editedItem"
      :dialogType="type"
      @closeDialog='closeDialog'
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import DocumentsDialog from '../Dialogs/DocumentsDialog'

export default {
  name: 'DocumentTable',
  components: {
    DocumentsDialog,
  },
  data () {
    return {
      dialog: false,
      type: '',
      documents: [],
      editedItem: {},
    }
  },
  mounted() {
    this.documents = this.getDocuments();
  },
  // computed: {
  //   setDocuments () {
  //     this.documents = this.getDocuments()
  //   }
  // },
  methods: {
    ...mapGetters({ getDocuments: 'Documents/getDocuments' }),
    closeDialog (data) {
      this.dialog = data.dialog;
      this.type = '';
      this.editedItem = {}
    },
    openDialog (item={}, type) {
      this.dialog = true;
      this.type = type;
      if(this.type && this.type === "add") {
        this.editItem = {
          title: '',
          description: ''
        }
      }
      if(this.type && this.type === "edit") {
        this.editedItem = { ...item }
      }
    }
  }
}
</script>
