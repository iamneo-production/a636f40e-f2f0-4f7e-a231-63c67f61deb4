import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
</script>
      </header>
    </div>
  );
}



export default App;
