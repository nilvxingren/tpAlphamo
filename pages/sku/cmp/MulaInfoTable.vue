<template>
  <qf-table class="mula-info-table" :data="tableData">
    <qf-table-column type="index"></qf-table-column>
    <qf-table-column label="商品" prop="formulaSku.name"></qf-table-column>
    <qf-table-column label="编码" prop="formulaSku.code"></qf-table-column>
    <qf-table-column label="配方单位" prop="formulaSku.munit"></qf-table-column>
    <qf-table-column label="配方数量" prop="qty"></qf-table-column>
  </qf-table>
</template>

<script lang="ts" src="./MulaInfoTable.ts"></script>

<style lang="scss">

</style>
