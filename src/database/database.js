// import sqlite3 from "sqlite3"
// import { open } from "sqlite"
// import bcrypt from "bcryptjs"

// let db

// export async function openDb() {
//   if (!db) {
//     db = await open({
//       filename: "./form_submissions.sqlite",
//       driver: sqlite3.Database,
//     })
//     await db.exec(`
//       CREATE TABLE IF NOT EXISTS form_submissions (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT,
//         email TEXT,
//         phone TEXT,
//         subject TEXT,
//         message TEXT,
//         submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
//       )
//     `)
//   }
//   return db
// }

// export async function addFormSubmission(submission) {
//   const db = await openDb()
//   const { name, email, phone, subject, message } = submission

//   // Hash sensitive information
//   const hashedPhone = await bcrypt.hash(phone, 10)
//   const hashedEmail = await bcrypt.hash(email, 10)

//   const result = await db.run(
//     `INSERT INTO form_submissions (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)`,
//     [name, hashedEmail, hashedPhone, subject, message]
//   )

//   return result.lastID
// }

// export async function getFormSubmissions() {
//   const db = await openDb()
//   return db.all("SELECT id, name, subject, submitted_at FROM form_submissions")
// }
