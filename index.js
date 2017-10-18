'use strict';

const got = require('got')

const BASE_URL = `http://www.animefreak.tv/` //reliable site

function getEpisodeUrl (baseUrl = BASE_URL, name, epiNum) {
  if (typeof name === 'string' && typeof epiNum === 'number') {
    return `${baseUrl}/watch/${name}-episode-${epiNum}-english-dubbed-online-free`
  } else {
    return `${baseUrl}`
  }
}

function getShowUrl (baseUrl = BASE_URL, name) {
  if (typeof name === 'string') {
    return `${baseUrl}/watch/${name}-episode-${epiNum}-english-dubbed-online-free`
  } else {
    return `${baseUrl}`
  }
}

// @todo: full list of episodes accessable through if of "book-navigation-${release}" html element. use getElementById and parse
function getLatestEpisode () { 
   if (typeof name === 'string') {
     // go to `${baseUrl}/watch/${name}-english-dubbed-online-free`
     // parse "book-navigation-${release}" html element
  } else {
    return `http://www.animefreak.tv/`
  }
}

function getReleaseId(name) {
  // @todo
}

function getNextEpisode (baseUrl = BASE_URL, name, currentEpiNum) {
  if (typeof name === 'string' && typeof epiNum === 'number') {
    return `${baseUrl}/watch/${name}-episode-${currentEpiNum + 1}-english-dubbed-online-free`
  }
}

function getVideoUrl (baseUrl = BASE_URL, name, currentEpiNum) {
  // @todo: get the actual video URL
}

exports.getUrl = getUrl;
exports.getNextEpisode = getNextEpisode;
