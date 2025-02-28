
import { IProduct } from '../../types/server';

type ProductItem = IProduct

function ProductItem({description,image,price,title}: ProductItem) {
  return (
    <div className="shadow border rounded pb-4">
      <img className="rounded-t" src={image} alt="" />
      <div className="flex justify-between px-4 mt-2">
        <h3 className='line-clamp-1 font-semibold w-48'>{title}</h3>
        <p className='font-bold text-xl'>{price}$</p>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-gray-700">
        {description}
        </p>
      </div>
    </div>
  )
}

export default ProductItem
