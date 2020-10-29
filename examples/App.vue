<template>
  <div id="app">
    <div style="width: 500px">
      <a-tree-select
              v-model="value"
              style="width: 100%"
              :tree-data="treeData"
              tree-checkable
              search-placeholder="Please select"></a-tree-select>
    </div>
  </div>
</template>

<script>
// import aTreeSelect from "../packages/treeSelect/index";

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
        disabled: true,
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
export default {
  name: 'App',
  components: {
    // aTreeSelect,
  },
  data() {
    return {
      value: ['0-0-0'],
      treeData,
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
