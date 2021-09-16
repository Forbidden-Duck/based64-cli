#!/usr/bin/env node
"use strict";
const base64 = require("../utils/base64");
const action = process.argv[2];
const str = process.argv.slice(3).join(" ");

if (typeof action !== "string" || action.length <= 0) {
    console.error("Missing action 'based64 action* str*'");
} else if (!["e", "d", "enc", "dec", "encode", "decode"].includes(action)) {
    console.error(
        `Action: '${action}' is not valid (e, enc, encode) (d, dec, decode)`
    );
} else {
    if (typeof str !== "string" || str.length <= 0) {
        console.error(`Missing str 'based64 ${action} str*'`);
    } else if (["e", "enc", "encode"].includes(action)) {
        console.log(base64.encode(str));
    } else if (["d", "dec", "decode"].includes(action)) {
        console.log(base64.decode(str));
    } else {
        console.log("bug");
    }
}
