import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import * as msTeams from '@microsoft/teams-js'

import { Home } from './Home'
import { Home as HomeTeams } from './Home.teams'

export function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true)
  const [onTeams, setOnTeams] = useState<boolean>(false)

  // useEffect(() => {
  //   async function initializeTeams(): Promise<null | undefined> {
  //     try {
  //       await msTeams.initialize(() => setOnTeams(true))
  //     } catch (error) {
  //       return null
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   initializeTeams()
  // }, [])

  function renderHome() {
    if (loading) {
      return <ActivityIndicator />
    }
    if (onTeams) {
      return <HomeTeams />
    }
    return <Home />
  }

  return <View>{renderHome}</View>
}
