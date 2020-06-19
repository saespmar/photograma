{
  const image = document.querySelector("#react-root > section > div > div > section > div img");
  const video = document.querySelector("#react-root > section > div > div > section > div source");
  const asset = video ?? image;
  download(asset.src);
}

async function download(url) {
  const temporalLink = document.createElement("a");
  temporalLink.href = await toDataURL(url);
  temporalLink.download = "";
  document.body.appendChild(temporalLink);
  temporalLink.click();
  document.body.removeChild(temporalLink);
}

function toDataURL(url) {
  return fetch(url).then((response) => {
      return response.blob();
    }).then(blob => {
      return URL.createObjectURL(blob);
    });
}
