export default function _throttleBeforeAfter (duration, callback) {
  let isRunning   = false
  let scheduledArgs = null

  const startTimer = () => {
    setTimeout(() => {
      if (scheduledArgs) {
        callback(...scheduledArgs)
        scheduledArgs = null
        startTimer()
      } else {
        isRunning = false
      }
    }, duration)
  }

  return (...args) => {
    if (isRunning) {
      scheduledArgs = args
    } else {
      callback(...args)

      isRunning = true

      startTimer()
    }
  }
}
