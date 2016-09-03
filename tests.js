'use strict';

const anime = require('./index.js');

let url = anime.getUrl('naruto', 2)

if (url === 'http://www.animefreak.tv//watch/naruto-episode-2-english-dubbed-online-free') { 
 return 0;
} else {
  return 1;
}
