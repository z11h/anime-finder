'use strict';

const BASE_URL = `http://www.animefreak.tv/`

exports.getUrl = (baseUrl = BASE_URL, name, epiNum) => `${baseUrl}/watch/${name}-episode-${epiNum}-english-dubbed-online-free`;
