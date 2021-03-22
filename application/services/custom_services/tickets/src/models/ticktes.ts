
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ticktesSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   description: String,
   types: { type: Schema.Types.String, ref: 'servicetypes' },
   severity: { type: Schema.Types.String, ref: 'severity' },
   target: String
})

const ticktesModel = mongoose.model('ticktes', ticktesSchema, 'ticktes');
export default ticktesModel;
