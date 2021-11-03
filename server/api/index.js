module.exports = (app) => {
  app.use('/api/auth/', require('./auth'))
  app.use('/api/room/', require('./room'))
  app.use('/api/deck/', require('./deck'))
  app.use('/api/file/', require('./file'))
  app.use('/api/employee/', require('./employee'))
}
