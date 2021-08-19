/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "48a7c81d093040639d880042cc2974f5"
  },
  {
    "url": "archives/index.html",
    "revision": "a7ccf85c15312a2fc236d77c8719b497"
  },
  {
    "url": "assets/css/0.styles.225f33ad.css",
    "revision": "cf219d540dd060a816154d5e10945725"
  },
  {
    "url": "assets/img/loading.a592e2e5.jpg",
    "revision": "a592e2e55fb99cf3c6d2054d358e6caa"
  },
  {
    "url": "assets/js/10.b8fd1308.js",
    "revision": "a95b767cf459716eaa9ab70c05293164"
  },
  {
    "url": "assets/js/11.8bf2b37b.js",
    "revision": "6e03849d56c6bb15ab2897023ce96003"
  },
  {
    "url": "assets/js/12.82d87592.js",
    "revision": "13107f51d9ca5be0cdc101c791337d8a"
  },
  {
    "url": "assets/js/13.382250ed.js",
    "revision": "d3d45357d50b817acb9f380db2564ff1"
  },
  {
    "url": "assets/js/14.312410b1.js",
    "revision": "977c84a7c1509a56384e286c2df08424"
  },
  {
    "url": "assets/js/15.5fe7c043.js",
    "revision": "38cae5dfd0525fddbcf029446743dcb1"
  },
  {
    "url": "assets/js/16.c91256f3.js",
    "revision": "75677f6312869d3bc8742f850753cfb9"
  },
  {
    "url": "assets/js/17.977a694c.js",
    "revision": "d9b88dd0dd583f42d9ac02021662d336"
  },
  {
    "url": "assets/js/18.64106372.js",
    "revision": "d5c8ece3620d367f0387a036f0a8005f"
  },
  {
    "url": "assets/js/19.fe133aba.js",
    "revision": "7498d5fecf432af261ab3801c427335b"
  },
  {
    "url": "assets/js/2.8e04cdc2.js",
    "revision": "d0383653b5bec6b630d602908e9a4854"
  },
  {
    "url": "assets/js/20.e73862a0.js",
    "revision": "6483083ec7851ed98903c9e4dffcbaf8"
  },
  {
    "url": "assets/js/21.6d5329ea.js",
    "revision": "198204a860b722a5f0d1aabd6df76238"
  },
  {
    "url": "assets/js/22.60d2bebd.js",
    "revision": "bdb1ada6bf0e78eeb728436167e2dc00"
  },
  {
    "url": "assets/js/23.c871c279.js",
    "revision": "8732718e1e440df0388582cd5767d8bd"
  },
  {
    "url": "assets/js/24.e09b1072.js",
    "revision": "2d94c614975062015a7f5a2cbc57cad5"
  },
  {
    "url": "assets/js/25.2d677462.js",
    "revision": "6390c717dd57d71c5449cf8eb32d411c"
  },
  {
    "url": "assets/js/26.52768969.js",
    "revision": "0600e96f9f7a35074c0ed830764adc0c"
  },
  {
    "url": "assets/js/27.7fc6be7f.js",
    "revision": "dde3060daebb54b5738b4375d5898584"
  },
  {
    "url": "assets/js/28.d964b222.js",
    "revision": "6270bfcbd3222ed55e6c453444edd1f1"
  },
  {
    "url": "assets/js/29.d7c02aa6.js",
    "revision": "f93613cbc10cfca980590e1481fcf3fb"
  },
  {
    "url": "assets/js/3.b53ea831.js",
    "revision": "533025bb304ce561bb2ee4faf9ebd618"
  },
  {
    "url": "assets/js/30.b6e51607.js",
    "revision": "f2038f3166dec538c0266724c29ffed8"
  },
  {
    "url": "assets/js/31.315a2fa8.js",
    "revision": "3d01ed129017aef0b5bd922130d01fd9"
  },
  {
    "url": "assets/js/32.41d5b783.js",
    "revision": "147363b79a28e36b1f59e63b1419bc41"
  },
  {
    "url": "assets/js/33.1febf567.js",
    "revision": "61fbb59d2a728c312f046be75bb4113e"
  },
  {
    "url": "assets/js/34.23d2d0f6.js",
    "revision": "0a3befb47f87dc4377a5b5d7d59223bc"
  },
  {
    "url": "assets/js/35.3ddf7739.js",
    "revision": "edad41c4b4ab04635908d52c35829abb"
  },
  {
    "url": "assets/js/36.27427593.js",
    "revision": "87e4ae95296b0b4672bfcf632199aef0"
  },
  {
    "url": "assets/js/37.eda44146.js",
    "revision": "a572fab9e57d5fcc3edad87094e952d9"
  },
  {
    "url": "assets/js/38.f505e595.js",
    "revision": "200f66ed11e7eab5f20556ddd4b683d9"
  },
  {
    "url": "assets/js/39.ab305d3c.js",
    "revision": "a4cf67e7951fc6a8bf4db72729aced7a"
  },
  {
    "url": "assets/js/4.060e6581.js",
    "revision": "3d44ef37a23f691524f62043afa44cf1"
  },
  {
    "url": "assets/js/40.ffeb3ab4.js",
    "revision": "5622edf916e4a5416765b50d380e61b1"
  },
  {
    "url": "assets/js/41.6668603c.js",
    "revision": "75e9b01014cdbe9ad6ecb8d249371113"
  },
  {
    "url": "assets/js/42.bb38dc2a.js",
    "revision": "c204d80987ad1225074cdc156a14fc71"
  },
  {
    "url": "assets/js/43.152fc97d.js",
    "revision": "ec932debcf89f752ded47378a1a1fe91"
  },
  {
    "url": "assets/js/44.4c86e94c.js",
    "revision": "288498ffb5fdb7c326680cb7836125d5"
  },
  {
    "url": "assets/js/45.11660ea1.js",
    "revision": "a933311f5e023bef0b783fe5f71ee34e"
  },
  {
    "url": "assets/js/46.8990d6ee.js",
    "revision": "eaf4c6c0e7cb80e5fbb6bdf8b6db7f6f"
  },
  {
    "url": "assets/js/47.00965ea2.js",
    "revision": "5f2ffbb61eb4b58c4ac24612a8c4f497"
  },
  {
    "url": "assets/js/48.e9dc10a7.js",
    "revision": "f7d11f0437c248c607c9018e4f37b1c2"
  },
  {
    "url": "assets/js/49.34fea809.js",
    "revision": "317f0fa8c7e29edbba6e5f726d119235"
  },
  {
    "url": "assets/js/5.8fd01129.js",
    "revision": "0aaaed136569dc012940871883034599"
  },
  {
    "url": "assets/js/50.f01b6cd9.js",
    "revision": "1c91e88a9d608d4710a503584790ceee"
  },
  {
    "url": "assets/js/51.829a2545.js",
    "revision": "250b65e62ada5402bc7a0360f49e264c"
  },
  {
    "url": "assets/js/52.92f74b6e.js",
    "revision": "a534f903d2065b46292ae8c05a57e7b0"
  },
  {
    "url": "assets/js/53.20ecca2a.js",
    "revision": "ead14443fec79c2a944093df5de20caa"
  },
  {
    "url": "assets/js/54.6d4580b5.js",
    "revision": "5936c333feba765a70d3bd08349f37cb"
  },
  {
    "url": "assets/js/55.c2cc03c5.js",
    "revision": "5f00b2535c69bf19aed1c36b1f715b82"
  },
  {
    "url": "assets/js/56.637c8abc.js",
    "revision": "b39f45c2652227cf07d94e1ece17a6d3"
  },
  {
    "url": "assets/js/57.eae98a23.js",
    "revision": "3d5d941985c46de8964707dfd7b09dbb"
  },
  {
    "url": "assets/js/58.2e76d66c.js",
    "revision": "2bfe24eae7b119c1849aba4ac8182c9c"
  },
  {
    "url": "assets/js/59.d3850442.js",
    "revision": "71f077548b11183aedef59107c51bb16"
  },
  {
    "url": "assets/js/6.69af8dcd.js",
    "revision": "43f113e655b5a86db5b211f042cf1378"
  },
  {
    "url": "assets/js/60.dba87e79.js",
    "revision": "a604eaeba2fe33d6846bd3a3716597d5"
  },
  {
    "url": "assets/js/61.8c2cad2e.js",
    "revision": "ea06f70da5a7db6ee5b5d36ef9130d4f"
  },
  {
    "url": "assets/js/62.ebac6f70.js",
    "revision": "dfd3988b3cff8fccbbd2079c057fdafe"
  },
  {
    "url": "assets/js/63.e5b5c067.js",
    "revision": "3b49c6e0ec05051ab512315eaa1e0102"
  },
  {
    "url": "assets/js/64.e4ad4914.js",
    "revision": "f347e85c123f5e8512d3861a6df34368"
  },
  {
    "url": "assets/js/65.e855cc25.js",
    "revision": "ab4e955d1f6b3f97c807398be7088655"
  },
  {
    "url": "assets/js/66.f9c82fe5.js",
    "revision": "e5fa87eb04bc0b8e2d8da2805441eb2b"
  },
  {
    "url": "assets/js/67.eb8d93d9.js",
    "revision": "7d08484f44d59b623a1be1a0110c747e"
  },
  {
    "url": "assets/js/68.585e494a.js",
    "revision": "1eb0c84191df81c90f3fe20e3e781a1d"
  },
  {
    "url": "assets/js/69.f823b336.js",
    "revision": "f074536fee818a56672201dadec0586f"
  },
  {
    "url": "assets/js/7.2be2cd53.js",
    "revision": "dcec7e9a77b18c59758aff3945efeb1a"
  },
  {
    "url": "assets/js/70.1241b9a4.js",
    "revision": "5dd0e1c9d5a2eca9c7f86472cb8ada60"
  },
  {
    "url": "assets/js/8.8efc6eb0.js",
    "revision": "8f97819ad1a804709f59b62f4576ba91"
  },
  {
    "url": "assets/js/9.8cf9852a.js",
    "revision": "00211dd93957b95042d469490dc5c10c"
  },
  {
    "url": "assets/js/app.2a3f4dd3.js",
    "revision": "c5754560b7d1177a6e4f1c8be4df58d9"
  },
  {
    "url": "bookshop/explain/index.html",
    "revision": "1b41dbf881ea721997d015e6327950e6"
  },
  {
    "url": "bookshop/friendslink/index.html",
    "revision": "837d9e2edd38869295e622723eaea4ef"
  },
  {
    "url": "bookshop/linkme/index.html",
    "revision": "1984db1b056a5a8c0669d41b6406d319"
  },
  {
    "url": "bookshop/logs/index.html",
    "revision": "b6a8175b9e22e3169f04d11d7de64557"
  },
  {
    "url": "bookshop/message-board/index.html",
    "revision": "049b91e9819219d489768601aaf957d8"
  },
  {
    "url": "categories/index.html",
    "revision": "8111fdf40d72fcfa7e042130f7dbb43f"
  },
  {
    "url": "idealism/index.html",
    "revision": "0135bcbfcea9a37d58dec65906af4e0f"
  },
  {
    "url": "idealism/kaimo/3a4bc58d9f8f9/index.html",
    "revision": "50422dbd5b6cad0afdd8ae06d40af928"
  },
  {
    "url": "idealism/kaimo/6e0c305f4fac8/index.html",
    "revision": "0ec13fb50e932750b015c37ab6798027"
  },
  {
    "url": "idealism/kaimo/733c0d5182f3f/index.html",
    "revision": "e030087855d89ae970b1a1315c9d375b"
  },
  {
    "url": "idealism/kaimo/7ccb0ec9699f9/index.html",
    "revision": "7fbe26d792215a60c053d2ca1832e788"
  },
  {
    "url": "idealism/kaimo/a9c488745f46a/index.html",
    "revision": "6ef297bf2e25d593e9bd9f2bc49d0d02"
  },
  {
    "url": "idealism/kaimo/d2bdacaa9b5dd/index.html",
    "revision": "154c0af3d8c6f64165256b05b09d8eff"
  },
  {
    "url": "idealism/kaimo/fb7dabd34f206/index.html",
    "revision": "116e4fbe941237a74008d106bac203d8"
  },
  {
    "url": "idealism/kaimo/index.html",
    "revision": "cab33b6e10d42b407f4d4fd34dc66d0e"
  },
  {
    "url": "idealism/read/b28c3c02bd552/index.html",
    "revision": "9186c965e63fe372d7c8bef471cab3e2"
  },
  {
    "url": "idealism/read/c2f2496413766/index.html",
    "revision": "e33f07935b1a4b1b074bfd3df78a8019"
  },
  {
    "url": "idealism/read/c93473b468bed/index.html",
    "revision": "6e29dbc53c1234df3ba4f32e1331e0bf"
  },
  {
    "url": "idealism/read/cfd16e5ccece7/index.html",
    "revision": "7ee7c193f9aa72522ba8a5c0d5ad90d3"
  },
  {
    "url": "img/avatar-2.jpg",
    "revision": "55b9603cdb0caff91ecd803d047730b1"
  },
  {
    "url": "img/avatar-2.png",
    "revision": "d3a1ca94d8290aa71371dda0664aaf14"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "037dec754a042491ae29f2bc02eb1814"
  },
  {
    "url": "img/avatar.png",
    "revision": "a19cc6aacf9b570b8a4047da4796146f"
  },
  {
    "url": "img/bg.jpg",
    "revision": "c8f26794a0ee092e62abbd0f99857064"
  },
  {
    "url": "img/hero-img.png",
    "revision": "d7c468b6247265ec50c394732027262b"
  },
  {
    "url": "img/hero-img2.png",
    "revision": "142427c0e1698232b10962dd934fc0d9"
  },
  {
    "url": "img/kmc.jpg",
    "revision": "a5bf9a0b4ef23c3952fd52b2c60ccc7d"
  },
  {
    "url": "img/mm_facetoface_collect_qrcode.png",
    "revision": "e58c14f2cc36b93a5d458c31183c68df"
  },
  {
    "url": "img/mm_qrcode.png",
    "revision": "855bda047ad644325dad076a63f5f07d"
  },
  {
    "url": "img/pikapika.jpg",
    "revision": "0b6e65b4475bc068ac04c9c24204f1d4"
  },
  {
    "url": "img/qrcode_for_gh.jpg",
    "revision": "21e47a092a4d1984fd58fa391fd67ede"
  },
  {
    "url": "index.html",
    "revision": "e87a34dc18c8974afcc8151ff1f3315c"
  },
  {
    "url": "library/douban/book/2015/index.html",
    "revision": "5c1d60e130acd66ceebbeace079028dd"
  },
  {
    "url": "library/douban/book/2016/index.html",
    "revision": "a1d268a6035d8d29ee432143dbd11a85"
  },
  {
    "url": "library/douban/book/2017/index.html",
    "revision": "872ca8bb6e7d62d0006dedb2bb1ac245"
  },
  {
    "url": "library/douban/book/2018/index.html",
    "revision": "b4eb611641fee41ad094b24d964500de"
  },
  {
    "url": "library/douban/book/2019/index.html",
    "revision": "0fe23b5ada9a0c06f22d81c56c5163bc"
  },
  {
    "url": "library/douban/book/2020/index.html",
    "revision": "09247f3f9f4b17b6af29d6efd54ae62a"
  },
  {
    "url": "library/douban/index.html",
    "revision": "df1cec1cd38b887985efeab9daf5d16a"
  },
  {
    "url": "library/douban/movie/2015/index.html",
    "revision": "795e17a83fe96202ab6c7f1450a24046"
  },
  {
    "url": "library/douban/movie/2016/index.html",
    "revision": "5b22f968b3cdeb32a34c92eed9db0957"
  },
  {
    "url": "library/douban/movie/2017/index.html",
    "revision": "4826351c2c7ecf779eef0da0029ffb83"
  },
  {
    "url": "library/douban/movie/2018/index.html",
    "revision": "812acde038e2cfd614f0a0f982354d75"
  },
  {
    "url": "library/douban/movie/2019/index.html",
    "revision": "4d69eaf5b933f2678de19237fa6d5374"
  },
  {
    "url": "library/douban/movie/2020/index.html",
    "revision": "b0482fdd206997345782754aea1708c6"
  },
  {
    "url": "library/douban/music/2015/index.html",
    "revision": "c28a5e2e7a942ae66a170a84b7a25dcd"
  },
  {
    "url": "library/douban/music/2016/index.html",
    "revision": "4f75a2abf552982f4534290a5ac3a417"
  },
  {
    "url": "library/douban/music/2017/index.html",
    "revision": "76597c3360b40c101811aa60f8fe5d2b"
  },
  {
    "url": "library/douban/music/2018/index.html",
    "revision": "682d98966bdc8aac2003409f49c3f603"
  },
  {
    "url": "library/douban/music/2019/index.html",
    "revision": "3ea1810569080fa429e78590ff47a91a"
  },
  {
    "url": "library/douban/music/2020/index.html",
    "revision": "8d252b32f3f8509652fa6990ba93b2b1"
  },
  {
    "url": "library/index.html",
    "revision": "7058d8f02be43320291c3622e0e9ebde"
  },
  {
    "url": "library/map/index.html",
    "revision": "150a5c36f9cb81151790077e47be6828"
  },
  {
    "url": "library/open163/index.html",
    "revision": "6f1e1087f41cb9660036f7e1cc5a6d19"
  },
  {
    "url": "library/processon/index.html",
    "revision": "25357930fb7fa9470ba8134256345989"
  },
  {
    "url": "library/shici/index.html",
    "revision": "af281e4ff298ebe7bf71d90bfadd31f1"
  },
  {
    "url": "library/wdl/index.html",
    "revision": "064642d80b0b5f6c98c33071562cb723"
  },
  {
    "url": "library/wiki/index.html",
    "revision": "7922b8c276802586993c15199d8ae6a2"
  },
  {
    "url": "loneliness/2c16dfdd186c9/index.html",
    "revision": "2761cc58426cd2ea5953326d477bd3f7"
  },
  {
    "url": "loneliness/index.html",
    "revision": "fbf6c85c6f71eedac39b6cb6d03067e6"
  },
  {
    "url": "pages/6de420b96e052/index.html",
    "revision": "7ec11418681e83363b17a0f02d5fbb66"
  },
  {
    "url": "resource-tools/3b17bb5dd2c98/index.html",
    "revision": "a83e5443de56658bf53771acd0d3c077"
  },
  {
    "url": "resource-tools/44207a5ef0a8a/index.html",
    "revision": "6b861f0103178ff99f83c8db99159b62"
  },
  {
    "url": "resource-tools/4c19c32335465/index.html",
    "revision": "041cfabddac2a0df5e888fa131ecde30"
  },
  {
    "url": "resource-tools/5f440c9bb4359/index.html",
    "revision": "37b598ff45e96c6ee3f83ec2b60d1387"
  },
  {
    "url": "resource-tools/5ffcfcef5104b/index.html",
    "revision": "11e38dc3b479bd57a185bc6950c024d1"
  },
  {
    "url": "resource-tools/7566c0ff5a24c/index.html",
    "revision": "f3c5032241ab94f2b8bcfb0e3abf26f9"
  },
  {
    "url": "resource-tools/8396c1c08f1b6/index.html",
    "revision": "cd586380b83341ca32e320ef8e598f42"
  },
  {
    "url": "resource-tools/9d5d91d08c126/index.html",
    "revision": "322273e18e130a0b3b441f9d203b371e"
  },
  {
    "url": "resource-tools/c618db4b32e39/index.html",
    "revision": "075a2409c6f25edc8b7fbc6658cbda18"
  },
  {
    "url": "resource-tools/c9e44ab0fce9a/index.html",
    "revision": "f3746f4c6ab920959763ffc45c97977c"
  },
  {
    "url": "resource-tools/ed602e9a815f6/index.html",
    "revision": "3cae74578448609ccacda50fd7277354"
  },
  {
    "url": "resource-tools/index.html",
    "revision": "64713ea03641d6e8ae1948cc47c72f2e"
  },
  {
    "url": "sitemap/index.html",
    "revision": "6ce8b0a09c108b28a93285f5a51fbad6"
  },
  {
    "url": "tags/index.html",
    "revision": "19dcb8b561af989601349419adff1c81"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
