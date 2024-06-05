const legalCaseModel = {
    async createlegalCaseModel (newLegalCase){
        // Punto 1
        const url = 'http://localhost:4000/legalCase'
        const peticion= await fetch(url, {
            method:'POST',
            body:JSON.stringify(newLegalCase),
            headers:{'Content-Type': 'application/json'}
        })
        const data = await peticion.json()

        // Punto 2
        return data
    },

    async getAllLegalCaseModel(){
        const url = 'http://localhost:4000/legalCase'
        const peticion = await fetch(url)
        const data = await peticion.json()
        return data
    },
    async updateLegalCaseModel(id,dataLegalCase){
        const url = `http://localhost:4000/legalCase/${id}`
        const peticion = await fetch(url,{
            method:'PUT',
            body: JSON.stringify(dataLegalCase),
            headers: {'Content-Type': 'application/json'}
    })
    const data = await peticion.json()
    return data 
    }
}

export default legalCaseModel