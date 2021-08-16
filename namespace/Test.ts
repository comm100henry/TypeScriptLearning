/// <reference path="Validation2.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// import ZipCodeValidator from "./ZipCodeValidator";

// Some samples to try
let strings3 = ["Hello", "98052", "101"];

// Validators to use
let validators3: { [s: string]: Validation2.StringValidator } = {};
validators3["ZIP code"] = new Validation2.ZipCodeValidator();
validators3["Letters only"] = new Validation2.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings3) {
    for (let name in validators3) {
        console.log(
            `"${s}" - ${
                validators3[name].isAcceptable(s) ? "matches" : "does not match"
            } ${name}`
        );
    }
}
