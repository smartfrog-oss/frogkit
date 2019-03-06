<style lang="stylus">
  @require '../stylus/mixins/marketing-popup'
  .fk-marketing-popup
    marketing-popup-mixin()
</style>

<template>
  <Dialogue :visible="visible" @change="close">
    <div class="fk-marketing-popup">
      <Title v-if="config.title" class="fk-marketing-popup__title" color="primary" size="xl">{{ config.title }}</Title>
      <img v-if="config.image" src="../assets/geschenk.svg" class="fk-marketing-popup__img" />
      <p v-if="config.headline" class="fk-marketing-popup__txt">{{ config.headline }}</p>
      <p class="fk-marketing-popup__txt">
        <template v-if="config.label">{{ config.label }}</template>
        <span v-if="config.code" class="fk-marketing-popup__txt__code">{{ config.code }}</span>
      </p>
      <Button v-if="config.accept" class="fk-marketing-popup__btn" size="big" :block="true" color="secondary" @click="proceed" link>
        <span>{{ config.accept }}</span>
        <Icon icon="arrow-right" />
      </Button>
      <span v-if="config.reject" class="fk-marketing-popup__close" @click="close">{{ config.reject }}</span>
    </div>
  </Dialogue>
</template>

<script>
  import Dialogue from './dialogue'

  export default {
    name: 'MarketingPopup',
    components: {
      Dialogue,
    },
    model: {
      prop: 'visible',
      event: 'change',
    },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      config: {
        type: Object,
        required: true,
        default: () => ({}),
      }
    },
    methods: {
      close() {
        this.$emit('change', false)
      },
      proceed() {
        this.$emit('proceed', this.config.code)
        this.close()
      },
    }
  }
</script>