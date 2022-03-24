const { randomUUID } = require('crypto');

function inMemoryDb(initialData = []) {
  let itens = Array.isArray(initialData) ? [ ...initialData ] : [];
  function clear() {
    itens = [];
  }
  function find() {
    return itens;
  }
  function findById(_id) {
    return itens.find(item => item['_id'] === _id);
  }
  function save(payload) {
    const newItem = { _id: randomUUID(), ...payload };
    itens.push(newItem);
    return newItem;
  }
  function remove({ _id }) {
    itens = itens.filter(item => item['_id'] !== _id);
  }

  return { find, findById, save, remove, clear };
}

module.exports = inMemoryDb;
