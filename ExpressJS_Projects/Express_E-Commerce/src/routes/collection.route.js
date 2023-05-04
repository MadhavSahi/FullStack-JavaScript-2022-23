import { Router } from "express"; //pre-installed
import { authorize, isLoggedIn } from "../middlewares/auth.middleware";
import { createCollection, deleteCollection, getAllCollections, updateCollection } from "../controllers/collection.controller";
import AuthRoles from "../utils/authRoles";

const router=Router(); //the main configuration will be done in index.js

//will be salmost same as coupon route

//for creating collection
router.post("/",isLoggedIn,authorize(AuthRoles.ADMIN),createCollection);

//for updating collection
router.put("/:id",isLoggedIn,authorize(AuthRoles.ADMIN),updateCollection)

//for deleting a single collection
router.delete("/:id",isLoggedIn,authorize(AuthRoles.ADMIN),deleteCollection);

//for getAllCollections...a normal user can also view all the collections...hence we haven't used middleware...we could have used isLoggedIn...but we haven't used it.
router.get("/",getAllCollections);

export default router;