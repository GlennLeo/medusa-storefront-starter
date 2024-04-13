import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const firstImage = images.at(0)
  return (
    <div className="flex items-start relative flex-col small:mx-16 gap-y-4">
      {firstImage && <Container
        key={firstImage.id}
        className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
        id={firstImage.id}
      >
        <Image
          src={firstImage.url}
          priority={true}
          className="absolute inset-0 rounded-rounded"
          alt={`Product image 1`}
          fill
          sizes="480px"
          style={{
            objectFit: "cover",
          }}
        />
      </Container>}
      <div className="flex flex-wrap gap-6">
        {images.map((image, index) => {
          return (
            <Image
              key={image.id}
              src={image.url}
              priority={index <= 2 ? true : false}
              className="rounded-rounded"
              alt={`Product image ${index + 1}`}
              width={100}
              height={100}
              style={{
                objectFit: "cover",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery
