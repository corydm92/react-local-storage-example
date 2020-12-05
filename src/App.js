import React, {useEffect, useState} from 'react'
import Grid from './components/Grid'
import CheckboxToolbar from './components/CheckboxToolbar';


// DATA SETUP

const dataSchema = {id: '', name: 'Name', date: 'Date', age: 'Age'}

let getData = () => {
  let outArray = []
  for (let i = 0; i < 5; i++) {
    outArray.push({...dataSchema, id: i + 1})
  }
  return outArray
}


function App() {

  let [visibleColumns, setVisibleColumns] = useState(JSON.parse(localStorage.getItem('visibleColumns')) || {} )

  useEffect(() => {
    if (!localStorage.visibleColumns) {

      // Define our default value for visible columns
      let defaultVisibleColumns = {id: true, name: true, date: true, age: true}

      // Set both local storage and app state to default. This only happens if local storage has not been initiated
      localStorage.setItem('visibleColumns', JSON.stringify(defaultVisibleColumns))
      setVisibleColumns(defaultVisibleColumns)

    } 
  }, [])

  const updateStorage = (updatedColumns) => {
    setVisibleColumns(updatedColumns)
    localStorage.setItem('visibleColumns', JSON.stringify(updatedColumns))
  }  

  let data = getData()

  return (
    <div className="App">
      <CheckboxToolbar visibleColumns={visibleColumns} updateStorage={updateStorage} />
      <Grid visibleColumns={visibleColumns} data={data}/>
    </div>
  );
}

export default App;
