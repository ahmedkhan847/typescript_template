"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const HomeRouter = express.Router();
HomeRouter.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!");
});
exports.default = HomeRouter;
//# sourceMappingURL=index.js.map