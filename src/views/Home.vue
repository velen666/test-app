<template>
  <div class="home">
    <div class="page-container">
      <md-app>
        <md-app-toolbar class="md-primary">
          <md-button class="md-icon-button" @click.prevent="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">My Title</span>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
          <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content class="md-scrollbar">
          <DocumentsTable />
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
import DocumentsTable from '../components/Tablets/DocumentsTable'

export default {
  name: 'Normal',
  components: {
    DocumentsTable,
  },
  data () {
    return {
      menuVisible: false,
    }
  },
  watch: {
    // dialog (oldValue, newValue) {
    //   if (oldValue) {
    //     this.dialog = oldValue
    //   }

    //   if (newValue) {
    //     this.dialog = newValue
    //   }
    // }
  },
  methods: {
  }
}
</script>

<style>
  .md-app {
    height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
