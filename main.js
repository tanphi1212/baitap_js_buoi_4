/**
 * Sắp xếp từ lớn tới nhỏ
 * Đầu vào:
 * - 3 số nguyên : no_1, no_2, no_3
 * Xử lý:
 * - đặt no_1 = max, no_2 = medi, no_3 = min;
 * - so sánh nếu no_1 < no_2 => no_1 = medi, no_2 = max
 * - Trường hợp nếu no_2 < no_3 => no_2 = min, no_3 = medi => so sánh no_3 với no_1 nếu no_1 < no_3 => no_3 = max, no_1 = medi 
 * Đầu ra:
 * - xuất theo thứ tự min, medi, max
 */

function minToMax() {
    var no_1 = document.getElementById('no_1').value * 1;
    var no_2 = document.getElementById('no_2').value * 1;
    var no_3 = document.getElementById('no_3').value * 1;
    var max = no_1;
    var medi = no_2;
    var min = no_3;

    if (no_1 < no_2 && no_2 < no_3) {
        min = no_1;
        medi = no_2;
        max = no_3;
    } else if (no_1 < no_3 && no_3 < no_2) {
        min = no_1;
        medi = no_3;
        max = no_2;
    } else if (no_1 < no_2 && no_3 < no_1) {
        min = no_3;
        medi = no_1;
        max = no_2;
    }
    else if (no_2 < no_3) {
        min = no_2;
        medi = no_3;
        max = no_1;
    } else {
        alert("nhập sai dữ liệu")
    }

    document.getElementById('infoMinToMax').innerHTML = "Thứ tự từ lớn là " + min + "," + medi + "," + max;

}


/**
 * Chào hỏi thành viên
 * Đầu vào:
 * - Droplist bao gồm các thành viên Ba, Mẹ, Anh Trai, Em Gái với cái gái trị tương ứng
 * Xử lý:
 * - So sánh giá trị của droplist đầu vào tương ứng với giá trị nào gán giá trị đó vào 1 biến thành viên
 * Đầu ra:
 * - Xuất giá trị biến thành viên
 */


function chao() {
    var member = document.getElementById('member').value;

    switch (member) {
        case "B":
            member = 'Ba'
            break;
        case "M":
            member = 'Mẹ'
            break;

        case "A":
            member = 'Anh Trai'
            break;
        case "E":
            member = 'Em gái'
            break;
        default:
            member = "Người Lạ"
            break;
    }

    document.getElementById('infoMember').innerHTML = "Xin Chào " + member;
}





/**
 * Đếm số chẳn lẻ
 * đầu vào:
 * - 3 số nguyên
 * xử lý:
 * - tạo ra biến chẵn
 * - đem từng số chia lấy dư cho 2 nếu số nào dư bằng không thì biến chẵn + 1
 * đầu ra:
 * - xuất ra biến chẵn, (3 -  chẵn)
 */

function counterEven() {
    var number_1 = document.getElementById('number_1').value * 1;
    var number_2 = document.getElementById('number_2').value * 1;
    var number_3 = document.getElementById('number_3').value * 1;
    var chan = 0;
    if (number_1 % 2 == 0) {
        chan += 1;
    }

    if (number_2 % 2 == 0) {
        chan += 1;
    }

    if (number_3 % 2 == 0) {
        chan += 1;
    }

    document.getElementById('infoCounter').innerHTML = 'Có ' + chan + ' số chẵn'
}

/**
 * phân loại tam giác
 * đầu vào:
 * - 3 cạnh của tam giác a, b, c
 * xử lý:
 * so sánh nếu a = b = c => tam giác đều
 * so sánh nếu a = b  hoặc b = c => tam giác cân 
 * so sánh nếu a*a = b*b + c*c hoặc b*b = a*a + c*c hoạc c*C = a*a + b*b => tam giác vuông
 * trường hợp còn lại là tam giác loại khác
 */

function phanLoaiTamGiac() {
    var canhA = document.getElementById('canhA').value * 1;
    var canhB = document.getElementById('canhB').value * 1;
    var canhC = document.getElementById('canhC').value * 1;
    var tamgiac

    if (canhA + canhB < canhC || canhA + canhC < canhB || canhC + canhB < canhA) {
        tamgiac = "Đây không phải là tam giác"
    } else if (canhA == canhB && canhB == canhC) {
        tamgiac = "Đây là tam giác đều";
    } else if (canhA == canhB || canhB == canhC || canhC == canhA) {
        tamgiac = "Đây là tam giác cân";
    } else if ((canhA * canhA == canhC * canhC + canhB * canhB) || (canhB * canhB == canhC * canhC + canhA * canhA) || (canhC * canhC == canhA * canhA + canhB * canhB)) {
        tamgiac = "Đây là tam giác vuông";
    } else {
        tamgiac = "Đây là tam giác loại khác";
    }

    document.getElementById('infoTamGiac').innerHTML = tamgiac;
}


