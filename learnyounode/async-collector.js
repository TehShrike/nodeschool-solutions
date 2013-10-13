module.exports = function getCollector(times, cb) {
	var collectedResults = []
	var begun = 0
	var done = 0

	return function begin() {
		var resultNumber = begun
		begun = begun + 1

		return function finishedWithThisOne(result) {
			collectedResults[resultNumber] = result
			done = done + 1
			if (done === times) {
				cb(collectedResults)
			}
		}
	}
}
