const prisma = require("../../utils/database")

const getAll = async (req, res) => {
    try {
        const exhibition = await prisma.exhibition.findMany()
        res.json({ data: exhibition })
 } catch (error) {
   console.error({error})  
 
   res.status(500).json({ error: error.message})
 }
}
module.exports = { getAll }