import { useSearchParams } from "react-router-dom"
import React from "react";


const QueryResult = () => {
		// 파라미터가 여러 개 일 경우 배열에 넣어서 가져올 수 있다.
    const [searchParams] = useSearchParams();
		// [["첫번째 키","첫번째 value"],["두번째 키", "두번째 value"]]
    const firstQuery = searchParams.get('testquery1')
    const secondQuery = searchParams.get('testquery2')
    return(
        <>
          <h2>{firstQuery}</h2>
          <h2>{secondQuery}</h2>
        </>
    )
}

export default React.memo(QueryResult);