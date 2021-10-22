const prisma = require("../../utils/database")

const getAll = async (req, res)=> {
    try {
        const artist = await prisma.artist.findMany()
        res.json({ data: artist })
 } catch (error) {
   console.error({error})  
 
   res.status(500).json({ error: error.message})
 }
}
module.exports = { getAll}