"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// import routes
const indexroutes_1 = __importDefault(require("./routes/indexroutes"));
const TrackRoutes_1 = __importDefault(require("./routes/TrackRoutes"));
// Server Class
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        // Settings
        this.app.set('port', process.env.PORT || 4000);
        // middlewares
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
    }
    routes() {
        const router = express_1.default.Router();
        this.app.use('/', indexroutes_1.default);
        this.app.use('/api/posts', TrackRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server is listenning on port', this.app.get('port'));
        });
    }
}
exports.Server = Server;
