import { Request, Response } from 'express';
import { ticktesService } from '../service/ticktesService';
import { CustomLogger } from '../config/Logger'
let ticktes = new ticktesService();

export class ticktesController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
ticktes.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticktesController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticktesController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
ticktes.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticktesController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticktesController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
ticktes.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticktesController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticktesController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
ticktes.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticktesController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticktesController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
ticktes.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticktesController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticktesController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
ticktes.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticktesController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticktesController.ts: GpCreate');
    })}


}