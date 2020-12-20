import './App.css';
import React, {useState, useEffect} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { MoreButton } from './components/button/more-button.component';


const App = () => {
  const displayNum = 3; //sets the number of images to display initially, also sets the number to add everytime the more button is clicked.
  const maxNum = 99; //the maximum number of images that can be sent in one api request
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const targetUrl = `http://shibe.online/api/shibes?count=${maxNum}` //uses maxNum. The actual api limit is 100
  const fetchURL = proxyUrl + targetUrl;

  const [shibas, setShebas] = useState([])
  const [count, setCount] = useState(displayNum)

    
  useEffect(() => { //Uses the shiba online api to set the shibas state to an array of images
    fetch(fetchURL)
    .then(res => res.json())
    .then(data => setShebas(data))
    .catch(res => {
      console.log('could not complete request')
    }) 
  }, [fetchURL]) 

  const handleClick = () => {
    setCount(count + displayNum)
  }

  return (
    <div className="App">
      <h1>Shibas!!!</h1>
      <CardList shibas={shibas} count={count} />
      <MoreButton 
        handleClick = {handleClick}
        count = {count}
        max = {maxNum}
      />
    </div>
  );
}


// class App extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       shibas: [],
//       count: displayNum, //gets initial count from displayNum
//       max: maxNum
//     }
//   }
//   componentDidMount(){ //Uses the shiba online api to set the shibas state to an array of images
//     let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
//     let targetUrl = `http://shibe.online/api/shibes?count=${maxNum}` //uses maxNum. The actual api limit is 100
//     fetch(proxyUrl + targetUrl)
//     .then(res => res.json())
//     .then(data => this.setState({shibas: data}))
//     .catch(res => {
//       console.log('could not complete request')
//     }) 
//   }

//   handleClick = () => {
//     this.setState((prevState, prevProps) => {
//       return { count: prevState.count + displayNum }
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Shibas!!!</h1>
//         <CardList shibas={this.state.shibas} count={this.state.count} />
//         <MoreButton 
//           handleClick = {this.handleClick}
//           count = {this.state.count}
//           max = {this.state.max}
//         />
//       </div>
//     );
//   }
// }

export default App;
