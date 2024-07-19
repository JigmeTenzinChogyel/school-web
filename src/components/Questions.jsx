import { useState } from 'react';
import './question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Questions() {

//   const [open, setOpen] = useState(false);

  const [list, setList] = useState([
    {
      id: 1,
      title: "How to admit the school?",
      open: false
    },
    {
      id: 2,
      title: "What documentation do I need?",
      open: false 
    },
    {
      id: 3,
      title: "Can my 5 year old son admit to school?",
      open: false 
    }
  ]);

  const handleClick = id => {
    setList(prevList =>
      prevList.map(item =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <div className="questions">
      {
        list.map(item => (
            <div key={item.id} className="items">
                <div className="items-title">
                    <h2>{item.title}</h2>
                    <button onClick={ () => handleClick(item.id) }>
                        <FontAwesomeIcon icon={item.open ? faAngleUp : faAngleDown} />
                    </button>
                </div>
                <h4 className={ item.open ? 'open' : 'close'}>Accordion content</h4>
            </div>
        ))
      }
    </div>
  );
}

export default Questions;
