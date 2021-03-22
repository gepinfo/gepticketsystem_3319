import { Request, Response, NextFunction } from "express";
import { ticktesController } from '../controller/ticktesController';


export class Routes {
    private ticktes: ticktesController = new ticktesController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/ticktes/:id').delete(this.ticktes.GpDelete);
app.route('/ticktes/get/search').get(this.ticktes.GpSearch);
app.route('/ticktes/get/update').put(this.ticktes.GpSearchForUpdate);
app.route('/ticktes').put(this.ticktes.GpUpdate);
app.route('/ticktes').get(this.ticktes.GpGetAllValues);
app.route('/ticktes').post(this.ticktes.GpCreate);
     }

}