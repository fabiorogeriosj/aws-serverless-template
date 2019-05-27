module.exports.handler = (event, context) => {
  try {
    console.log('Worker ok!')
  } catch (error) {
    console.error(error)
  }
}
