import logo from './logo.svg';
import './App.css';
import Component from "./Component";
function App() {
    const Data = [
        {
            "hour": 10,
            "value": 8
        },
        {
            "hour": 11,
            "value": 10
        },
        {
            "hour": 12,
            "value": 13
        },
        {
            "hour": 13,
            "value": 16
        },
        {
            "hour": 14,
            "value": 15
        },
        {
            "hour": 15,
            "value": 8 },
        {
            "hour": 16,
            "value": 7 },
        {
            "hour": 17,
            "value": 15
        },
        {
            "hour": 18,
            "value": 20
        },
        {
            "hour": 19,
            "value": 11
        },
        {
            "hour": 20,
            "value": 8 }
    ]
  return (
    <div className="App">
      <Component  data={Data}/>
    </div>
  );
}

export default App;
