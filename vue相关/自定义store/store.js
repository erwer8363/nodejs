/**
 * Created by ever on 2020/6/27.
 */
import Vue from 'vue'

export const store = Vue.observable({
  userInfo: {},
  roleIds: [],
})

export const mutations = {
  setUserInfo(userInfo) {
    store.userInfo = userInfo
  },
  setRoleIds(roleIds) {
    store.roleIds = roleIds
  },
}
