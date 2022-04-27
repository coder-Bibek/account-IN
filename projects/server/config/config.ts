import sql from "mysql"

interface configProps {
    config: object
}

export const connection = ({ config }: configProps) => {
    return sql.createConnection(config)
}
