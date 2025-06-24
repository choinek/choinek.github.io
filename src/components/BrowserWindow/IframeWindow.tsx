import React, { useState } from 'react';
import BrowserWindow from './index';
import styles from './styles.module.css';

interface IframeWindowProps {
    url: string;
    frameBorder?: string;
    scrolling?: string;
    allow?: string;
    allowFullScreen?: boolean;
    width?: string | number;
    height?: string | number;
}

export default function IframeWindow({ 
    url, 
    frameBorder = "0",
    scrolling = "yes",
    allow = "fullscreen; clipboard-read; clipboard-write",
    allowFullScreen = true,
    width = "100%",
    height = 300
}: IframeWindowProps): React.ReactNode {
    const [fullscreen, setFullscreen] = useState(false);

    const iframeProps = {
        frameBorder,
        scrolling,
        allow,
        allowFullScreen
    };

    const iframeStyle = {
        width,
        height,
        border: 'none',
        display: 'block'
    };

    return (
        <>
            {fullscreen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(10px)',
                        zIndex: 9999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20,
                    }}
                    onClick={() => setFullscreen(false)}
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            borderRadius: 20,
                            boxShadow: '0 0 30px rgba(255,255,255,0.3)',
                            width: '90vw',
                            height: '90vh',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'default',
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <BrowserWindow
                            url={url}
                            fullscreen={fullscreen}
                            style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                            bodyStyle={{ padding: 0, height: '100%' }}
                        >
                            <iframe
                                src={url}
                                title={url}
                                style={{ ...iframeStyle, width: '100%', height: '100%' }}
                                {...iframeProps}
                            />
                        </BrowserWindow>
                    </div>
                </div>
            )}
            <div style={{ padding: 10, position: 'relative' }}>
                <button
                    onClick={() => setFullscreen(true)}
                    style={{
                        position: 'absolute',
                        left: 168,
                        top: 10,
                        zIndex: 1,
                        padding: '5px 10px',
                        cursor: 'pointer',
                    }}
                    type="button"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        style={{ position: 'absolute', right: 104, top: 10, cursor: 'pointer', zIndex: 1 }}
                        onClick={() => setFullscreen(true)}
                    > Podgląd </svg>
                </button>
                <BrowserWindow
                    url={url}
                    fullscreen={fullscreen}
                    style={{
                        minWidth: 'min(100%,45vw)',
                        width: '100%',
                        maxWidth: '100%',
                        overflow: 'hidden',
                    }}
                    bodyStyle={{ padding: 0 }}
                >
                    <iframe
                        src={url}
                        title={url}
                        style={iframeStyle}
                        {...iframeProps}
                    />
                </BrowserWindow>
            </div>
        </>
    );
}
