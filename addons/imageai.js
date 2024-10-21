
var gptimage = {
    api: "https://proxy.mubilop.tech/v1/images/generations",
    models: [
      // more models at https://reverse.mubi.tech/v1/models (images.generations)
      "flux-pro",
      "pastel-mix-anime",
      "absolute-reality-v1.8.1",
      "anything-v5",
      "meinamix",
      "deliberate-v3",
      "rev-animated",
      "i-cant-believe-its-not-photography-seco",
      "lofi-v4",
      "analog-v1"
    ]
};

gptimage.generate = async function(prompt, model) {
    var requestedModel = gptimage.models[model] || model;
    if (!requestedModel) {
      requestedModel = "flux-pro";
    }
    
    console.log("making image");
  
    return fetch(gptimage.api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: requestedModel,
        prompt: prompt
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Image Gen network response was not ok: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      let targetUrl = data.data[0].url;
      console.log(targetUrl);
      return targetUrl;
    })
    .catch(error => {
      console.error("Image Generator Error: ", error.message);
      return "https://dummyimage.com/400x200/fff/000&text=Error generating image: " + error.message;
    });
  }

addImageButton(
    'static/assets/94b06fb716871f81bec601724e29a457.svg',
    async () => { 
        alert('Button clicked!'); 
        gptimage.generate("cat").then(function(image){
            runWithScratch(`
    function importImage(TEXT) {
      Scratch.fetch(TEXT)
        .then((r) => r.arrayBuffer())
        .then((arrayBuffer) => {
          const storage = vm.runtime.storage;
          vm.addCostume("Sprite1.PNG", {
            name: "Sprite1",
            asset: new storage.Asset(
              storage.AssetType.ImageBitmap,
              null,
              storage.DataFormat.PNG,
              new Uint8Array(arrayBuffer),
              true
            ),
          });
        });
    } importImage("${image}");
                `);
        });
    }
);
