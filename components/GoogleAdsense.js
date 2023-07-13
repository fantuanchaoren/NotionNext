import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function GoogleAdsense () {
  const initGoogleAdsense = () => {
    const ads = document.getElementsByClassName('adsbygoogle').length
    const newAdsCount = ads
    if (newAdsCount > 0) {
      for (let i = 0; i <= newAdsCount; i++) {
        try {
          // eslint-disable-next-line no-undef
          (adsbygoogle = window.adsbygoogle || []).push({})
        } catch (e) {

        }
      }
    }
  }

  const router = useRouter()
  useEffect(() => {
    initGoogleAdsense()
    router.events.on('routeChangeComplete', initGoogleAdsense)
    return () => {
      router.events.off('routeChangeComplete', initGoogleAdsense)
    }
  }, [router.events])
  return null
}


const AdSlot = ({ type = 'show' }) => {
  if (!BLOG.ADSENSE_GOOGLE_ID) {
    return null
  }
  // 文章内嵌广告
  if (type === 'in-article') {
    return <ins className="adsbygoogle"
            style={{ display: 'block', textAlign: 'center' }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-adtest={BLOG.ADSENSE_GOOGLE_TEST ? 'on' : 'off'}
            data-ad-client={BLOG.ADSENSE_GOOGLE_ID}
            data-ad-slot="4186549915"></ins>
  }
