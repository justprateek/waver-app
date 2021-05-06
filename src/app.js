console.log("app is running");

let count=0;
const addOne = ()=>{
    count+=1;
    console.log("clicked add", count);
    renderCounterApp();
    return;
}
const subOne = ()=> {
    count--;
    renderCounterApp();
    return;

}
const reset = ()=>{

    count=0;
    renderCounterApp();
    return;
}

let username = 'Prateek Mishra'


const renderCounterApp = ()=>{
    let template = (
        <div>
            <h1>{username}</h1>
            <h2>Hii i am starting with react</h2>
            <h3>this is mee checking out jsx</h3>
            <button onClick= {addOne}>+1</button>
            <button onClick= {subOne}>-1</button>
            <button onClick= {reset}>reset</button>
            <h3>the number of total counts is: {count}</h3>
            <h3>just checking</h3>
        </div>
    );
    var address = document.getElementById('app');
    ReactDOM.render(template, address);
  }






renderCounterApp();

