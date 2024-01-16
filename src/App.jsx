import './App.css'
import Input from './Component/Input'
import Items from './Component/Items'
import Item from './Component/Item'

function App() {
  return (
    <div className='min-h-screen w-full bg-gray-900 p-3'>
      <div className='w-full flex flex-row justify-center'>
        <h1></h1>  
      </div>
      <div className='flex flex-row justify-center'>
        <Input/>
      </div>
      <div className='flex flex-row justify-center'>
        <table>
          <Items/>
          <Item/>`~`
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </table>~``
      </div>
    </div>
  )
}

export default App
