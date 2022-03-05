"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Tracks_1 = __importDefault(require("../models/Tracks"));
class TrackRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    createTrack(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tittle, album, artist, year, created, duration, image } = req.body;
            const newTrack = new Tracks_1.default({ tittle, album, artist, year, created, duration, image });
            yield newTrack.save();
            res.json({ status: res.status, data: newTrack });
        });
    }
    getTrack(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const track = yield Tracks_1.default.find({ tittle: req.params.tittle });
            res.json({ status: res.status, data: track });
        });
    }
    getTracks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tracks = yield Tracks_1.default.find();
            res.json({ status: res.status, data: tracks });
        });
    }
    deleteTrack(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Tracks_1.default.findOneAndRemove({ tittle: req.params.tittle });
            res.json({ status: res.status, response: 'Track Deleted Successfully' });
        });
    }
    updateTrack(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tittle } = req.params;
            const track = yield Tracks_1.default.findOneAndUpdate({ tittle }, req.body);
            res.json({ status: res.status, data: track });
        });
    }
    routes() {
        this.router.get('/', this.getTracks);
        this.router.get('/:songname', this.getTrack);
        this.router.post('/', this.createTrack);
        this.router.put('/:songname', this.updateTrack);
        this.router.delete('/:songname', this.deleteTrack);
    }
}
const trackRoutes = new TrackRoutes();
exports.default = trackRoutes.router;
