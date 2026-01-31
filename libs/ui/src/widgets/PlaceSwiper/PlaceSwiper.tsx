'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper/types';
import { Place } from '@org/models';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import { IconButton } from '../../ui/IconButton';
import { Arrow } from '../../icons';
import 'swiper/css';
import './PlaceSwiper.styles.scss';

interface Props {
  places: Place[];
  label: string;
}

const BREAKPOINTS = {
  0: { slidesPerView: 1.2 },
  768: { slidesPerView: 3 },
  1224: { slidesPerView: 4 },
};

export const PlaceSwiper = ({ places, label }: Props) => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  const normalizedPlaces = places.map((p) => ({
    ...p,
    badges: p.badges ?? [],
  }));

  return (
    <section className="place-swiper">
      <header className="place-swiper__header">
        <h3 className="place-swiper__label">{label}</h3>

        <div className="place-swiper__controls">
          <IconButton
            className="place-swiper__control place-swiper__control--prev"
            icon={Arrow}
            ariaLabel="Previous"
            onClick={() => swiperRef.current?.slidePrev()}
          />

          <IconButton
            className="place-swiper__control place-swiper__control--next"
            icon={Arrow}
            ariaLabel="Next"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </header>

      <Swiper
        className="place-swiper__swiper"
        spaceBetween={16}
        slidesPerView={BREAKPOINTS[0].slidesPerView}
        breakpoints={BREAKPOINTS}
        grabCursor={true}
        watchOverflow={true}
        speed={500}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {normalizedPlaces.map((place) => (
          <SwiperSlide key={place.id} className="place-swiper__slide">
            <PlaceCard place={place} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
