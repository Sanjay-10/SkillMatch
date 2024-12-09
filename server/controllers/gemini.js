const gemini = async (req, res) => {    
    try {
        const { symbol } = req.body;
        const data = await geminiClient.getTicker(symbol);
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching data");
    }
};

module.exports = { gemini };