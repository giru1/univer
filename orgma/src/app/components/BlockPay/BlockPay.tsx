// 'use client';
// import {Grid} from '@mui/material';
// import styles from './BlockPay.module.css';
//
// import React from "react";
// export default function BlockPay() {
//     return (
//         <>
//             <Grid size={{xs: 3, md: 6, lg: 6}}>
//                 <div className="col-lg-8">
//                     <div className="card shadow">
//                         <div
//                             className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
//                             <h2 className="h4 mb-0">Оплата услуг</h2>
//                             <div className="theme-toggle" id="themeToggle">
//                                 <i className="bi bi-sun-fill"></i>
//                             </div>
//                         </div>
//                         <div className="card-body">
//                             <form id="paymentForm" autoComplete="off">
//                                 <div className="mb-3">
//                                     <label className="form-label">ФИО плательщика:</label>
//                                     <input type="text" className="form-control" id="fullName"
//                                            placeholder="Иванов Иван Иванович" autoComplete="off"/>
//                                     <div className="form-text">Введите ФИО плательщика</div>
//                                 </div>
//
//                                 <div className="mb-3" id="contractNumberGroup" style="display: none;">
//                                     <label htmlFor="contractNumber" className="form-label">Номер договора:</label>
//                                     <input type="text" className="form-control" id="contractNumber"
//                                            placeholder="123-456" autoComplete="off"/>
//                                 </div>
//
//                                 <div className="mb-3" id="serviceFromUrlGroup" style="display: none;">
//                                     <label htmlFor="serviceFromUrl" className="form-label">Услуга:</label>
//                                     <input type="text" className="form-control readonly-field" id="serviceFromUrl"
//                                            readOnly/>
//                                 </div>
//
//                                 <div className="mb-3" id="serviceSelectGroup">
//                                     <label htmlFor="service" className="form-label">Услуга:</label>
//                                     <select className="form-select" id="service" autoComplete="off">
//                                         <option value="">-- Выберите услугу --</option>
//                                     </select>
//                                     <div className="service-hint" id="serviceHint">Если услуги нет в списке выберите
//                                         "Указать вручную" и заполните поля самостоятельно
//                                     </div>
//                                 </div>
//
//                                 <div className="mb-3" id="amountInputGroup" style="display: none;">
//                                     <label htmlFor="serviceAmount" className="form-label">Сумма платежа (руб.):</label>
//                                     <input type="number" className="form-control" id="serviceAmount" min="1"
//                                            value="1000" max="9999999999999999" autoComplete="off"/>
//                                     <div className="form-text">Макс. 16 цифр</div>
//                                 </div>
//
//                                 <div className="mb-3" id="manualInputGroup" style="display: none;">
//                                     <div className="row">
//                                         <div className="col-md-6 mb-3">
//                                             <label htmlFor="customServiceName" className="form-label">Наименование
//                                                 услуги:</label>
//                                             <input type="text" className="form-control" id="customServiceName"
//                                                    maxLength="210" autoComplete="off"/>
//                                             <div className="form-text">Макс. 210 символов</div>
//                                         </div>
//                                         <div className="col-md-6 mb-3">
//                                             <label htmlFor="customAmount" className="form-label">Сумма платежа
//                                                 (руб.):</label>
//                                             <input type="number" className="form-control" id="customAmount" min="1"
//                                                    value="1000" max="9999999999999999" autoComplete="off"/>
//                                             <div className="form-text">Макс. 16 цифр</div>
//                                         </div>
//                                     </div>
//                                 </div>
//
//                                 <div className="d-grid gap-2">
//                                     <button type="button" className="btn btn-primary" onClick="generateQR()">
//                                         <i className="bi bi-qr-code"></i> Получить QR-код для оплаты
//                                     </button>
//                                 </div>
//                             </form>
//
//                             <div className="row mt-4 qr-container" id="qrcodeContainer" style="display: none;">
//                                 <div className="col-md-6">
//                                     <div id="qrcode"></div>
//                                     <div className="btn-group-download" id="downloadSection">
//                                         <button className="btn btn-success" onClick="downloadQR()">
//                                             <i className="bi bi-download"></i> Скачать QR-код
//                                         </button>
//                                         <button className="btn btn-info text-white" onClick="shareLink()">
//                                             <i className="bi bi-share"></i> Поделиться
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <div className="qr-instruction">
//                                         <h5>Как оплатить</h5>
//                                         <p>Войдите в приложение вашего банка и с его помощью отсканируйте QR-код.</p>
//                                         <p>Поддерживается следующими банками:</p>
//                                         <div className="bank-logos">
//                                             <a href="https://www.sberbank.ru" target="_blank" title="СберБанк">
//                                                 <img src="../../next/orgma/src/app/pay/icon/sber.svg" alt="СберБанк"
//                                                      className="bank-logo"/>
//                                             </a>
//                                             <a href="https://alfabank.ru" target="_blank" title="Альфа-Банк">
//                                                 <img src="../../next/orgma/src/app/pay/icon/alfa.svg" alt="Альфа-Банк"
//                                                      className="bank-logo"/>
//                                             </a>
//                                             <a href="https://www.tinkoff.ru" target="_blank" title="Тинькофф Банк">
//                                                 <img src="../../next/orgma/src/app/pay/icon/tinkoff.svg"
//                                                      alt="Тинькофф Банк" className="bank-logo"/>
//                                             </a>
//                                             <a href="https://www.vtb.ru" target="_blank" title="ВТБ">
//                                                 <img src="../../next/orgma/src/app/pay/icon/vtb.svg" alt="ВТБ"
//                                                      className="bank-logo"/>
//                                             </a>
//                                             <a href="https://www.gazprombank.ru" target="_blank" title="Газпромбанк">
//                                                 <img src="../../next/orgma/src/app/pay/icon/gazprom.svg"
//                                                      alt="Газпромбанк" className="bank-logo"/>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//
//                             <div className="mt-4 p-3 bg-body-tertiary rounded" id="paymentDetails" style="display: none;">
//                                 <h5 className="mb-3">Реквизиты для оплаты</h5>
//                                 <div className="row">
//                                     <div className="col-md-6">
//                                         <p><strong>Назначение платежа:</strong><br/> <span id="purposeDisplay"></span>
//                                         </p>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <p><strong>Сумма:</strong> <span id="amountDisplay"></span> руб.</p>
//                                         <p><strong>КБК:</strong> <span id="kbkDisplay">00000000000000000130</span></p>
//                                     </div>
//                                 </div>
//                                 <div className="info-message mt-3">
//                                     <p className="mb-0"><i className="bi bi-info-circle"></i> Для ускорения обработки
//                                         платежа пришлите квитанцию на почту <a
//                                             href="mailto:pay@orgma.ru">pay@orgma.ru</a></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Grid>
//         </>)
// }