import * as mysql from 'mysql'
import config from '../config'
import blog from './blog'

export const connection = mysql.createConnection(config.mysql)

connection.connect(err => {
    if (err) console.log(err)
})

export default {
    blog
}