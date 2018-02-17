(function () {
  const mapWhiteKeys = { 0:16, 1:18, 2:20, 3:21, 4:23, 5:25, 6:27,
                         7:28, 8:30, 9:32, 10:33, 11:35, 12:37, 13:39,
                         14:40, 15:42, 16:44, 17:45, 18:47, 19:49, 20:51,
                         21:52, 22:54, 23:56, 24:57, 25:59, 26:61, 27:63,
                         28:64, 29:66, 30:68, 31:69, 32:71, 33:73, 34:75, 35:76  };
  const mapBlackKeys = { 0:17, 1:19,
                         2:22, 3:24, 4:26,
                         5:29, 6:31,
                         7:34, 8:36, 9:38,
                         10:41, 11:43,
                         12:46, 13:48, 14:50,
                         15:53, 16:55,
                         17:58, 18:60, 19:62,
                         20:65, 21:67,
                         22:70, 23:72, 24:74 };
  const whites = Object.keys(mapWhiteKeys).length;
  const blacks = Object.keys(mapBlackKeys).length;
  const total = whites + blacks;

  const context = new AudioContext();
  let yodelBuffer;

  function addClickEvents(){
    for(let i = 0; i < whites; i++){
      let stringPattern = "key-white-"+i;
      let URL = 'http://localhost:3003/music?id=a'+ mapWhiteKeys[i]+ '.mp3';
      document.getElementById(stringPattern).addEventListener("click", function() {
        getData(URL)});
    }
    for(let i = 0; i < blacks; i++){
      let stringPattern = "key-black-"+i;
      let URL = 'http://localhost:3003/music?id=a' + mapBlackKeys[i]+ '.mp3';
      document.getElementById(stringPattern).addEventListener("click", function() {
        getData(URL)});
    }
  }

  function getData(URL) {
    window.fetch(URL)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        yodelBuffer = audioBuffer;
        play(yodelBuffer);
      });
  }

  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
  }

  addClickEvents();
}());
