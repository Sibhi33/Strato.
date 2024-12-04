import React from 'react'

const CreateAct = () => {
  return (
    <div className="flex justify-center items-start" style={{ minHeight: '75vh', paddingTop: '25vh' }}>
      <iframe 
        src="https://h5p.org/h5p/embed/554805" 
        width="1090" 
        height="907" 
        frameBorder="0" 
        allowFullScreen="allowfullscreen" 
        allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" 
        title="Find the words">
      </iframe>
      <script 
        src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" 
        charset="UTF-8">
      </script>
    </div>
  )
}

export default CreateAct
