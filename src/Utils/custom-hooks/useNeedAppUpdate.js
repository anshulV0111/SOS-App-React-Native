import { useLazyFetchAppVersionQuery } from '@/Network/services/auth'
import { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import pkg from '../../../package.json'

const useNeedAppUpdate = () => {
  const [appUpdate, setAppUpdate] = useState(false)
  const [url, setUrl] = useState('')
  const [getAppVersion] = useLazyFetchAppVersionQuery()

  const checkAppUpdate = async () => {
    const res = await getAppVersion()
    if (Platform.OS === 'ios') {
      if (pkg.appVersion !== res.data.data.ios_version) {
        setUrl(res.data.data.ios_link)
        setAppUpdate(true)
      }
    } else {
      if (pkg.appVersion !== res.data.data.android_version) {
        setUrl(res.data.data.android_link)
        setAppUpdate(true)
      }
    }
  }

  useEffect(() => {
    checkAppUpdate()
  }, [])

  return {
    appUpdate,
    url
  }
}

export default useNeedAppUpdate
