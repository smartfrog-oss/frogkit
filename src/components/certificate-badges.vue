<template>
  <Flex align="center" justify="space-around">
    <img :width="width" src="../assets/images/iso-27001.jpg" alt="iso-27001" />
    <img :width="width" src="../assets/images/tuev.jpg" alt="tuev" />
    <img :width="width" src="../assets/images/iso-9001.jpg" alt="iso-9001" />
  </Flex>
</template>

<script>
  export default {
    name: 'CertificateBadges',
    props: {
      width:{
        type: String,
        default: '65px'
      }
    }
  }
</script>