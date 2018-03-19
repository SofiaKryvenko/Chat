import mongoose from 'mongoose'
//CREATE ROOM MODEL IN DB
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Room = mongoose.model('Room', RoomSchema);
export default Room;