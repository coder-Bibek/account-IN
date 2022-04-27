import { Request, Response } from 'express'
import * as service from "./service"

const all = (request: Request, response: Response) => {
    service
        .findUser()
        .then(res => {
            response.json(res)
        })
        .catch(error => {
            response.send(error)
        })
}

export { all }