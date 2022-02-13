import express from "express";
const router = express.Router();
import { 
    createPortfolio, 
    deletePortfolio, 
    getAllPortfolio, 
    updatePortfolio} from "@app/controllers/PortfolioController/portfolio.controller";

//get all Portfolio
router.route("/portfolio").get(getAllPortfolio);
//post single Portfolio
router.route("/portfolio/new").post(createPortfolio);
//delete and update single Portfolio
router.route("/portfolio/:id").put(updatePortfolio).delete(deletePortfolio);



module.exports = router;