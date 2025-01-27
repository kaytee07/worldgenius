import React from 'react'

const Gallery = () => {
  return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-4">
          <div className="grid gap-4">
              <div>
                  <img
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                      src="/img/ghanaboyls1.jpg"
                      alt="gallery-photo"
                  />
              </div>
              <div>
                  <img
                      className="h-auto max-w-full rounded-lg object-cover object-center "
                      src="/img/ghanababepotrait1.jpg"
                      alt="gallery-photo"
                  />
              </div>
              <div>
                  <img
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                      src="/img/awdpotrait1.jpg"
                      alt="gallery-photo"
                  />
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <img
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                      src="/img/ghanaboyspt1.jpg"
                      alt="gallery-photo"
                  />
              </div>
              <div>
                  <img
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                      src="/img/insp1.jpg"
                      alt="gallery-photo"
                  />
              </div>
              <div>
                  <img
                      className="h-auto max-w-full rounded-lg object-cover object-center "
                      src="/img/ghanababepotrait2.jpg"
                      alt="gallery-photo"
                  />
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <img
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                      src="/img/insp3.jpg"
                      alt="gallery-photo"
                  />
              </div>
              <div>
                  <img
                      className="h-auto max-w-full rounded-lg object-cover object-center "
                      src="/img/gbp4.jpg"
                      alt="gallery-photo"
                  />
              </div>
              <div>
                  <img
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                      src="/img/dndls1.jpg"
                      alt="gallery-photo"
                  />
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <img
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                      src="/img/topwp1.jpg"
                      alt="gallery-photo"
                  />
              </div>
              <div>
            
                      <img
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                      src="/img/wgp1.jpg"
                      alt="gallery-photo"
                  />
                  
              </div>
          </div>
      </div>
  )
}

export default Gallery