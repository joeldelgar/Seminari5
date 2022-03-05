import { Request, Response, NextFunction, Router} from 'express';
import Track from '../models/Tracks';


class TrackRoutes{

    router:Router;

    constructor(){
        this.router = Router();
        this.routes();

    }

    async createTrack(req: Request, res: Response){
        const {tittle, album, artist, year, created, duration, image} = req.body;
        const newTrack = new Track ({tittle, album, artist, year, created, duration, image});
        await newTrack.save();
        res.json({status: res.status, data: newTrack});
    }

    async getTrack(req: Request, res: Response){
        const track = await Track.find({tittle: req.params.tittle});
        res.json({status: res.status, data: track});
    }

    async getTracks(req: Request, res: Response){
       const tracks = await Track.find();
       res.json({status:res.status, data: tracks});
      
    }

    async deleteTrack(req: Request, res: Response){
        await Track.findOneAndRemove({tittle: req.params.tittle});
        res.json({status: res.status, response: 'Track Deleted Successfully'});
    }

    async updateTrack(req: Request, res: Response){
        const {tittle} = req.params;
        const track = await Track.findOneAndUpdate({tittle}, req.body);
        res.json({status: res.status, data: track});
    }

    routes(){
        this.router.get('/', this.getTracks);
        this.router.get('/:songname', this.getTrack);
        this.router.post('/', this.createTrack);
        this.router.put('/:songname', this.updateTrack);
        this.router.delete('/:songname', this.deleteTrack);
    }
    
}
const trackRoutes = new TrackRoutes();
export default trackRoutes.router;