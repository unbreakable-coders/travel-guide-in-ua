/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlaceSwiper } from './PlaceSwiper';

jest.mock('swiper/css', () => ({}));

const mockSlidePrev = jest.fn();
const mockSlideNext = jest.fn();

// 3. Мокаємо Swiper компоненти
jest.mock('swiper/react', () => ({
  Swiper: ({ children, onSwiper }: any) => {
    const mockSwiperInstance = {
      slidePrev: mockSlidePrev,
      slideNext: mockSlideNext,
    };

    // Імітуємо ініціалізацію Swiper для нашого useRef
    if (onSwiper) onSwiper(mockSwiperInstance);

    return <div data-testid="mock-swiper">{children}</div>;
  },

  SwiperSlide: ({ children }: any) => (
    <div data-testid="mock-swiper-slide">{children}</div>
  ),
}));

const mockPlaces = [
  { id: '1', title: 'Kyiv', city: 'Ukraine', poster: '/img1.jpg', rating: 5 },
  { id: '2', title: 'Lviv', city: 'Ukraine', poster: '/img2.jpg', rating: 4.5 },
];

describe('PlaceSwiper with user-event', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call swiper.slideNext() when next button is clicked', async () => {
    const user = userEvent.setup();
    render(<PlaceSwiper label="Test" places={mockPlaces} />);

    const nextBtn = screen.getByRole('button', { name: /next/i });
    await user.click(nextBtn);

    expect(mockSlideNext).toHaveBeenCalledTimes(1);
  });

  it('should call swiper.slidePrev() when previous button is clicked', async () => {
    const user = userEvent.setup();
    render(<PlaceSwiper label="Test" places={mockPlaces} />);

    const prevBtn = screen.getByRole('button', { name: /previous/i });
    await user.click(prevBtn);

    expect(mockSlidePrev).toHaveBeenCalledTimes(1);
  });

  it('should render all slides with PlaceCard content', () => {
    render(<PlaceSwiper label="Test" places={mockPlaces} />);

    expect(screen.getByText('Kyiv')).toBeInTheDocument();
    expect(screen.getByText('Lviv')).toBeInTheDocument();
  });

  it('should render the correct label', () => {
    render(<PlaceSwiper label="Featured Places" places={mockPlaces} />);
    expect(screen.getByText('Featured Places')).toBeInTheDocument();
  });
});
