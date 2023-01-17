import React from 'react';
import useInputs from "../hooks/useInputs";
import { Link } from 'react-router-dom';



function QueryTest() {

    const [{inputs1, inputs2}, onChange] = useInputs({
        inputs1:"",
        inputs2:""
      })
    
    return (
        <div>
            type a queries:
                <input
                  name="inputs1"
                  onChange={onChange}
                  value={inputs1}
                />
                <input
                  name="inputs2"
                  onChange={onChange}
                  value={inputs2}
                />
                <div>
                  <Link to={`/querytest?testquery1=${inputs1}&testquery2=${inputs2}`}>
                    Get Query
                  </Link>
                </div>
        </div>
    );
};

export default QueryTest;