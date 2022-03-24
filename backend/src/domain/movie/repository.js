function movieRepository(database) {
  const db = database;

  const findAll = () => db.find();

  const findById = id => db.findById(id);

  const save = playload => db.save(playload);

  const remove = ({ _id }) => {
    db.remove({ _id });
  };

  return { findAll, findById, save, remove };
}

module.exports = movieRepository;
