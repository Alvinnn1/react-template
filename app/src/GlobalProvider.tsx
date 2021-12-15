import React, { FunctionComponent } from 'react'
import { Provider, connect } from 'react-redux'
import { store } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Locals, LocalsProvider } from '@imf/typelocals'
import { persistStore } from 'redux-persist'
import { Theme, ThemeProvider } from '@emotion/react'
import { DarkBlueTheme, LightTheme } from '@/assets/theme'
import EN from '@/assets/locals/en'

interface GlobalProvideProps {
  children: React.ReactNode
}

interface GlobalProvideChildrenProps {
  themeType?: string
  language: Locals
  children: React.ReactNode
}

const persistor = persistStore(store)
const mapStateToProps = (state: any) => {
  return {
    themeType: 'light',
    language: EN,
  }
}

const GlobalProvideChildren: FunctionComponent<GlobalProvideChildrenProps> = props => {
  const theme: Theme = LightTheme
  return (
    <ThemeProvider theme={theme}>
      <LocalsProvider locals={EN}>{props.children}</LocalsProvider>
    </ThemeProvider>
  )
}

const GlobalProvideChildrenWithStore = connect(mapStateToProps)(GlobalProvideChildren)

const GlobalProvider: FunctionComponent<GlobalProvideProps> = props => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalProvideChildrenWithStore>{props.children}</GlobalProvideChildrenWithStore>
      </PersistGate>
    </Provider>
  )
}
export default GlobalProvider
