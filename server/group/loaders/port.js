export const port = '3000'

export function listeningPort (app) {
    app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${process.env.PORT || port}`)
  })
} 