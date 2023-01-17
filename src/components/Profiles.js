import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
          <h3>유저 목록:</h3>
          <ul>
            <li>
              <Link to="/Profiles/velopert">velopert</Link>
            </li>
            <li>
              <Link to="/Profiles/gildong">gildong</Link>
            </li>
          </ul>
          <Routes>
          <Route
            path="/profiles"
            exact
            render={() => <div>유저를 선택해주세요.</div>}
          />
          <Route path="/profile/:username" element={Profile} />
          
          </Routes>
        </div>
      );
    };

export default Profiles;