import { defineComponent } from 'vue'
import JsxScript from './components/Script.vue'
import {Named,NamedSpec,default as Default} from './components/Comps'
import './style.css'

export const Comp = defineComponent(() => {
  return () => (
    <div class='Comp'>
      <JsxScript msg='msg'/>
      <Named name='Named'/>
      <NamedSpec namedspec='NamedSpec'/>
      <Default Default='Default'/>
    </div>
  )
})
