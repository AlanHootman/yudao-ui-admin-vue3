import type { App } from 'vue'
// 👇使用 form-create 需额外全局引入 element plus 组件
import {
  ElAlert,
  ElAside,
  ElContainer,
  ElDivider,
  ElHeader,
  ElMain,
  ElPopconfirm,
  ElTable,
  ElTableColumn,
  ElTabPane,
  ElTabs,
  ElTransfer
} from 'element-plus'
import FcDesigner from '@form-create/designer'
import formCreate from '@form-create/element-ui'
import install from '@form-create/element-ui/auto-import'
//======================= 自定义组件 =======================
import { UploadFile, UploadImg, UploadImgs } from '@/components/UploadFile'
import { DictSelect } from '@/components/DictSelect'
import { useCurrencySelect } from '@/components/FormCreate'
import { Editor } from '@/components/Editor'

const UserSelect = useCurrencySelect({
  name: 'UserSelect',
  labelField: 'nickname',
  valueField: 'id',
  restful: '/system/user/simple-list'
})
const DeptSelect = useCurrencySelect({
  name: 'DeptSelect',
  labelField: 'name',
  valueField: 'id',
  restful: '/system/dept/simple-list'
})

const components = [
  ElAside,
  ElPopconfirm,
  ElHeader,
  ElMain,
  ElContainer,
  ElDivider,
  ElTransfer,
  ElAlert,
  ElTabs,
  ElTable,
  ElTableColumn,
  ElTabPane,
  UploadImg,
  UploadImgs,
  UploadFile,
  DictSelect,
  UserSelect,
  DeptSelect,
  Editor
]

// 参考 http://www.form-create.com/v3/element-ui/auto-import.html 文档
export const setupFormCreate = (app: App<Element>) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
  formCreate.use(install)
  app.use(formCreate)
  app.use(FcDesigner)
}
