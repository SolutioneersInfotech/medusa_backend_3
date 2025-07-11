import { Router } from "express"
import createAdmin from "./create-admin.js"

const router = Router()

router.get("/create-admin", createAdmin)

export default (app) => {
  app.use("/store", router)
}
 