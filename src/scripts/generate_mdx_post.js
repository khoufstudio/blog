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
  console.log(err)
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

// change date created
fs.readFile(blogPost, 'utf8', (err, data) => {
  if (err) throw err
  let dateNow = new Date().toISOString().split('T')[0]
  console.log(dateNow)
  let result = data.replace(/1970-01-01/g, dateNow)

  fs.writeFile(blogPost, result, (err) => {
    if (err) throw err
    console.log('New Post has been created')
  })
})
