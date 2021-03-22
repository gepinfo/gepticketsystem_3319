import * as mongoose from 'mongoose';
import ticktesModel from '../models/ticktes';
import { CustomLogger } from '../config/Logger'


export class ticktesDao {
    private ticktes = ticktesModel;
    constructor() { }
public GpDelete(ticktesId, callback){
new CustomLogger().showLogger('info', 'Enter into ticktesDao.ts: GpDelete')

this.ticktes.findByIdAndRemove(ticktesId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticktesDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(ticktesData, callback){
new CustomLogger().showLogger('info', 'Enter into ticktesDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(ticktesData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.ticktes.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticktesDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(ticktesData, callback){
new CustomLogger().showLogger('info', 'Enter into ticktesDao.ts: GpSearchForUpdate')

this.ticktes.findOneAndUpdate({ _id: ticktesData._id }, ticktesData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticktesDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(ticktesData, callback){
new CustomLogger().showLogger('info', 'Enter into ticktesDao.ts: GpUpdate')

this.ticktes.findOneAndUpdate({ _id: ticktesData._id }, ticktesData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticktesDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into ticktesDao.ts: GpGetAllValues')

this.ticktes.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticktesDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(ticktesData, callback){
new CustomLogger().showLogger('info', 'Enter into ticktesDao.ts: GpCreate')
let temp = new ticktesModel(ticktesData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticktesDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}