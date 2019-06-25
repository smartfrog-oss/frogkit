<template>
  <Flex align="center" justify="space-around">
    <img :width="width" src="../assets/images/dhl.svg" alt="dhl" />
    <img :width="width" src="../assets/images/gogreen.svg" alt="gogreen" />
  </Flex>
</template>

<script>
  export default {
    name: 'LogisticBadges',
    props: {
      width:{
        type: String,
        default: '142px'
      }
    }
  }
</script>