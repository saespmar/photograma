download(document.querySelector("#react-root > section > div > div > section > div img").src)

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
