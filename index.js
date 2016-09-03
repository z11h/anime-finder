'use strict';

const BASE_URL = `http://www.animefreak.tv/`

const constructUrl = (name, epiNum) => `${BASE_URL}/watch/${name}-episode-${epiNum}-english-dubbed-online-free`;

exports.getUrl = constructUrl;
