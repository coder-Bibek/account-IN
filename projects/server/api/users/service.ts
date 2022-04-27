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

export { findUser }