module.exports = (req, res) => {
    res.writeHeader(200, {
        'Content-type': 'application/json'
    })
    res.send = (data) => {
        res.end(JSON.stringify(data));
    }
}