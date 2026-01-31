import { AppFeedback as AppFeedbackType } from '@org/models';
import Image from 'next/image';
import StarIcon from '../../icons/Star';
import './AppFeedback.styles.scss';

interface Props {
  feedback: AppFeedbackType;
}

export const AppFeedback = ({ feedback }: Props) => {
  const fullStars = Array.from({ length: Math.floor(feedback.rating) });

  return (
    <article className="app-feedback">
      <div className="app-feedback__stars">
        {fullStars.map((_, index) => (
          <StarIcon
            key={index}
            className="app-feedback__star"
            aria-hidden="true"
          />
        ))}
      </div>

      <p className="app-feedback__text">{feedback.text}</p>

      <div className="app-feedback__user">
        <div className="app-feedback__avatar-wrapper">
          <Image
            src={feedback.user.avatar}
            alt={feedback.user.name}
            className="app-feedback__avatar"
            width={48}
            height={48}
          />
        </div>

        <div className="app-feedback__user-info">
          <h4 className="app-feedback__user-name">{feedback.user.name}</h4>
          <p className="app-feedback__user-location">
            {feedback.user.country} / {feedback.user.city}
          </p>
        </div>
      </div>
    </article>
  );
};
