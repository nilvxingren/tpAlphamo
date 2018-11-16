<template>
  <qf-dialog-def :title="title" @cancel="reverseCancel" @confirm="onReverse" confirmText="更换" :showConfirm='true' :showCancel='true' class="subject-reverse">
    <div v-if="false">
      <qf-row class="subject-reverse-row">
        <qf-col :span="14">
          <qf-form-item label="查找商品(配方)" align="left">
            <qf-input type="text" v-form:code="validator" v-model="accountCategory.code" :maxlength="20" regex="^[^\u4e00-\u9fa5]{0,}$" placeholder="编码/名称/助记码"></qf-input>
          </qf-form-item>
        </qf-col>
        <qf-col :span="10">
          <qf-form-item label="配方单位:" align="right">
            <!--有一个字段来控制配方单位如何显示-->
            <div style="line-height: 36px; font-size: 14px; text-align: left; margin-left: 12px;" v-if="true">{{ prentSubName }}</div>
            <div style="line-height: 36px; font-size: 14px; text-align: left; margin-left: 12px;color: red" v-if="false">不支持配方单位</div>
          </qf-form-item>
        </qf-col>
      </qf-row>
      <qf-row class="subject-reverse-row">
        <qf-col :span="14">
          <qf-form-item label="更换为" align="left">
            <qf-input type="text" v-form:name="validator" v-model="accountCategory.name" :maxlength="12" placeholder="编码/名称/助记码"></qf-input>
          </qf-form-item>
        </qf-col>
        <qf-col :span="10">
          <qf-form-item label="配方单位:" align="right">
            <div style="line-height: 36px; font-size: 14px; text-align: left; margin-left: 12px;">{{ prentSubName }}</div>
          </qf-form-item>
        </qf-col>
      </qf-row>
      <qf-row>
        <!--<qf-button @click="onReverse">更换</qf-button>-->
      </qf-row>
    </div>
    <div v-if="true">
      <qf-row class="subject-reverse-row">
        <qf-col :span="14">
          <div>已成功修改<span style="color: #3abbfd">11</span>个配方商品的配方内容。</div>
        </qf-col>
      </qf-row>
      <qf-row>
        <!--<qf-button @click="ReverseMulaSkuDill">确定</qf-button>-->
      </qf-row>
    </div>
  </qf-dialog-def>
</template>
<script lang="ts" src="./ReverseMulaSku.ts"/>
<style lang="scss">
  .subject-reverse {
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
