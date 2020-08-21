const Tour = require('../models/tourModel');

exports.getOverview = async (req, res) => {
  // 1 get tour data from controller
  const tours = await Tour.find();
  // 2 build template
  // 3 render that template using tour data
  res.status(200).render('overview', {
      title: 'All Tours',
      tours
  });
};

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
      title: 'The Forest Hiker Tour'
  });
};
