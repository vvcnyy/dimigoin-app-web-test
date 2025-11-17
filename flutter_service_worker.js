'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "28a47585bac8e0539cf5c36219bd906b",
"index.html": "f956b5393855cd3cdea64e630cb561ac",
"/": "f956b5393855cd3cdea64e630cb561ac",
"splash/img/light-4x.png": "c2cd9d58a47b18c79a927fb50b2ff4cc",
"splash/img/dark-4x.png": "c2cd9d58a47b18c79a927fb50b2ff4cc",
"splash/img/dark-3x.png": "7fb99803c3edf8354d1aa420c2968ab2",
"splash/img/dark-1x.png": "5a9fe08a9a3baff686eb7566bca0a990",
"splash/img/dark-2x.png": "0852ed19c364314c60c56be346704b68",
"splash/img/light-1x.png": "5a9fe08a9a3baff686eb7566bca0a990",
"splash/img/light-3x.png": "7fb99803c3edf8354d1aa420c2968ab2",
"splash/img/light-2x.png": "0852ed19c364314c60c56be346704b68",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "e4e625c028b92894dc310527f3d202d1",
"assets/assets/icons/dimigoin.svg": "52af4e3e98acbb285784fde4703cd9b8",
"assets/assets/icons/error.svg": "94ce1f445a0a6242c2ed79a9f55d802f",
"assets/assets/icons/avatar_person.svg": "c06548f0385c070be40befe833e6744a",
"assets/assets/icons/din_logo.svg": "233f109ce0ea40842135842fe468fc34",
"assets/assets/icons/dimigoin_loading.svg": "86f28f9bfae5ae0c6b91e67596d907db",
"assets/assets/icons/checkbox/check_box_checked.svg": "ecb8f68afd547fee64ab95446b00a4d8",
"assets/assets/icons/checkbox/check_box_blank.svg": "7df2584e42afb597efb41b4b0b794b23",
"assets/assets/icons/thumbs/thumb_up.svg": "8c26f3308ab05df2e42344f419bbd7eb",
"assets/assets/icons/thumbs/thumbup_on.svg": "dc6b8162dbe49a3c6e767651c4e2df5a",
"assets/assets/icons/thumbs/thumb_down_on.svg": "9b8f50e2c3b123f75bd453614751c8e9",
"assets/assets/icons/thumbs/thumb_down.svg": "b1451c25283405f2ce236fffd089df75",
"assets/assets/icons/warning.svg": "3d944d00b0242308b1aa7dc399b16655",
"assets/assets/icons/info.svg": "0303598c6533270e8445a7c54cd984fb",
"assets/assets/icons/notification.svg": "ead0b08359ad7b660bf745d8da80080c",
"assets/assets/icons/logout.svg": "f4c958cfaddc01a026beb7f072f0aa47",
"assets/assets/icons/menu/home.svg": "99ca2c3a0537f34a116cdeeda5bb536b",
"assets/assets/icons/menu/office.svg": "fa979aa6273d53fe9b111ad531f8342c",
"assets/assets/icons/menu/others.svg": "5f3730abdad62400e48184ec64b78f26",
"assets/assets/icons/menu/washer.svg": "ff8544db43357b2ef037472353958e1f",
"assets/assets/icons/menu/music.svg": "bda79adc31fa475eb96a48b8d2804a4b",
"assets/assets/icons/avatar_classroom.svg": "4a83e79ca1c8006737d8354506b8409e",
"assets/assets/icons/search.svg": "d530e51351b73ae10033a40b9de841b7",
"assets/assets/icons/updown/down.svg": "80284eaf3dae129c6f55a2e7533198d2",
"assets/assets/icons/updown/up.svg": "79b3d9144973afecc5603d51d56bea67",
"assets/assets/icons/google.svg": "8c09aeae1a63f349a1b7730564b4f173",
"assets/assets/images/dimigoin.svg": "52af4e3e98acbb285784fde4703cd9b8",
"assets/assets/images/dimigoin.png": "a5a8fb4703e92bb2de6048455ef923e0",
"assets/assets/images/dimigoin_icon.png": "5d1e053de20d42180fae233a934dae87",
"assets/assets/images/dimigoin_splash.png": "0792f9021397f32aea648aaa9ffad04c",
"assets/assets/images/schoolscenery.svg": "d592dc2efe477ff74e201ce09edafdb8",
"assets/assets/fonts/SUIT-Variable.ttf": "7472e38315c39087c3e0dbae3fee2b7c",
"assets/fonts/MaterialIcons-Regular.otf": "adc6be54c75e7e74bf7349a39ceb4fa7",
"assets/NOTICES": "4afb010871ff6fa2ee91b390344b8a89",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "8ffa59d9fa8a73b71dc4effd11403f6b",
"assets/AssetManifest.bin": "aab4979be83f9e47af20686b41e5da28",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "0187c2c4db11699d67944008dddb5ffd",
"version.json": "093acf0eed970fd20b6c20945c074aec",
"main.dart.js": "a7751b70ef85b72ff5ea84fd72823ccc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
