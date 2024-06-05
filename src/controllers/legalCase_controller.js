import legalCaseModel from "../models/legalCase.js"
import { v4 as uuidv4 } from 'uuid'

const createLegalCaseController = async (req, res) => {
    const newLegalCaseData = {
        id: uuidv4(),
        ...req.body
    }
    const legalCase = await legalCaseModel.createlegalCaseModel(newLegalCaseData)


    res.status(201).json(legalCase)
}

const getAllLegalCaseController = async ( req , res ) => {
    try{
        const legalCase = await legalCaseModel.getAllLegalCaseModel()
        res.status(200).json(legalCase)
    }catch(error){
        res.status(500).json({message: error})
    }
}

export {
    createLegalCaseController,
    getAllLegalCaseController
}