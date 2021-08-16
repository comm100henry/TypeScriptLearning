/// <reference path="Validation2.ts" />
var Validation2;
/// <reference path="Validation2.ts" />
(function (Validation2) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation2.LettersOnlyValidator = LettersOnlyValidator;
})(Validation2 || (Validation2 = {}));
/// <reference path="Validation2.ts" />
var Validation2;
/// <reference path="Validation2.ts" />
(function (Validation2) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation2.ZipCodeValidator = ZipCodeValidator;
})(Validation2 || (Validation2 = {}));
/// <reference path="Validation2.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// import ZipCodeValidator from "./ZipCodeValidator";
// Some samples to try
var strings3 = ["Hello", "98052", "101"];
// Validators to use
var validators3 = {};
validators3["ZIP code"] = new Validation2.ZipCodeValidator();
validators3["Letters only"] = new Validation2.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings3_1 = strings3; _i < strings3_1.length; _i++) {
    var s = strings3_1[_i];
    for (var name_1 in validators3) {
        console.log("\"" + s + "\" - " + (validators3[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
