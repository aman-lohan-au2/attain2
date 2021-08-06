const Questionrepo = require('../repository/Questionrepo')

async function add(arr){
    const result = await Questionrepo.add(arr);
    return result;
}

async function update(arr){
    const result = await Questionrepo.update(arr);
    return result;
}


module.exports = {add, update}
