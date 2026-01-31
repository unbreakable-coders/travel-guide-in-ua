import React from 'react';
import Image from 'next/image';
import { Rating } from '../Rating';
import { PlaceFeedback as PlaceFeedbackType } from '@org/models';
import './PlaceFeedback.styles.scss';

interface Props {
  feedback: PlaceFeedbackType;
}

export const PlaceFeedback = ({ feedback }: Props) => {
  return (
    <article className="place-feedback">
      <div className="place-feedback__header">
        <div className="place-feedback__avatar-wrapper">
          <Image
            src={feedback.user.avatar}
            alt={feedback.user.name}
            className="place-feedback__avatar"
            width={48}
            height={48}
          />
        </div>

        <div className="place-feedback__user-info">
          <div className="place-feedback__user-main">
            <h4 className="place-feedback__user-name">{feedback.user.name}</h4>

            <div className="place-feedback__rating">
              <Rating>{feedback.rating}</Rating>
            </div>
          </div>

          <p className="place-feedback__user-location">
            {feedback.user.city}, {feedback.user.country}
          </p>
        </div>
      </div>

      <p className="place-feedback__text">{feedback.text}</p>
    </article>
  );
};
