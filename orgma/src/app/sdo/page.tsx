
import styles from "./page.module.css";
import Head from "@/app/components/Head";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Header from "@/app/components/Header/Header";

import Footer from "@/app/components/Footer/Footer";
import {Grid} from "@mui/material";
import Card from "@/app/components/Card/Card";
import Container from "@mui/material/Container";
import React from "react";

export default function Home() {
    return (
        <html lang="en" suppressHydrationWarning>
        <Head/>
        <body>
        <Sidebar/>
        <div className="main-container">
            <Header
                title="Системы дистанционного образования"
                description={`<div class="alert alert-info">
                    <p>Для входа во все системы используется <strong>Единый идентификатор ВУЗа</strong>.
                      <a href="https://it.orgma.ru/eiv/" target="_blank">Как получить идентификатор?</a>
                    </p>
                    <p>Если у вас возникли проблемы с доступом, обращайтесь по email:
                      <a href="mailto:help@orgmu.ru">623@orgmu.ru</a>
                    </p>
                  </div>`}
            />
            {/*{children}*/}
            {/*<Content/>*/}
            <Container maxWidth="xl" sx={{marginBottom: 4, marginTop: 4}}>
                <main className={styles.content}>
                    <Grid container>
                        <Grid size={{xs: 12, md: 6, lg: 6, xl: 6}} order={{xs: 2, md: 1}}>
                            <div className={styles.content__left}>
                            <div className="Content-module__OthSla__content__left">
                                    <div className="contentBlock">
                                        <h2 className="contentBlock__title">Управление по цифровому развитию</h2>
                                        <p className="contentBlock__text">
                                            Управление по цифровому развитию Оренбургского государственного медицинского
                                            университета
                                            осуществляет организацию, сопровождение и развитие цифровой инфраструктуры
                                            вуза. Подразделение
                                            обеспечивает бесперебойное функционирование информационных систем и сервисов,
                                            необходимых
                                            для учебной, научной и административной деятельности.
                                        </p>

                                        <h3 className="contentBlock__subtitle">Основные задачи Управления:</h3>
                                        <ul className="contentBlock__list">
                                            <li className="contentBlock__listItem">поддержка работоспособности и развитие
                                                корпоративных
                                                информационных систем;
                                            </li>
                                            <li className="contentBlock__listItem">обеспечение функционирования серверного
                                                оборудования,
                                                сетевой инфраструктуры и рабочих мест;
                                            </li>
                                            <li className="contentBlock__listItem">внедрение и сопровождение современных
                                                цифровых сервисов
                                                для студентов и сотрудников;
                                            </li>
                                            <li className="contentBlock__listItem">развитие платформ дистанционного
                                                обучения и
                                                образовательных порталов;
                                            </li>
                                            <li className="contentBlock__listItem">обеспечение информационной безопасности
                                                и защиты
                                                персональных данных.
                                            </li>
                                        </ul>

                                        <p className="contentBlock__text">
                                            С помощью предоставляемых сервисов сотрудники университета могут подавать и
                                            отслеживать заявки
                                            на
                                            техническое обслуживание, контролировать состояние информационных систем,
                                            получать единый
                                            идентификатор
                                            ВУЗа (ЕИВ), а студенты и преподаватели — пользоваться системой дистанционного
                                            обучения,
                                            образовательным
                                            порталом и другими цифровыми ресурсами.
                                        </p>

                                        <p className="contentBlock__text">
                                            Деятельность Управления направлена на формирование современной цифровой среды
                                            университета,
                                            которая способствует повышению качества образовательного процесса, научной
                                            деятельности
                                            и административного управления.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </Grid>
                        <Grid size={{xs: 12, md: 6, lg: 6, xl: 6}} order={{xs: 1, md: 2}}>
                            <div className={styles.content__right}>
                                <div className="cardIt__wrap">
                                    <Card
                                        description={"Доступ для студентов основных образовательных программ"}
                                        title={"Основная система для студентов"}
                                        link={"http://1c.orgma.ru/sdo_CUN_001/wc/#/auth"}
                                    />
                                    <Card
                                        link={"http://1c.orgma.ru/sdo-dovuz/wc/#/auth"}
                                        description={"Доступ для обучающихся на подготовительных курсах"}
                                        title={"Подготовительные курсы"}
                                    />
                                    <Card
                                        link={"http://1c.orgma.ru/sdo-IPO/wc/#/auth"}
                                        description={"Доступ для обучающихся в ИПО"}
                                        title={"Институт профессионального образования"}
                                    />
                                    <Card
                                        link={"http://fis.sdo.orgma.ru/"}
                                        description={"Доступ для студентов ФИС"}
                                        title={"Факультет иностранных студентов"}
                                    />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </main>
            </Container>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
