// packages / index.js

// 导入单个组件
import aTreeSelect from './treeSelect/index';
import antInputDirective from './_util/antInputDirective';

// 以数组的结构保存组件，便于遍历
const components = [
  aTreeSelect
];

// 定义 install 方法
const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  // 遍历并注册全局组件
  components.map(component => {
    Vue.use(antInputDirective);
    Vue.component(component.name, component)
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components
}
