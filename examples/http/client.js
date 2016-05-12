const choo = require('../../')
const sf = require('sheetify')

sf('css-wipe/dest/bundle')
sf('tachyons')

const mainView = require('./views/main')
const nav = require('./elements/nav')

const app = choo()

app.model('inbox', require('./models/inbox'))
app.model('spam', require('./models/spam'))
app.model('sent', require('./models/sent'))

app.router((route) => [
  route('/', mainView(nav)),
  route('/:mailbox', mainView(nav), [
    route('/:message_id', mainView(nav))
  ])
])

const tree = app.start()
document.body.appendChild(tree)
