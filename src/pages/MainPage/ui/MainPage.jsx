import React from 'react';
import NavBarForAllSite from "../../../entities/NavBar/NavBarForAllSite.jsx";
import VideoForSite from "./video/VideoForSite.mp4";
import "./style.css";

const MainPage = () => {
    return (
        <div className={'MainPage'}>
            <NavBarForAllSite/>

            <div className={"mainContent"}>
                <div className={"introMedia"}>
                    <video src={VideoForSite} autoPlay muted loop className={"fullWidthVideo"}>
                        Ваш браузер не поддерживает видео.
                    </video>
                    <div className={"videoContent"}>
                        <h3 >#фондлинияжизни</h3>
                        <h1><span>Благотворительный</span><br/>
                            фонд «Линия жизни»</h1>
                    </div>
                </div>
            </div>

            <div>
                <h1>О Фонде</h1>
                <p>
                    Благотворительный фонд «Линия Жизни» создан для оказания помощи детям с заболеваниями, которые способна победить современная медицина.<br/>
                    Мы хотим побудить людей принять участие в судьбе каждого ребенка, на долю которого выпало серьезное испытание.
                </p>
            </div>
            <aside>
                <h1>Проекты фонда</h1>
                <p>Благотворительность вместо сувениров
                    Нужен ли повод сделать доброе дело? Мы думаем, что нет. Любой праздник, торжество могут стать лучшей возможностью сделать доброе дело.
                    Магазин поощрений
                    Благотворительный фонд «Линия жизни» принимает участие в проекте Правительства Москвы, стимулирующем москвичей активно участвовать в городской жизни.</p>
            </aside>
        </div>
    );
};

export default MainPage;
