<template>
  <div>
    <a-carousel :autoplay="false" arrows>
      <div
        slot="prevArrow"
        class="custom-slick-arrow"
        style="left: 10px;zIndex: 1"
      >
        <a-icon type="left-circle" />
      </div>

      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>

      <div
        class="img-background"
        :style="{
          backgroundImage: 'url(' + require('@assets/images/d1.jpg') + ')',
        }"
      >
        <h1 align="left"
          >Get Up to 40% off on Headsets and other electronic items.</h1
        >
      </div>

      <div
        class="img-background"
        :style="{
          backgroundImage: 'url(' + require('@assets/images/d2.jpg') + ')',
        }"
      >
        <h1 align="left">Fashion Items , Make up Items Get Up to 50% off .</h1>
      </div>

      <div
        class="img-background"
        :style="{
          backgroundImage: 'url(' + require('@assets/images/d3.jpg') + ')',
        }"
      >
       <h1 align="left">Mens ,Womens and children watches to 10% off, Hurry!!</h1>
      </div>

      <div
        class="img-background"
        :style="{
          backgroundImage: 'url(' + require('@assets/images/d4.png') + ')',
        }"
      >
        <h1 align="left">Electronics Items to 60% off, Deal closes on 10 December 2020 Hurry!!</h1>
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'Home' }],
  },
  components: {},
  data() {
    return {
      collapsed: false,
    }
  },
}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 80vh;
  line-height: 160px;
  background: #364d79;
}

.ant-carousel .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel .custom-slick-arrow:before {
  display: none;
}
.ant-carousel .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel .slick-slide h1 {
  color: #fff;
  font-size: 2rem;
  margin: 16rem 4rem 0;
}
.img-background {
  width: 100%;
  height: 80vh;
  display: inline-block;
  background-image: url(/img/d1.f938d227.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
}
</style>
