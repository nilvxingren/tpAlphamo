<template>
  <div class="purchase-return-summary">
    <div v-if="isReturnFromPurchase" class="canReturnAmount">
      <div>本单最多可退金额
        <qf-tooltip content="本单最多可退金额=【商品行的退货单价*退货数量之和】与【原进货单金额-已退金额】的最小值" placement="top-end">
          <div style="display: inherit">
            <qf-font-icon class="info-style" name="ic-ic_info" slot="icon"/>
          </div>
        </qf-tooltip>
        ：
      </div>
      <span class="amount">{{bill.canReturnAmount}}</span>
    </div>
    <qf-form-item label="税额" labelWidth="100px" class="form-item">
      <qf-input readonly v-model="bill.taxAmount" scale="2" align="right" class="readOnly-input"></qf-input>
    </qf-form-item>
    <qf-form-item label="合计金额(去税)" labelWidth="100px" class="form-item"
                  v-if="merchantConfig.enableInputTaxRateSupport && !merchantConfig.inputOnlyTax">
      <qf-input readonly v-model="bill.taxExcAmount" scale="2" align="right" class="readOnly-input"></qf-input>
    </qf-form-item>
    <qf-form-item label="合计金额(含税)" labelWidth="100px" class="form-item">
      <qf-input readonly :value="totalAmount()" scale="2" align="right" class="readOnly-input"></qf-input>
    </qf-form-item>
    <qf-form-item v-if="false" label="其他费用" labelWidth="100px" class="form-item">
      <qf-input v-model="bill.chargeAmount" selectOnfocus scale="2" align="right"
                v-form:chargeAmount="validator"></qf-input>
    </qf-form-item>
    <qf-form-item v-if="false" label="应退总额" labelWidth="100px" class="form-item label-bold">
      <qf-input readonly :value="realAmount()" scale="2" align="right" class="readOnly-input red-amount"></qf-input>
    </qf-form-item>
  </div>
</template>

<script lang="ts" src="./PurchaseReturnSummary.ts"></script>

<style lang="scss">
  @import '~styles/var.scss';

  .purchase-return-summary {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .info-style {
      color: #5090f0
    }
    .form-item {
      width: 300px;
      .readOnly-input {
        border: none;
      }
      .red-amount input {
        color: #FF554B !important;
        font-weight: bold !important;
      }
    }
    .label-bold {
      font-weight: bold !important;
    }
    .canReturnAmount {
      width: 300px;
      text-align: left;
      color: $--color-info;
      display: flex;
      padding-right: 12px;

      .amount {
        flex: 1;
        text-align: right;
        font-size: 14px;
        margin-bottom: 5px;
      }
    }
  }
</style>