/**
 * Tính ngày hôm qua và ngày mai
 * đầu vào:
 * - ngày, tháng, năm
 * xử lý:
 * - kiểm tra năm nhuận => nếu có tháng 2 bằng 29 ngày
 * - kiểm tra thuộc tháng nào phân loại thành nhóm 1: tháng 1,3,5,7,8,10,12 và nhóm 2: 4,6,9,11
 * - ngày hôm qua : nếu vào ngày 1 thì lấy ngày 30 hoặc 31 của tháng trước, còn lại trừ 1 ngày;
 * - ngày hôm sau : nếu vào ngày 30 của nhóm 1 hoặc 31 của nhóm 2 học 29/28 của tháng 2 thì qua ngày 1 của tháng sau, còn lại cộng 1;
 * đầu ra:
 *  xuất ngày hôm qua nếu nhấn nút hôm qua
 *  xuất ngày hôm sau nếu nhấn nút hôm sau      
 */

function ngayHomQua() {
    var day = document.getElementById('day').value * 1;
    var month = document.getElementById('month').value * 1;
    var year = document.getElementById('year').value * 1;
    var yesterday
    var exmonth
    var exyear
    if (day == 1) {
        switch (month) {
            case 1:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                yesterday = 31;
                exmonth = month - 1;
                exyear = year;
                break;
            case 2:
            case 4:
            case 6:
            case 9:
            case 11:
                yesterday = 30;
                exmonth = month - 1;
                exyear = year;
                break;
            case 3:
                if (year % 4 == 0) {
                    yesterday = 29
                } else {
                    yesterday = 28
                }
                exmonth = 2;
                exyear = year;
                break
            case 1:
                yesterday = 31;
                exyear = year - 1;
                exmonth = 12;
            default:
                break;
        }
    } else {
        yesterday = day - 1;
        exmonth = month;
        exyear = year
    }

    document.getElementById('infoDay').innerHTML = "Ngày hôm qua là " + yesterday + '/' + exmonth + '/' + exyear;
}

function ngayHomSau() {
    var day = document.getElementById('day').value * 1;
    var month = document.getElementById('month').value * 1;
    var year = document.getElementById('year').value * 1;
    var nxtday;
    var nxtmonth;
    var nxtyear;
    if (day == 31) {
        nxtday = 1;
        if (month == 12) {
            nxtmonth = 1;
            nxtyear = year + 1;
        } else {
            nxtmonth = month + 1
            nxtyear = year
        }
    } else if (day == 30) {
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 10 || month == 12) {
            nxtday = 31;
            nxtmonth = month;
            nxtyear = year
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            nxtday = 1;
            nxtmonth = month + 1;
            nxtyear = year;
        }
        else {
            alert('sai dữ liệu')
        }
    } else if (day == 28 && year % 4 == 0 && month == 2) {
        nxtday = 29;
        nxtmonth = month;
        nxtyear = year;
    } else if (day == 28 && year % 4 != 0 && month == 2) {
        nxtday = 1;
        nxtmonth = 3;
        nxtyear = year;
    } else {
        nxtday = day + 1;
        nxtmonth = month;
        nxtyear = year;
    }
    document.getElementById('infoDay').innerHTML = "Ngày hôm Sau là " + nxtday + '/' + nxtmonth + '/' + nxtyear;
}

/**
 * Báo số luọng ngày của tháng
 * Đầu vào năm với tháng
 * xử lý:
 * nếu rơi vào tháng 1,3,5,7,10,12 => có 31 ngày
 * nếu rơi vào tháng 4,6,8,9,11 => có 30 ngày
 * nếu rơi vào tháng 2 => nếu năm nhuận có 29 ngày còn lại 28 ngày
 * Đầu ra:
 * xuất ra số ngày
  */

function tinhNgay() {
    var thang = document.getElementById('thang').value * 1;
    var nam = document.getElementById('nam').value * 1;
    var ngay
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            ngay = 31;
            break;
        case 2:
            if (nam % 4 == 0) {
                ngay = 29
            } else {
                ngay = 28
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            ngay = 30;
            break;
    }
    document.getElementById('infoNgay').innerHTML = "So Ngay cua thang la " + ngay;
}

