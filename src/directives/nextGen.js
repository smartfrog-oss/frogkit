export default {
  inserted: async function(el, binding, vnode) {
    const webpSupported = binding.value
    const { src } = el
    if (src && src.includes('ctfassets') && !src.endsWith('svg') && webpSupported) el.src = `${src}?fm=webp`
  }
}
