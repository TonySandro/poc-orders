import "reflect-metadata"
import express from "express"
import userRouter from "./routes/user.router"
import solicitationRoutes from "./routes/solicitation.router"
import productRoutes from "./routes/product.router"
import ordersRoutes from "./routes/orders.router"
import cors from "cors"
import loginRoutes from "./routes/login.routes"
import homeRoutes from "./routes/home.routes"
import swaggerUI from "swagger-ui-express"

const app = express()
app.use(express.json())
app.use(
    cors({
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "authorization",
      ],
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    })
  );
app.use("/user", userRouter)
app.use("/solicitation",solicitationRoutes)
app.use("/product",productRoutes)
app.use("/orders",ordersRoutes)
app.use("/login", loginRoutes);
app.use("/home",homeRoutes)

export default app