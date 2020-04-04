import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './../redux';

function FetchComponent ({userData, fetchUser}) {
  useEffect(() => {
    fetchUser()
  }, [])

  return userData.loading? (
    <h2>Loading</h2>
  ) : userData.error? (
    <h2>{userData.msg}</h2>
  ) : (
    <div>
      {
    userData.data.map(a=> <h2>{a.username}</h2>)
    }
    </div>)
}

const mapStateToProps = (state) => {
  return {
    userData: state.fetch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchComponent)