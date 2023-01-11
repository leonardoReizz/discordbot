/* 

  type Rule 
    id: string
    type: string
    description: string
    rules: RuleInfo[]

  type RuleInfo
    id: string
    name: string
    description: string
    createdAt: string;
    updatedAt: string

  REGRAS
    // add new type -> (type, description)
    // add new rule -> (name, description, typeId )
    // update rule -> (typeId, ruleId, name, description)
    // remove RuleInfo -> (ruleInfoId)
    // remover tipo ( perigo perigoso )
    // listar todas regras
    // listar regras por tipo

*/