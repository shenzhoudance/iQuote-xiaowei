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
