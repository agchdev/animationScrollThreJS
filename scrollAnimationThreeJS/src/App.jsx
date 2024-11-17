import { Suspense } from 'react'
import './App.css'
import Scene from './components/Scene'

function App() {

  return (
    <>
      <div className='scene_container'>
        <Suspense fallback={null}>
          <Scene/>  
        </Suspense>  
      </div>  {/* DIV QUE CONTIENE EL MODELO 3D */}
    </>
  )
}

export default App
