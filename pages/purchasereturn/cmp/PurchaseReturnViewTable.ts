import { Component, Prop, Vue } from 'vue-property-decorator'
import PurchaseReturn from 'model/purchasereturn/PurchaseReturn'
import { NumberUtil } from 'fant'
import { State } from 'vuex-class'
import MerchantConfig from 'model/framework/merchant/MerchantConfig'

@Component({
  components: {}
})
export default class PurchaseReturnViewTable extends Vue {
  @State('merchantConfig') merchantConfig: MerchantConfig

  @Prop()
  bill: PurchaseReturn
  realAmount: number = 0

  mounted() {
    this.realAmount = this.bill!.amount + this.bill!.chargeAmount - this.bill!.discountAmount
  }

  getSummaries(param: any) {
    const columns: Array<any> = param.columns
    const sums: Array<any> = []
    const data: Array<any> = param.data
    if (!data || data.length <= 0) {
      return sums
    }
    columns.forEach((column: any, index: number) => {
      if (index === 0) {
        sums[index] = '合计'
        return
      }
      if (!column.property || (column.property !== 'qty' && column.property !== 'amount' && column.property !== 'taxAmount' && column.property !== 'taxExcAmount')) {
        return sums
      }
      const values: Array<number> = data.map(item => Number(item[column.property]))
      if (!values.every(value => isNaN(value))) {
        sums[index] = values.reduce((prev, curr) => {
          const value = Number(curr)
          if (!isNaN(value)) {
            return prev + curr
          } else {
            return prev
          }
        }, 0)
        // if (column.property === 'qty') {
        //   sums[index] = NumberUtil.format(sums[index], '0.000')
        // } else {
        //   sums[index] = NumberUtil.format(sums[index], '0.00')
        // }
        if (column.property === 'amount' || column.property === 'taxAmount' || column.property === 'taxExcAmount') {
          // sums[index] = this.fmtThumb(sums[index].toString())
          sums[index] = NumberUtil.format(sums[index], '##,##0.00')
        } else {
          if (column.property !== 'qty') {
            sums[index] = NumberUtil.format(sums[index], '0.00')
          } else {
            sums[index] = NumberUtil.format(sums[index], '0')
          }
        }
        // sums[index] += ' 元'
      }
    })

    return sums
  }

  priceFormatter(row: any, column: any, value: string) {
    if (value && Number(value) !== 0) {
      return Number(value).toFixed(2)
    } else {
      return '0.00'
    }
  }

}
PurchaseReturnViewTable.filter('price', (value: string) => {
  if (value && Number(value) !== 0) {
    return Number(value).toFixed(2)
  } else {
    return '0.00'
  }
})
