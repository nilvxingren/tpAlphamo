import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'ModifyMulaTable',
  components: {}
})
export default class ModifyMulaTable extends Vue {
  @Prop()
  tableData: any
}
