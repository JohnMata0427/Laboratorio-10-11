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
const updateLegalCaseController = async (req, res) =>{
    const {id} = req.params
    try{
        const legalCase = await legalCaseModel.updateLegalCaseModel(id, req.body)
        const status = legalCase.error ? 404:200
        res.status(status).json(legalCase)
    }catch(error){
        res.status(500).json({msg:error})
    }
}


const deleteLegalCaseController = async (req, res) => {
    const {id} = req.params
    try {
        const legalCase = await legalCaseModel.deleteLegalCaseModel(id)
        const status = legalCase.error ? 404: 200
        res.status(status).json(legalCase)
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

export {
    createLegalCaseController,
    getAllLegalCaseController,
    updateLegalCaseController,
    deleteLegalCaseController
}