'use strict';

const BASE_URL = `http://www.animefreak.tv/`

exports.getUrl = (name, epiNum) => `${BASE_URL}/watch/${name}-episode-${epiNum}-english-dubbed-online-free`;
