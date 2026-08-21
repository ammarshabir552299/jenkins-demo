const fs = require("fs");

if (fs.existsSync("app.js")) {
    console.log("TEST PASSED: app.js exists");
    process.exit(0);
} else {
    console.log("TEST FAILED: app.js not found");
    process.exit(1);
}
