
async function request_refri_json(url){
    try {
        const refri_json = await fetch(url);
        
        return await refri_json.json();
        
    } catch (error) {
        console.error(`Erro ao fazer a requisição na url: ${url} `, error);
        return null;
    }
}

async function checkRefri(){

    const sla = await request_refri_json("http://localhost:3000/refrigerato");

    if(sla != null){
        console.log(sla.Coke);
    }else{
        console.log(sla);
    }
}

checkRefri();
