import Header from './header'
import Content from'./content'
import Sidebar from './sidebar'

function App(){
  return(
    <>
    <Header/>
    
    <div className='flex'>
    <Sidebar/>
    <Content/>
    </div>
    </>
  )
}
export default App