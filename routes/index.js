const express = require('express');
const locations = require('./data/locations.json');
const districts = require('./data/districts.json');
const router = express.Router();

router.get('/', function (_, res) {
  res.jsonp(locations);
});

router.get('/districts', function (_, res) {
  res.jsonp(districts);
});

router.get('/councils/:district', function (req, res) {
  const district = req.params.district;
  if(!districts.includes(district)){
    res.jsonp({message : 'There\'s no district with that name'});
    return;
  }
  res.jsonp([...new Set(locations.filter(location => location.district === district).map(location => location.council))]);
});

router.get('/parishes/:district/:council', function (req, res) {
  const district = req.params.district;
  const locationsByDistrict = locations.filter(location => location.district === district);
  if(!districts.includes(district)){
    res.jsonp({message : 'There\'s no district with that name'});
    return;
  }
  const council = req.params.council;
  const councils = [...new Set(locationsByDistrict.map(location => location.council))];
  if(!councils.includes(council)){
    res.jsonp({message : 'There\'s no council with that name'});
    return;
  }
  res.jsonp(locationsByDistrict.filter(location => location.council === council).map(location => location.parish));
});

module.exports = router;
