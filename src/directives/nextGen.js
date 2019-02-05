export default {
  inserted: async function(el, binding, vnode) {
    const webpSupported = await detectWebpSupport()
    const { src } = el
    if (src && src.includes('ctfassets') && !src.endsWith('svg') && webpSupported) el.src = `${src}?fm=webp`
    
    function detectWebpSupport () {
      // Credits: https://codepen.io/branneman/pen/dxfDr
      let resolver
      const p = new Promise(resolve => resolver = resolve)
      const webP = new Image()
      webP.onload = webP.onerror = () => resolver(webP.height === 2)
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
      return p
    }
  }
}
