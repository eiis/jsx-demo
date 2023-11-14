import { defineComponent, ref, h} from 'vue'

// export const Named = defineComponent((props) => {
//   console.log(toRaw(props),'Named');
  
//   const count = ref(0)
//   const inc = () => count.value++

//   return () => (
//     <button class="named" onClick={inc}>
//       named {count.value}
//     </button>
//   )
// })

export const Named = defineComponent(
  <T extends string>(props: { name: T }) => {
    const count = ref(0)
    const inc = () => count.value++
    // return () => {
    //   // 渲染函数或 JSX
    //   return h('button', { onClick: inc }, `${props.name}`)
    // }

    return () => (
      h('button', { onClick: inc }, `${props.name}`)
    )
  },
  // 目前仍然需要手动声明运行时的 props
  {
    props: ['name']
  }
)

const NamedSpec = defineComponent(
  <T extends string>(props: { namedspec: T }) => {
    const count = ref(1)
    const inc = () => count.value++

    return () => (
      <button class="named-specifier" onClick={inc}>
        {props.namedspec}
      </button>
    )
  },
  {
    props: ['namedspec']
  }
)
export { NamedSpec }

export default defineComponent(() => {
  const count = ref(2)
  const inc = () => count.value++

  return () => (
    <div>
      <NamedSpec namedspec='defaultNamedSpec'/>
      <button class="default" onClick={inc}>
        default {count.value}
      </button>
    </div>
  )
})
