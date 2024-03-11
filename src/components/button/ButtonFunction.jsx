import React from 'react';
import Button from './Button';
import { ButtonBox } from './Button.module';

const ButtonFunction = ({
  isDone,
  handleListRemoveClick,
  handleListMoveDoneClick,
  handleDoneListCancelClick,
  itemId,
}) => {
  if (!isDone) {
    return (
      <ButtonBox>
        <Button
          onClick={() => handleListRemoveClick(itemId)}
          text='삭제하기'
          bgcolor='lightYellow'
          bordercolor='darkYellow'
        />
        <Button
          onClick={() => handleListMoveDoneClick(itemId)}
          text='완료'
          bgcolor='lightGreen'
          bordercolor='darkGreen'
        />
      </ButtonBox>
    );
  } else {
    return (
      <ButtonBox>
        <Button
          onClick={() => handleListRemoveClick(itemId)}
          text='삭제하기'
          bgcolor='lightYellow'
          bordercolor='darkYellow'
        />
        <Button
          onClick={() => handleDoneListCancelClick(itemId)}
          text='취소'
          bgcolor='lightGreen'
          bordercolor='darkGreen'
        />
      </ButtonBox>
    );
  }
};

export default ButtonFunction;
