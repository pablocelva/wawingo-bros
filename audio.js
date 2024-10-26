const INIT_AUDIOS = [
    {
        key:'gameover', 
        path: 'assets/sound/music/gameover.mp3'
    }, 
    {
        key:'goomba-stomp', 
        path:'assets/sound/effects/goomba-stomp.wav'
    }, 
    {
        key:'coin-pickup', 
        path:'assets/sound/effects/coin.mp3'
    },
    {
        key: 'powerup',
        path: 'assets/sound/effects/consume-powerup.mp3'
    }
]

export const initAudio = ({ load }) => {
    INIT_AUDIOS.forEach(({ key, path }) => {
        load.audio(key, path)
    })
}

export const playAudio = (id, { sound }, { volume = 1 } = {}) => {
    try {
        return sound.add(id, { volume }).play()
    } catch (e) {
        console.error(e)
    }
    /*
    try {
        const soundManager = scene.sound;
        if (!soundManager) throw new Error('Sound manager is undefined');
        
        const audio = soundManager.get(id);
        if (!audio) throw new Error(`Audio with key '${id}' not found`);
        
        return audio.setVolume(volume).play();
    } catch (e) {
        console.error(`Failed to play audio ${id}:`, e);
    }
    */
}