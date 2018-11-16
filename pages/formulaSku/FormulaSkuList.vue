<template>
  <div class="for-mula-sku-view">
    <page-body :menu="menu">
      <!--<div slot="tip">--><!--</div>-->
      <div slot='actions'>
        <qf-button type="primary" @click="reverseMulaSku()">批量更换配方</qf-button>
        <qf-button type="primary" @click="addSku()">新建商品</qf-button>
        <qf-button type="info" @click="importSkuInfo()">导入商品资料</qf-button>
      </div>
    </page-body>
    <list-container>
      <query-condition slot="search" @search="search" @reset="reset" @toggle="toggle" ref="search">
        <qf-form-item labelWidth="0px">

        </qf-form-item>
      </query-condition>
    </list-container>
  </div>
</template>

<script lang="ts" src="./FormulaSkuList.ts"></script>

<style lang="scss">

</style>
