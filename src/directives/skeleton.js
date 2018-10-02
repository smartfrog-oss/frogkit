import '../stylus/skeleton.styl'

export default function(el, binding) {
  el.classList.toggle('fk-skeleton', binding.value)
}
