<script setup lang="ts" name="LoginForm">
import { ElForm, ElNotification } from 'element-plus'
import { reactive, ref } from 'vue'
import { Login } from '@/api/interface'
import { CircleClose, UserFilled } from '@element-plus/icons-vue'
import md5 from 'js-md5'
import router from '@/routers'
import { HOME_URL } from '@/config/config'
import { getTimeState } from '@/utils/utils'

type FormInstance = InstanceType<typeof ElForm>
const loginFormRef = ref<FormInstance>()

const loginForm = reactive<Login.ReqLoginForm>({ username: '', password: '' })

const loginFormRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const loading = ref(false)

const resetForm = (formEl: FormInstance | undefined) => {}
const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  // 校验
  formEl.validate(async (valid) => {
    if (!valid) return
    loading.value = true
    try {
      // 执行登录接口
      // const { data } = await loginApi({ ...loginForm, password: md5(loginForm.password) })

      //添加动态路由
      // await initDynamicRouter()

      // 跳转到首页
      router.push(HOME_URL)
      ElNotification({
        title: getTimeState(),
        message: '欢迎登陆 Admin System',
        type: 'success',
        duration: 3000
      })
    } finally {
      loading.value = false
    }
  })
}
// 监听 enter 事件，调用登录
document.onkeydown = (e: any) => {
  e = window.event || e
  if (e.code === 'Enter' || e.code === 'enter' || e.code === 'NumpadEnter') {
    if (loading.value) return
    login(loginFormRef.value)
  }
}
</script>

<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名">
        <template #prefix>
          <el-icon class="el-input__icon"><user /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" placeholder="密码">
        <template #prefix>
          <el-icon class="el-input__icon"><lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn flex justify-between whitespace-nowrap">
    <el-button :icon="CircleClose" round @click="resetForm(loginFormRef)" size="large">重置</el-button>
    <el-button :icon="UserFilled" round @click="login(loginFormRef)" size="large" type="primary" :loading="loading">登录</el-button>
  </div>
</template>

<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 40px;
}
.login-btn {
  width: 100%;
  margin-top: 40px;
  .el-button {
    width: 185px;
  }
}
</style>
