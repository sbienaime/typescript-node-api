import {Request, Response} from "express";

import clients = require('../db.json');

export class api {
    public routes(app): void {

        app.route('/api/v1/parse/:data')
        .post((req: Request, res: Response) => {
          let data = req.params.data;
           var firstname= data.split("0000",2);
           var remainder = firstname[1].split("000",2);

           console.log(firstname);
           console.log(remainder);
            res.status(200).send();

        app.route('/api/v2/parse/:data')
        .post((req:Request, res: Response) => {
            let id = req.params.id;
            res.status(200).send(clients[2]);
        })
    }
}
