<template>
  <div id="app" class="wrapper">
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>My Simpple App</h3>
      </div>
      <ul class="list-unstyled components">
        <li><router-link to="/"> Home</router-link></li>
        <li><router-link to="/page1"> Page 1</router-link></li>
        <li><router-link to="/page2"> Page 2</router-link></li>
      </ul>
    </nav>
    <!-- Page Content  -->
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import NavBar from '@/components/NavBar'
// import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
// import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  // components: { NavBar, NewContentAvailableToastr, AppleAddToHomeScreenModal },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  methods: mapActions('app', [
    'closeAddToHomeScreenModalForApple',
    'serviceWorkerSkipWaiting'
  ])
}
</script>
