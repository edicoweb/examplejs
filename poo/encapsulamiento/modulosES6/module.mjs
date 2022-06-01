import { videoPlayer } from "./main.mjs";

const newVideo = new videoPlayer({
    videoName: 'Aprende a Programar con JS',
    videoID: 'fd35j34k5423',
});

newVideo.play();
newVideo.stop();