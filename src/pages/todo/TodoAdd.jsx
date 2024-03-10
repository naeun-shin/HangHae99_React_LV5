import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __addTodoList } from '../../redux/modules/todoSlice';
import { AddListStyle } from '../../styles/componentStyles';
import Button from '../../components/button/Button';
// import { useNavigate } from 'react-router-dom';

const TodoAdd = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleTodoListAdd = () => {
    if (title !== '' && content !== '' && name !== '') {
      if (title.length < 10) {
        return alert('제목은 10글자 이상 작성해야합니다!');
      }
      const newTodo = {
        name,
        title,
        content,
        isDone: false,
      };
      dispatch(__addTodoList(newTodo));

      alert('Todo 리스트가 추가되었습니다!');

      setContent('');
      setTitle('');
      setName('');
    } else {
      setDisabled(true);
      alert('제목,내용 및 이름을 입력해주세요!');
    }
  };

  return (
    <AddListStyle>
      <p>제목 </p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <p>내용</p>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <p>작성자</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Button
        onClick={handleTodoListAdd}
        text='추가하기'
        buttontype='add'
        disabled
      />
    </AddListStyle>
  );
};

export default TodoAdd;
