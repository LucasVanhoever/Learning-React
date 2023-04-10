import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import ButtonThing from "./components/ButtonThing";
import DataGrabButton from "./components/DataGrabButton";
import axios from 'axios';


function App()
{
  let items: string[] = [
    "12",
    "34643",
    "3473",
    "22.6",
    "35.525235"
  ];

  const handleSelectItem = (item: string) => 
  {
    console.log(item);
  }

  const printButtonInfo = (type: string, children: string) =>
  {
    console.log('Clicked Button of Type: ' + type + " \nMessage on Button is: " + children);
  }

  const fetchBackendData = async () => 
  {
      try {
        const response = await axios.get('http://localhost:5030/api/BasicTest/message');
        console.log('Data from the backend:', response.data);
        setAlertText(response.data)
      } catch (error) {
        setAlertText("Error Fetching Data")
        console.error('Error fetching message:', error);
      }
  };


  const [alertVisable, setAlertVisability] = useState(false)
  const [alertText, setAlertText] = useState("Default Text")
  return (
    <div>
      <ListGroup 
        items={items} 
        heading="NumberStrings"
        onSelectItem={handleSelectItem} 
      />
      {alertVisable && <Alert onClose={() => {setAlertVisability(false)}}>{alertText}</Alert>}
      <ButtonThing onClick={() => {
        printButtonInfo; 
        setAlertVisability(true);
        }}>
        MyButton
      </ButtonThing>
      <DataGrabButton fetchMessage={() => {fetchBackendData()}}/>
    </div>
  );
}

export default App;