import { FC } from 'react'

import CarouselItem from '@/ui/catalog/carousel/carousel-item/CarouselItem'

import styles from './Carousel.module.scss'
import { IProduct } from '@/types/product.interface'

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<section className={styles.carousel}>
			{products.map((product, index) => (
				<CarouselItem product={product} key={product.id} index={index} />
			))}
		</section>
	)
}

export default Carousel
