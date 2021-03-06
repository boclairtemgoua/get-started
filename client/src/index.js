// ** React Imports
import { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
// ** Core styles
import './@core/assets/fonts/feather/iconfont.css'
import './@core/scss/core.scss'


import { ThemeContext } from './contexts/ThemeColors'

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from './redux/storeConfig/store'

// ** React Perfect Scrollbar
import 'react-quill/dist/quill.snow.css'

// ** Service Worker
import * as serviceWorker from './serviceWorker'

// ** Lazy load app
const LazyApp = lazy(() => import('./App'))

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={'loading...'}>
      <ThemeContext>
        <LazyApp />
      </ThemeContext>
    </Suspense>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()