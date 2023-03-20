function sendEmail(email, subject, body) {
  const message = "Hacen falta campos para enviar";
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      if(email != "" && subject != "" && body != "") {
        resolve({
          email,
          subject,
          body
        })
      }else {
        reject(new Error(message));
      }
    }, 2000)
  })
}

const response = sendEmail(
  "test@mail.com",
  "Nuevo reto",
  "Únete a los 30 días de JS"
).then(res => console.log(res))

sendEmail(
  "test@mail.com",
  "",
  "Únete a los 30 días de JS"
)
.then(result => console.log(result))
.catch(error => console.log(error))
