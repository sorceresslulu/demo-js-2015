import RedditAPI from './reddit-api';
import ExtractImages from './extract-images'
import DisplayImages from './display-images.js'

RedditAPI.load()
  .then(ExtractImages)
  .then(DisplayImages)
;

export default {}