import { Request, Response } from 'express'
import * as service from "./service"

const all = (req: Request, res: Response) => {
    service
        .findUser()
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
}

const create = (req: Request, res: Response) => {

    service
        .addUser(req.body)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
}

export { all, create }