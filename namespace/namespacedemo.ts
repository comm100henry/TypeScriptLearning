namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const letterRegexp: RegExp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator_demo implements StringValidator {
        isAcceptable(s: string) {
            return letterRegexp.test(s);
        }
    }

    export class ZipCodeValidator_demo implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

let strings2 = ["hello", "95518", "101", "majian14"];

let validators2: { [s: string]: Validation.StringValidator } = {};
validators2["zip code"] = new Validation.ZipCodeValidator_demo();
validators2["letters only"] = new Validation.LettersOnlyValidator_demo();

for (let s of strings2) {
    for (let name in validators2) {
        let isMatch = validators2[name].isAcceptable(s);
        console.log(
            `'${s}' ${isMatch ? "matches" : "does not match"} '${name}'`
        );
    }
}
