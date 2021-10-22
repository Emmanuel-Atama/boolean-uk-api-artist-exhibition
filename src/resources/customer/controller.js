const prisma = require("../../utils/database")

const getAll = async (req, res) => {
  console.log("working")
    try {
        const customer = await prisma.customer.findMany()
        res.json({ data: customer })
 } catch (error) {
   console.error({error})  
 
   res.status(500).json({ error: error.message})
 }
}
module.exports = { getAll }