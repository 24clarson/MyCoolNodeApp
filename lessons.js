const { json } = require("express");

module.exports = {
    header: {
        labName: "Headers",
        instructions: "test instructions",        
        htmlCriteria: [['grade1', "<h2>.*<\/h2>", "Create an h2 tag"], ['grade2', "<h3>.*<\/h3>", "Create an h3 tag"], ['grade3', "<h6>.*<\/h6>", "Create an h6 tag"]],
        cssCriteria: [],
        htmlStarterCode: "<h1>This is an h1 tag</h1>",
        cssStarterCode: ""
    },
    paragraph: {
        labName: "Paragraphs",
        instructions: "In this lab you create a paragraph (p), tag. This tag allows you to put generic text on a webpage. You can style the tag with CSS, by changing the color in the lower code area.",
        htmlCriteria: [['grade1', "<p>.*<\/p>", "Make a paragraph tag"]],
        cssCriteria: [['grade2', "h", "Say hello"]],
        htmlStarterCode: "",
        cssStarterCode: "",

    }
}