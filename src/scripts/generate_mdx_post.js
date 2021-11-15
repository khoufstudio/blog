const argv = require('yargs/yargs')(process.argv.slice(2)).argv
const fs = require('fs')

const currentDate = new Date().toISOString().split('T')[0]
const blogPostTitle = `${currentDate}-${argv.name}`
const rootFolder = '../posts'
const thisYear = new Date().getFullYear()
const yearFolder = `${rootFolder}/${thisYear}`
const blogPostFolder = `${rootFolder}/${thisYear}/${blogPostTitle}`
const blogPost = `${rootFolder}/${thisYear}/${blogPostTitle}/index.mdx`

function callback(err) {
  if (err) throw err
  console.log('error coy')
}

// create directory

// create directory 'year' if it isn't exists
if (!fs.existsSync(yearFolder)) {
  fs.mkdirSync(yearFolder)
}

// create directory 'post directory'
if (!fs.existsSync(blogPostFolder)) {
  fs.mkdirSync(blogPostFolder)
}

// create file
if (!fs.existsSync(blogPost)) {
  fs.copyFile('assets/BlogPostTemplate/index.mdx', blogPost, callback)
}
