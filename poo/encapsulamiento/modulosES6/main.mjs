function videoPlay(id){
    const url = 'https://ketalvideo/'+id;
    console.log(`REPRODUCIENDO CON EXITO ${url}`);
}
function videoStop(id){
    const url = 'https://ketalvideo/'+id;
    console.log(`STOP VIDEO CON EXITO ${url}`);
}

export class videoPlayer{
    constructor({
        videoName,
        videoID,
    }){
        this.videoName = videoName;
        this.videoID = videoID;
    }
    play(){
        videoPlay(this.videoID);
    }
    stop(){
        videoStop(this.videoID);
    }
}