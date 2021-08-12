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
      <div class="list-item" v-for="(item, index) in writerData.bookList" :key="index" :title="item.details">
        <div class="url">
          <img :src="`https://images.weserv.nl/?url=${item.url}`" alt="">
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      writerData: null,
    }
  },
  created () {
    this.getPageData()
  },
  methods: {
    getImage(url){
      console.log(url);
      // 把现在的图片连接传进来，返回一个不受限制的路径
      if(url !== undefined){
          return url.replace(/^(http)[s]*(\:\/\/)/,'https://images.weserv.nl/?url=');
      }
    },
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
</style>
