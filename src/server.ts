import app from "./app";
import AppDataSource from "./data-source";


(async () => {

    await AppDataSource.initialize()

    app.listen(3002, () => {
        console.log("Servidor executando")
    })
})()
