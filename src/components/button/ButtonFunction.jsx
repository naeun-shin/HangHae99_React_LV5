import React from 'react';
import Button from './Button';

const ButtonFunction = ({
  isDone,
  handleListRemoveClick,
  handleListMoveDoneClick,
  handleDoneListCancelClick,
  itemId,
}) => {
  if (!isDone) {
    return (
      <>
        <Button
          onClick={() => handleListRemoveClick(itemId)}
          text='삭제하기'
          buttontype='remove'
        />
        <Button
          onClick={() => handleListMoveDoneClick(itemId)}
          text='완료'
          buttontype='complete'
        />
      </>
    );
  } else {
    return (
      <>
        <Button
          onClick={() => handleListRemoveClick(itemId)}
          text='삭제하기'
          buttontype='remove'
        />
        <Button
          onClick={() => handleDoneListCancelClick(itemId)}
          text='취소'
          buttontype='complete'
        />
      </>
    );
  }
};

export default ButtonFunction;
