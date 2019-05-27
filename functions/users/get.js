const util = require('../../lib/util')

module.exports = async (event) => {
  try {
    return util.bind({})
  } catch (error) {
    return util.bind(error)
  }
}
