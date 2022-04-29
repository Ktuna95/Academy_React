import React from 'react';
import myschool from '../myschool';

const Professor = () => {

    const {professor}=myschool;

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>교수번호</th>
                        <th>교수이름</th>
                        <th>아이디</th>
                        <th>직급</th>
                        <th>급여</th>
                        <th>입사일</th>
                        <th>보직수당</th>
                        <th>소속학과번호</th>
                    </tr>
                </thead>
                <tbody>
                    {professor.map((v,i)=>{
                        return (
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.userid}</td>
                                <td>{v.position}</td>
                                <td>{v.sal}</td>
                                <td>{v.hiredate.substring(0, 10)}</td>
                                <td>{v.comm}</td>
                                <td>{v.deptno}</td>
                                <td>{v.profno}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Professor;