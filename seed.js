const { db, Gardener, Plot, Vegetable } = require('./models.js');

db.sync({
  // force: true,
})
  .then(() => {
    console.log('Database synced!');
    db.close();
  })
  .catch(err => {
    console.log('Error! Something went wrong');
    console.log(err);
    db.close();
  });

const vegetableSeeds = () => {
  Vegetable.create({ name: 'Carrot', color: 'Orange', planted_on: '10/31/18' });
  Vegetable.create({ name: 'Beet', color: 'Red', planted_on: '12/25/2018' });
  Vegetable.create({
    name: 'Celery',
    color: 'Green',
    planted_on: '07/04/2018',
  });
  Vegetable.create({
    name: 'Babies',
    color: 'Rainbow',
    planted_on: '04/01/2018',
  });
};

vegetableSeeds();
const p1 = Gardener.create({
  name: 'Wingman',
  age: 10,
});
const p2 = p1.then(gardener => {
  return Plot.create({ size: 100, shaded: true, gardenerId: gardener.id });
});
const p3 = p2.then(plot => {
  console.log('Plot created: ');
});

Gardener.create({ name: 'Eve', age: 100 })
  .then(gardener => {
    return Plot.create({ size: 25, shaded: false, gardenerId: gardener.id });
  })

  .then(plot => {
    console.log('Plot created!');
  });
