export default (req,res) =>{
    res.statusCode = 200
    res.json({
        name:"Boris Lopes",
        birthDay: "15/11/1990",
        motherName: "Canuta Lopes"
    })
}