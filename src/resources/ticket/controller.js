const prisma = require("../../utils/database")

const getAll = async (req, res) => {
  console.log("working")
    try {
        const ticket = await prisma.ticket.findMany()
        res.json({ data: ticket })
 } catch (error) {
   console.error({error})  
 
   res.status(500).json({ error: error.message})
 }
}
module.exports = { getAll }