import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/Button';
import { __updateTodoContent } from '../../redux/modules/todoSlice';
import {
  DetailBox,
  Detail,
  DetailHeader,
  DetailTitle,
  DetailContent,
  ContentTextarea,
  DetailContentSection,
} from '../../styles/todoStyles';
import withAuth from '../../hoc/withAuth';

const TodoDetail = () => {
  const params = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todos.todos);

  const todoId = params.id;
  const details = todoList.find((item) => item.id === +todoId);

  // centent변경 내용 저장을 위한 useState => 초기값 : 들고온 정보
  const [content, setContent] = useState(details.content);
  // edit모드 전환 여부를 위한 useState => 초기값 false
  const [isEditMode, setIsEditMode] = useState(false);

  const handleGoBackclick = () => {
    history(`/TodoMain`);
  };

  // 수정하기 버튼 클릭 이벤트
  const handleUpdateModeClick = () => {
    setIsEditMode(true);
  };

  const handleUpdateCancelClick = () => {
    setIsEditMode(false);
  };

  // 내용 수정 세팅
  const handleContentChange = (e) => {
    const content = e.target.value;
    setContent(content);
  };

  const handleTodoUpdate = () => {
    dispatch(__updateTodoContent({ todoId, content }));
    setIsEditMode(false);
  };

  return (
    <DetailBox>
      <Detail>
        <DetailHeader>
          <p> 작성자 : {details.name}</p>
          <Button
            onClick={handleGoBackclick}
            text='이전으로'
            buttontype='goBack'
          />
        </DetailHeader>
        <DetailTitle>{details.title}</DetailTitle>
        <DetailContentSection>
          {isEditMode ? (
            <ContentTextarea value={content} onChange={handleContentChange} />
          ) : (
            <>
              <DetailContent>{details.content}</DetailContent>
            </>
          )}
        </DetailContentSection>
        {isEditMode ? (
          <>
            <Button
              onClick={handleTodoUpdate}
              text='저장하기'
              buttontype='remove'
            />
            <Button
              onClick={handleUpdateCancelClick}
              text='취소하기'
              buttontype='cancel'
            />
          </>
        ) : (
          <>
            <Button
              onClick={handleUpdateModeClick}
              text='수정하기'
              buttontype='update'
            />
          </>
        )}
      </Detail>
    </DetailBox>
  );
};

export default withAuth(TodoDetail, true);
