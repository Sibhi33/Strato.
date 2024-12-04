import React from 'react';

const Flash = () => {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingTop: '70.7071%',
          paddingBottom: 0,
          boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
          marginTop: '1.6em',
          marginBottom: '0.9em',
          overflow: 'hidden',
          borderRadius: '8px',
          willChange: 'transform',
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: 'absolute',
            width: '100%',
            height: '90%',
            top: 0,
            left: 0,
            border: 'none',
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAGYQaiyjUQ/ZvMi2ChgeSnyTFL-Nxzyqw/view?embed"
          allowFullScreen
          title="Beige Green CVC Words A English Flashcards"
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAGYQaiyjUQ/ZvMi2ChgeSnyTFL-Nxzyqw/view?utm_content=DAGYQaiyjUQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#0078d7', textDecoration: 'underline' }}
      >
        
      </a>
    </div>
  );
};

export default Flash;
