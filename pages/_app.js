import '../styles/globals.css'
import { Provider } from "react-redux" 
import Store from "../redux_services/store/store"
import { createWrapper } from "next-redux-wrapper"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store} >
      <Component {...pageProps} />
    </Provider>
  )
}

const makeStore = () => Store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)