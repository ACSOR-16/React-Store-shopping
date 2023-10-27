import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NorFound'
import { SingIn } from '../SingIn'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold underline'>
          Hello World
        </h1>
        
        <Home/>
        <MyAccount/>
        <MyOrder/>
        <MyOrders/>
        <NotFound/>
        <SingIn/>
        
      </div>
    </>
  )
}

export default App
