<template>
  <page-body class="customer-list" :menu="menu">

    <!-- 头部 -->
    <div slot="actions">
      <qf-button icon="ic_icon-add" type="primary" @click="doGoCreate" v-if="hasPermissions('basicdata.supplier.create')">新建供应商
      </qf-button>
      <qf-button icon="ic_icon-add" type="default" @click="doImport" v-if="hasPermissions('basicdata.supplier.import')">导入供应商资料
      </qf-button>
    </div>

    <!-- 列表页面模板 -->
    <list-container>

      <!-- 搜索栏 -->
      <list-search slot="search" @setFilters="onSetFilter">
      </list-search>
      <!-- 表格工具栏 -->
      <div slot="toolbar">
        <qf-button type="primary" @click="doExport" v-if="hasPermissions('basicdata.supplier.export')">导出全部</qf-button>
        <qf-button type="default" @click="doDelete" :disabled="!(selectedData && selectedData.length)"
                   v-if="hasPermissions('basicdata.supplier.delete')">删除
        </qf-button>
      </div>

      <!-- 数据列表 -->
      <list-table slot="list" :query="query" :data="tableData" @setSorters="onSortChange"
                  @selectData="onSelectionChange" @getList="doSearch" @reload="doReload"></list-table>

      <!-- 翻页 -->
      <qf-pagination slot="pagination" :total="pagination.total" :page-size="pagination.limit"
                     v-model="pagination.start" @change="onPageChange"></qf-pagination>

    </list-container>

  </page-body>
</template>

<script lang="ts" src="./SupplierList.ts"/>

<style lang="scss">
  @import '~styles/var.scss';

  .customer-list {
    background: $--color-bg;
  }
</style>
