import React from 'react'

const TabSkill = (props) => {
    let { tab } = props;

    if (tab === 0) {
        return (
            <>
                <div className='skill_icon_title'>
                    <h3>저는 이런걸 할 수 있습니다</h3>
                    <div className='skill_title_page'>
                        <img src={process.env.PUBLIC_URL + '/img/Design.png'} />
                        <h4>수원과학대학교 산업디자인학과 과정을 들으며 그래픽 디자인, 영상디자인, CAD, 3D랜더링, 제품디자인 등의 상식을 이해하고 툴을 다룰 수 있습니다.</h4>
                    </div>
                    <div className='skill_title_page'>
                        <img src={process.env.PUBLIC_URL + '/img/Code.png'} />
                        <h4>연세IT미래교육원 스마트웹&콘텐츠 개발 UIUX디자인&프론트엔드 개발자 양성과정을 들으며 프론트엔드 웹 개발사 프로그램을 사용할 수 있습니다. </h4>
                    </div>
                    <h5>우측의 버튼을 눌러주세요.</h5>
                </div>
            </>
        )
    } else if (tab === 1) {
        return (
            <>
                <h2>Coding Skill</h2>
                <div className='skill_icon_list'>
                    <div className='skill_icon' style={{ borderColor: '#d84924' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Html.png'} />
                        <h6 style={{color: '#d84924'}}>웹 접근성과 <br />표준성 준수 <br />시맨틱 태그를 <br />이용한 <br />마크업 가능</h6>
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#2299f8' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Css.png'} />
                        <h6 style={{color: '#2299f8'}}>Flex를 이용한 <br />반응형 웹을 <br />제작할 수 있음</h6>
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#d4b830' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Javascript.png'} />
                        <h6 style={{color: '#d4b830'}}>Javascript의 <br />타이핑, <br />이미지 등<br />효과 구현 가능</h6>
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#cd6799' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Scss.png'} />
                        <h6 style={{color: '#cd6799'}}>네스팅과 <br />Sassscript를 <br />활용해 <br />효과적으로 <br />스타일시트 정리</h6>
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#563d7c' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Bootstrap.png'} />
                        <h6 style={{color: '#563d7c'}}>CDN을 불러와 <br />프로젝트에 <br />맞게 추가 및<br /> 수정 가능</h6>
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#0868ac' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Jquery.png'} />
                        <h6 style={{color: '#0868ac'}}>관련된 <br />라이브러리와 <br />메소드를 잘 <br />활용할 수 있다</h6>
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#000000' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Json.png'} />
                        <h6 style={{color: '#000000'}}>문법 구조의 <br />이해 및 GET, <br />POST 방식의 <br />파라미터 <br />전송 가능 </h6>
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#1f5fa9' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Ajax.png'} />
                        <h6 style={{color: '#1f5fa9'}}>OPEN API를 <br />통해 서버에서 <br />필요한 데이터를 <br />불러 수동작업을<br /> 줄일 수 있음</h6>
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#61dafb' }}>
                        <img src={process.env.PUBLIC_URL + '/img/React.png'} />
                        <h6 style={{color: '#61dafb'}}>npm 프로그램 <br />활용 및 <br />작업개체 <br />컴포넌트화 가능 </h6>
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#764abc' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Redux.png'} />
                        <h6 style={{color: '#764abc'}}>데이터 상태 <br />관리를 통해 <br />장바구니 등을 <br />구현할 수 있음</h6>
                    </div>
                </div>
            </>
        )
    } else if (tab === 2) {
        return (
            <>
                <h2 style={{ color: "#764abc" }}>Design Skill</h2>
                <div className='skill_icon_list'>
                    <div className='skill_icon'>
                        <img src={process.env.PUBLIC_URL + '/img/Photoshop.png'} />
                        <h6 style={{color: "#31a8ff"}}>포토샵 합성과 <br />효과를 이용한 <br /> 사진 보정, <br />포스터 제작 가능</h6>
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#ff9a00' }}>
                        <img src={process.env.PUBLIC_URL + '/img/illustrator.png'} />
                        <h6 style={{color: '#ff9a00'}}>로고, 심볼, <br />캐릭터 <br />제작 가능 </h6>
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#dd5a33' }}>
                        <img src={process.env.PUBLIC_URL + '/img/figma.png'} />
                        <h6 style={{color: '#dd5a33'}}>UI/UX <br /> 레이아웃과 <br /> 시안 구현 가능</h6>
                    </div>
                </div>
            </>
        )
    } else if (tab === 3) {
        return (
            <>
                <h2 style={{ color: "#539e43" }}>Version Save</h2>
                <div className='skill_icon_list'>
                    <div className='skill_icon' style={{ borderColor: '#9b59b6' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Github.png'} />
                        <h6 style={{color: '#9b59b6'}}>명령어를 사용한 <br />레파지토리 <br />접근과<br /> 버전 관리가 <br />가능</h6>
                    </div>
                </div>
            </>
        )
    } else if (tab === 4) {
        return (
            <>
                <h2 style={{ color: "#d4b830" }}>Data Loading</h2>
                <div className='skill_icon_list'>
                    <div className='skill_icon' style={{ borderColor: '#539e43' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Nodejs.png'} />
                        <h6 style={{color: '#539e43'}}>파일, 서버 <br />생성과 데이터 <br />연결 가능</h6>
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#3399db' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Mysql.png'} />
                        <h6 style={{color: '#3399db'}}>테이블 및 <br />데이터 생성, <br />읽기, 추가, <br />삭제 가능 </h6>
                    </div>
                </div>
            </>
        )
    }
}

export default TabSkill