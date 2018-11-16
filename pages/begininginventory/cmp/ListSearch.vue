<template>
  <div class="inventory-list-search">
    <qf-row>
      <qf-col :span="8">
        <qf-form-item label="仓库">
          <qf-select v-model="queryCondition.warehouse" v-bind:placeholder="noWarehouseCaption" display-field="name"
                     value-key="id">
            <qf-option v-for="(item,index) in warehouseList" :key="index" :value="item"
                       :label="item.name"></qf-option>
          </qf-select>
        </qf-form-item>
      </qf-col>
      <qf-col :span="8">
        <qf-form-item label="商品分类">
          <qf-select v-model="queryCondition.type" clearable>
            <qf-option value="" label="全部"></qf-option>
            <qf-option v-for="(item,index) in skuCategoryList" :key="index" :value="item.id"
                       :label="item.name"></qf-option>
          </qf-select>
        </qf-form-item>
      </qf-col>
      <qf-col :span="8">
        <qf-form-item label="商品">
          <qf-input v-model="queryCondition.keyword" :maxlength="limits.keyword" placeholder="按照商品条码/名称搜索"
                    @keydown.native.enter="doEnterSearch()"></qf-input>
        </qf-form-item>
      </qf-col>
    </qf-row>
    <qf-row>
      <qf-col :span="8">
        <qf-form-item label="期初日期">
          <qf-date-picker v-model="queryCondition.beginingDate"
                          value-format="yyyy-MM-dd HH:mm:ss" type="daterange"
                          range-separator="~"
                          start-placeholder="开始日期" end-placeholder="结束日期"></qf-date-picker>
        </qf-form-item>
      </qf-col>
      <qf-col :span="16">
        <div class="search-control">
          <qf-button type="primary" @click="doSearch">查询</qf-button>
          <qf-button type="default" @click="doReset">重置</qf-button>
        </div>
      </qf-col>
    </qf-row>
  </div>
</template>

<script lang="ts" src="./ListSearch.ts"></script>

<style lang="scss">
  .inventory-list-search {
    .qf-date-editor--daterange.qf-input__inner{
      width: 100%;
    }

    .search-control {
      text-align: right;
    }

    .qf-row {
      margin: 10px auto;
    }
  }
</style>
