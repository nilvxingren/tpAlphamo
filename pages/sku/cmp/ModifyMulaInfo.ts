import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
  components: {
  }
})
export default class AccountCategoryEdit extends Vue {
  // 表格数据
  tableData: any[] = []
  @Watch('tableData')
  onTableChange(val: any[]) {
    console.log(val)
  }
  modifyCancel() {
    this.$emit('hide')
  }
}
