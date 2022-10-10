import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Question1:What is High Order Component in react js?</h1>
        <p>A higher order Component is a function which takes a wrapped component as an input argument and return a new enhanced component.</p><br></br>
        <h1>Question2:Do you know about SEO?Is it true that react js supports SEO support?</h1>
        <p>Yes,SEO stands for "Search engine optimization".It is the process of improving the visibility of a website or webpage on a search engine result page(SERP).</p>
        <p>React helps to build a very user friendly UI that is also valuable by SEO.So,you shouldn't avoid it while creating UI for your React application/Website.</p><br></br>
        <h1>Question3:clean up in useEffect?</h1>
        <p>As useEffects triggers the react lifecycle phases so in unmounting phase,cleanup function gets executed means when the component is unmounted.If unmounting is not happened then it increase the chances of memory leak.</p><br></br>
        <h1>Question4:What is the use of useCallback and useMemo?</h1>
        <p>
            useCallback Hook
            <ul>
                <li>useCallback will return a memoized version of the callback function that oly change if one of the dependencies has changed.</li>
                <li>This is useful when passing callback to optimized child component.</li>
            </ul>
            useMemo Hook
            <ul>
                <li>useMemo allow you to return a memoized value.</li>
                <li>You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</li>
            </ul>
        </p><br></br>
        <h1>Question5:Why do we need keys in react list?</h1>
        <p>The main of key is to help react differentiate and distinguish element from each other.</p><br></br>
        <h1>Question6:Do you know about redux?</h1>
        <p>Yes,Redux is a state container for react application.It manages an application states with a single global object called store.</p>
    </div>
  );
}

export default App;
