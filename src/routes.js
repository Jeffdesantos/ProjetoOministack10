const express = require('express');
const mongoose = require('mongoose');
const { Router } = require('express');
const axios = require('axios');
const Dev = require('./model/Dev');
const DevController = require('./controllers/DevControllers');
const SearchController = require('./controllers/DevControllers');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;