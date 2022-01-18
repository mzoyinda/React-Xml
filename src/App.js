import Table from './Table'
import Dish1 from '../src/assets/dish1.xml'
import Dish2 from '../src/assets/dish2.xml'
import Dish3 from '../src/assets/dish3.xml'

const App = () => {
  return (
    <div>
      <Table dish={Dish1}/>
      <Table dish={Dish2} />
      <Table dish={Dish3}/>
    </div>
  )
}

export default App
