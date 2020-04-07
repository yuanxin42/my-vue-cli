<!--
 * @Author       : yuanxin42@xdf.cn
 * @Date         : 2020-04-03 10:05:55
 * @LastEditors  : yuanxin42@xdf.cn
 * @LastEditTime : 2020-04-07 10:32:09
 * @Description  : 描述信息
 -->
<template>
  <div id="title">
    <h1>{{demo()}}</h1>
    <img src="./assets/bg1.png" alt="">
  </div>
</template>

<script>
console.log("我引入了吗");
export default {
  data() {
    return {};
  },
  mounted() {
    var str = "babel1112";
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
div{
  color: red;
}
h1 {
  width: 100px;
  height: 100px;
  background: red;
}
</style>