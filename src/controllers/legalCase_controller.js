import legalCaseModel from "../models/legalCase.js"
import { v4 as uuidv4 } from 'uuid'

const createLegalCaseController = async (req, res) => {
    const legalCase = legalCaseModel(req.body)
    legalCase.save().then(data => res.json(data)).catch(err => res.json(err))
}

const getAllLegalCaseController = async ( req , res ) => {
    
}

const getLegalCaseByIDController = async (req, res) => {
    
}

const updateLegalCaseController = async (req, res) =>{
   
}

const deleteLegalCaseController = async (req, res) => {
    
}

export {
    createLegalCaseController,
    getAllLegalCaseController,
    updateLegalCaseController,
    deleteLegalCaseController
}