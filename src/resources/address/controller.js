const prisma = require("../../utils/database")

const getAll = async (req, res)=> {
    try {
        const address = await prisma.address.findMany()
        res.json({ data: address })
 } catch (error) {
   console.error({error})  
 
   res.status(500).json({ error: error.message})
 }
}
module.exports = { getAll}