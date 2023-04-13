export namespace Login {
  export interface ResLogin {
    token: string;
  }
  export interface ReqLoginForm {
    username: string,
    password: string
  }
}

// 基本请求响应参数
export interface Result {
  code: string,
  msg: string
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T
}