<template>
  <div class="content">
   <mt-header title="注册">
    <router-link to="/user" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
    <mt-field  placeholder="请输入手机号" :state='telState' type="number" v-model="tel"></mt-field>
    <mt-field placeholder="验证码" :state='codeState' type="number" v-model="code">
    
  <button v-if='flag' class="sendCodeBtn"  @click="sendCode">{{codeStr}}1</button>
  <span v-else >{{codeStr}}2</span>

</mt-field>
    <mt-field  placeholder="密码:必须含有字母和数字,6-12位" :state='passwordState' type="password" v-model="password"></mt-field>
    <div class="registerBtn" :class='{active: registerFlag}' @click='register'>注&nbsp;&nbsp;&nbsp;&nbsp;册</div>
  </div>
</template>

<script src='./script.js'></script>

<style lang="scss" src="./style.scss"></style>
