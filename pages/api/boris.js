export default (req,res) =>{
    res.statusCode = 200
    res.json({
        name:"test name",
        birthDay: "92103131",
        motherName: "nome mãe"
    })
}