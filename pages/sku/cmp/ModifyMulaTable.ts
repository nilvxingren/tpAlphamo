import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: '',
  components: {
    ModifyMulaTable
  }
})
export default class ModifyMulaTable extends Vue {
  @Prop()
  tableData: any[] = []
}
