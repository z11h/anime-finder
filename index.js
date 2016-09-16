'use strict';

const BASE_URL = `http://www.animefreak.tv/`

exports.getUrl = getUrl;
exports.getNextEpisode = getNextEpisode;

function getUrl (baseUrl = BASE_URL, name, epiNum) {
  if (typeof name === 'string' && typeof epiNum === 'number') {
    return `${baseUrl}/watch/${name}-episode-${epiNum}-english-dubbed-online-free`
  }
}

function getUrl (baseUrl = BASE_URL, name, currentEpiNum) {
  if (typeof name === 'string' && typeof epiNum === 'number') {
    return `${baseUrl}/watch/${name}-episode-${currentEpiNum + 1}-english-dubbed-online-free`
  }
}
