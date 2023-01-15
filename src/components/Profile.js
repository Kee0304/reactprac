import React from "react";
import { Link, useParams } from "react-router-dom";

// 프로필에 사용할 데이터

const profileData = {
    velopert: {
      name: '김민준',
      description:
        'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자'
    },
    gildong: {
      name: '홍길동',
      description: '전래동화의 주인공'
    }
  };

  const Profile = () => {
    const { username } = useParams();
    const profile = profileData[username];
    if (!profile) {
        return (
            <>
              <div>
                  존재하지 않는 유저입니다.
              </div>
              <Link to="/App/">뒤로가기</Link>
            </>
            
        )
    }

    return (
      <div>
        <h3>
          {username}({profile.name})
        </h3>
        <p>{profile.description}</p>
        <Link to="/App/">뒤로가기</Link>
      </div>
    )
  }

  export default Profile;