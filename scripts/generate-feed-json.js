// import axios from 'axios'

const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '../public/feed.json')

const getQiitaFeed = require('./get-qiita-feed')
// const getNoteFeed = require('./get-note-feed')
const getZennFeed = require('./get-zenn-feed')

async function generateFeedJson() {
  const promises = [getQiitaFeed(), getZennFeed()]

  let feeds = await Promise.allSettled(promises).then((results) => {
    return results.reduce((prev, next) => {
      return prev.concat(next.value)
    }, [])
  })

  feeds.sort((a, b) => {
    return a.published < b.published ? 1 : -1
  })
  feeds = feeds.map((feed) => {
    feed.published = feed.published.split('T')[0]
    return feed
  })

  fs.writeFileSync(filePath, JSON.stringify(feeds, null, 2))
}

generateFeedJson().then(() => console.log('feeds json file generated.'))
