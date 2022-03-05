"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TrackSchema = new mongoose_1.Schema({
    tittle: { type: String, required: true },
    album: { type: String, required: true },
    artist: { type: String, required: true },
    year: String,
    created: { type: Date, default: Date.now },
    duration: String,
    image: String,
});
exports.default = (0, mongoose_1.model)('Track', TrackSchema);
