import piniaPersistConfig from '@/config/piniaPersist';
import { store } from '@/stores'
import { defineStore } from 'pinia'
import { GlobalState } from '../interface';

export const useGlobalStore = defineStore({
  id: "GlobalStore",
  state: (): GlobalState => ({
    // token
		token: "",
  }),
  getters: {},
  actions: {
    // setToken
		setToken(token: string) {
			this.token = token;
		},
  },
  persist: piniaPersistConfig("GlobalState")
})

export function useGlobalStoreHook() {
  return useGlobalStore(store)
}