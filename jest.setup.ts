/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import '@testing-library/jest-dom';

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: any) =>
    React.createElement('div', { 'data-testid': 'swiper-mock' }, children),

  SwiperSlide: ({ children }: any) =>
    React.createElement(
      'div',
      { 'data-testid': 'swiper-slide-mock' },
      children
    ),

  useSwiper: () => ({
    slideNext: jest.fn(),
    slidePrev: jest.fn(),
  }),
}));

jest.mock('swiper/modules', () => ({
  Navigation: () => null,
  Pagination: () => null,
  Autoplay: () => null,
  EffectFade: () => null,
}));

jest.mock('swiper/css', () => ({}));
jest.mock('swiper/css/navigation', () => ({}));
jest.mock('swiper/css/pagination', () => ({}));
