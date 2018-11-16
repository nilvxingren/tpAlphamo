import AbstractSaleLine from 'model/sale/AbstractSaleLine'

export default class SaleLine extends AbstractSaleLine {
  deliveredQty: number = 0
  // 商品原价，仅由后端返回
  salePrice: number = 0
  // 商品行优惠金额，仅由后端返回
  favAmount: number = 0
}
