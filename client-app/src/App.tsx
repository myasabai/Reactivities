import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';


function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:5000/api/activities').then(response => {
          console.log(response);
          setActivities(response.data);
      })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>    
            <List>
              {activities.map((activity: any) => (
                  <List.Item key={activity.id}>
                    {activity.title}
                  </List.Item>
                ))}
            </List>
            {/* <header className="App-header">
             
              <ul>
                {activities.map((activity:any) => (
                    <li key={activity.id}>
                        {activity.title}
                    </li>
                ))}
              </ul>
            </header> */}
    </div>
  );
}

export default App;
