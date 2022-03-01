"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("@app/config/database");
const app_1 = require("./app");
(0, database_1.connectDataBase)();
app_1.app.listen(process.env.PORT || 3000, () => { });
//# sourceMappingURL=server.js.map