import Vue from 'vue'
import Component from 'vue-class-component'
import {Dialog, Loading} from 'fant'
import Sku from 'model/basicdata/sku/Sku'
import SkuApi from 'http/basicdata/sku/SkuApi'
import SelectCategory from 'pages/sku/cmp/SelectCategory.vue'
import PageBody from 'cmp/PageBody.vue'
import PermissionMgr from 'mgr/PermissionMgr'
import MerchantConfig from 'model/framework/merchant/MerchantConfig'
import { State } from 'vuex-class'
import SubjectModifyInfo from './cmp/ModifyMulaInfo.vue'
import ListTable from 'pages/sku/cmp/MulaInfoTable.vue'
@Component({
  components: {
    SelectCategory,
    PageBody,
    SubjectModifyInfo,
    ListTable
  }

})
export default class SkuDetail extends Vue {
  @State('merchantConfig') merchantConfig: MerchantConfig
  sku: Sku = new Sku()
  id: string = ''
  hasPermissions: Function = PermissionMgr.hasOptionPermission

  // 标题头
  get menu() {
    return [{
      name: '商品',
      icon: '',
      url: '/skuList'
    }, {
      name: '商品详情',
      icon: '',
      url: ''
    }]
  }

  data() {
    return {
      sku: {
        category: {}
      }
    }
  }

  mounted() {
    this.id = this.$route.query.id
    if (this.id) {
      let loading = Loading.show()
      SkuApi.get(this.id).then((resp) => {
        this.sku = resp.data
        this.tableData = resp.data.skuFormulaList
        loading.hide()
      }).catch(error => {
        loading.hide()
        this.$message.error(error.message)
      })
    }
  }
  get munits() {
    let s = this.sku.munit + ';    '
    if (this.sku.skuMunitList.length > 0) {
      this.sku.skuMunitList.forEach((item, index) => {
        s = s + item.name + ';    '
      })
      return s
    } else {
      return ''
    }
  }

  get skuMunits() {
    let s = '('
    if (this.sku.skuMunitList.length > 0) {
      this.sku.skuMunitList.forEach((item, index) => {
        s = s + '1' + item.name + '=' + item.times + this.sku.munit
        if (index < this.sku.skuMunitList.length - 1) {
          s = s + ';  '
        } else {
          s = s + ')'
        }
      })
      return s
    } else {
      return ''
    }
  }

  doEdit() {
    this.$router.push({ name: 'skuEdit', query: { id: this.id } })
  }

  doDelete() {
    this.$msgBox.confirm('删除', '您是否确认删除该商品？', () => {
      let loading = Loading.show()
      SkuApi.delete(this.id, this.sku.version).then(resp => {
        loading.hide()
        this.$emit('hide')
        this.$message.success('删除成功')
        this.$router.push({ name: 'skuList' })
      }).catch(error => {
        loading.hide()
        this.$message.error(error.message)
      })
    })
  }

  /**
   * 点击配方信息修改记录后弹框
   */
  checkInfo() {
    console.log(this.sku.skuFormulaLoglist)
    new Dialog(SubjectModifyInfo, {
      title: '配方信息修改记录',
      tableData: this.sku.skuFormulaLoglist,
      doConfirm: (value: string) => {
        // if (value) {
        //   // 调展示表格信息的接口方法
        //   alert('qq')
        // }
      }
    }).show()
  }
  // 要传递给子组件table的数据
  tableData: any[] = []
}
// SkuDetail.filter('price', (value: string) => {
//   if (value) {
//     return Number(value).toFixed(2)
//   } else {
//     return '0.00'
//   }
// })

