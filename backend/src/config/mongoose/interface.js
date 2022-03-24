/* istanbul ignore file */
const mongoInterface = schema => {
  const schemaDB = schema;

  function find(query) {
    return schemaDB.find();
  }

  function findById(id) {
    return schemaDB.findById(id);
  }

  async function save(payload) {
    return schemaDB.create({ ...payload });
  }

  function remove(payload) {
    schemaDB.findOneAndDelete({ ...payload });
  }

  return {
    find,
    findById,
    save,
    remove,
  };
};

module.exports = mongoInterface;
