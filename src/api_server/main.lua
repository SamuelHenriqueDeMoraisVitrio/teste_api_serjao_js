local serjao = require("dependencies/serjao_berranteiro/serjao_berranteiro")

---@param rq Request
local function main_server(rq)

    if(rq.route == "/refrigerator") then

        return serjao.send_file("body/refrigerator/main.json", 200)

    end
    
    return "Hello Word", 200
    
end

serjao.server(3000, main_server)