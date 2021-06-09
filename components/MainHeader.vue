<template>
  <div class="header">
    <img src="@/assets/images/logo.png" alt="Giphy" class="header__logo">

    <p class="header__text">Type to search</p>
    
    <div class="header__actions">
      <i class="header__actions--plus">
        <b-icon-plus-circle></b-icon-plus-circle>
      </i>

      <i class="header__actions--notifications">
        <span></span>
        <b-icon-bell></b-icon-bell>
      </i>

      <div class="header__actions--profile">
        <img src="@/assets/images/profile.jpg" alt="Giphy" class="header__logo">
      </div>
    </div>
  </div>
</template>

<script>
  import { BIconPlusCircle, BIconBell } from 'bootstrap-vue'
  export default {
    components: {},
    data() {
      return {}
    },
    components: {
      BIconPlusCircle,
      BIconBell
    }
  }
</script>