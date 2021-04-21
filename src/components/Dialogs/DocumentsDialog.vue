<template>
  <div>
    <md-dialog :md-active.sync="dialog">
      <md-dialog-title>{{ setTitle() }}</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="General">
          <md-field>
            <label>Title</label>
            <md-input v-model="editedItem.title" placeholder="Title"></md-input>
          </md-field>
          <md-field>
            <label>Description</label>
            <md-input v-model="editedItem.description" placeholder="Description"></md-input>
          </md-field>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click.prevent="close()">Close</md-button>
        <md-button class="md-primary" @click.prevent="save()">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'DocumentsDialog',
  props: {
    dialog: {
      type: Boolean,
    },
    editedItem: {
      type: Object,
    },
    dialogType: {
      type: String,
    },
  },
  data () {
    return {
      title: '',
      editItem: this.editedItem,
      type: this.dialogType
    }
  },
  watch: {
    dialog () {
      this.editItem = this.editedItem;
      this.type = this.dialogType;
    },
  },
  methods: {
    ...mapMutations({
      addDocuments: 'Documents/addDocuments',
      editDocuments: 'Documents/editDocuments',
    }),
    save () {
      if (this.dialogType && this.dialogType === 'add') {
        this.addDocuments(this.editItem)
      }
      if (this.dialogType && this.dialogType === 'edit') {
        this.editDocuments(this.editItem)
      }
      this.close()
    },
    close () {
      this.$emit('closeDialog', {
        dialog: false
      })
      this.$nextTick(() => {
        // this.type = '';
        // this.dialogType = '';
        // this.editedItem = {};
        // this.editItem = {};
      })
    },
    setTitle() {
      if (this.dialogType && this.dialogType === "add") {
        this.title = "Добавление документа"
      }
      if (this.dialogType && this.dialogType === "edit") {
        this.title = "Редактирование документа"
      }

      return this.title
    }
  }
}
</script>

<style>
  .md-dialog /deep/.md-dialog-container {
    max-width: 768px;
  }
</style>
