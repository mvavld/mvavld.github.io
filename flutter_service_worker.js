'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "107a1bc0b0a9c37ff533c5426df04d4a",
"version.json": "56c583d31f98e6330267d52e14604f5f",
"index.html": "efdbe010a4e13effd1e15d6513692ba1",
"/": "efdbe010a4e13effd1e15d6513692ba1",
"main.dart.js": "b07c8476f5d61d43397f66075f3e6c8f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "2cce77b31e2896c6633a76f5e512a065",
"icons/Icon-192.png": "2cce77b31e2896c6633a76f5e512a065",
"icons/Icon-512.png": "2cce77b31e2896c6633a76f5e512a065",
"manifest.json": "a5cda573e80a54d24daa26754d855c17",
"assets/AssetManifest.json": "24a9fc8ec313aa9f31756b2e3bbbeb76",
"assets/NOTICES": "c3c3e037e1c3c910648c1df91e0c9998",
"assets/FontManifest.json": "d2059515b339e55c09fed3ef626d4661",
"assets/AssetManifest.bin.json": "48b93e600e90297bcc9b485672517e70",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/oggetto_white_label_core/assets/svg/grid32.svg": "13569f3b35821d0ef85a64383e59ee26",
"assets/packages/oggetto_white_label_core/assets/svg/search.svg": "d98f4dd615602cb00156bffec04ec55b",
"assets/packages/oggetto_white_label_core/assets/svg/arrow_back24.svg": "c513849c1f337f60116cd9fe7b549eb6",
"assets/packages/oggetto_white_label_core/assets/svg/handbag20.svg": "932ec642df1806ac59a948c55241b943",
"assets/packages/oggetto_white_label_core/assets/svg/filter24.svg": "396b0d00f77501390b629ace7972abca",
"assets/packages/oggetto_white_label_core/assets/svg/profile_nav.svg": "fac0b33d1ce56b5894eee93662078b30",
"assets/packages/oggetto_white_label_core/assets/svg/grid_alt32.svg": "ec534d91b4e4da24d8c901e95fbe3b20",
"assets/packages/oggetto_white_label_core/assets/svg/verified.svg": "dbf13c2805bb1d5b010a25e6ed677229",
"assets/packages/oggetto_white_label_core/assets/svg/star40.svg": "aadd89a32df96f0b4b433d50e36a63d7",
"assets/packages/oggetto_white_label_core/assets/svg/clear.svg": "c6a38a2e0c48d9cdfbf1d9a6f5add555",
"assets/packages/oggetto_white_label_core/assets/svg/cart_nav.svg": "a8d56071add3025ac1e183624c03f56e",
"assets/packages/oggetto_white_label_core/assets/svg/disabled_swatch24.svg": "406a4b13ad47de7a8f9273029cdac6af",
"assets/packages/oggetto_white_label_core/assets/svg/subscribe24.svg": "279ecc38105e1d79ade581026269396f",
"assets/packages/oggetto_white_label_core/assets/svg/eye_close.svg": "8bb257796fb9cf0cd8098d9d9a841762",
"assets/packages/oggetto_white_label_core/assets/svg/search_small.svg": "ce1d8c77876389a75063400a0658538d",
"assets/packages/oggetto_white_label_core/assets/svg/catalog_nav.svg": "44d41d0b8df1483f2523fad116fcc39f",
"assets/packages/oggetto_white_label_core/assets/svg/star24.svg": "d2e5ab38af349738338cd41ac05132db",
"assets/packages/oggetto_white_label_core/assets/svg/heart24.svg": "d27a47b0918000031fe4ca4b6ecd4980",
"assets/packages/oggetto_white_label_core/assets/svg/chevron_right.svg": "db4ac865617b994fd1a10b720678a24d",
"assets/packages/oggetto_white_label_core/assets/svg/chevron_left.svg": "2fc010bb83c0604360c0c9cd15970e04",
"assets/packages/oggetto_white_label_core/assets/svg/search_delete.svg": "8bc00486a1b94e995df70d451e55f825",
"assets/packages/oggetto_white_label_core/assets/svg/vk_logo.svg": "57fa55e3947ae004f65c704bdc2741b4",
"assets/packages/oggetto_white_label_core/assets/svg/arrow_right.svg": "e37813945856a010361c0eaa9825d3a6",
"assets/packages/oggetto_white_label_core/assets/svg/plus.svg": "4bf7c4e7af085108d3b5b5ca4e5ef9a9",
"assets/packages/oggetto_white_label_core/assets/svg/warning.svg": "5e01a5cbb65791b5e45d2dddacd6a929",
"assets/packages/oggetto_white_label_core/assets/svg/add_image.svg": "d618e82ed631bbc216805c26df4fca6d",
"assets/packages/oggetto_white_label_core/assets/svg/arrow_outlined.svg": "4c13e338aba5be2a067ed9e8f38ef624",
"assets/packages/oggetto_white_label_core/assets/svg/chevron_down_bold.svg": "ef08f52be466b3d17128180ce055141b",
"assets/packages/oggetto_white_label_core/assets/svg/yandex_split.svg": "b9c45cc39e3e554b3d30329d872104e2",
"assets/packages/oggetto_white_label_core/assets/svg/favorite_nav.svg": "0607c1a0bc811ea4d05d894b46f1ed03",
"assets/packages/oggetto_white_label_core/assets/svg/eye_open.svg": "52dbcad2bf8a85062958d05b1e99148b",
"assets/packages/oggetto_white_label_core/assets/svg/barcode.svg": "317f577b5bdf3f658a23b9adf16d4e05",
"assets/packages/oggetto_white_label_core/assets/svg/home_nav.svg": "e29f4bded43337b16dbb4fadb05059bc",
"assets/packages/oggetto_white_label_core/assets/svg/trash.svg": "27c0c10217496fd47e11449f08274765",
"assets/packages/oggetto_white_label_core/assets/svg/star16.svg": "4f55bfadc4a09c143d980251a8f4333d",
"assets/packages/oggetto_white_label_core/assets/svg/delete.svg": "44818f4cffc261f7d6f55e23b29882f3",
"assets/packages/oggetto_white_label_core/assets/svg/telegram_logo.svg": "9519967e2777a85d7c5a7d0d040e28b2",
"assets/packages/oggetto_white_label_core/assets/svg/calendar.svg": "a06fa53872e8886318fbe5c07a81c8e5",
"assets/packages/oggetto_white_label_core/assets/svg/chevron_down24.svg": "04884a9db46ba3155af7d83a99466732",
"assets/packages/oggetto_white_label_core/assets/svg/forward.svg": "63535bfadf2d5a1bdb8682effd90b6ed",
"assets/packages/oggetto_white_label_core/assets/svg/filter24_selected.svg": "df7b461afc30848998f0f087f22484cf",
"assets/packages/oggetto_white_label_core/assets/svg/delete_image_thumbnail.svg": "fdd022ec3a8240d1d74e68ec7aafadf8",
"assets/packages/oggetto_white_label_core/assets/svg/heart_active24.svg": "ac9f12852fd377155befbda61765e0f3",
"assets/packages/oggetto_white_label_core/assets/svg/minus.svg": "e6e299afb8f684e55ec303022c1599bc",
"assets/packages/oggetto_white_label_core/assets/svg/photo.svg": "a81fbceac795d243f2cc94cf477f1dd8",
"assets/packages/oggetto_white_label_core/assets/svg/yandex_plus_bonus.svg": "022443fe52fe1199345c7e968a7dc70f",
"assets/packages/oggetto_white_label_core/assets/images/empty_category_image.png": "aea721ba0ba25ed62ffb575e5816eb95",
"assets/packages/oggetto_white_label_core/assets/images/bonus_logo.png": "9703ac9eb3fa508e28e771eaf143ea55",
"assets/packages/oggetto_white_label_core/assets/images/empty_image.png": "0033c9f73a0d5107b3b29a930fe7a296",
"assets/packages/oggetto_white_label_core/assets/images/gift.png": "317817643a63eed0bf8c7aea7bb16ef2",
"assets/packages/oggetto_white_label_core/assets/fonts/CoFoSans-Regular.otf": "939b7e04f8f4b8f88507442c8a4d126d",
"assets/packages/oggetto_white_label_core/assets/fonts/CoFoGothic-Medium.otf": "92cea1943f07fe885dd8c7b0a1d7e53e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b6416588c90f45778f99212d14417aa3",
"assets/fonts/MaterialIcons-Regular.otf": "422a9bf515258f0b4a6b56d28ad0efb2",
"assets/assets/svg/payment_split.svg": "109a054e7ae503e4ab7eda25c37e2392",
"assets/assets/svg/search.svg": "c00f7d32ba5f88d81565b3986ca37a0e",
"assets/assets/svg/profile_nav.svg": "fac0b33d1ce56b5894eee93662078b30",
"assets/assets/svg/heart_empty.svg": "6c02b7626e2061b10e5fa0778ad17fac",
"assets/assets/svg/logout.svg": "b6d05ca88ea0a18b9220fa35cd5d98bf",
"assets/assets/svg/share_icon.svg": "fe3a3a416e253538d15ffe8f5e4d0276",
"assets/assets/svg/no_connection.svg": "82a1babb0b4305eb308a3934685c32ab",
"assets/assets/svg/payment_card.svg": "c9d8d5fa60ba7b24b4715d5fec42a5ac",
"assets/assets/svg/cart_nav.svg": "a8d56071add3025ac1e183624c03f56e",
"assets/assets/svg/grapes_few.svg": "15a2cf5d45d3d7f609eb90cdc579ecdb",
"assets/assets/svg/arrow_left.svg": "d6fe27394d729471bacdf33b3ad9fe32",
"assets/assets/svg/subscribe.svg": "dd8f841615df46b5e69ae5481fa15b62",
"assets/assets/svg/payment_sbp.svg": "9f3c9a29d3e0e05abea00abfd7dee6a1",
"assets/assets/svg/gallery.svg": "88bd9c9bbe160ce643d6328b8b37ab1c",
"assets/assets/svg/catalog_nav.svg": "44d41d0b8df1483f2523fad116fcc39f",
"assets/assets/svg/white_close.svg": "c03c56a93c70cb82013ec14ee23d36bf",
"assets/assets/svg/chevron_right.svg": "19629b6400612d95a980d771af1cdd7a",
"assets/assets/svg/chevron_left.svg": "2fc010bb83c0604360c0c9cd15970e04",
"assets/assets/svg/vk_logo.svg": "57fa55e3947ae004f65c704bdc2741b4",
"assets/assets/svg/heart_full.svg": "68e2d38fc188aaa1da3c4eb24592af02",
"assets/assets/svg/close.svg": "d95b54ef277e2bb0122d6716dd3231a4",
"assets/assets/svg/chevron_down_bold.svg": "e43e257690e780718c4f08eb9bf212b7",
"assets/assets/svg/favorite_nav.svg": "0607c1a0bc811ea4d05d894b46f1ed03",
"assets/assets/svg/barcode.svg": "5f879307af30f393986c7fd31661c610",
"assets/assets/svg/camera.svg": "a81fbceac795d243f2cc94cf477f1dd8",
"assets/assets/svg/home_nav.svg": "e29f4bded43337b16dbb4fadb05059bc",
"assets/assets/svg/grapes_many.svg": "08082e34160a54679e1254d566a1cdda",
"assets/assets/svg/grapes_small.svg": "d9636eae41136ae502bbe84aaa2993c0",
"assets/assets/svg/trash.svg": "27c0c10217496fd47e11449f08274765",
"assets/assets/svg/chevron_right_bold.svg": "eab97a5a3f94eb17e8ede01a9e7e22e0",
"assets/assets/svg/edit.svg": "0b01b61f38ea381e7e04e74a60fdc5b3",
"assets/assets/svg/notification_error.svg": "e21d952538df4b4ded1f259b8a7e4c15",
"assets/assets/svg/notification_success.svg": "f85bf2f80a0a7ab34b7f905c76898362",
"assets/assets/svg/share.svg": "bb89b037eb5aaa241c77d1e12799d8f2",
"assets/assets/svg/close_filled.svg": "c6a38a2e0c48d9cdfbf1d9a6f5add555",
"assets/assets/svg/telegram_logo.svg": "9519967e2777a85d7c5a7d0d040e28b2",
"assets/assets/svg/force_update_icon.svg": "67f3960fe390558b7bd7819e5400f1ed",
"assets/assets/svg/home_address_pin.svg": "09800ce8b76aec045c2e2860a2c14594",
"assets/assets/svg/payment_invoice.svg": "98d55e41a0cfb4a46e9834214a636fc9",
"assets/assets/svg/onboarding.svg": "0d2f2a27fbb2e3fd9975d9c2672200fe",
"assets/assets/svg/logo.svg": "d456dce6b16c68d7229e72b214acba82",
"assets/assets/svg/history.svg": "49f03a90dbb924eb47a4c45494820bfd",
"assets/assets/svg/payment_cash.svg": "6344d7b35f3d02c12bd0fa42eba32039",
"assets/assets/images/search_empty_bg.png": "11a36d9e3ac02d9ea77b358ef79145fc",
"assets/assets/images/logo.png": "2cce77b31e2896c6633a76f5e512a065",
"assets/assets/images/delivery_banner.png": "b035732f31f1d5d6eee9a6fb8aa78e79",
"assets/assets/images/favorite.png": "9a7cd3564e79ca5380b8b200cf65a772",
"assets/assets/images/orders.png": "c0c19d6be9ca2f09d5cb86275a474b72",
"assets/assets/json/feature_toggles.json": "d4690aecbe233602f2e5dd0eea05dbae",
"assets/assets/json/crashlytics_ignored_patterns.json": "dfdb7d3a8ca3de21811e645de6bb5438",
"embed.html": "afb0fc5ca4d85232e1ee73c5bcfbdcb2",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
