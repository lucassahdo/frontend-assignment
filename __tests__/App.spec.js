import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '@/App'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('App', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(App, {
      localVue,
      router
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
