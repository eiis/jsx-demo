<script lang="jsx">
import { defineComponent, ref } from 'vue'

export default defineComponent(
  () => {
    const count = ref(5)
    const inc = () => count.value++

    return () => (
      <button class="script" onClick={inc}>
        JsxScript {count.value}
      </button>
    )
  },
  {
    props: ['msg']
  }
)
console.log(typeof JsxScript)
</script>
