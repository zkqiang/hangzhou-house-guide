import Ads from 'vue-google-adsense'
import config from './config'

export default ({ Vue }) => {
  Vue.use(require('vue-script2'))
  Vue.use(Ads.Adsense)
  Vue.use(Ads.InArticleAdsense)
  Vue.use(Ads.InFeedAdsense)
  Vue.use(Ads.AutoAdsense, { adClient: config.themeConfig.ads.client, isNewAdsCode: true })
}
