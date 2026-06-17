/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import * as XLSX from 'xlsx';
import { ClipboardList, Info, Target, Database, CheckCircle, Users, FileSpreadsheet, Settings2, Swords, AlertTriangle, Copy, Check } from 'lucide-react';

// Data from the original application
const TRAINER_DATA = [
    { khuVuc: "AN GIANG", trainer: "LÊ MINH TRÍ THÀNH", ftfShopMWG: 37, ftfShopOKA: 11, dtHrMWG: 111, dtTranMWG: 1110, dtHrOKA: 18, dtTranOKA: 180 },
    { khuVuc: "AN GIANG", trainer: "NGUYỄN TRUNG NHÂN", ftfShopMWG: 34, ftfShopOKA: 9, dtHrMWG: 93, dtTranMWG: 930, dtHrOKA: 6, dtTranOKA: 60 },
    { khuVuc: "CA MAU", trainer: "LẠI ĐĂNG KHOA", ftfShopMWG: 63, ftfShopOKA: 15, dtHrMWG: 93, dtTranMWG: 930, dtHrOKA: 6, dtTranOKA: 60 },
    { khuVuc: "CA MAU", trainer: "LÊ HOÀNG PHÚC", ftfShopMWG: 46, ftfShopOKA: 19, dtHrMWG: 120, dtTranMWG: 1200, dtHrOKA: 24, dtTranOKA: 240 },
    { khuVuc: "CAN THO", trainer: "PHẠM MINH ĐỨC", ftfShopMWG: 45, ftfShopOKA: 5, dtHrMWG: 93, dtTranMWG: 930, dtHrOKA: 12, dtTranOKA: 120 },
    { khuVuc: "CAN THO", trainer: "TRẦN QUANG ĐẠI", ftfShopMWG: 34, ftfShopOKA: 22, dtHrMWG: 90, dtTranMWG: 900, dtHrOKA: 30, dtTranOKA: 300 },
    { khuVuc: "DONG THAP", trainer: "BÙI TRUNG TÌNH", ftfShopMWG: 28, ftfShopOKA: 8, dtHrMWG: 36, dtTranMWG: 360, dtHrOKA: 9, dtTranOKA: 90 },
    { khuVuc: "DONG THAP", trainer: "TRẦN HUỲNH KHANG", ftfShopMWG: 40, ftfShopOKA: 10, dtHrMWG: 96, dtTranMWG: 960, dtHrOKA: 18, dtTranOKA: 180 },
    { khuVuc: "KIEN GIANG", trainer: "NGUYỄN CHÍ HUỲNH", ftfShopMWG: 39, ftfShopOKA: 6, dtHrMWG: 93, dtTranMWG: 930, dtHrOKA: 9, dtTranOKA: 90 },
    { khuVuc: "KIEN GIANG", trainer: "TRẦN DUY KHANG", ftfShopMWG: 25, ftfShopOKA: 8, dtHrMWG: 84, dtTranMWG: 840, dtHrOKA: 9, dtTranOKA: 90 },
    { khuVuc: "TIEN GIANG", trainer: "LÊ VIỆT KHÁNH", ftfShopMWG: 71, ftfShopOKA: 15, dtHrMWG: 138, dtTranMWG: 1380, dtHrOKA: 18, dtTranOKA: 180 },
    { khuVuc: "TIEN GIANG", trainer: "VÕ HỒNG NAM", ftfShopMWG: 53, ftfShopOKA: 10, dtHrMWG: 99, dtTranMWG: 990, dtHrOKA: 12, dtTranOKA: 120 },
    { khuVuc: "VINH LONG", trainer: "DƯƠNG HOÀI VŨ", ftfShopMWG: 41, ftfShopOKA: 10, dtHrMWG: 87, dtTranMWG: 870, dtHrOKA: 15, dtTranOKA: 150 },
    { khuVuc: "VINH LONG", trainer: "LÊ HẬU GIANG", ftfShopMWG: 36, ftfShopOKA: 7, dtHrMWG: 69, dtTranMWG: 690, dtHrOKA: 15, dtTranOKA: 150 }
];

const removeAccents = (str: string) => {
    if (!str) return '';
    return String(str).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
};

const cleanShopCode = (code: any) => {
    if (code === undefined || code === null) return '';
    let str = String(code).toUpperCase().replace(/\s+/g, '');
    if (str.endsWith('.0')) {
        str = str.slice(0, -2);
    }
    return str;
};

import React from 'react';

// Resetting App.tsx to just render the application component logic 
// correctly within the React framework.
// Note: I am not using Babel standalone, I am using proper imports.

import { AppLogic } from './components/AppLogic';

export default function App() {
  return <AppLogic />;
}