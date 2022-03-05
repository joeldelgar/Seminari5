import {Schema, model} from 'mongoose';

const TrackSchema = new Schema({
    tittle: {type: String, required: true},
    album: {type: String, required: true},
    artist: {type: String, required: true},
    year:   String,
    created: {type: Date, default: Date.now},
    duration:  String,
    image: String,
})

export default model('Track', TrackSchema);