/**
 * Đọc số nguyên
 * Đầu vào:
 * - 1 số nguyên 3 chữ số
 * Xử lý:
 * - tách thành đơn vị ,chục, trăm rồi chuyển thành dạng chữ 
 * Đầu ra:
 * - xuất dạng chữ
 * 
 */

function inDoc() {
    var soNguyen = document.getElementById('soNguyen').value * 1;
    var donvi = soNguyen % 10;
    var chuc = Math.floor(soNguyen/10) % 10;
    var tram = Math.floor(soNguyen / 100);
    var doDV
    var doChuc
    var doTram
    switch (donvi) {
        case 0:
            doDV = ""
            break;
        case 1:
            doDV = "một"
            break;
        case 2:
            doDV = "hai"
            break;
        case 3:
            doDV = "ba"
            break;
        case 4:
            doDV = "bốn"
            break;
        case 5:
            doDV = "năm"
            break;
        case 6:
            doDV = "sáu"
            break;
        case 7:
            doDV = "bảy"
            break;
        case 8:
            doDV = "tám"
            break;
        case 9:
            doDV = "chín"
            break;
        default:
            break;
    }

    switch (chuc) {
        case 0:
            if(donvi == 0){
                doChuc = ""
            }else{
                doChuc = "lẻ"
            }
            break;
        case 1:
            doChuc = "mười"
            break;
        case 2:
            doChuc = "hai mươi"
            break;
        case 3:
            doChuc = "ba mươi"
            break;
        case 4:
            doChuc = "bốn mươi"
            break;
        case 5:
            doChuc = "năm mươi"
            break;
        case 6:
            doChuc = "sáu mươi"
            break;
        case 7:
            doChuc = "bảy mươi"
            break;
        case 8:
            doChuc = "tám mươi"
            break;
        case 9:
            doChuc = "chín mươi"
            break;
        default:
            break;
    }

    switch (tram) {
        case 1:
            doTram = "một trăm"
            break;
        case 2:
            doTram = "hai trăm"
            break;
        case 3:
            doTram = "ba trăm"
            break;
        case 4:
            doTram = "bốn trăm"
            break;
        case 5:
            doTram = "năm trăm"
            break;
        case 6:
            doTram = "sáu trăm"
            break;
        case 7:
            doTram = "bảy trăm"
            break;
        case 8:
            doTram = "tám trăm"
            break;
        case 9:
            doTram = "chín trăm"
            break;
        default:
            break;
    }

    document.getElementById('infoNguyen').innerHTML = doTram + " " + doChuc + " " + doDV;
}

/**
 * Tìm học sinh ở xa trường nhất
 * Đầu vào:
 * - tên và tọa độ của học sinh 1, 2, 3 và tọa độ trường
 * Xử lý:
 * - tính độ khoảng cách của mỗi học sinh đến trường bằng công thức căn bật hai của ((x2-x1)^2+(y2-y1)^2)
 * - So sánh từ độ dài với nhau =>  độ dài xa nhất => học sinh xa trường nhất
 * Đầu ra:
 * xuất ra học sinh xa trường nhất
 */


function maxTruong() {
    var ten1 = document.getElementById('ten_1').value;
    var tdX1 = document.getElementById('toa_x_1').value*1;
    var tdY1 = document.getElementById('toa_y_1').value*1;
    var ten2 = document.getElementById('ten_2').value;
    var tdX2 = document.getElementById('toa_x_2').value*1;
    var tdY2 = document.getElementById('toa_y_2').value*1;
    var ten3 = document.getElementById('ten_3').value;
    var tdX3 = document.getElementById('toa_x_3').value*1;
    var tdY3 = document.getElementById('toa_y_3').value*1;
    var tdXTruong = document.getElementById('toa_x_truong').value*1;
    var tdYTruong = document.getElementById('toa_y_truong').value*1;

    var length1 = Math.sqrt((tdXTruong-tdX1)*(tdXTruong-tdX1) +(tdYTruong-tdY1)*(tdYTruong-tdY1));
    var length2 = Math.sqrt((tdXTruong-tdX2)*(tdXTruong-tdX2) +(tdYTruong-tdY2)*(tdYTruong-tdY2));
    var length3 = Math.sqrt((tdXTruong-tdX3)*(tdXTruong-tdX3) +(tdYTruong-tdY3)*(tdYTruong-tdY3));
 
    var svXaNhat = ten1;
    var xaNhat = length1;

    if(xaNhat < length2 ){
        svXaNhat = ten2;
        xaNhat = length2;
    }

    if(xaNhat < length3){
        svXaNhat = ten3;
        xaNhat = length3;
    }

    document.getElementById('infoTruong').innerHTML = 'Sinh vien nhà xa trường nhất là ' + svXaNhat;

}

