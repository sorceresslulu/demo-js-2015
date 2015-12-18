import jsonp from 'jsonp';

class RedditAPI
{
  constructor() {
    this.redditURL = 'https://www.reddit.com/r/perfectloops/top.json?sort=top&t=week&jsonp=callbackFunction';
  }

  load() {
    return new Promise((resolve, reject) => {
      jsonp(this.redditURL, { param: 'jsonp' }, (err, data) => {
        err ? reject(err) : resolve(data.data.children);
      });
    });
  }
}

export default new RedditAPI();