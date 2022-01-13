import React from 'react';

//axios for xml request
import axios from 'axios';

//xml file reader
import XMLParser from 'react-xml-parser';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
     
        name: [],
        food:[],
      
              }
             
  }
  
    componentDidMount() {
     //get data request
      axios.get('/assets/users.xml',{
        "Content-Type": "application/xml; charset=utf-8"
       }).then(res => 
        {
        //Storing users detail in state array object
        const jsonDataFromXml = new XMLParser().parseFromString(res.data);
        
      
        this.setState({ name: jsonDataFromXml.getElementsByTagName('title') })
     
       
       
       }); 
       axios.get('/assets/food.xml',{
        "Content-Type": "application/xml; charset=utf-8"
       }).then(res => 
        {
        //Storing users detail in state array object
        const jsonDataFromXml = new XMLParser().parseFromString(res.data);
        
      
        this.setState({ food: jsonDataFromXml.getElementsByTagName('name') })
     
       
       
           }); 
    }
  
 
  render() {
  
    return (
    
      <div className="container p-5">
       
        <ul class="list-group">
      
        {(
      this.state.name.map((item, index) => {
        return (
          <li class="list-group-item">{item.value}</li>
        )
        }
            ))}
          {(
      this.state.food.map((item, index) => {
        return (
          <li class="list-group-item">{item.value}</li>
        )
        }
      ))}
    
    </ul>
    </div>
     
)
};
}

export default App;