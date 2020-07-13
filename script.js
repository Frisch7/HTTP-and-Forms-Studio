window.addEventListener("load", function(){
    let form = document.querySelector("form");
    let actions = {
    'google': 'https://google.com/search',
    'bing': 'https://bing.com/search',
    'duckduckgo': 'https://duckduckgo.com/',
    'ask': 'https://ask.com/web'
    };
    function setSearchEngine(){
        let engine = actions[document.querySelector("input[name=engine]:checked").value];
        console.log(engine);
        form.action = engine;

    }

    function validateInput(){
        let searchText = document.querySelector("input[name=q]").value;
        let searchEngine = document.querySelector("input[name=engine]:checked");

        if(searchText && searchEngine){return true;}
        return false;
        }
    form.addEventListener("submit", function(){
        if(validateInput()){
        setSearchEngine();
        }else{
            document.getElementById("error").innerHTML = "Error: All Fields Required";
            event.preventDefault();
        }
    });
});