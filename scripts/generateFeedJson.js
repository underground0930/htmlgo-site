// import axios from 'axios'

const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '../public/feed.json')

const getQiitaFeed = require('./getQiitaFeed')
const getNoteFeed = require('./getNoteFeed')
const getZennFeed = require('./getZennFeed')

async function generateFeedJson() {
  const promises = [getQiitaFeed(), getNoteFeed(), getZennFeed()]

  let feeds = await Promise.allSettled(promises).then((results) => {
    return results.reduce((prev, next) => {
      return prev.concat(next.value)
    }, [])
  })

  feeds.sort((a, b) => {
    return a.published < b.published ? 1 : -1
  })

  fs.writeFileSync(filePath, JSON.stringify(feeds, null, 2))
}

generateFeedJson().then(() => console.log('feeds json file generated.'))
