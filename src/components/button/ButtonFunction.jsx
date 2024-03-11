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
          bgColor='lightYellow'
          borderColor='darkYellow'
        />
        <Button
          onClick={() => handleListMoveDoneClick(itemId)}
          text='완료'
          bgColor='lightGreen'
          borderColor='darkGreen'
        />
      </ButtonBox>
    );
  } else {
    return (
      <ButtonBox>
        <Button
          onClick={() => handleListRemoveClick(itemId)}
          text='삭제하기'
          bgColor='lightYellow'
          borderColor='darkYellow'
        />
        <Button
          onClick={() => handleDoneListCancelClick(itemId)}
          text='취소'
          bgColor='lightGreen'
          borderColor='darkGreen'
        />
      </ButtonBox>
    );
  }
};

export default ButtonFunction;
