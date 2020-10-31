import React from 'react';

const MarkdownInput = ({ note, action, onChange, onSubmit }) => {
  const { title, content } = note;

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input type="text" name="title" value={title || ''} onChange={onChange} className="form-control w-100 bg-secondary border-0 text-white"/>
      </div>
      <div className="form-group">
        <textarea name="content" rows="10" value={content || ''}  onChange={onChange} className="form-control w-100 bg-secondary border-0 text-white"></textarea>
      </div>
      <div className="form-group">
        <input type="submit" value={action==='save'? 'Save' : 'Update' } className="btn btn-danger btn-sm btn-block font-weight-bold w-25"/>
      </div>
    </form>
  );
};

export default MarkdownInput;
