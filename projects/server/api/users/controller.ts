import { Request, Response } from 'express'
import * as service from "./service"
import bcrypt from "bcrypt"

const all = (req: Request, res: Response) => {
    service
        .findUser()
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
}

const create = async (req: Request, res: Response) => {

    const salt = await bcrypt.genSalt(10);

    // now we set user password to hashed password
    const hashed_password = await bcrypt.hash(req.body.password, salt);

    const body = {
        email: req.body.email || '',
        password: hashed_password,
        status: 1,
        auth_token: ''
    }

    service
        .addUser(body)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
}


const find = (req: Request, res: Response) => {
    const decoded = req.headers['authorization']?.split(" ")[1] || ""

    service
        .findUserByEmail(req.params.email, decoded)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.json(error)
        })
}

const update = (req: Request, res: Response) => {
    const decoded = req.headers['authorization']?.split(" ")[1] || ""

    service
    .updateUser(req.body.email, decoded)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.json(error)
    })

}
export { all, create, find, update }