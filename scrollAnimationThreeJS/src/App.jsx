
import { Suspense } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='scene_container'>
        <Suspense fallback={null}></Suspense>  
      </div>  {/* DIV QUE CONTIENE EL MODELO 3D */}
    </>
  )
}

export default App
