<template>
  <div class="content">
   <mt-header title="登录">
    <router-link to="/user" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
    <mt-field  placeholder="请输入手机号" :state='telState' type="number" v-model="tel" ></mt-field>
    
    <mt-field  placeholder="密码:必须含有字母和数字,6-12位" :state='passwordState' type="password" v-model="password" ></mt-field>
    <div class="registerBtn" :class='{active: loginFlag}' @click='login'>登&nbsp;&nbsp;&nbsp;&nbsp;录</div>
  </div>
</template>

<script src='./script.js'></script>

<style lang="scss" src="./style.scss"></style>
