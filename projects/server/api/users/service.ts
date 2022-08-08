import connection from "../../config/config"
import * as jwt from "jsonwebtoken"
import config from "../../config"

type loginProps = {
    email: string,
    password: string,
    status: number,
    auth_token: string
}

const findUser = (token: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.JWT_SECRET || "SECRET", (error) => {
            if (error) {
                reject("You are not authenticated to access API");
            }
            connection.query('select * from users WHERE status = 1', (error, result) => {
                if (error) {
                    return reject({
                        status: false,
                        error: "error on fetching users "
                    })
                }

                resolve({
                    data: result,
                    status: true
                })
            })
        })
    })
}

const findUserByEmail = (email: string, token: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.JWT_SECRET || "SECRET", (error) => {
            if (error) {
                reject("You are not authenticated to access API");
            }

            connection.query('SELECT * FROM users WHERE email = ? and status = 1', [email], (error, result) => {
                if (error) {
                    return reject({
                        status: false,
                        message: "error while searching user"
                    })
                }

                if (result.length === 0) {
                    return reject({
                        status: false,
                        message: "no users found "
                    })
                }

                resolve({
                    data: result,
                    status: true
                })
            })
        })
    })
}

const login = (body: loginProps, token: string) => {
    const { email, password } = body;

    return new Promise((resolve, reject) => {
        jwt.verify(token, config.JWT_SECRET || "SECRET", (error) => {
            if (error) {
                reject({
                    message: "You are not authenticated to access API",
                    status: false
                });
            }

            connection.query('select * from users WHERE email = ? and password = ? and status = 1', [email, password], (error, result) => {
                if (error) {
                    return reject({
                        status: false,
                        error: "error on fetching users "
                    })
                }

                resolve({
                    message: "success",
                    status: true
                })
            })
        })
    })
}

const addUser = (body: loginProps) => {
    const { email } = body
    const date = new Date().getFullYear()

    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM USERS WHERE email = ? and status = 1', [email], (err, result) => {
            if (result.length > 0) {
                return reject({
                    status: false,
                    message: "user already exists"
                })
            }

            connection.query('INSERT INTO users SET ?', body, async (error) => {
                if (error) {
                    console.error(error)

                    return reject({
                        status: false,
                        error: "error on adding users "
                    })

                }

                const jwt_secret_key = config.JWT_SECRET || "SECRET"

                const token = jwt.sign({ email, date }, jwt_secret_key)

                connection.query(`UPDATE users SET auth_token = ? WHERE email = ?`, [token, email], (error, done) => {
                    if (error) {
                        console.error(error)

                        return reject({
                            status: false,
                            error: "error on updating auth "
                        })
                    }

                    resolve({
                        auth_token: token,
                        status: true,
                        message: "success"
                    })
                })
            })
        })

    })
}

const updateUser = (email: string, token: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.JWT_SECRET || "SECRET", (error) => {
            if (error) {
                reject(error)
            }

            connection.query(`UPDATE users SET status = 0, auth_token = "" WHERE email = ?`, [email], (error) => {
                if (error) {
                    console.error(error)

                    reject({
                        status: false,
                        message: "cannot remove user"
                    })
                }

                resolve({
                    status: true,
                    message: "removed user succesfully"
                })
            })
        })
    })
}

export { findUser, addUser, findUserByEmail, updateUser, login }