const calculaidade=(req,res)=>{
    const hoje= new Date(Date.now())
    const nascimento= new Date("1983-82-14")
    const idade=hoje.getFullYear- nascimento.getFullYear
    res.json({
        "nome":"Victor",
        "cidade":"Sjc",
        "profissao":"programador",
        "nascimento":idade

    })}

    module.exports  =   {calculaidade}

    