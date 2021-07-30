
import { connection } from "./index";

export const all = async() =>{
    return new Promise((resolve, reject) => {
        connection.query('select * from blogs', (err, results) => {
            if (err) {
                return reject (err)
            }
            resolve (results)
        })
    })
}
export const tags = async(blogid: string | number) =>{
    return new Promise((resolve, reject) => {
        connection.query('call spgetTag(?)', [blogid], (err, results) => {
            if (err) {
                return reject (err)
            }
            resolve (results)
        })
    })
}
export const one = async(id: string | number) =>{
    return new Promise((resolve, reject) => {
        connection.query('select * from blogs where id = ?',[id], (err, results) => {
            if (err) {
                return reject (err)
            }
            resolve (results)
        })
    })
}

export const postAuthor = async(name: string, email:string) =>{
    return new Promise((resolve, reject) => {
        connection.query(`insert into authors(name, email) values(?, ?)`,[name, email], (err, results) => {
            if (err) {
                return reject (err)
            }
            resolve (results)
        })
    })
}
export const postBlog = async(authorid:number, title: string, content:string ) =>{
    return new Promise((resolve, reject) => {
        connection.query(`insert into blogs(title, content, authorid) values(?, ?,?)`,[authorid, title, content], (err, results) => {
            if (err) {
                return reject (err)
            }
            resolve (results)
        })
    })
}
export const deleteBlog = async(id: any) =>{
    return new Promise((resolve, reject) => {
        connection.query(`delete from blogs where blogs.id = ${id}`, (err, results) => {
            if (err) {
                return reject (err)
            }
            resolve (results)
        })
    })
}






export default {
    all,
    one,
    postAuthor,
    postBlog,
    deleteBlog,
    tags
}