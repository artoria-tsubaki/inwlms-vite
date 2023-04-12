<script setup lang="ts" name="Login">
import LoginForm from '@/views/login/components/loginForm.vue'
</script>

<template>
  <div class="login-container flex-c-c relative">
    <div class="login-box flex-a-c box-border">
      <div class="login-left">
        <img src="@/assets/images/login_left0.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo flex-c-c">
          <img src="@/assets/images/logo.svg" alt="" class="login-icon" />
          <h2 class="login-text">Geeker-Admin</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url(./index.scss);
</style>
