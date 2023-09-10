import {
	GeneratedImage,
	generatePictures
} from 'trivia-generators/practices/words'
import { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { insertWord } from './practices/api'

export const ImagePickerGallery = () => {
	const [images, setImages] = useState<GeneratedImage[]>([])
	const [word, setWord] = useState('')

	useEffectOnce(() => {
		const fetch = async () => {
			const { images: xImages, word: xWord } = await generatePictures()
			setImages(xImages)
			setWord(xWord)
		}
		fetch()
	})

	const toggleCheck = (id: string) => {
		setImages((prevImages) =>
			prevImages.map((image) =>
				image.id === id ? { ...image, checked: !image.checked } : image
			)
		)
	}

	const onSave = async () => {

		const practice = {
			word,
			images: images.filter((i) => i.checked).map((image) => ({ src: image.src }))
		}

		navigator.clipboard.writeText(
			JSON.stringify(
				practice
			)
		)

		console.log('practice', practice)

		// const src = images
		//   .filter((i) => i.checked)
		//   .map((image) => ({ url: image.src }))
		// console.log(src)
		// await insertWord({
		//   src,
		//   word
		// })
	}

	console.log('images', images)

	return (
		<>
			<h1>{word}</h1>
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
								<div className="form-control">
									<label className="cursor-pointer label">
										<input
											type="checkbox"
											checked={image.checked}
											className="checkbox checkbox-success"
											onChange={(e) => {
												console.log('toggle', e.target.checked, image.id)
												toggleCheck(image.id)
											}}
										/>
									</label>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<button className="btn" onClick={onSave}>
				Copy result
			</button>
		</>
	)
}
