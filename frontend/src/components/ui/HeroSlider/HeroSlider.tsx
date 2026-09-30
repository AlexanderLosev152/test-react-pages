//import React, { useRef, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay, Pagination} from 'swiper/modules';

import classNames from 'classnames';

import styles from './style.module.scss';
import {HeroSliderItemType} from './type';

interface HeroSliderProps {
	heroSlide: HeroSliderItemType[];
}

export default function HeroSlider({heroSlide}: HeroSliderProps) {
	return (
		<Swiper
			modules={[Autoplay, Pagination]}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false
			}}
			pagination={{
				clickable: true
			}}
			className={classNames(styles.heroSwiper, 'mySwiper')}
		>
			{heroSlide.map(({id, slide}) => (
				<SwiperSlide className={styles.heroSlide} key={id}>
					<img src={slide} alt={`slide-${id}`}/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
