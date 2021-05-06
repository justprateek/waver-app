console.log("app is running");
const address = document.getElementById('app');

let app = {
    title: "this is the title",
    subtitle: "this line is the subtitle ok",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('fuck you');
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        jsxRender();
    }
    

}

const removeAll = (e)=>{
    e.preventDefault();
    console.log('fuck everyone');
    app.options =[];
    jsxRender();
}
const whatToDo =(e)=>{
    const num = Math.floor(Math.random()*app.options.length);
    const option = app.options[num];

    alert(option);
}





const jsxRender = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length>0 ? 'here are the options' : 'there are no options you dum dum'}</p>
            <p>{app.options.length}</p>
            <button disabled = {app.options.length===0} onClick={whatToDo}>help me decide</button>
            <button onClick={removeAll}>remove all</button>
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>{option}</li>;
                    })
                }
                
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name = "option"></input>
                <button>add option</button>
                
            </form>
    
        </div>
    );
    ReactDOM.render(template, address);



}
jsxRender();
