import {Routes,Route,Navigate} from 'react-router-dom' 
import NewNote from './NewNote'
 
export type Note={
    id:string
}& NoteData

export type NoteData={
    title:string,
    textArea:string,
    tags:Tag[]
}
export type Tag={
    id:string,
    label:string
}
function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='new' element={<h1><NewNote/></h1>}/>
      <Route path='/:id'>
        <Route index element={<h1>Show</h1>} />
        <Route path='edit' element={<h1>Edit</h1>} />

      </Route>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
      
    </>
  )
}

export default App
