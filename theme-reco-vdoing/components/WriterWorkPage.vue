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
    <div class="writer-content">
      <template v-if="writerData.description && writerData.description.length > 0">
        <div v-for="(item, index) in writerData.description" :key="index" class="list-item">
          {{item}}
        </div>
      </template>
      <div v-else class="no-data">暂无简介</div>
    </div>
  </div>
  <div class="book-list-wrapper">
    <div class="title">代表作品</div>
    <div class="writer-content">
      <div class="list-item" v-for="(item, index) in writerData.bookList" :key="index" 
        @click="handleDetails(item)" :title="item.title">
        <div class="url">
          <img :src="`https://images.weserv.nl/?url=${item.url}`" :alt="item.title" @load="successLoadImg" @error="errorLoadImg"/>
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
  <!-- 详情页弹层 -->
  <div v-if="visibleBookDetails" class="writer-book-details-wrapper">
    <div class="writer-book-details-box">
      <div class="title">《{{bookTitle}}》</div>
      <div class="close" @click="handleClose"></div>
      <div class="tips-name">
        <div :class="{actived: activeName === '1'}" @click="handleActiveName('1')">目录</div>
        <div :class="{actived: activeName === '2'}" @click="handleActiveName('2')">内容简介</div>
        <div :class="{actived: activeName === '3'}" @click="handleActiveName('3')">原文摘录</div>
      </div>
      <div class="writer-content">
        <div class="content-list">
          <template v-if="activeName === '1'">
            <template v-if="bookMenu && bookMenu.length > 0">
              <div v-for="(item, index) in bookMenu" :key="index" class="list-item">
                {{item}}
              </div>
            </template>
            <div v-else class="no-data">暂无目录</div>
          </template>
          <template v-if="activeName === '2'">
            <template v-if="bookDetails && bookDetails.length > 0">
              <div v-for="(item, index) in bookDetails" :key="index" class="list-item">
                {{item}}
              </div>
            </template>
            <div v-else class="no-data">暂无简介</div>
          </template>
          <template v-if="activeName === '3'">
            <template v-if="originalExcerpt && originalExcerpt.length > 0">
              <div v-for="(item, index) in originalExcerpt" :key="index" class="list-item">
                {{item}}
              </div>
            </template>
            <div v-else class="no-data">暂无原文摘录</div>
          </template>
        </div>
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
      bookMenu: [], // 书本目录
      bookDetails: [], // 书本内容简介
      originalExcerpt: [], // 书本原文摘录
      writerData: null,
      visibleBookDetails: false, // 是否显示书籍详情
      activeName: "2", // 当前激活目录
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
          bookList: require(`../../docs/.vuepress/config/bookList/${pageComponent.bookList}`)
        }
      } else {
        console.error('请在front matter中设置pageComponent和pageComponent.data数据')
      }
    },
    // 打开详情
    handleDetails(item) {
      this.visibleBookDetails = true;
      this.activeName = '2';
      this.bookTitle = item.title;
      this.bookMenu = item.menu;
      this.bookDetails = item.details;
      this.originalExcerpt = item.excerpt;
      // 对html页面滚动处理
      document.children[0].style.overflow = "hidden";
    },
    // 关闭事件
    handleClose() {
      this.visibleBookDetails = false;
      document.children[0].style.overflow = "auto";
    },
    // 切换目录
    handleActiveName(type) {
      this.activeName = type;
    },
    // 图片成功
    successLoadImg(event) {
      if (event.target.complete === true) {
        event.target.classList.remove("default-image");
      }
    },
    // 图片失败
    errorLoadImg(event) {
      event.target.classList.add("default-image");
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
    color: #3eaf7c;
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
      color: #3eaf7c;
      margin-bottom .625rem
    .writer-content
      font-size 1rem
      word-wrap: break-word;
      line-height: 1.5rem;
      .list-item
        text-indent 2rem
        word-spacing .25rem
        letter-spacing .0625rem
        margin-bottom .625rem
        .no-data
          text-align center
          margin-top 6.25rem
  .book-list-wrapper
    .title
      font-size 1.25rem
      font-weight: bold;
      color: #3eaf7c;
      margin-bottom 1.25rem
    .writer-content
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
          color: #3eaf7c;
.writer-book-details-wrapper
  position: fixed;
  top: 3.6rem;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  height calc(100% - 3.6rem)
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
    width: 28.125rem;
    height 80%
    max-width 80%
    padding 1.25rem 1rem .625rem
    vertical-align: middle;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    font-size: 18px;
    text-align: left;
    overflow: hidden;
    backface-visibility: hidden;
    box-shadow: var(--box-shadow);
    background: var(--background-color);
    .title
      font-size 1.25rem
      font-weight: bold;
      color: #3eaf7c;
    .close 
      position absolute
      top .625rem
      right .625rem
      width 1.25rem
      height 1.25rem
      border-radius 50%
      background-color #3eaf7c
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
      display flex
      justify-content space-between
      padding 0 2.5rem
      margin .625rem 0 1.25rem
      div
        text-align center
        font-size 1rem
        font-weight: bold;
        color: #3eaf7c;
        padding .25rem .75rem
        border-radius .25rem
        cursor pointer
        &.actived
          background-color #3eaf7c;
          color #fff
    .writer-content 
      font-size 1rem
      word-wrap: break-word;
      line-height: 1.5rem;
      max-height calc(100% - 6rem)
      overflow auto
      .content-list
        .list-item
          text-indent 2rem
          word-spacing .25rem
          letter-spacing .0625rem
          margin-bottom .625rem
        .no-data
          text-align center
          margin-top 6.25rem
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
