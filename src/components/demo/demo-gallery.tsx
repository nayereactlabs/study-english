import {
  GeneratedImage,
  generatePictures
} from 'trivia-generators/practices/words'
import { useState } from 'react'
import { useEffectOnce } from 'react-use'

type DemoGalleryProps = {
  images: {
    id: string
    src: string
    alt?: string
  }[]
}

{
  /* <DemoGallery
images={[
	{
		src: 'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
		id: '1'
	},
	{
		src: 'https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg',
		id: '1'
	}
]}
/> */
}

export const DemoGallery = ({ images }: DemoGalleryProps) => {
  return (
    <div className="container px-5 py-2 mx-auto lg:px-32 lg:pt-12">
      <div className="flex flex-wrap -m-1 md:-m-2">
        {images.map((image) => {
          return (
            <div className="flex flex-wrap w-1/3" key={image.id}>
              <div className="w-full p-1 md:p-2">
                <img
                  alt={image.alt || 'gallery'}
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={image.src}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const DemoGallery2 = () => {
  const [images, setImages] = useState<GeneratedImage[]>([])

  useEffectOnce(() => {
    const fetch = async () => {
      const xImages = await generatePictures()
      setImages(xImages)
    }
    fetch()
  })

  return (
    <div className="container px-5 py-2 mx-auto lg:px-32 lg:pt-12">
      <div className="flex flex-wrap -m-1 md:-m-2">
        {images.map((image) => {
          return (
            <div className="flex flex-wrap w-1/3" key={image.id}>
              <div className="w-full p-1 md:p-2">
                <img
                  alt={image.alt || 'gallery'}
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={image.src}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
