var initShareBordForm = (function () {
    'use strict';

    var generateRandomEmail = function () {
        var name = generateName();
        var domain = generateDomain();
        return name + "@" + domain;
    };
    /***
     * @return integer between 1 and max
     */
    var generateRandomNumber = function (max) { return Math.ceil(Math.random() * max); };
    var SYMBOL;
    (function (SYMBOL) {
        SYMBOL["ALL"] = "bcdfghjklmnprstvwzaeiou0123456789";
        SYMBOL["LETTERS"] = "bcdfghjklmnprstvwzaeiou";
        SYMBOL["CONSONANTS"] = "bcdfghjklmnprstvwz";
        SYMBOL["CONSONANTS_NUMBER"] = "bcdfghjklmnprstvwz0123456789";
        SYMBOL["VOWELS"] = "aeiou";
        SYMBOL["VOWELS_NUMBER"] = "aeiou0123456789";
        SYMBOL["NUMBER"] = "0123456789";
    })(SYMBOL || (SYMBOL = {}));
    var generateSymbol = function (type) {
        var positionInSequence = generateRandomNumber(type.length - 1);
        return type[positionInSequence];
    };
    var generateName = function (maxLength, ignoreDigits) {
        if (maxLength === void 0) { maxLength = 20; }
        if (ignoreDigits === void 0) { ignoreDigits = false; }
        var length = generateRandomNumber(maxLength);
        var nextSymbol = SYMBOL.LETTERS;
        var name = '';
        for (var i = 0; i < length; i += 1) {
            var newSymbol = generateSymbol(nextSymbol);
            name = name + newSymbol;
            if (SYMBOL.CONSONANTS.indexOf(newSymbol) !== -1) {
                if (ignoreDigits)
                    nextSymbol = SYMBOL.VOWELS;
                else
                    nextSymbol = SYMBOL.VOWELS_NUMBER;
                continue;
            }
            if (SYMBOL.VOWELS.indexOf(newSymbol) !== -1) {
                if (ignoreDigits)
                    nextSymbol = SYMBOL.CONSONANTS;
                else
                    nextSymbol = SYMBOL.CONSONANTS_NUMBER;
                continue;
            }
            if (SYMBOL.NUMBER.indexOf(newSymbol) !== -1) {
                nextSymbol = SYMBOL.ALL;
            }
        }
        return name;
    };
    var generateDomain = function () {
        var levels = generateRandomNumber(3);
        var domain = '';
        for (var levelCounter = 0; levelCounter < levels; levelCounter += 1) {
            domain = domain + generateName(10, true) + '.';
        }
        return domain + 'com';
    };

    function initShareBordForm(emailsInput, addEmailButton, getValidCountButton) {
        function addRandomEmail() {
            emailsInput.addEmail(generateRandomEmail());
        }
        function alertValidEmailCount() {
            alert("Valid emails count: " + emailsInput.validEmailsCount);
        }
        addEmailButton.addEventListener('click', addRandomEmail);
        getValidCountButton.addEventListener('click', alertValidEmailCount);
    }

    return initShareBordForm;

}());
