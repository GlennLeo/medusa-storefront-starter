import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { Button } from "@medusajs/ui"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper" className="bg-white rounded-lg overflow-hidden shadow-lg ring-opacity-40 max-w-sm">
        <div className="relative">
          <Thumbnail
            thumbnail={productPreview.thumbnail}
            size="square"
            isFeatured={isFeatured}
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{productPreview.title}</h3>
          <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
            vel eros fermentum faucibus sit amet euismod lorem.</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </span>
            <Button data-testid="order-details-link" variant="secondary">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
