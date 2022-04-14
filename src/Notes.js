import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Notes = ({notes})=> {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <div>
        TODO - show { notes.length} notes
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadNotes: () => dispatch(fetchNotes())
  }
}

export default connect(state => state, mapDispatchToProps)(Notes);
