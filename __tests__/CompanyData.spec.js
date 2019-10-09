import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import axios from 'axios'
import CompanyData from '@/components/dashboard/CompanyData'
import Loading from 'vue-loading-overlay'
import helper from '@/mixins/helperMixin'

axios.defaults.baseURL = 'http://intricately-api.sahdo.me/';

const router = new VueRouter()
const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(axios)
localVue.use(Vuelidate)
localVue.use(Loading)
localVue.mixin(helper)

localVue.prototype.$http = axios;

describe('CompanyData', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(CompanyData, {
      localVue,
      router
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('initial validation of company_name is valid. Only after save button click must check errors', () => {
    expect(!wrapper.vm.$v.invalid).toBeTruthy()    
  })
})