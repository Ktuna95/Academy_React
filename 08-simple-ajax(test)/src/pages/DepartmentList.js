import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DepartmentList = () => {
    //  화면에 표시할 상태값(ajax 연동결과로 받아올 json) -> 초기값을 빈 배열로 정의
    const [department, setDepartment] = React.useState([]);
    //  검색 키워드
    const [keyword, setKeyword] = React.useState('');
    //  삭제할 항목에 대한 id값을 저장하기 위한 상태값
    const [dropId, setDropId] = React.useState(-1);

    /** 페이지가 처음 열렸을 때와 검색어가 변경되었을 때 실행할 hook */
    React.useEffect(() => {
        const option = {};
        
        if(keyword){
            option.params = {
                dname: keyword
            }
        }

        (async () => {
            try {
                const response = await axios.get('http://localhost:3001/department', option);
                setDepartment(response.data);            
            } catch (e) {
                console.error(e);
                alert('Ajax 연동 실패);')
            }
        })();
    }, [keyword])
    /**dropId가 변경되었을 때 실행할 hook */
    React.useEffect(()=>{
        if(dropId > -1){
            //배열을 탐색하여 삭제가 요청된 id값을 찾는다.
            for(let i = 0; i < department.length; i++){
                if(department[i].id == dropId){
                    //배열에서 삭제버튼과 일치하는 id값을 갖는 항목을 삭제한 복사본 생성
                    const departmentCopy = department.slice(i, 1);
                    //삭제된 결과를 상태값으로 갱신.
                    setDepartment(departmentCopy);
                    break;
                }
            }
            //백엔드에 데이터가 삭제되었음을 알린다.
            (async () => {
                //Ajax를 통한 데이터 삭제 요청
                try {
                    await axios.delete(`http://localhost:3001/department/${dropId}`);
                } catch (e) {
                    console.error(e);
                    alert('Ajax 연동 실패');
                }
            })();

            // 상태변수를 되돌린다
                setDropId(-1);
            }
        }, [dropId]);

        /**검색어 입력 요소에 연결할 참조 변수 */
        const myKeywordInput = React.useRef();

        /**검색 버튼에 대한 클릭 이벤트 */
        const onButtonClick = (e) => {
            setKeyword(myKeywordInput.current.value)
        };
        
        /**삭제하기 버튼이 클릭되었을 때 호출될 이벤트 핸들러 */
        const onDeleteClick = async (e) => {
            //클릭된 자기 자신
            const current = e.currentTarget;
            //클릭된 자신에게 숨어 있는 data-id값을 추출
            const id = parseInt(current.dataset.id);
            //삭제 대상임을 알림
            setDropId(id);
        };
        return (
            <div>
                <h2>학과목록</h2>

                <form>
                    <input type='text' name='keyword' ref={myKeywordInput} />
                    <button type='button' onClick={onButtonClick}>
                        검색
                    </button>
                </form>
                
                <hr/>

                <table border ='1'>
                    <thead>
                        <tr>
                            <th>학과번호</th>
                            <th>학과명</th>
                            <th>학과위치</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {department.length > 0 ? (
                            department.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.dname}</td>
                                        <td>{item.loc}</td>
                                        <td>
                                            <button type='button' data-id={item.id} onClick={onDeleteClick}> 삭제하기</button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan='4' align='center'>
                                    검색결과가 없습니다.
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
                <hr />
                <Link to = '/department_add'>학과추가</Link>
            </div>
        );
};
export default DepartmentList;