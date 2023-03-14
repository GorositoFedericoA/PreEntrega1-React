import './App.css'
import Navbar from './components/Navbar';
import Button from './components/button';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';


function App() {

  return (
    <div>
      <Navbar  />
      <h1>GoroTech</h1>
      <Button texto="1" /> 
      <Button texto="2"/>
      <Button texto="3"/>
      <ItemListContainer greeting={"greeting"}/>
      
    </div>
  )
}

export default App