<template>
<div class="theme-vdoing-content writer-work-page-box">
  <div class="writer-name">{{writerData.title}}</div>
  <div class="writer-wrapper">
    <img :src="`https://images.weserv.nl/?url=${writerData.imgUrl}`" />
    <div class="writer-info">
      <div class="gender">性别：{{writerData.gender || '-'}}</div>
      <div class="birth-death-date">生卒日期：{{writerData.birthDeathDate || '-'}}</div>
      <div class="place-birth">出生地：{{writerData.placeBirth || '-'}}</div>
      <div class="country-region">国家/地区：{{writerData.countryRegion || '-'}}</div>
      <div class="more-foreign-names">更多外文名：{{writerData.moreForeignNames || '-'}}</div>
      <div class="more-chinese-names">更多中文名：{{writerData.moreChineseNames || '-'}}</div>
    </div>
  </div>
  <div class="writer-description">
    <div class="title">作者简介</div>
    <div class="content">
      {{writerData.description || '暂无简介'}}
    </div>
  </div>
  <div class="book-list-wrapper">
    <div class="title">代表作品</div>
    <div class="content">
      <div class="list-item" v-for="(item, index) in writerData.bookList" :key="index" 
        @click="handleDetails(item.title, item.details)" :title="item.title">
        <div class="url">
          <img :src="`https://images.weserv.nl/?url=${item.url}`" alt="">
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
  <!-- 详情页弹层 -->
  <div v-if="visibleBookDetails" class="writer-book-details-wrapper" @click="handleClose">
    <div class="writer-book-details-box">
      <div class="title">《{{bookTitle}}》</div>
      <div class="close" @click="handleClose"></div>
      <div class="tips-name">内容简介</div>
      <div class="content">
        {{bookDetails || "暂无简介"}}
      </div>
    </div>
  </div>
  <!-- modal层 -->
  <div v-if="visibleBookDetails" class="km-modal"></div>
</div>
</template>

<script>
export default {
  data () {
    return {
      bookTitle: "", // 书本名
      bookDetails: "", // 书本简介
      writerData: null,
      visibleBookDetails: false, // 是否显示书籍详情
    }
  },
  created () {
    this.getPageData()
  },
  methods: {
    getPageData () {
      const pageComponent = this.$frontmatter.pageComponent
      if (pageComponent && pageComponent.data) {
        this.writerData = {
          title: this.$frontmatter.title,
          ...pageComponent.data,
          description: pageComponent.description,
          bookList: pageComponent.bookList
        }
      } else {
        console.error('请在front matter中设置pageComponent和pageComponent.data数据')
      }
    },
    // 打开详情
    handleDetails(title, details) {
      this.visibleBookDetails = true;
      this.bookTitle = title;
      this.bookDetails = details;
    },
    // 关闭事件
    handleClose() {
      this.visibleBookDetails = false;
    }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.writer-work-page-box
  .writer-name
    font-size 1.625rem
    word-wrap: break-word;
    display: block;
    font-weight: bold;
    color: #060;
    margin: 0;
    padding: 0 0 15px 0;
    line-height: 1.1;
  .writer-wrapper
    position relative
    margin-bottom 1.25rem
    padding-bottom .625rem
    border-bottom 1px dashed #ff5722
    min-height 12.5rem
    img
      position absolute
      top 0
      left 0
      width: 135px;
      border-radius 2px
      margin-right 1rem
    .writer-info
      padding-left 155px
      font-size .875rem
      line-height: 1.375rem;
      div
        word-wrap: break-word;
  .writer-description
    margin-bottom 1.25rem
    .title
      font-size 1.25rem
      font-weight: bold;
      color: #060;
      margin-bottom .625rem
    .content 
      font-size 1rem
      word-wrap: break-word;
      white-space: pre-wrap
      line-height: 1.5rem;
  .book-list-wrapper
    .title
      font-size 1.25rem
      font-weight: bold;
      color: #060;
      margin-bottom 1.25rem
    .content
      .list-item
        display inline-block
        margin-right 1.25rem
        cursor pointer
        .url
          img
            width 7.1875rem
        .title
          text-align center
          font-size 1rem
          font-weight: 400;
          color: #060;
.writer-book-details-wrapper
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index 666
  &::after
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  .writer-book-details-box
    position relative
    display: inline-block;
    width: 26.25rem;
    max-width 80%
    padding 1.25rem 1rem .625rem
    vertical-align: middle;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    font-size: 18px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .2);
    text-align: left;
    overflow: hidden;
    backface-visibility: hidden;
    .title
      font-size 1.25rem
      font-weight: bold;
      color: #060;
    .close 
      position absolute
      top .625rem
      right .625rem
      width 1.25rem
      height 1.25rem
      border-radius 50%
      background-color #060
      transform: rotate(45deg);
      cursor pointer
      &::before
        content ""
        position absolute
        top .5625rem
        left .25rem
        width .75rem
        height 2px
        background-color #fff
      &::after
        content ""
        position absolute
        top .25rem
        left .5625rem
        width 2px
        height .75rem
        background-color #fff
    .tips-name
      text-align center
      font-size 1rem
      font-weight: bold;
      color: #060;
      margin-top .625rem
    .content 
      font-size 1rem
      word-wrap: break-word;
      white-space: pre-wrap
      line-height: 1.5rem;
      max-height 25rem
      overflow auto
.km-modal
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  background: #000;
  z-index 555
</style>
