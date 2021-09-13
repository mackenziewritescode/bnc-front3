import { AppRegistry } from 'react-native'

import { App } from 'common/src/App'

AppRegistry.registerComponent('bncfrontend', () => App)
AppRegistry.runApplication('bncfrontend', {
  rootTag: document.getElementById('root'),
})
