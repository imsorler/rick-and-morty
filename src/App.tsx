import ClickCounter from './ClickCounter'

import './styles.css'
import IMAGE from './intro-1628182486.jpg'

export const App = () => {
  return (
    <>
      <h1>
        React app! - {process.env.NODE_ENV} : {process.env.name}
      </h1>
      <img src={IMAGE} alt="rick" width={250} height={250} />
      <ClickCounter />
    </>
  )
}
