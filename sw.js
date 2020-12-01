const cacheName = "WiTec-v1.55"
const files = [
  '/DesafioFinal/',
  '/DesafioFinal/index.html',
  '/DesafioFinal/script.js'
  '/DesafioFinal/flexs.css',
  '/DesafioFinal/flexs2.css',
  'https://code.jquery.com/jquery-3.2.1.slim.min.js',
  'https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js',
  'https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js',
  'https://code.jquery.com/jquery-3.3.1.slim.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
  'https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css',
  '/DesafioFinal/img/icons/favicon.ico'
]
self.addEventListener('install', function(evt){
  console.log("install sw");
  evt.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log("colocando arquivos na cache")
      cache.addAll(files)
    })
  )
})

self.addEventListener('activate', function(evt){
  console.log("activate sw");
  evt.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys
        .filter(key !== cacheName)
        .map(key => caches.delete(key))
      )
    })
  )
})

self.addEventListener('fetch', function(evt){
  console.log("fetch sw");
  evt.respondWith(caches.match(evt.request).then(function(res){
    return res || fetch(evt.request)
  }))

})
