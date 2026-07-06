import React from 'react';

/**
 * IphoneMockup
 * Renders a portrait iPhone 15 Pro frame around a video or image.
 * Uses SVG foreignObject to embed the media directly inside the screen area —
 * no z-index layering issues.
 *
 * Props:
 *   videoSrc  — path/URL to a .webm or .mp4 file
 *   src       — path/URL to an image file
 *   alt       — alt text for the image (optional)
 */
export function IphoneMockup({ videoSrc, src, alt = '' }) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '300px',
        margin: '0 auto',
        userSelect: 'none',
      }}
    >
      <svg
        viewBox="0 0 300 600"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ display: 'block', width: '100%', height: 'auto' }}
      >
        <defs>
          {/* Clip to the rounded screen rectangle */}
          <clipPath id="screenClip">
            <rect x="16" y="16" width="268" height="568" rx="36" ry="36" />
          </clipPath>

          {/* Mask for the phone body — punches a hole where the screen is */}
          <mask id="bodyMask">
            <rect x="4" y="4" width="292" height="592" rx="46" ry="46" fill="white" />
            <rect x="16" y="16" width="268" height="568" rx="36" ry="36" fill="black" />
          </mask>

          <linearGradient id="glare" x1="0" y1="0" x2="0.5" y2="1">
            <stop offset="0%"  stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ── Media embedded in screen area via foreignObject ── */}
        <foreignObject x="16" y="16" width="268" height="568" clipPath="url(#screenClip)">
          {videoSrc ? (
            <video
              xmlns="http://www.w3.org/1999/xhtml"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 0 }}
            />
          ) : src ? (
            <img
              xmlns="http://www.w3.org/1999/xhtml"
              src={src}
              alt={alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%', background: '#111' }} />
          )}
        </foreignObject>

        {/* ── Phone body (with screen hole cut out) ── */}
        <rect x="4" y="4" width="292" height="592" rx="46" ry="46" fill="#1a1a1a" mask="url(#bodyMask)" />

        {/* Outer edge */}
        <rect x="4" y="4" width="292" height="592" rx="46" ry="46" fill="none" stroke="#3d3d3f" strokeWidth="1.5" />

        {/* Screen inner border */}
        <rect x="16" y="16" width="268" height="568" rx="36" ry="36" fill="none" stroke="#222" strokeWidth="1" />

        {/* Dynamic Island */}
        <rect x="118" y="26" width="64" height="22" rx="11" ry="11" fill="#0a0a0a" />

        {/* Glare over screen */}
        <rect x="16" y="16" width="268" height="568" rx="36" ry="36" fill="url(#glare)" />

        {/* Side buttons */}
        <rect x="0"   y="160" width="4" height="40" rx="2" fill="#2a2a2c" />
        <rect x="0"   y="210" width="4" height="40" rx="2" fill="#2a2a2c" />
        <rect x="296" y="180" width="4" height="60" rx="2" fill="#2a2a2c" />
      </svg>
    </div>
  );
}

export default IphoneMockup;
