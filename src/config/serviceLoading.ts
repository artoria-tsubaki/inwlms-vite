import { ElLoading } from "element-plus";

let loadingInstance: ReturnType<typeof ElLoading.service>

const startLoading = () => {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)"
  })
}

const endLoading = () => {
  loadingInstance.close()
}

// 将同一时刻的请求合并，当有请求数时打开loading， 所有的请求数为0时，关闭loading。

let needLoadingRequestCount = 0
export const showFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export const tryHideFullScreenLoading = () => {
  if(needLoadingRequestCount <= 0 ) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}