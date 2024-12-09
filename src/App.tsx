
import './App.css'
import Router from './Router.tsx'
import { Provider } from'react-redux';
import { store } from './store.ts';
function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>

  )
}

export default App
