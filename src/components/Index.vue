<template>
  <div class="index">
    <head-home></head-home>
    <Banner></Banner>
    <scroll-text></scroll-text>
    <icon-list></icon-list>
    <scroll-pro></scroll-pro>
    <hot-pro></hot-pro>
    <hot-news></hot-news>
    <Footer></Footer>
  </div>
</template>

<script>
import HeadHome from "./HeadHome";
import Banner from "./Banner";
import ScrollText from "./ScrollText";
import IconList from "./IconList";
import ScrollPro from "./ScrollPro";
import HotPro from "./HotPro";
import HotNews from "./HotNews";
import Footer from "./public/Footer";

export default {
  name: "Index",
  components: {
    HeadHome,
    Banner,
    ScrollText,
    IconList,
    ScrollPro,
    HotPro,
    HotNews,
    Footer
   }
};
</script>


<style scoped>
.index{
  padding:44px 0 49px;
}
</style>
