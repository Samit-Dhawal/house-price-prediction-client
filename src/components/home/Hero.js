import Header from "../Header.js";
const video = './assets/video.mp4';

export default function Hero(){
    return(
        <div>
            <Header/>
            <video autoPlay loop muted style={styles.video}>
                <source src={video} type='video/mp4' />
                <h1 className="text-black">Welcome</h1>
            </video>
        </div>
    )
}

const styles = {
    video:{
        width:"100%",
        height:"100%",
        // overflow:"hidden"

    }
}