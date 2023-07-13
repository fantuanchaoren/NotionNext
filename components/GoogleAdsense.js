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

//文章内嵌广告
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6803874334342841"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-6803874334342841"
     data-ad-slot="4186549915"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
