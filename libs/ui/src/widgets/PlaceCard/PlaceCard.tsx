import Image from 'next/image';
import { Place } from '@org/models';
import { Rating } from '../Rating';
import { Pillow, PillowColor } from '../../ui/Pillow';
import './PlaceCard.styles.scss';

interface Props {
  place: Place;
}

const BADGE_CONFIG: Record<string, { label: string; color: PillowColor }> = {
  hot: { label: 'Hot', color: PillowColor.Danger },
  recommended: { label: 'Recommended', color: PillowColor.Success },
  top: { label: 'Top', color: PillowColor.Warning },
};

export const PlaceCard = ({ place }: Props) => {
  const normalizeBadge = (badge: string) => badge.trim().toLowerCase();

  const getBadgeLabel = (badge: string) => {
    const key = normalizeBadge(badge);
    return BADGE_CONFIG[key]?.label ?? badge;
  };

  const getBadgeColor = (badge: string) => {
    const key = normalizeBadge(badge);
    return BADGE_CONFIG[key]?.color ?? PillowColor.Success;
  };

  return (
    <article className="place-card">
      <div className="place-card__poster">
        <Image
          className="placeCard__img"
          src={place.poster}
          alt={place.title}
          fill
        />

        {place.badges && place.badges.length > 0 && (
          <div className="place-card__badges">
            {place.badges.map((badge) => (
              <Pillow key={badge} color={getBadgeColor(badge)}>
                {getBadgeLabel(badge)}
              </Pillow>
            ))}
          </div>
        )}
      </div>

      <div className="place-card__body">
        <div className="place-card__info">
          <h3 className="place-card__title">{place.title}</h3>
          <p className="place-card__city">{place.city}</p>
        </div>

        <div className="place-card__rating">
          <Rating>{place.rating}</Rating>
        </div>
      </div>
    </article>
  );
};
