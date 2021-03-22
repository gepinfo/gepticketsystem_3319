import { Request, Response } from 'express';
import {ticktesDao} from '../dao/ticktesDao';
import { CustomLogger } from '../config/Logger'
let ticktes = new ticktesDao();

export class ticktesService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticktesService.ts: GpDelete')
     const  ticktesId = req.params.id;
     ticktes.GpDelete(ticktesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticktesService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticktesService.ts: GpSearch')
     const  ticktesData = req.query;
     ticktes.GpSearch(ticktesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticktesService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticktesService.ts: GpSearchForUpdate')
     const  ticktesData = req.body;
     ticktes.GpSearchForUpdate(ticktesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticktesService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticktesService.ts: GpUpdate')
     const  ticktesData = req.body;
     ticktes.GpUpdate(ticktesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticktesService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticktesService.ts: GpGetAllValues')
     
     ticktes.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticktesService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticktesService.ts: GpCreate')
     const  ticktesData = req.body;
     ticktes.GpCreate(ticktesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticktesService.ts: GpCreate')
         callback(response);
         });
    }


}