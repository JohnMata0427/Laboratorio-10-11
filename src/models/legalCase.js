import mongoose from 'mongoose';

const legalCaseSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    nombredelCaso: {
        type: String,
        required: true
    },
    delito: {
        type: String,
        required: true
    },
    introduccion: {
        type: String,
        required: true
    },
    acontecimientos: {
        type: Array,
        required: true
    },
    evidencias: {
        type: Object,
        required: true
    },
    procesados: {
        type: Array,
        required: true
    },
});

export default mongoose.model('LegalCase', legalCaseSchema);