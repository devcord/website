if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations()
    .then(registrations => {
      for (let registration of registrations) {
        //unregister service worker for old domain
        registration.unregister()
      }
    })
    .catch(error => {
      // fail state, which is fine as we just don't want a service worker.
      console.log('Fail: ', error)
    })
}
