import { useEffect, useRef, useState } from 'react';

const VIDEO_ID = 'qr9-sEC_SmI';

export default function ImageBanner() {
    const holderRef = useRef(null);
    const playerRef = useRef(null);
    const timeoutRef = useRef(null);
    const [active, setActive] = useState(false); // true while the video is showing (poster hidden)
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        let destroyed = false;

        function build() {
            if (destroyed || !holderRef.current || !window.YT) return;
            playerRef.current = new window.YT.Player(holderRef.current, {
                videoId: VIDEO_ID,
                playerVars: {
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    cc_load_policy: 0,
                    fs: 0,
                    disablekb: 1,
                    playsinline: 1,
                    autoplay: 1,
                    mute: 1,
                },
                events: {
                    onStateChange: (e) => {
                        const YT = window.YT;
                        if (e.data === YT.PlayerState.ENDED) {
                            setPlaying(false);
                            setActive(false); // cover YouTube's end screen with the poster
                            // restart 2 seconds after the video has fully finished
                            timeoutRef.current = setTimeout(() => {
                                if (playerRef.current && playerRef.current.seekTo) {
                                    playerRef.current.seekTo(0, true);
                                    playerRef.current.playVideo();
                                }
                            }, 2000);
                        } else if (e.data === YT.PlayerState.PLAYING) {
                            setPlaying(true);
                            setActive(true);
                        } else if (e.data === YT.PlayerState.PAUSED) {
                            setPlaying(false);
                        }
                    },
                },
            });
        }

        if (window.YT && window.YT.Player) {
            build();
        } else {
            const prev = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
                if (prev) prev();
                build();
            };
            if (!document.getElementById('yt-iframe-api')) {
                const s = document.createElement('script');
                s.id = 'yt-iframe-api';
                s.src = 'https://www.youtube.com/iframe_api';
                document.head.appendChild(s);
            }
        }

        return () => {
            destroyed = true;
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (playerRef.current && playerRef.current.destroy) {
                try { playerRef.current.destroy(); } catch (e) { /* ignore */ }
            }
        };
    }, []);

    const play = () => {
        if (playerRef.current && playerRef.current.playVideo) {
            playerRef.current.playVideo();
            setActive(true);
        }
    };

    const toggle = () => {
        if (!playerRef.current) return;
        if (playing) playerRef.current.pauseVideo();
        else playerRef.current.playVideo();
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        if (!playerRef.current) return;
        if (muted) {
            playerRef.current.unMute();
            setMuted(false);
        } else {
            playerRef.current.mute();
            setMuted(true);
        }
    };

    return (
        <section className="image-banner">
            <div className="vb-wrap">
                <div className="vb-holder"><div ref={holderRef}></div></div>

                {active && <div className="vb-catch" onClick={toggle} aria-hidden="true"></div>}

                {active && (
                    <button className="vb-sound" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
                        {muted ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                        ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                        )}
                    </button>
                )}

                {!active && (
                    <button className="vb-poster" onClick={play} aria-label="Play video">
                        <img
                            src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                            alt=""
                            onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`; }}
                        />
                        <span className="vb-play">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        </span>
                    </button>
                )}
            </div>
        </section>
    );
}
