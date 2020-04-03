<template>
  <div id="title">
    <h1>{{demo()}}</h1>
  </div>
</template>

<script>
console.log("我引入了吗");
export default {
  data() {
    return {};
  },
  mounted() {
    var str = "babel111";
    var func = s => {
      document.getElementById("title").innerHTML = `hello ${s}`;
    };
    func(str);
  },
  methods: {
    demo() {
      // return '使用.vue 定义出来的组件'
    }
  }
};
</script>


<style>
h1 {
  width: 100px;
  height: 100px;
  background: red;
}
</style>