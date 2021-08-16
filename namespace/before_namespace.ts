interface StringValidator {
    isAcceptable(s: string): boolean;
}

let letterRegexp: RegExp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return letterRegexp.test(s);
    }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

let strings = ["hello", "95518", "101", "majian14"];

let validators: { [s: string]: StringValidator } = {};
validators["zip code"] = new ZipCodeValidator();
validators["letters only"] = new LettersOnlyValidator();

for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(
            `'${s}' ${isMatch ? "matches" : "does not match"} '${name}'`
        );
    }
}
