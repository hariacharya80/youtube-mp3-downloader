const requestVideoDownloadLink = async (link: string) => {
  const url = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=${encodeURIComponent(
    link
  )}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e0ee51097fmsh8945f4750315e22p142265jsnf61cf4508cbd",
      "X-RapidAPI-Host": "youtube-mp3-downloader2.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    return false;
  }
};

export default requestVideoDownloadLink;
