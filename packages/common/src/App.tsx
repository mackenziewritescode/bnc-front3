import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useTeams } from 'msteams-react-base-component'

import { Home } from './Home'
import { Home as HomeTeams } from './Home.teams'

export function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true)

  const [{ inTeams }] = useTeams({})

  useEffect(() => {
    if (inTeams || inTeams !== undefined) {
      setLoading(false)
    }
  }, [inTeams])

  function renderHome() {
    if (loading) {
      return <ActivityIndicator />
    }
    if (inTeams) {
      return <HomeTeams />
    }
    return <Home />
  }

  return <View>{renderHome()}</View>
}
