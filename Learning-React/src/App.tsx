import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import ButtonThing from "./components/ButtonThing";
import DataGrabButton from "./components/DataGrabButton";

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


  const [alertVisable, setAlertVisability] = useState(false)

  return (
    <div>
      <ListGroup 
        items={items} 
        heading="NumberStrings"
        onSelectItem={handleSelectItem} 
      />
      {alertVisable && <Alert onClose={() => {setAlertVisability(false)}}>Suh</Alert>}
      <ButtonThing onClick={() => {
        printButtonInfo; 
        setAlertVisability(true);
        }}>
        MyButton
      </ButtonThing>
      <DataGrabButton />
    </div>
  );
}

export default App;