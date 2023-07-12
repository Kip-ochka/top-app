'use client';

import React, { useEffect, useState, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';
import StarIcon from './assets/ratingItem.svg';

const Rating = ({ rating, setRating, isEditable = false, ...props }: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((el: JSX.Element, i: number) => {
      return (
        <StarIcon
          key={i + 1}
          className={cn(styles.star, { [styles.filled]: i < currentRating })}
          tabIndex={isEditable ? 0 : -1}
        />
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (isEditable && setRating) {
      setRating(i);
    }
  };

  const handleSpace = (i: number, e: KeyboardEvent<HTMLElement>) => {
    if (e.code === 'Space' && setRating) {
      setRating(i);
    }
  };

  return (
    <div {...props}>
      {ratingArray.map((el, i) => {
        return (
          <span
            key={i}
            className={
              cn(styles.span, { [styles.editable]: isEditable })
            }
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(i + 1)}
            onKeyDown={(e: KeyboardEvent<HTMLElement>) => isEditable && handleSpace(i + 1, e)}
          >
            {el}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;