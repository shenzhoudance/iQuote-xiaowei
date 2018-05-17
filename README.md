
TX Hash: e1549bf8cef205d077603babba715532feb726e2e8af464d34d82df6ad1c31c5

Contract address: n1raGSiaKzjXdwvwx2URF58LbdAjQdSpHt9
![image](https://ws3.sinaimg.cn/large/006tKfTcly1fre5n13on6j31kw0ssagc.jpg)
# index.html 主页呈现
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport"
          content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <title>iQuote</title>
    <style>* {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        text-align: center;
        font-family: "Open sans";
        color: #333;
    }
    /***************** NAVBAR *****************/
    header {
        background-color: rgba(51, 51, 51, 0.5);
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 9999;
    }
    nav li {
        display: inline-block;
        list-style-type: none;
        padding: 15px 20px;
        font-weight: bold;
        color: white;
    }
    #logo {
        font-weight: bold;
        font-family: Pacifico;
        border: 2px solid white;
        border-radius: 50%;
        margin: 5px;
    }
    #logo:hover {
        border: 2px solid #f99;
        color: #f99;
        border-radius: 50%;
    }
    /***************** FIN NAVBAR *****************/
    /***************** COVER *****************/
    #cover {
        background: url(https://user-images.githubusercontent.com/21117852/39671166-c0bac05c-5145-11e8-80ec-c9c9272f0b25.png) no-repeat center;
        background-size: cover;
        background-attachment: fixed;
        height: 900px;
        width: 100%;
    }
    .cover2 {
        background: url(https://user-images.githubusercontent.com/21117852/39671151-74c5a900-5145-11e8-9a94-cebafa0e38e4.png) no-repeat center;
        background-size: cover;
        background-attachment: fixed;
        height: 900px;
        width: 100%;
    }
    .cover-content {
        position: relative;
        top: 25%;
        width: 60%;
        margin: 0 auto;
        color: #333;
        padding-top: 20px;
        font-size: 2em;
    }
    .cover-content h1 {
        font-family: Pacifico;
        font-size: 2em;
        margin-bottom: -15px;
    }
    .social-media li {
        display: inline-block;
        margin: 2%;
    }
    .content-portfolio img {
        width: 100%;
    }
    .content-portfolio img:hover {
        border: 2px solid #f99;
        border-radius: 5px;
    }
    form {
        float: left;
        text-align: left;
        border-radius: 5px;
        width: 50%;
        padding: 5%;
        background-color: #f99;
        color: #333;
        font-weight: bold;
    }
    form div {
        padding-bottom: 1em;
    }
    div input, textarea {
        width: 100%;
        border: none;
        border-radius: 2px;
        padding: 1em;
    }
    form div button {
        margin: 0 auto;
        width: 100%;
        padding: 10px 0;
        border: none;
        border-radius: 2px;
        background-color: #333;
        color: white;
        font-family: "Open sans";
        font-weight: bold;
    }
    /***************** FOOTER *****************/
    footer {
        background-color: #333;
        color: white;
    }
    footer div {
        border-top: 1px inset #333;
        font-size: 0.8em;
        margin: 0 auto;
        padding: 15px 0;
        color: silver;
    }
    /***************** TEXT AND ANCHORS *****************/
    .title {
        font-weight: bold;
        margin-bottom: 20px;
    }
    p {
        padding-bottom: 5%;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    a:hover {
        color: #ff9999;
    }
    @media (max-width: 600px) {
        .services-content, .content-portfolio {
            column-count: 1;
            column-width: 350px;
        }
        form {
            width: 280px;
            float: none; /*???*/
            margin: 0 auto 5% auto;
        }
        #contact ul {
            margin-top: 0;
        }
        .cover-content {
            width: 90%;
            font-size: 1.6em;
        }
    }
    /*the button to add quote and name*/
    .button {
        border-top: 1px solid #ffffff;
        background: #78848c;
        background: -webkit-gradient(linear, left top, left bottom, from(#d4d4d4), to(#78848c));
        background: -webkit-linear-gradient(top, #d4d4d4, #78848c);
        background: -moz-linear-gradient(top, #d4d4d4, #78848c);
        background: -ms-linear-gradient(top, #d4d4d4, #78848c);
        background: -o-linear-gradient(top, #d4d4d4, #78848c);
        padding: 18.5px 37px;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
        -webkit-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
        -moz-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
        box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
        text-shadow: rgba(0, 0, 0, .4) 0 1px 0;
        color: #0a090a;
        font-size: 19px;
        font-family: Georgia, serif;
        text-decoration: none;
        vertical-align: middle;
    }
    .button:hover {
        border-top-color: #909496;
        background: #909496;
        color: #fffcff;
    }
    .button:active {
        border-top-color: #b5b5b5;
        background: #b5b5b5;
    }
    .input {
        border: 5px solid silver;
        -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
        0 0 16px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
        0 0 16px rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
        0 0 16px rgba(0, 0, 0, 0.1);
        padding: 15px;
        background: rgba(255, 255, 255, 0.5);
        margin: 0 0 10px 0;
    }
    .userName {
        color: lightslategray;
        font-family: "Adobe Hebrew";
    }
    .userQuote {
        color: darkblue;
        font-family: "American Typewriter";
    }
    </style>
</head>

<body>
<header>
    <nav>

        <a class="active" href="#">
            <li id="logo">iQuote</li>
        </a>

        <li><a class="active" href="#about">Dapp</a></li>
    </nav>
</header>
<div class="container">
    <section id="cover">
        <div class="cover-content">
            <h1>iQuote</h1>
            <h3 class="title">A Nebulas Blockchain Dapp</h3>
            <ul class="social-media">
                <li>
                    <input id="quote" placeholder="A normal life is for suckers">
                    <label>Give it your all - iQuote</label>
                </li>

                <h1>&</h1>

                <li>
                    <input id="username" placeholder="Sign Your Name"><label>&</label>
                </li>

            </ul>

            <button onclick="add2Contract()" class="button">Save Forever</button>
            </li>
        </div>

    </section>

    <section class="cover2">
        <a name="about"></a>
        <div class="cover-content">
            <h1>iQuote</h1>
            <h3 class="title">Search Your Name on the Blockchain</h3>

            <h3 id="result"></h3>

            <div class="searchform cf">

                <input class="input" id="searchvalue" placeholder="Search Your Name">
                <button class="button" onclick="search()">Search</button>

            </div>


        </div>

    </section>


    <hr>

    <hr>


    <footer>
        <div>iQuote | Copyright &copy; 2018 Ok</div>
    </footer>

    <script>
        var contractAddress = "n1n2TpEBaH9GNkFG9zSAUFiQPGFGk7ZbPFq"
        //var contractAddress = "n1o4GDSQW5kFax7GighCoELFcMHKCJV8oZQ"
        var quote = document.getElementById("quote")
        var username = document.getElementById("username")
        var searchvalue = document.getElementById("searchvalue")
        document.addEventListener("DOMContentLoaded", function () {
            console.log("web page loaded...")
            setTimeout(checkNebpay, 1000);
        });
        function checkNebpay() {
            console.log("check nebpay")
            try {
                var NebPay = require("nebpay");
                console.log(`nebPay installed great`);
            } catch (e) {
                console.log(e);
                if (window.confirm('You dont have the Chrome web wallet extension installed to use this Dapp click Confirm to download now ')) {
                    window.location.href = 'https://github.com/ChengOrangeJu/WebExtensionWallet';
                }
            }
        }
        function search() {
            searchvalue = document.getElementById("searchvalue").value
            var func = "get"
            var args = "[\"" + searchvalue + "\"]"
            console.log(`you search for ${searchvalue}`);
            window.postMessage({
                "target": "contentscript",
                "data": {
                    "to": contractAddress,
                    "value": "0",
                    "contract": {
                        "function": func,
                        "args": args
                    }
                },
                "method": "neb_call"
            }, "*");
        }
        function add2Contract() {
            username = document.getElementById("username").value
            quote = document.getElementById("quote").value
            username = username.toLowerCase()
            console.log("-------Add to the Smart Contract------");
            var func = "save"
            var args = "[\"" + username + "\",\"" + quote + "\"]";
            window.postMessage({
                "target": "contentscript",
                "data": {
                    "to": contractAddress,
                    "value": "0",
                    "contract": {
                        "function": func,
                        "args": args
                    }
                },
                "method": "neb_sendTransaction"
            }, "*");
        }
        window.addEventListener('message', function (e) {
            try {
                var getResults = e.data.data.neb_call.result;
                if (getResults === "null") {
                    console.log(getResults);
                    document.getElementById("result").innerHTML = `<h1> Your Results are Processing </h1>`;
                    setTimeout(function () {
                        document.getElementById("result").innerHTML = `<div style="color: silver"> This Name is not Found check the spelling or try a different name </div> <div> Check out our examples names </div>  <select name="option">
                <option value="" disabled selected>Choose a Name</option>
                <option value="1">Rocky</option>
                <option value="2">Arnold</option>
                <option value="3">The Rock</option>
            </select>`;
                    }, 1000)
                }
                if (getResults !== "null") {
                    try {
                        getResults = JSON.parse(e.data.data.neb_call.result)
                        document.getElementById("result").innerHTML = `<h1> Your Results are Processing </h1>`
                        setTimeout(function () {
                            document.getElementById("result").innerHTML = `<h1> Just One Second </h1>`
                        }, 1000)
                        setTimeout(function () {
                            document.getElementById("result").innerHTML = `<h1 class="userQuote"> ${getResults.value} </h1> <div class="userName"> - ${getResults.key } </div>`
                        }, 2000)
                    } catch (e) {
                        if (e == undefined) {
                            console.log(`results were undefined`);
                        }
                    }
                }
            } catch (e) {
                if (e == undefined) {
                    console.log(`results were undefined`);
                }
            }
        })
    </script>
</body>
</html>
```
# 智能合约代码

```
"use strict";

var UserInput = function(text) {
	if (text) {
		var obj = JSON.parse(text);
		this.key = obj.key;
		this.value = obj.value;
	} else {
	    this.key = "";
	    this.value = "";
	}
};

UserInput.prototype = {
	toString: function () {
		return JSON.stringify(this);
	}
};

var Quotes = function () {
    LocalContractStorage.defineMapProperty(this, "repo", {
        parse: function (text) {
            return new UserInput(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
};

Quotes.prototype = {
    init: function () {

    },

    save: function (key, value) {

        key = key.trim();
        value = value.trim();
        if (key === "" || value === ""){
            throw new Error("empty key / value");
        }

        var usersName = this.repo.get(key);
        if (usersName){
            throw new Error("This Name is already being used");
        }

        usersName = new UserInput();
        usersName.key = key;
        usersName.value = value;

        this.repo.put(key, usersName);
    },

    get: function (key) {
        key = key.trim();
        if ( key === "" ) {
            throw new Error("empty key")
        }
        return this.repo.get(key);
    }
};
module.exports = Quotes;
```
