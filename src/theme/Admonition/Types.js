import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function StoryAdmonition(props) {
  const storyStyles = {
    container: {
      width: '100%',
      maxWidth: '860px',
      margin: '1rem auto',
      padding: '1rem 2.5rem',
      background: 'repeating-linear-gradient(transparent, transparent 1.6rem, rgba(212, 201, 163, 0.08) 1.6rem, rgba(212, 201, 163, 0.08) 1.62rem)',
      border: '2px solid rgb(212, 201, 163)',
      boxShadow: 'rgba(255, 255, 255, 0.6) 0px 0px 0.5rem inset, rgba(228, 215, 172, 0.5) 0px 0px 2rem inset, rgba(0, 0, 0, 0.15) 0px 0px 1rem',
      fontFamily: 'Garamond, Georgia, serif',
      fontSize: '1.125rem',
      lineHeight: '1.85',
      color: 'rgb(59, 53, 41)',
      borderRadius: '6px',
      boxSizing: 'border-box',
      textAlign: 'justify',
      position: 'relative',
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
      background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><rect width='100%' height='100%' fill='none' stroke='%23c2b68d' stroke-width='2' stroke-dasharray='6,6'/></svg>") center center no-repeat`,
      pointerEvents: 'none',
      opacity: '0.08',
      zIndex: 0,
    },
    title: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '0.5rem',
      fontWeight: 'normal',
      color: 'rgb(45, 38, 28)',
      textShadow: 'rgb(255, 255, 255) 0px 1px 0px',
      position: 'relative',
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 1,
    },
  };

  return (
    <div style={storyStyles.container}>
      <div style={storyStyles.overlay}></div>
      {props.title && (
        <h1 style={storyStyles.title}>{props.title}</h1>
      )}
      <div style={storyStyles.content}>
        {props.children}
      </div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'story': StoryAdmonition,
};

export default AdmonitionTypes; 