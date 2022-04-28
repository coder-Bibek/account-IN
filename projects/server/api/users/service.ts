import connection from "../../config/config"

const findUser = () => {
    return new Promise((resolve, reject) => {
        connection.query('select * from users', (error, result) => {
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
}

const addUser = (body: object) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO users SET ?', body, (error) => {
            if (error) {
                console.error(error)

                return reject({
                    status: false,
                    error: "error on adding users "
                })

            }

            resolve({
                status: true,
                message: "success"
            })
        })
    })
}

export { findUser, addUser }