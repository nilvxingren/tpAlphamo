<template>
  <qf-dialog-def :title="title" @cancel="modifyCancel" :showConfirm='true' :showCancel='false' class="subject-modify-info">
    <qf-table class="modify-mula-table" :data="tableData">
      <qf-table-column type="index"></qf-table-column>
      <qf-table-column label="修改时间" prop="operateTime"></qf-table-column>
      <qf-table-column label="操作人" prop="operator"></qf-table-column>
      <qf-table-column label="修改方式" prop="type"></qf-table-column>
      <qf-table-column label="修改内容" prop="description"></qf-table-column>
    </qf-table>
  </qf-dialog-def>
</template>
<script lang="ts" src="./ModifyMulaInfo.ts"/>
<style lang="scss">
  .subject-modify-info {
    width: 540px;
    .subject-reverse-row {
      margin-top: 20px;
    }
    .qf-dialog-body {
      padding: 30px 0;
    }
    .qf-input {
      margin-left: 12px;
    }
  }
</style>
