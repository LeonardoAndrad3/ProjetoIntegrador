self.addEventListener("install", e => {
    alert("service worker instalado! arquivo service");
});

self.addEventListener("fetch", e => {
    console.dir(e);
})