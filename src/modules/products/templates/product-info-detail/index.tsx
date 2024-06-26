import React from 'react'

type ProductInfoDetailProps = {}

const ProductInfoDetail = ({ }: ProductInfoDetailProps) => {
  return (
    <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
      <h3 className="text-lg font-bold text-[#333]">Product information</h3>
      <ul className="mt-6 space-y-6 text-[#333]">
        <li className="text-sm">TYPE <span className="ml-4 float-right">LAPTOP</span></li>
        <li className="text-sm">RAM <span className="ml-4 float-right">16 BG</span></li>
        <li className="text-sm">SSD <span className="ml-4 float-right">1000 BG</span></li>
        <li className="text-sm">PROCESSOR TYPE <span className="ml-4 float-right">INTEL CORE I7-12700H</span></li>
        <li className="text-sm">PROCESSOR SPEED <span className="ml-4 float-right">2.3 - 4.7 GHz</span></li>
        <li className="text-sm">DISPLAY SIZE INCH <span className="ml-4 float-right">16.0</span></li>
        <li className="text-sm">DISPLAY SIZE SM <span className="ml-4 float-right">40.64 cm</span></li>
        <li className="text-sm">DISPLAY TYPE <span className="ml-4 float-right">OLED, TOUCHSCREEN, 120 Hz</span></li>
        <li className="text-sm">DISPLAY RESOLUTION <span className="ml-4 float-right">2880x1620</span></li>
      </ul>
    </div>
  )
}

export default ProductInfoDetail
