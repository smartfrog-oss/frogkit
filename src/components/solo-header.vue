<style lang="stylus">
  @require '../stylus/mixins/solo-header'

  .solo-header
    soloheader-mixin()

</style>

<template functional>
  <header class="solo-header">
    <div class="solo-header__container">
      <h1 class="solo-header__container__logo">
        <a :href="props.logoUrl" aria-label="home"><img src="../assets/logo.svg" alt="smartfrog logo" /></a>
      </h1>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Soloheader',
    props: {
      logoUrl: {
          type: String,
          default: '/'
      }
    }
  }
</script>
