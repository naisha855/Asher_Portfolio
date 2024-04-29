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
                    <h4>연세IT미래교육원 스마트웹&콘텐츠 개발 UIUX디자인&프론트엔드 개발자 양성과정을 들으며 프론트엔드 과정의 프로그램을 사용할 수 있고 </h4>
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
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#2299f8' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Css.png'} />
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#d4b830' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Javascript.png'} />
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#cd6799' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Scss.png'} />
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#563d7c' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Bootstrap.png'} />
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#0868ac' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Jquery.png'} />
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#000000' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Json.png'} />
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#1f5fa9' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Ajax.png'} />
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#61dafb' }}>
                        <img src={process.env.PUBLIC_URL + '/img/React.png'} />
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#764abc' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Redux.png'} />
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
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#ff9a00' }}>
                        <img src={process.env.PUBLIC_URL + '/img/illustrator.png'} />
                    </div>
                    <div className='skill_icon' style={{ borderColor: '#dd5a33' }}>
                        <img src={process.env.PUBLIC_URL + '/img/figma.png'} />
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
                    </div>
                </div>
                <div className='skill_icon_list'>
                    <div className='skill_icon' style={{ borderColor: '#3399db' }}>
                        <img src={process.env.PUBLIC_URL + '/img/Mysql.png'} />
                    </div>
                </div>
            </>
        )
    }
}

export default TabSkill