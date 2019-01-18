<style lang="stylus">
  @require '../stylus/mixins/header';

  .fk-header
    header-mixin()

</style>

<template>
  <header class="fk-header">
    <div class="fk-header__container">
      <!-- logo -->
      <h1 class="fk-header__logo">
        <a :href="logoUrl" aria-label="home"><img src="../assets/logo.svg" alt="smartfrog-logo" /></a>
      </h1>
      <!-- burger menu icon -->
      <span class="fk-header__toggle" @click="mobileNavOpen = !mobileNavOpen">
        <Icon icon="hamburger-menu" />
      </span>
      <!-- navigation -->
        <nav class="fk-header__nav" :class="{ 'fk-header__nav--on': mobileNavOpen }">
          <ul>
            <!-- main links -->
            <li v-for="item in navMainItems">
              <a :href="item.url">{{ item.label }}</a>
            </li>
            <!-- links visible only on mobile -->
            <li v-if="!navOnly" v-for="item in navExtraItems">
              <a :href="item.url">{{ item.label }}</a>
            </li>
          </ul>
        </nav>
      <!-- login form -->
      <Flex v-if="!navOnly" grow justify="end" align="center">
        <!-- country selector -->
        <CountrySelector v-if="countries.length"
          :countries="countries"
          :currentCountry="currentCountry"
          :selectLabel="countrySelectLabel"
          :mobileNavOpen="mobileNavOpen"
          @open="mobileNavOpen = false"
          @change="countryChange" />
        <form class="fk-header__form" @submit.prevent="login">
           <div class="fk-header__form__field">
              <Input v-model="email" name="email" type="email" size="small" :wrong="wrongInput" :placeholder="formItems.emailPlaceholder" :aria-label="formItems.emailPlaceholder" pid="emailaddress"></Input>
              <a :href="formItems.registerUrl" :aria-label="formItems.registerLabel">{{ formItems.registerLabel }}</a>
            </div>
             <div class="fk-header__form__field">
                <Input v-model="password" name="password" type="password" size="small" :wrong="wrongInput" :placeholder="formItems.passwordPlaceholder" :aria-label="formItems.passwordPlaceholder" pid="password"></Input>
                <a :href="formItems.retriveUrl" :aria-label="formItems.retriveLabel">{{ formItems.retriveLabel }}</a>
            </div>
            <Button type="submit" color="primary" size="small" class="fk-header__form__login" pid="loginbutton">
              {{ navExtraItems[2].label }}
            </Button>
        </form>
        <!-- login button -->
        <Button link color="primary" size="small" class="fk-header__btn-login" :href="registrationLink" :aria-label="navExtraItems[2].label">
          {{ navExtraItems[2].label }}
        </Button>
        <!-- shop button -->
        <Button link color="secondary" size="small" class="fk-header__btn-shop" :href="navExtraItems[1].url" :aria-label="navExtraItems[1].label">
          {{ navExtraItems[1].label }}
        </Button>
        <!-- cart button -->
        <Button link color="secondary" size="small" class="fk-header__btn-cart" :href="navExtraItems[0].url" aria-label="cart">
          <Icon icon="basket" alt="cart"/>
          <span v-if="cartCounter > 0" class="fk-header__btn-cart__counter">{{ cartCounter }}</span>
        </Button>
    </Flex>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      logoUrl: {
        type: String,
        default: '/'
      },
      navMainItems: {
        type: Array,
        default: () => []
      },
      navExtraItems: {
        type: Array,
        default: () => []
      },
      cartCounter: {
        type: Number,
        default: 0
      },
      formItems: {
        type: Object,
        default: () => {}
      },
      countries: {
        type: Array,
        default: () => []
      },
      currentCountry: {
        type: String,
        default: ''
      },
      countrySelectLabel: {
        type: String,
        default: ''
      },
      navOnly: {
        type: Boolean,
        default: false
      },
      wrongInput: {
        type: Boolean,
        default: false
      },
      registrationLink: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        mobileNavOpen: false,
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        this.$emit('login', { username: this.email, password: this.password })
      },
      countryChange(currentCountry) {
        this.$emit('countryChange', currentCountry)
      }
    }
  }
</script>
