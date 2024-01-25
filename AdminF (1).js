// function Checkdata () {
//     let EMAILUSERNAMEBOX = I("AdminUsername2").value;
//     let PASSBOX = I("AdminPassword").value;
//     let form_data = new FormData();
//     form_data.append("EMAILUSERNAMEBOX",EMAILUSERNAMEBOX);
//     form_data.append("PASSBOX",PASSBOX);
//     form_data.append("wtype","forlogin");
//     $.ajax({
//         url:'../adminincludes/Admmin-LoginModule.php',
//         method:'POST',
//         data:form_data,
//         contentType:false,
//         cache:false,
//         processData:false,

// import { now } from "../../js/momentjs";

       
//         success: function(response){
//             let r = JSON.parse(response);
//             if ((response != -1 && response != 0 && r != 0) && r[0]['ACCEX'] == 1) {
//                 if (r[0]['userType'] == "Admin"){
//                     setc('adminID', r[0]['userID']);
//                     // window.location.reload();
//                     window.location = "adminpage/index.php";
//                     console.log(getc('adminID'));
//                 }
//                 else if (r[0]['userType'] == "SuperAdmin"){
//                     setc('adminID', r[0]['userID']);
                
//                     // window.location.reload();
//                     window.location = "adminpage/index.php";
//                     console.log(getc('adminID'));
//                 }
//             }
//             else {
//                 console.log('hehe login');
//             }
//         }
//     });
// }


let adminID;
function checkAudience(){
    adminID = 0;
    adminID = getc('adminID');
    console.log(adminID);
    if (adminID == undefined){
        window.location = "adminpage/Adminlog_in.php";
        // console.log(adminID);
    }
}
checkAudience();


I('Admin_ID').innerHTML = adminID;

console.log(adminID);

AdminInformationLoad();

function AdminInformationLoad () {
    let USERID = I('Admin_ID').innerHTML;

    console.log(I('Admin_ID').innerHTML);
    let form_data = new FormData();    
    form_data.append("USERID",USERID);
    form_data.append("wtype","LoadAdminInfo");
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (response) {  
            // console.log(response);
            let gcd = JSON.parse(response);
            console.log(gcd);

            I('firstName_AccountAS').value = gcd[0][1];
            I('middlename_AccountAS').value = gcd[0][2];
            I('lastname_AccountAS').value = gcd[0][3];
            I('selectSuffix_AS').value = gcd[0][4];


            if(gcd[0][26] == '01'){
                I('selectMonth_AS').value = 'January';
            }

            else if(gcd[0][26] == '02'){
                I('selectMonth_AS').value = 'Februrary';
            }
            else if(gcd[0][26] == '03'){
                I('selectMonth_AS').value = 'March';
            }
            else if(gcd[0][26] == '04'){
                I('selectMonth_AS').value = 'April';
            }
            else if(gcd[0][26] == '05'){
                I('selectMonth_AS').value = 'May';
            }
            else if(gcd[0][26] == '06'){
                I('selectMonth_AS').value = 'June';
            }
            else if(gcd[0][26] == '07'){
                I('selectMonth_AS').value = 'July';
            }
            else if(gcd[0][26] == '08'){
                I('selectMonth_AS').value = 'August';
            }
            else if(gcd[0][26] == '09'){
                I('selectMonth_AS').value = 'September';
            }
            else if(gcd[0][26] == '10'){
                I('selectMonth_AS').value = 'October';
            }
            else if(gcd[0][26] == '11'){
                I('selectMonth_AS').value = 'November';
            }
            else if(gcd[0][26] == '12'){
                I('selectMonth_AS').value = 'December';
            }
       
            
            I('selectDay_AccountAS').value = gcd[0][25];
            I('selectYear_AS').value = gcd[0][24];

            I('selectGender_AS').value = gcd[0][5];
            I('email_AS').value = gcd[0][7];
            I('cellphone_AS').value = gcd[0][8];

            I('address').value = gcd[0][18];
            I('cellphone_AS2').value = gcd[0][19];
            I('selectRegion_AS').value = gcd[0][20];
            I('selectProvince_AS').value = gcd[0][21];
            I('selectCity_AccountAS').value = gcd[0][22];
            I('selectBarangay_AS').value = gcd[0][23];
            
            let suffix;
            if (gcd[0][4] == ''){
                suffix = 'N/A'
            }
        }
    });
    
}

loadinformation();


let subMenu =I('subMenu');

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}
    

let sideBar = C('sidebar');

function toggletopbtn(){
    sideBar.classList.toggle("active");
}
 
 function loadinformation() {
    // console.log("dashboard")
    let form_data = new FormData();
    form_data.append("USERID",adminID);
    form_data.append("wtype","forInformation");
    $.ajax({
        url:'../adminincludes/login.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (response) {
            // console.log(response);
            informationloadin(JSON.parse(response));
            
        }
    });
}





// function searchTable() {
//     table_rows.forEach((row, i) => {
//         let table_data = row.textContent.toLowerCase(),
//             search_data = search.value.toLowerCase();

//         row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
//         row.style.setProperty('--delay', i / 25 + 's');
//     })

//     document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
//         visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
//     });
// }

function informationloadin (userInfoArray) {
    // console.log(userInfoArray);

    I('AdminName').innerHTML = userInfoArray['FirstName'];
    I('AdminPosition').innerHTML = userInfoArray['userType'];
    I('AdminFullName').innerHTML = userInfoArray['FirstName'] + " "+ userInfoArray['MiddleName'] + " " + userInfoArray['LastName'];
    I('PermissionSelect').innerHTML = userInfoArray['SelectTable'];
    I('PermissionUpdate').innerHTML = userInfoArray['UpdateTable'];
    I('PermissionInsert').innerHTML = userInfoArray['InsertTable'];


    console.log(I('PermissionSelect').innerHTML);
    console.log(I('PermissionUpdate').innerHTML);
    console.log(I('PermissionInsert').innerHTML);
    // I('LNBOX').value = userInfoArray['LastName'];
    // I('MIDBOX').value = userInfoArray['MiddleName'];
}    

// buttonPermission();

function buttonPermission(){
    let form_data = new FormData();
    form_data.append("USERID",adminID);
    form_data.append("wtype","forInformation");
    $.ajax({
        url:'../adminincludes/login.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (response) {
            
            if(response[0][11] = 'Admin'){
                I('Admin').style.display = 'none';
            }
            
        }
    });
}


$(document).ready(function(){
    $(".small_img2").hover(function(){
        C("big_img2")[0].style.display = 'none';
        // C("big_img")[0].style.display = 'block';
        
        $(".big_img2").attr('src', $(this).attr('src'));

    })
})


// Deposit Image

$(document).ready(function(){
    $(".small_img").hover(function(){
        C("big_img1")[0].style.display = 'none';
        C("big_img")[0].style.display = 'block';
        
        $(".big_img").attr('src', $(this).attr('src'));

    })
})


// $(document).ready(function(){
//     $(".small_img1").hover(function(){
//         C("big_img1")[0].style.display = 'block';
//         C("big_img")[0].style.display = 'none';
        
//         $(".big_img1").attr('src', $(this).attr('src'));
//     })
// })
// $(document).ready(function(){
//     $("small_img")[3].hover(function(){
//         $(".big_img").attr('src', $(this).attr('src'));
//     })
// })

$(document).ready(function () {
    $(".big_img").imagezoomsl({
        zoomrange: [5, 5]
    });
})


C('DepositExit')[0].addEventListener('click', () =>{
    document.querySelector('.small_img1').muted = true;
    C('DepositDescript')[0].style.display = 'none';
    blurRemove();
})


// let popupinfo = document.getElementById("popupinfoid"), 
// popupinfox = document.getElementById("popupinfox");

// console.log(popupinfo);
// // popupinfo.addEventListener("click", openPopup);




// function openPopup(){
//   popupinfox.setAttribute("class", "popupinfo open-popupinfo");
//     console.log("ok");
   
// }

// function closePopup(){
//     popupinfo.classList.remove("open-popup-info");
// }




// let USERNAMEBOX = I('USERNAMEBOX').value;

//  function insertInfo(){
//     let form_data = new FormData();    
//     form_data.append("FNBOX", I('txtbox1').value);
//     form_data.append("LNBOX", I('txtbox2').value);
//     form_data.append("MIDBOX", I('txtbox3').value);
//     form_data.append("SUFFIXIDBOX", I('txtbox4').value);
//     form_data.append("MONTHBOX", I('txtbox5').value);
//     form_data.append("DAYBOX", I('txtbox6').value);
//     form_data.append("YEARBOX", I('txtbox71').value);
//     form_data.append("GENDERBOX", I('txtbox81').value);
//     form_data.append("EMAILBOX", I('txtbox11').value);
//     form_data.append("PHONENUMBERBOX", I('txtbox21').value);
//     form_data.append("TELNUMBERBOX", I('txtbox31').value);
//     form_data.append("ADDRESSTITLE", C('Current-Address').value);
//     form_data.append("FULLADDRESS", I('txtbox7').value);
//     form_data.append("PHONENUMBER", I('txtbox8').value);
//     form_data.append("REGION", I('txtbox9').value);
//     form_data.append("PROVINCE", I('txtbox10').value);
//     form_data.append("CITY", I('txtbox11').value);
//     form_data.append("BARANGAY", I('txtbox12').value);
//     form_data.append("USERNAMEBOX", I('txtbox13').value);
//     form_data.append("PASSBOX", I('twe').value);
//     form_data.append("PASSWORDCONFIRMBOX", I('twee').value);

//     form_data.append("wtype","forRegister");
//     $(document).ready(function(){
//         $.ajax({
//             url:'includes/signup-module.php',
//             method:'POST',
//             data:form_data, 
//             contentType:false,
//             cache:false,
//             processData:false,
//             success: function (response) {  
//                 if (response == 1) {
//                     page2(checkboxEmptyFirstPage(true));
//                 }
//                 else {
//                     page2(checkboxEmptyFirstPage(false));
//                 }
//             },
//         });
//     });
//     loadAddress();
//  }

    



//  function loadAddress(){
//     let addressform = document.getElementsByClassName("Current-Address");
//     for (let i = 0; i < addressform.length; i++) {
//     let ADDRESSTITLE = "",FULLADDRESS, PHONENUMBER, REGION, PROVINCE, CITY, BARANGAY;                    
//     let emailinputElement = addressform[i].querySelectorAll('input, select');
//     for (let j = 0; j < emailinputElement.length; j++) {
//         if (emailinputElement[j].localName == "select"){
//             if (emailinputElement[j].id.equals('REGIONBOX')) {
//                 REGION = emailinputElement[j].selvalue();
//             }
//             else if (emailinputElement[j].id.equals('PROVINCEBOX')) {
//                 PROVINCE = emailinputElement[j].selvalue();
//             }
//             else if (emailinputElement[j].id.equals('CITYBOX')) {
//                 CITY = emailinputElement[j].selvalue();
//             }
//             else if (emailinputElement[j].id.equals('BARANGAYBOX')) {
//                 BARANGAY = emailinputElement[j].selvalue();
//             }
//         }
//         else if (emailinputElement[j].localName == "input") {
//             if (emailinputElement[j].id.equals('ADDRESSTITLEBOX')) {
//                 ADDRESSTITLE = emailinputElement[j].value;
//             }
//             else if (emailinputElement[j].id.equals('STREETADDRESSBOX')) {
//                 FULLADDRESS = emailinputElement[j].value;
//             }
//             else if (emailinputElement[j].id.equals('PHONENUMBERBOX')) {
//             PHONENUMBER = emailinputElement[j].value;
//             }
//         }
//     }
//         let form_data = new FormData();
//         form_data.append("USERID",USERID);
//         form_data.append("ADDRESSTITLE",ADDRESSTITLE);
//         form_data.append("FULLADDRESS",FULLADDRESS);
//         form_data.append("PHONENUMBER",PHONENUMBER);
//         form_data.append("REGION",REGION);
//         form_data.append("PROVINCE",PROVINCE);
//         form_data.append("CITY",CITY);
//         form_data.append("BARANGAY",BARANGAY);
//         form_data.append("wtype","forAddress");
        
//         $.ajax({
//             url:'includes/signup-module.php',
//             method:'POST',
//             data:form_data,
//             contentType:false,
//             cache:false,
//             processData:false,
//         });
//     }
//  }


// Admin Information dito

// let AdminPersonalInforBtn = I('Admin_Personal_Information');
// let AdminResetPasswordBtn = I('_Admin_Reset_Password');

// let AdminPersonalInfoFrame = I('AdminPersonalInfo');
// let AdminResetPasswordFrame = I('Admin_Reset_Password');

// AdminPersonalInforBtn.addEventListener('click' , () => {
//     AdminPersonalInfoFrame.style.display = 'block';
//     AdminResetPasswordFrame.style.display = 'none';

// })

// AdminResetPasswordBtn.addEventListener('click' , () => {
//     AdminPersonalInfoFrame.style.display = 'none';
//     AdminResetPasswordFrame.style.display = 'flex';

// })



// Wallet History na dito

let WalletHistorybtn = I('PayWalletStatusBtn');

let PayWalletApprovalBtn = I('PayWalletApprovalBtn');


WalletHistorybtn.addEventListener('click', () => {
    C('PayWallet-Status')[0].style.display = 'inline-table';
    C('PayWallet-Approval')[0].style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'flex';

})

PayWalletApprovalBtn.addEventListener('click', () => {
    C('PayWallet-Status')[0].style.display = 'none';
    C('PayWallet-Approval')[0].style.display = 'inline-table';
    I('PayWalletPDFBtn').style.display = 'none';
})



C('notificationnum')[0].onmouseover = function(){
    mouseOver();
}

function mouseOver() {
    C('containerNotification')[0].style.display = 'block';
  }
  
  function mouseOut() {
    C('containerNotification')[0].style.display = 'none';
  }

 let notificationbtn = I('notification');
 notificationbtn.onmouseover = function(){
    mouseOver();
 }

 notificationbtn.onmouseout = function(){
    mouseOut();
 }

 C('feature-container')[0].onmouseover = function(){
    mouseOut();
 }
 let connotification =  C('containerNotification');
 connotification[0].onmouseover = function(){
    mouseOver();
 }

 connotification[0].onmouseout = function(){
    mouseOut();
 }

//  let connotification =  C('Notication');
//  notification[0].onmouseover = function(){
//     mouseOver();
//  }

let _Admin_Reset_Password = I('_Admin_Reset_Password');
let Admin_Personal_Information = I('Admin_Personal_Information');
let My_Approval = I('My_Approval');

let Admin_Reset_Password = I('Admin_Reset_Password');
let AdminPersonalInfo = I('AdminPersonalInfo');
let MyApproval = C('MyApproval');

_Admin_Reset_Password.addEventListener('click', () =>{
    Admin_Reset_Password.style.display = 'flex';
    AdminPersonalInfo.style.display = 'none';
    MyApproval[0].style.display = 'none';
})

Admin_Personal_Information.addEventListener('click', () => {
    Admin_Reset_Password.style.display = 'none';
    AdminPersonalInfo.style.display = 'block';
    MyApproval[0].style.display = 'none';
})

My_Approval.addEventListener('click', () => {
    Admin_Reset_Password.style.display = 'none';
    AdminPersonalInfo.style.display = 'none';
    MyApproval[0].style.display = 'block';
})



let MAbutton1 = C('MAbutton');
let MAbutton2 = C('MAbutton');
let MAbutton3 = C('MAbutton');
let MAbutton4 = C('MAbutton');

let MAWallet = C('MAWallet');
let MATransaction = C('MATransaction');

MAbutton1[0].addEventListener('click', ()=> {
    MAWallet[0].style.display = 'inline-table';
    MATransaction[0].style.display = 'none';
})

MAbutton1[1].addEventListener('click', ()=> {
    MAWallet[0].style.display = 'none';
    MATransaction[0].style.display = 'inline-table';
})



 let sidebarframe = document.getElementsByClassName('sidebar');
 let sidecolorframe = document.getElementsByClassName('SideColor');

 let menubtn = document.getElementById('Menu'); 
 menubtn.addEventListener('click' , () => {
    sidecolorframe[0].style.display = 'flex';
    sidebarframe[0].style.display = 'flex';
    I('UInumber').innerHTML = "";
    I('Rented-Products').innerHTML = "";
 });

 let sidebarclosebtn = document.getElementById('sidebar_close');

 sidebarclosebtn.addEventListener('click', () =>{
    sidecolorframe[0].style.display = 'none';
    sidebarframe[0].style.display = 'none';
    I('UInumber').innerHTML = "";
    I('Rented-Products').innerHTML = "";
 });

 let submenulink1 = C('sub-menu-link');
 let submenulink2 = C('sub-menu-link');
 let submenulink3 = C('sub-menu-link');
 let submenulink4 = C('sub-menu-link');

 let customerbtn = document.getElementById('Customer');
 let vendorbtn = document.getElementById('Vendor');
 let dashboardbtn = document.getElementById('SuperAdmin');
 let messengerbtn = document.getElementById('MessengerBtn');
 let adminbtn = document.getElementById('Admin');
//  let serverAbtn = document.getElementById('settingsbtn');
 let Cancelsbtn = document.getElementById('Cancels');
 let serversettingsbtn = document.getElementById('serversettingsbtn');
 let transactionbtn = document.getElementById('Transaction');
 let paywalletbtn = document.getElementById('PayWallet');
 let reportsbtn = document.getElementById('Reports');
 let depositbtn = document.getElementById('Deposit');

 let searchframe = document.getElementById('search');
 let customersearchframe = document.getElementById('search-customer');
 let vendorsearchframe = document.getElementById('search-vendor');


 let graph = C('graph');
 let urgentfeaturecon = C('urgent-feature-con');

 let AdminInformationframe = C('AdminInformation');
 let customerframe = document.getElementsByClassName('Customertable');
 let vendorframe = document.getElementsByClassName('Vendortable');
 let adminframe = document.getElementsByClassName('Admintable');
 let dashboardframe = document.getElementsByClassName('graph');
 let messengerframe = document.getElementsByClassName('MessengerFrame');
 let cancelllationFrame = document.getElementsByClassName('cancelllationFrame');
 let transactionframe = document.getElementsByClassName('Transactiontable');
 let conTD = document.getElementsByClassName('containerTD');
 let conPW = document.getElementsByClassName('PayWallettable');
 let reportsframe = document.getElementsByClassName('ReportsTable');
 let AdminDashboard = C('AdminDashBoard');
 let CustomerDashboard = C('CustomerDashBoard');
 let VendorDashboard = C('VendorDashboard');
 let DepositDashboard = C('DepositTable');

 submenulink1[0].addEventListener('click', () =>{
    // I('main-label').innerHTML = 'Admin Dashboard';
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    // console.log(I('UInumber').innerHTML);
    dashboardbtn.classList.remove('active');
    vendorbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    // messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    C('SuperAdmintable')[0].style.display = 'none';
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    I('Cash-Out').classList.remove('active');
    I('product').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    // vendorsearchframe.style.display = 'none';
    // AdminInformationframe[0].style.display = 'block';
    C('VendorWidgetBtn')[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'block';
    C('CashoutRenteeTable')[0].style.display = 'none';
    C('CashoutTable')[0].style.display = 'none';

    Admin_Reset_Password.style.display = 'none';
    AdminPersonalInfo.style.display = 'block';
    MyApproval[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    graph[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    customerframe[0].style.display = 'none';
    // dashboardframe[0].style.display = 'block';
    messengerframe[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    conTD[0].style.display = 'none';
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
 })

 submenulink2[1].addEventListener('click', () =>{
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    // console.log(I('UInumber').innerHTML);
    dashboardbtn.classList.remove('active');
    vendorbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    C('CashoutRenteeTable')[0].style.display = 'none';
    // messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    C('SuperAdmintable')[0].style.display = 'none';
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    I('Cash-Out').classList.remove('active');
    I('product').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    // vendorsearchframe.style.display = 'none';
    // AdminInformationframe[0].style.display = 'block';
    C('VendorWidgetBtn')[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'block';

    C('CashoutTable')[0].style.display = 'none';
    Admin_Reset_Password.style.display = 'none';
    AdminPersonalInfo.style.display = 'none';
    MyApproval[0].style.display = 'block';
    C('CashoutRenteeTable')[0].style.display = 'none';
    graph[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    customerframe[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    // dashboardframe[0].style.display = 'block';
    messengerframe[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    conTD[0].style.display = 'none';
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
 })


 I('product').addEventListener('click', () => {
    I('main-label').innerHTML = 'Product Dashboard';
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    // console.log(I('UInumber').innerHTML);
    dashboardbtn.classList.remove('active');
    vendorbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    // messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    C('SuperAdmintable')[0].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    I('Cash-Out').classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    I('product').classList.add('active');
    C('containerAP')[0].style.display = 'block';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    // vendorsearchframe.style.display = 'none';
    C('CashoutRenteeTable')[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'none';
    C('CashoutTable')[0].style.display = 'none';
    C('VendorWidgetBtn')[0].style.display = 'none';
    graph[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    customerframe[0].style.display = 'none';
    C('CustomerWidgetBtn')[0].style.display = 'none';
    // dashboardframe[0].style.display = 'block';
    messengerframe[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    conTD[0].style.display = 'none';
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
 })

 dashboardbtn.addEventListener('click', () =>{
    I('main-label').innerHTML = 'Main Dashboard';
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    // console.log(I('UInumber').innerHTML);
    dashboardbtn.classList.add('active');
    vendorbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    // messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    I('Cash-Out').classList.remove('active');
    I('product').classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    C('SuperAdmintable')[0].style.display = 'none';
    C('CashoutRenteeTable')[0].style.display = 'none';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    // vendorsearchframe.style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'none';
    C('CashoutTable')[0].style.display = 'none';
    C('VendorWidgetBtn')[0].style.display = 'none';
    // graph[0].style.display = 'flex';
    urgentfeaturecon[0].style.display = 'flex';
    customerframe[0].style.display = 'none';
    // dashboardframe[0].style.display = 'block';
    messengerframe[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    conTD[0].style.display = 'none';
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
 })

 adminbtn.addEventListener('click', () =>{
    I('main-label').innerHTML = 'Admin Dashboard';
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    dashboardbtn.classList.remove('active');
    vendorbtn.classList.remove('active');
    adminbtn.classList.add('active');
    depositbtn.classList.remove('active');
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    // messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    I('Cash-Out').classList.remove('active');
    I('product').classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    C('SuperAdmintable')[0].style.display = 'none';
    C('CashoutRenteeTable')[0].style.display = 'none';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    // vendorsearchframe.style.display = 'none';
    C('SA-infoContainer')[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'none';
    graph[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    CustomerDashboard[0].style.display = 'none';
    customerframe[0].style.display = 'none';
    C('CashoutTable')[0].style.display = 'none';
    // dashboardframe[0].style.display = 'none';
    messengerframe[0].style.display = 'none';
    VendorDashboard[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'flex';
    adminframe[0].style.display = 'block';
    AddAdminFrame[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    conTD[0].style.display = 'none';
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
 })


 customerbtn.addEventListener('click', () =>{
    I('User_Vendor_Details').innerHTML = '';
    I('main-label').innerHTML = 'Customer Dashboard';
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    
    
    dashboardbtn.classList.remove('active');
    vendorbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    // messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.add('active');
    Cancelsbtn.classList.remove('active');
    I('Cash-Out').classList.remove('active');
    I('product').classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'none';
    C('SuperAdmintable')[0].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    C('CashoutRenteeTable')[0].style.display = 'none';
    CustomerApprovalFrame[0].style.display = 'none';
    CustomerStatusFrame[0].style.display = 'inline-table';
    CustomerTablediv[0].style.display = 'block';
    CustomerReportsFrame[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';

    graph[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    // searchframe.style.display = 'none';
    C('CashoutTable')[0].style.display = 'none';
    // customersearchframe.style.display = 'block';
    // vendorsearchframe.style.display = 'none';
    CustomerDashboard[0].style.display = 'flex';
    C('CustomerWidgetBtn')[0].style.display = 'block';
    customerframe[0].style.display = 'block';
    // dashboardframe[0].style.display = 'none';
    messengerframe[0].style.display = 'none';
    VendorDashboard[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    conTD[0].style.display = 'none';
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
    // loadVendorProduct();
    C('Customertable')[0].style.display = 'block';
 })

 vendorbtn.addEventListener('click', () =>{
    I('main-label').innerHTML = 'Vendor Dashboard';
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    dashboardbtn.classList.remove('active');
    vendorbtn.classList.add('active');
    adminbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    // messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    I('Cash-Out').classList.remove('active');
    I('product').classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    C('CashoutRenteeTable')[0].style.display = 'none';
    VendorApprovalFrame[0].style.display = 'none';
    VendorStatusFrame[0].style.display = 'inline-table';
    MainVendorFrame[0].style.display = 'block';
    AddVendorFrame[0].style.display = 'none';
    NoVendorFrame[0].style.display = 'none';

    C('VendorWidgetBtn')[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    graph[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    Cancelsbtn.classList.remove('active');
    C('CashoutTable')[0].style.display = 'none';
    C('SuperAdmintable')[0].style.display = 'none';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    // vendorsearchframe.style.display = 'block';
    CustomerDashboard[0].style.display = 'none';
    customerframe[0].style.display = 'none';
    // dashboardframe[0].style.display = 'none';
    messengerframe[0].style.display = 'none';
    VendorDashboard[0].style.display = 'flex';
    vendorframe[0].style.display = 'none';
    C('VendorWidgetBtn')[0].style.display = 'block';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    conTD[0].style.display = 'none';
    console.log('Soilo Pogi');
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
    C('Vendortable')[0].style.display = 'block';
 })


 Cancelsbtn.addEventListener('click', () =>{
    I('main-label').innerHTML = 'Cancellation Request';
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    dashboardbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    vendorbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    // messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    Cancelsbtn.classList.add('active');
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    I('Cash-Out').classList.remove('active');
    I('product').classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'none';
    C('CashoutRenteeTable')[0].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    graph[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'flex';
    C('SuperAdmintable')[0].style.display = 'none';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    // vendorsearchframe.style.display = 'block';
    C('CashoutTable')[0].style.display = 'none';
    CustomerDashboard[0].style.display = 'none';
    customerframe[0].style.display = 'none';
    // dashboardframe[0].style.display = 'none';
    messengerframe[0].style.display = 'none';
    VendorDashboard[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    conTD[0].style.display = 'none';
    console.log('Soilo Pogi');
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
 })

 depositbtn.addEventListener('click', () =>{
    I('main-label').innerHTML = "Rentee Reporting Dashboard";
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    dashboardbtn.classList.remove('active');
    depositbtn.classList.add('active');
    vendorbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    // messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    I('Cash-Out').classList.remove('active');
    I('product').classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'none';
    graph[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    C('SuperAdmintable')[0].style.display = 'none';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    // vendorsearchframe.style.display = 'block';
    CustomerDashboard[0].style.display = 'none';
    customerframe[0].style.display = 'none';
    C('CashoutRenteeTable')[0].style.display = 'none';
    // dashboardframe[0].style.display = 'none';
    C('CashoutTable')[0].style.display = 'none';
    messengerframe[0].style.display = 'none';
    VendorDashboard[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    conTD[0].style.display = 'none';
    console.log('Soilo Pogi');
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'block';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
 }) 

let MessengerDashboard = C('Messengerr');
let MessengerExit = I('messengerExit');
let MeesengerClose = I('MeesengerClose');


 messengerbtn.addEventListener('click' , () =>{
    
    dashboardbtn.classList.remove('active');
    vendorbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    I('product').classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    MessengerDashboard[0].style.display = 'flex';
 })

 MeesengerClose.addEventListener('click', () => {
    MessengerDashboard[0].style.display = 'none';
 })


//  MessengerExit.addEventListener('click' , () =>{
//     MessengerDashboard[0].style.display = 'none';
//  })

 transactionbtn.addEventListener('click' , () =>{
    I('main-label').innerHTML = 'Transaction Dashboard';
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    dashboardbtn.classList.remove('active');
    vendorbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    // messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    C('SuperAdmintable')[0].style.display = 'none';
    serversettingsbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    transactionbtn.classList.add('active');
    paywalletbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    I('Cash-Out').classList.remove('active');
    I('product').classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'none';
    graph[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    C('CashoutTable')[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    C('CashoutRenteeTable')[0].style.display = 'none';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    // vendorsearchframe.style.display = 'none';
    CustomerDashboard[0].style.display = 'none';
    customerframe[0].style.display = 'none';
    // dashboardframe[0].style.display = 'none';
    messengerframe[0].style.display = 'none';
    
    VendorDashboard[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'block';
    conTD[0].style.display = 'none';
    console.log('Soilo Pogi');
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
 })

 paywalletbtn.addEventListener('click' , () => {
    I('main-label').innerHTML = 'Rental Report Dashboard';
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    dashboardbtn.classList.remove('active');
    vendorbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    // messengerbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.add('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    I('Cash-Out').classList.remove('active');
    I('product').classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'none';
    C('CashoutTable')[0].style.display = 'none';
    graph[0].style.display = 'none';
    C('SuperAdmintable')[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    C('CashoutRenteeTable')[0].style.display = 'none';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    // vendorsearchframe.style.display = 'none';
    CustomerDashboard[0].style.display = 'none';
    customerframe[0].style.display = 'none';
    // dashboardframe[0].style.display = 'none';
    messengerframe[0].style.display = 'none';
    VendorDashboard[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    conTD[0].style.display = 'none';
    console.log('Soilo Pogi');
    conPW[0].style.display = 'block';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
 })


 reportsbtn.addEventListener('click', () => {
    I('main-label').innerHTML = 'Reports Dashboard';
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    dashboardbtn.classList.remove('active');
    vendorbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    // messengerbtn.classList.remove('active');
    C('CashoutRenteeTable')[0].style.display = 'none';
    // serverAbtn.classList.remove('active');
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    C('SuperAdmintable')[0].style.display = 'none';
    reportsbtn.classList.add('active');
    customerbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    I('Cash-Out').classList.remove('active');
    I('product').classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'none';
    C('VendorWidgetBtn')[0].style.display = 'none';
    C('CashoutTable')[0].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    graph[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    I('BookingPayments').style.display = 'none';
    I('RTL').style.display = 'none';
    RRL.style.display = 'none';
    RRRL.style.display = 'none';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    // vendorsearchframe.style.display = 'none';
    CustomerDashboard[0].style.display = 'none';
    customerframe[0].style.display = 'none';
    // dashboardframe[0].style.display = 'none';
    messengerframe[0].style.display = 'none';
    VendorDashboard[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    conTD[0].style.display = 'none';
    console.log('Soilo Pogi');
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'block';
    I('RentalPerformance').style.display = 'block';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
 })

 I('Cash-Out').addEventListener('click' , () =>{
    I('main-label').innerHTML = 'Cash-Out Rental Dashboard';
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    dashboardbtn.classList.remove('active');
    vendorbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    // messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    I('Cash-Out-Rentee').classList.remove('active');
    I('Cash-Out').classList.add('active');
    I('product').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'none';
    C('VendorWidgetBtn')[0].style.display = 'none';
    C('CashoutTable')[0].style.display = 'block';
    C('SuperAdmintable')[0].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    graph[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    C('CashoutRenteeTable')[0].style.display = 'none';
    // vendorsearchframe.style.display = 'none';
    CustomerDashboard[0].style.display = 'none';
    customerframe[0].style.display = 'none';
    // dashboardframe[0].style.display = 'none';
    messengerframe[0].style.display = 'none';
    VendorDashboard[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    conTD[0].style.display = 'none';
    console.log('Soilo Pogi');
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
 })

 I('Cash-Out-Rentee').addEventListener('click' , () => {
    I('main-label').innerHTML = 'Cash-Out Rentee Dashboard';
    I('tdProduct').innerHTML = "";
    I('Rented-Products').innerHTML = "";
    I('UInumber').innerHTML = "";
    dashboardbtn.classList.remove('active');
    vendorbtn.classList.remove('active');
    adminbtn.classList.remove('active');
    depositbtn.classList.remove('active');
    // messengerbtn.classList.remove('active');
    // serverAbtn.classList.remove('active');
    serversettingsbtn.classList.remove('active');
    transactionbtn.classList.remove('active');
    paywalletbtn.classList.remove('active');
    reportsbtn.classList.remove('active');
    customerbtn.classList.remove('active');
    Cancelsbtn.classList.remove('active');
    I('Cash-Out-Rentee').classList.add('active');
    I('Cash-Out').classList.remove('active');
    I('product').classList.remove('active');
    C('containerAP')[0].style.display = 'none';
    cancelllationFrame[0].style.display = 'none';
    AdminInformationframe[0].style.display = 'none';
    C('VendorWidgetBtn')[0].style.display = 'none';
    C('CashoutTable')[0].style.display = 'none';
    C('SuperAdmintable')[0].style.display = 'none';
    C('ResetPassword')[0].style.display = 'none';
    C('ResetPassword')[1].style.display = 'none';
    C('ResetPassword')[2].style.display = 'none';
    C('CustomerDashBoard')[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
    graph[0].style.display = 'none';
    urgentfeaturecon[0].style.display = 'none';
    // searchframe.style.display = 'none';
    // customersearchframe.style.display = 'none';
    C('CashoutRenteeTable')[0].style.display = 'block';
    // vendorsearchframe.style.display = 'none';
    CustomerDashboard[0].style.display = 'none';
    customerframe[0].style.display = 'none';
    // dashboardframe[0].style.display = 'none';
    messengerframe[0].style.display = 'none';
    VendorDashboard[0].style.display = 'none';
    vendorframe[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    adminframe[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AdminDashboard[0].style.display = 'none';
    transactionframe[0].style.display = 'none';
    conTD[0].style.display = 'none';
    console.log('Soilo Pogi');
    conPW[0].style.display = 'none';
    UserInformationframe[0].style.display = 'none';
    reportsframe[0].style.display = 'none';
    DepositDashboard[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
    I('PayWalletPDFBtn').style.display = 'none';
 })

 
//  serverAbtn.addEventListener('click' , () =>{
//     // blurActive();
//     ASframe[0].style.display = 'block';
//     blurActive1();
//  })


 serversettingsbtn.addEventListener('click' , () =>{
    Serversettingsframe[0].style.display = 'block';
    blurActive();
 })

   
// Customer Area ONLYYYYYYYYYYYYYYYYYYYYYYYYYY!!!!!!!

// 1. Sorting | Ordering data of HTML table

// For Customer Sorting

function sortTable(n , evt){
   var table = document.querySelector('table'),
        thead = document.querySelector('thead'),
        tbody = table.querySelector('tbody'),
        bRows = [...tbody.rows],
        hData = [...thead.querySelectorAll('th')],
        desc = false;

        // console.log('Ascending');
    hData.map ((head) =>{
        if( head != evt ) {
            head.classList.remove('asc', 'desc');
            
        }
    });
    
    desc = evt.classList.contains('asc') ? true : false;
    evt.classList[desc ? 'remove' : 'add']('asc');
    // console.log('Descending');
    evt.classList[desc ? 'add' : 'remove']('desc');

    tbody.innerHTML = '';

    // console.log(bRows.innerHTML);
    

    bRows.sort( (a,b) =>{
        let x = a.getElementsByTagName('td')[n].innerHTML.toLowerCase();
        let y = b.getElementsByTagName('td')[n].innerHTML.toLowerCase();
        console.log(x, y );
            return desc ? ( x < y ?  1 : -1) : ( x < y ?  -1 : 1);
            // console.log(x, y );
    });

    
    bRows.map ( (bRow) =>{
        // console.log('Soilo Pogi');
        tbody.appendChild(bRow);  
    });

    // console.log('Descending');

    
      
}



// ==============


// const search = document.querySelector('.input-group input'),
//     table_rows = document.querySelectorAll('tbody tr'),
//     table_headings = document.querySelectorAll('thead th');


// table_headings.forEach((head, i) => {
//     let sort_asc = true;
//     head.onclick = () => {
//         // table_headings.forEach(head => head.classList.remove('active'));
//         // head.classList.add('active');

//         // document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
//         // table_rows.forEach(row => {
//         //     row.querySelectorAll('td')[i].classList.add('active');
//         // })

//         head.classList.toggle('asc', sort_asc);
//         sort_asc = head.classList.contains('asc') ? false : true;

//         sortTable(i, sort_asc);
//     }
// })


// function sortTable(column, sort_asc) {
//     [...table_rows].sort((a, b) => {
//         let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
//             second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

//         return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
//     })
//         .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
// }


// ==============

function sortTable1(n , evt){
    var table = document.querySelector('table'),
        thead = document.querySelector('.Customer-thead'),
        tbody = table.querySelector('tbody'),
        bRows = [...tbody.rows],
        hData = [...thead.querySelectorAll('.th1')],
        desc = false;

    hData.map ((head) =>{
        if( head != evt ) {
            head.classList.remove('ascc', 'descc');
        }
    });
    
    desc = evt.classList.contains('ascc') ? true : false;
    evt.classList[desc ? 'remove' : 'add']('ascc');
    evt.classList[desc ? 'add' : 'remove']('descc');
    tbody.innerHTML = '';
    bRows.sort( (a,b) =>{
        let x = a.getElementsByTagName('td')[n].innerHTML;
            y = b.getElementsByTagName('td')[n].innerHTML;
            return desc ? ( x < y ?  1 : -1) : ( x < y ?  -1 : 1);
            console.log(x + "" + "Soilo");
    });
    // bRows.map ( (bRow) =>{
    //     tbody.appendChild(bRow);  
    // })
      
}

// let city = ['CALOOCAN CITY','LAS PIÑAS CITY','MAKATI CITY','MALABON CITY','MANDALUYONG CITY','MANILA CITY',
// 'MARIKINA CITY','MUNTINLUPA CITY','NAVOTAS CITY','PARAÑAQUE CITY','PASAY CITY','PASIG CITY','QUEZON CITY','SAN JUAN CITY','TAGUIG CITY','VALENZUELA CITY'
// ];

let caloocan = [
'BAGONG BARRIO', 'BAGONG SILANG', 'BAGUMBONG', 'BANKERS VILLAGE', 'BARANGAY 171', 'BARANGAY 1', 'BARANGAY 10', 'BARANGAY 100', 'BARANGAY 101', 'BARANGAY 102', 'BARANGAY 103',
'BARANGAY 104', 'BARANGAY 105', 'BARANGAY 106', 'BARANGAY 107', 'BARANGAY 108', 'BARANGAY 109', 'BARANGAY 11', 'BARANGAY 110', 'BARANGAY 111', 'BARANGAY 112', 'BARANGAY 113',
'BARANGAY 114', 'BARANGAY 115', 'BARANGAY 116', 'BARANGAY 117', 'BARANGAY 118', 'BARANGAY 119', 'BARANGAY 12', 'BARANGAY 120', 'BARANGAY 121', 'BARANGAY 122', 'BARANGAY 123',
'BARANGAY 124', 'BARANGAY 125', 'BARANGAY 126', 'BARANGAY 127', 'BARANGAY 128', 'BARANGAY 129', 'BARANGAY 13', 'BARANGAY 130', 'BARANGAY 131', 'BARANGAY 132', 'BARANGAY 133', 
'BARANGAY 134', 'BARANGAY 135', 'BARANGAY 136', 'BARANGAY 137', 'BARANGAY 138', 'BARANGAY 139', 'BARANGAY 14', 'BARANGAY 140', 'BARANGAY 141', 'BARANGAY 142', 'BARANGAY 143',
'BARANGAY 144', 'BARANGAY 145', 'BARANGAY 146', 'BARANGAY 147', 'BARANGAY 148', 'BARANGAY 149', 'BARANGAY 15', 'BARANGAY 150', 'BARANGAY 151', 'BARANGAY 152', 'BARANGAY 153',
'BARANGAY 154', 'BARANGAY 155', 'BARANGAY 156', 'BARANGAY 157', 'BARANGAY 158', 'BARANGAY 159', 'BARANGAY 16', 'BARANGAY 160', 'BARANGAY 161', 'BARANGAY 162', 'BARANGAY 163',
'BARANGAY 164', 'BARANGAY 165', 'BARANGAY 166', 'BARANGAY 167', 'BARANGAY 168', 'BARANGAY 169', 'BARANGAY 17', 'BARANGAY 170', 'BARANGAY 171', 'BARANGAY 172', 'BARANGAY 173', 
'BARANGAY 174', 'BARANGAY 175', 'BARANGAY 176', 'BARANGAY 177', 'BARANGAY 178', 'BARANGAY 179', 'BARANGAY 18', 'BARANGAY 180', 'BARANGAY 181', 'BARANGAY 182', 'BARANGAY 183', 
'BARANGAY 184', 'BARANGAY 185', 'BARANGAY 186', 'BARANGAY 187', 'BARANGAY 188', 'BARANGAY 189', 'BARANGAY 19', 'BARANGAY 190', 'BARANGAY 191', 'BARANGAY 192', 'BARANGAY 193',
'BARANGAY 194', 'BARANGAY 195', 'BARANGAY 196', 'BARANGAY 197', 'BARANGAY 198', 'BARANGAY 199', 'BARANGAY 2', 'BARANGAY 20', 'BARANGAY 200', 'BARANGAY 201', 'BARANGAY 202',
'BARANGAY 203', 'BARANGAY 204', 'BARANGAY 205', 'BARANGAY 206', 'BARANGAY 207', 'BARANGAY 208', 'BARANGAY 209', 'BARANGAY 21', 'BARANGAY 210', 'BARANGAY 211', 'BARANGAY 212',
'BARANGAY 213', 'BARANGAY 214', 'BARANGAY 215', 'BARANGAY 216', 'BARANGAY 217', 'BARANGAY 218', 'BARANGAY 219', 'BARANGAY 22', 'BARANGAY 220', 'BARANGAY 221', 'BARANGAY 222',
'BARANGAY 223', 'BARANGAY 224', 'BARANGAY 225', 'BARANGAY 226', 'BARANGAY 227', 'BARANGAY 228', 'BARANGAY 229', 'BARANGAY 23', 'BARANGAY 230', 'BARANGAY 231', 'BARANGAY 232',
'BARANGAY 233', 'BARANGAY 234', 'BARANGAY 235', 'BARANGAY 236', 'BARANGAY 237', 'BARANGAY 238', 'BARANGAY 239', 'BARANGAY 24', 'BARANGAY 240', 'BARANGAY 241', 'BARANGAY 242',
'BARANGAY 243', 'BARANGAY 244', 'BARANGAY 245', 'BARANGAY 246', 'BARANGAY 247', 'BARANGAY 248', 'BARANGAY 249', 'BARANGAY 25', 'BARANGAY 250', 'BARANGAY 251', 'BARANGAY 252',
'BARANGAY 253', 'BARANGAY 254', 'BARANGAY 255', 'BARANGAY 256', 'BARANGAY 257', 'BARANGAY 258', 'BARANGAY 259', 'BARANGAY 26', 'BARANGAY 260', 'BARANGAY 261', 'BARANGAY 262',
'BARANGAY 263', 'BARANGAY 264', 'BARANGAY 265', 'BARANGAY 266', 'BARANGAY 267', 'BARANGAY 268', 'BARANGAY 269', 'BARANGAY 27', 'BARANGAY 270', 'BARANGAY 271', 'BARANGAY 272',
'BARANGAY 273', 'BARANGAY 274', 'BARANGAY 275', 'BARANGAY 276', 'BARANGAY 277', 'BARANGAY 278', 'BARANGAY 279', 'BARANGAY 28', 'BARANGAY 280', 'BARANGAY 281', 'BARANGAY 282',
'BARANGAY 283', 'BARANGAY 284', 'BARANGAY 285', 'BARANGAY 286', 'BARANGAY 287', 'BARANGAY 288', 'BARANGAY 289', 'BARANGAY 29'    
];

let laspinas = [
'ALMANZA DOS', 'ALMANZA UNO', 'CAA-BF INTERNATIONAL', 'DANIEL FAJARDO', 'E. ALDANA', 'ELIAS ALDERITE', 'I. ALDRIDGE', 'L. ALMANZA UNO', 'MANUYO DOS', 'MANUYO UNO',
'MOON WALK', 'PAMPLONA DOS', 'PAMPLONA TRES', 'PAMPLONA UNO', 'PULANG LUPA DOS', 'PULANG LUPA UNO', 'T. ALONZO', 'TALON DOS', 'TALON KATIPUNAN', 'TALON TRES', 'TALON KUATRO', 
'ZAPOTE'
];

let makati = [
'BANGKAL', 'BEL-AIR', 'CARMONA', 'CERCA', 'COMEMBO', 'DASMARINAS', 'FORBES PARK', 'GUADALUPE NUEVO', 'GUADALUPE VIEJO', 'KASALUKUYAN', 'MAGALLANES', 'OLYMPIA',
'PALANAN', 'PINAGKAISAHAN', 'PIO DEL PILAR', 'PITOGO', 'POBLACION', 'RIZAL', 'SAN ANTONIO', 'SAN ISIDRO', 'SAN LORENZO', 'SINGKAMAS', 'SN. CRISTO', 'SN. ISIDRO', 
'SN. LORENZO', 'SN. ANTONIO', 'SN. ISIDRO', 'STA. CRUZ', 'TEJEROS', 'UGONG'
];

let malabon = [
'BAGONG SILANG', 'BARITAN', 'BAYAN-BAYANAN', 'CATMON', 'CONCEPCION', 'DAMPALIT', 'FLORES', 'HULONG DUHAT', 'IBA', 'MAYSILO', 'MULAWIN', 'NBBS KAUNLARAN', 'NBBS PROPER', 
'NIOG', 'PANGHULO', 'SAN AGUSTIN', 'SAN ANTONIO', 'SAN DIONISIO', 'SAN JOSE', 'SANTULAN', 'TANONG'
];

let mandaluyong = ['ADDITION HILLS', 'BAGONG SILANG', 'BARANGKA DRIVE', 'BARANGKA IBABA', 'BARANGKA ILAYA', 'BONI AVENUE', 'BUAYANG BATO', 'BUWAYANG BATO', 'DAANG BAKAL',
 'HAGDANG BATO ITAAS', 'HAGDANG BATO LIBIS', 'HULO', 'MABINI-J. RIZAL', 'MALAMIG', 'MANDALUYONG', 'MARKET AREA', 'NAMAYAN', 'NEW ZANIGA', 'OLD ZANIGA', 'PALASAN', 'PLAINVIEW', 
 'PLEASANT HILLS', 'PULANG LUPA', 'SAN JOSE', 'VERGARA'
];

let manila = ['BARANGAY 1','BARANGAY 2','BARANGAY 3','BARANGAY 4', 'BARANGAY 5', 'BARANGAY 6', 'BARANGAY 7', 'BARANGAY 8', 'BARANGAY 9', 'BARANGAY 10', 'BARANGAY 11', 
'BARANGAY 12', 'BARANGAY 13', 'BARANGAY 14', 'BARANGAY 15', 'BARANGAY 16', 'BARANGAY 17', 'BARANGAY 18', 'BARANGAY 19', 'BARANGAY 20', 'BARANGAY 21', 'BARANGAY 22', 'BARANGAY 23',
'BARANGAY 24', 'BARANGAY 25', 'BARANGAY 26', 'BARANGAY 27', 'BARANGAY 28', 'BARANGAY 29', 'BARANGAY 30', 'BARANGAY 31', 'BARANGAY 32', 'BARANGAY 33', 'BARANGAY 34', 'BARANGAY 35',
'BARANGAY 36', 'BARANGAY 37', 'BARANGAY 38', 'BARANGAY 39', 'BARANGAY 40', 'BARANGAY 41', 'BARANGAY 42', 'BARANGAY 43', 'BARANGAY 44', 'BARANGAY 45', 'BARANGAY 46', 'BARANGAY 47',
'BARANGAY 48', 'BARANGAY 49', 'BARANGAY 50', 'BARANGAY 51', 'BARANGAY 52', 'BARANGAY 53', 'BARANGAY 54', 'BARANGAY 55', 'BARANGAY 56', 'BARANGAY 57', 'BARANGAY 58', 'BARANGAY 59',
'BARANGAY 60', 'BARANGAY 61', 'BARANGAY 62', 'BARANGAY 63', 'BARANGAY 64', 'BARANGAY 65', 'BARANGAY 66', 'BARANGAY 67', 'BARANGAY 68', 'BARANGAY 69', 'BARANGAY 70', 'BARANGAY 71',
'BARANGAY 72', 'BARANGAY 73', 'BARANGAY 74', 'BARANGAY 75', 'BARANGAY 76', 'BARANGAY 77', 'BARANGAY 78', 'BARANGAY 79', 'BARANGAY 80', 'BARANGAY 81', 'BARANGAY 82', 'BARANGAY 83',
'BARANGAY 84', 'BARANGAY 85', 'BARANGAY 86', 'BARANGAY 87', 'BARANGAY 88', 'BARANGAY 89', 'BARANGAY 90', 'BARANGAY 91', 'BARANGAY 92', 'BARANGAY 93', 'BARANGAY 94', 'BARANGAY 95', 
'BARANGAY 96', 'BARANGAY 97', 'BARANGAY 98', 'BARANGAY 99', 'BARANGAY 100', 'BARANGAY 101', 'BARANGAY 102', 'BARANGAY 103', 'BARANGAY 104', 'BARANGAY 105', 'BARANGAY 106',
'BARANGAY 107', 'BARANGAY 108', 'BARANGAY 109', 'BARANGAY 110', 'BARANGAY 111', 'BARANGAY 112', 'BARANGAY 113', 'BARANGAY 114', 'BARANGAY 115', 'BARANGAY 116', 'BARANGAY 117', 
'BARANGAY 118', 'BARANGAY 119', 'BARANGAY 120', 'BARANGAY 121', 'BARANGAY 122', 'BARANGAY 123', 'BARANGAY 124', 'BARANGAY 125', 'BARANGAY 126', 'BARANGAY 127', 'BARANGAY 128',
'BARANGAY 129', 'BARANGAY 130', 'BARANGAY 131', 'BARANGAY 132', 'BARANGAY 133', 'BARANGAY 134', 'BARANGAY 135', 'BARANGAY 136', 'BARANGAY 137', 'BARANGAY 138', 'BARANGAY 139',
'BARANGAY 140', 'BARANGAY 141', 'BARANGAY 142', 'BARANGAY 143', 'BARANGAY 144', 'BARANGAY 145', 'BARANGAY 146', 'BARANGAY 147', 'BARANGAY 148', 'BARANGAY 149', 'BARANGAY 150',
'BARANGAY 151', 'BARANGAY 152', 'BARANGAY 153', 'BARANGAY 154', 'BARANGAY 155', 'BARANGAY 156', 'BARANGAY 157', 'BARANGAY 158', 'BARANGAY 159', 'BARANGAY 160', 'BARANGAY 161',
'BARANGAY 162', 'BARANGAY 163', 'BARANGAY 164', 'BARANGAY 165', 'BARANGAY 166', 'BARANGAY 167', 'BARANGAY 168', 'BARANGAY 169', 'BARANGAY 170', 'BARANGAY 171', 'BARANGAY 172',
'BARANGAY 173', 'BARANGAY 174', 'BARANGAY 175', 'BARANGAY 176', 'BARANGAY 177', 'BARANGAY 178', 'BARANGAY 179', 'BARANGAY 180', 'BARANGAY 181', 'BARANGAY 182', 'BARANGAY 183', 
'BARANGAY 184', 'BARANGAY 185', 'BARANGAY 186', 'BARANGAY 187', 'BARANGAY 188', 'BARANGAY 189', 'BARANGAY 190', 'BARANGAY 191', 'BARANGAY 192', 'BARANGAY 193', 'BARANGAY 194',
'BARANGAY 195', 'BARANGAY 196', 'BARANGAY 197', 'BARANGAY 198', 'BARANGAY 199', 'BARANGAY 200', 'BARANGAY 201', 'BARANGAY 202', 
'BARANGAY 202 - A', 'BARANGAY 203', 'BARANGAY 204', 'BARANGAY 205', 'BARANGAY 206', 'BARANGAY 207', 'BARANGAY 208', 'BARANGAY 209', 'BARANGAY 210', 'BARANGAY 211', 'BARANGAY 212',
'BARANGAY 213', 'BARANGAY 214', 'BARANGAY 215', 'BARANGAY 216', 'BARANGAY 217', 'BARANGAY 218', 'BARANGAY 219', 'BARANGAY 220', 'BARANGAY 221', 'BARANGAY 222', 'BARANGAY 223',
'BARANGAY 224', 'BARANGAY 225', 'BARANGAY 226', 'BARANGAY 227', 'BARANGAY 228', 'BARANGAY 229', 'BARANGAY 230', 'BARANGAY 231', 'BARANGAY 232', 'BARANGAY 233', 'BARANGAY 234', 
'BARANGAY 235', 'BARANGAY 236', 'BARANGAY 237', 'BARANGAY 238', 'BARANGAY 239', 'BARANGAY 240', 'BARANGAY 241', 'BARANGAY 242', 'BARANGAY 243', 'BARANGAY 244', 'BARANGAY 245', 
'BARANGAY 246', 'BARANGAY 247', 'BARANGAY 248', 'BARANGAY 249', 'BARANGAY 250', 'BARANGAY 251', 'BARANGAY 252', 'BARANGAY 253', 'BARANGAY 254', 'BARANGAY 255', 'BARANGAY 256',
'BARANGAY 257', 'BARANGAY 258', 'BARANGAY 259', 'BARANGAY 260', 'BARANGAY 261', 'BARANGAY 262', 'BARANGAY 263', 'BARANGAY 264', 'BARANGAY 265', 'BARANGAY 266', 'BARANGAY 267', 
'BARANGAY 268', 'BARANGAY 269', 'BARANGAY 270', 'BARANGAY 271', 'BARANGAY 272', 'BARANGAY 273', 'BARANGAY 274', 'BARANGAY 275', 'BARANGAY 276', 'BARANGAY 277', 'BARANGAY 278',
'BARANGAY 279', 'BARANGAY 280', 'BARANGAY 281', 'BARANGAY 282', 'BARANGAY 283', 'BARANGAY 284', 'BARANGAY 285', 'BARANGAY 286', 'BARANGAY 287', 'BARANGAY 288', 'BARANGAY 289',
'BARANGAY 290', 'BARANGAY 291', 'BARANGAY 292', 'BARANGAY 293', 'BARANGAY 294', 'BARANGAY 295', 'BARANGAY 296', 'BARANGAY 297', 'BARANGAY 298', 'BARANGAY 299', 'BARANGAY 300', 
'BARANGAY 301', 'BARANGAY 302', 'BARANGAY 303', 'BARANGAY 304', 'BARANGAY 305', 'BARANGAY 306', 'BARANGAY 307', 'BARANGAY 308', 'BARANGAY 309', 'BARANGAY 310', 'BARANGAY 311',
'BARANGAY 312', 'BARANGAY 313', 'BARANGAY 314', 'BARANGAY 315', 'BARANGAY 316', 'BARANGAY 317', 'BARANGAY 318', 'BARANGAY 319', 'BARANGAY 320', 'BARANGAY 321', 'BARANGAY 322',
'BARANGAY 323', 'BARANGAY 324', 'BARANGAY 325', 'BARANGAY 326', 'BARANGAY 327', 'BARANGAY 328', 'BARANGAY 329', 'BARANGAY 330', 'BARANGAY 331', 'BARANGAY 332', 
'BARANGAY 333', 'BARANGAY 334', 'BARANGAY 335', 'BARANGAY 336', 'BARANGAY 337', 'BARANGAY 338', 'BARANGAY 339', 'BARANGAY 340', 'BARANGAY 341', 'BARANGAY 342', 
'BARANGAY 343', 'BARANGAY 344', 'BARANGAY 345', 'BARANGAY 346', 'BARANGAY 347', 'BARANGAY 348', 'BARANGAY 349', 'BARANGAY 350', 'BARANGAY 351', 'BARANGAY 352', 
'BARANGAY 353', 'BARANGAY 354', 'BARANGAY 355', 'BARANGAY 356', 'BARANGAY 357', 'BARANGAY 358', 'BARANGAY 359', 'BARANGAY 360', 'BARANGAY 361', 'BARANGAY 362', 
'BARANGAY 363', 'BARANGAY 364', 'BARANGAY 365', 'BARANGAY 366', 'BARANGAY 367', 'BARANGAY 368', 'BARANGAY 369', 'BARANGAY 370', 'BARANGAY 371', 'BARANGAY 372',
'BARANGAY 373', 'BARANGAY 374', 'BARANGAY 375', 'BARANGAY 376', 'BARANGAY 377', 'BARANGAY 378', 'BARANGAY 379', 'BARANGAY 380', 'BARANGAY 381', 'BARANGAY 382',
'BARANGAY 383', 'BARANGAY 384', 'BARANGAY 385', 'BARANGAY 386', 'BARANGAY 387', 'BARANGAY 388', 'BARANGAY 389', 'BARANGAY 390', 'BARANGAY 391', 'BARANGAY 392', 
'BARANGAY 393', 'BARANGAY 394', 'BARANGAY 395', 'BARANGAY 396', 'BARANGAY 397', 'BARANGAY 398', 'BARANGAY 399', 'BARANGAY 400', 'BARANGAY 401', 'BARANGAY 402', 
'BARANGAY 403', 'BARANGAY 404', 'BARANGAY 405', 'BARANGAY 406', 'BARANGAY 407', 'BARANGAY 408', 'BARANGAY 409', 'BARANGAY 410', 'BARANGAY 411', 'BARANGAY 412', 
'BARANGAY 413', 'BARANGAY 414', 'BARANGAY 415', 'BARANGAY 416', 'BARANGAY 417', 'BARANGAY 418', 'BARANGAY 419', 'BARANGAY 420', 'BARANGAY 421', 'BARANGAY 422', 
'BARANGAY 423', 'BARANGAY 424', 'BARANGAY 425', 'BARANGAY 426', 'BARANGAY 427', 'BARANGAY 428', 'BARANGAY 429', 'BARANGAY 430', 'BARANGAY 431', 'BARANGAY 432',
'BARANGAY 433', 'BARANGAY 434', 'BARANGAY 435', 'BARANGAY 436', 'BARANGAY 437', 'BARANGAY 438', 'BARANGAY 439', 'BARANGAY 440', 'BARANGAY 441', 'BARANGAY 442',
'BARANGAY 443', 'BARANGAY 444', 'BARANGAY 445', 'BARANGAY 446', 'BARANGAY 447', 'BARANGAY 448', 'BARANGAY 449', 'BARANGAY 450', 'BARANGAY 451', 'BARANGAY 452',
'BARANGAY 453', 'BARANGAY 454', 'BARANGAY 455', 'BARANGAY 456', 'BARANGAY 457', 'BARANGAY 458', 'BARANGAY 459', 'BARANGAY 460', 'BARANGAY 461', 'BARANGAY 462',
'BARANGAY 463', 'BARANGAY 464', 'BARANGAY 465', 'BARANGAY 466', 'BARANGAY 467', 'BARANGAY 468', 'BARANGAY 469', 'BARANGAY 470', 'BARANGAY 471', 'BARANGAY 472',
'BARANGAY 473', 'BARANGAY 474', 'BARANGAY 475', 'BARANGAY 476', 'BARANGAY 477', 'BARANGAY 478', 'BARANGAY 479', 'BARANGAY 480', 'BARANGAY 481', 'BARANGAY 482',
'BARANGAY 483', 'BARANGAY 484', 'BARANGAY 485', 'BARANGAY 486', 'BARANGAY 487', 'BARANGAY 488', 'BARANGAY 489', 'BARANGAY 490', 'BARANGAY 491', 'BARANGAY 492',
'BARANGAY 493', 'BARANGAY 494', 'BARANGAY 495', 'BARANGAY 496', 'BARANGAY 497', 'BARANGAY 498', 'BARANGAY 499', 'BARANGAY 500', 'BARANGAY 501', 'BARANGAY 502', 
'BARANGAY 503', 'BARANGAY 504', 'BARANGAY 505', 'BARANGAY 506', 'BARANGAY 507', 'BARANGAY 508', 'BARANGAY 509', 'BARANGAY 510', 'BARANGAY 511', 'BARANGAY 512',
'BARANGAY 513', 'BARANGAY 514', 'BARANGAY 515', 'BARANGAY 516', 'BARANGAY 517', 'BARANGAY 518', 'BARANGAY 519', 'BARANGAY 520', 'BARANGAY 521', 'BARANGAY 522',
'BARANGAY 523', 'BARANGAY 524', 'BARANGAY 525', 'BARANGAY 526', 'BARANGAY 527', 'BARANGAY 528', 'BARANGAY 529', 'BARANGAY 530', 'BARANGAY 531', 'BARANGAY 532',
'BARANGAY 533', 'BARANGAY 534', 'BARANGAY 535', 'BARANGAY 536', 'BARANGAY 537', 'BARANGAY 538', 'BARANGAY 539', 'BARANGAY 540', 'BARANGAY 541', 'BARANGAY 542', 
'BARANGAY 543', 'BARANGAY 544', 'BARANGAY 545', 'BARANGAY 546', 'BARANGAY 547', 'BARANGAY 548', 'BARANGAY 549', 'BARANGAY 550', 'BARANGAY 551', 'BARANGAY 552',
'BARANGAY 553', 'BARANGAY 554', 'BARANGAY 555', 'BARANGAY 556', 'BARANGAY 557', 'BARANGAY 558', 'BARANGAY 559', 'BARANGAY 560', 'BARANGAY 561', 'BARANGAY 562',
'BARANGAY 563', 'BARANGAY 564', 'BARANGAY 565', 'BARANGAY 566', 'BARANGAY 567', 'BARANGAY 568', 'BARANGAY 569', 'BARANGAY 570', 'BARANGAY 571', 'BARANGAY 572',
'BARANGAY 573', 'BARANGAY 574', 'BARANGAY 575', 'BARANGAY 576', 'BARANGAY 577', 'BARANGAY 578', 'BARANGAY 579', 'BARANGAY 580', 'BARANGAY 581', 'BARANGAY 582',
'BARANGAY 583', 'BARANGAY 584', 'BARANGAY 585', 'BARANGAY 586', 'BARANGAY 587', 'BARANGAY 588', 'BARANGAY 589', 'BARANGAY 590', 'BARANGAY 591', 'BARANGAY 592', 
'BARANGAY 593', 'BARANGAY 594', 'BARANGAY 595', 'BARANGAY 596', 'BARANGAY 597', 'BARANGAY 598', 'BARANGAY 599', 'BARANGAY 600', 'BARANGAY 601', 'BARANGAY 602', 
'BARANGAY 603', 'BARANGAY 604', 'BARANGAY 605', 'BARANGAY 606', 'BARANGAY 607', 'BARANGAY 608', 'BARANGAY 609', 'BARANGAY 610', 'BARANGAY 611', 'BARANGAY 612', 
'BARANGAY 613', 'BARANGAY 614', 'BARANGAY 615', 'BARANGAY 616', 'BARANGAY 617', 'BARANGAY 618', 'BARANGAY 619', 'BARANGAY 620', 'BARANGAY 621', 'BARANGAY 622', 
'BARANGAY 623', 'BARANGAY 624', 'BARANGAY 625', 'BARANGAY 626', 'BARANGAY 627', 'BARANGAY 628', 'BARANGAY 629', 'BARANGAY 630', 'BARANGAY 631', 'BARANGAY 632', 
'BARANGAY 633', 'BARANGAY 634', 'BARANGAY 635', 'BARANGAY 636', 'BARANGAY 637', 'BARANGAY 638', 'BARANGAY 639', 'BARANGAY 640', 'BARANGAY 641', 'BARANGAY 642', 
'BARANGAY 643', 'BARANGAY 644', 'BARANGAY 645', 'BARANGAY 646', 'BARANGAY 647', 'BARANGAY 648', 'BARANGAY 649', 'BARANGAY 650', 'BARANGAY 651', 'BARANGAY 652', 
'BARANGAY 653', 'BARANGAY 654', 'BARANGAY 655', 'BARANGAY 656', 'BARANGAY 657', 'BARANGAY 658', 'BARANGAY 659', 'BARANGAY 659 - A', 'BARANGAY 660','BARANGAY 660 - A', 
'BARANGAY 661', 'BARANGAY 662', 'BARANGAY 663', 'BARANGAY 663 - A', 'BARANGAY 664', 
'BARANGAY 664 - A', 'BARANGAY 665', 'BARANGAY 666', 'BARANGAY 667', 'BARANGAY 668', 'BARANGAY 669', 'BARANGAY 670', 'BARANGAY 671', 'BARANGAY 672', 'BARANGAY 673', 
'BARANGAY 674', 'BARANGAY 675', 'BARANGAY 676', 'BARANGAY 677', 'BARANGAY 678', 'BARANGAY 679', 'BARANGAY 680', 'BARANGAY 681', 'BARANGAY 682', 'BARANGAY 683', 
'BARANGAY 684', 'BARANGAY 685', 'BARANGAY 686', 'BARANGAY 687', 'BARANGAY 688', 'BARANGAY 689', 'BARANGAY 690', 'BARANGAY 691', 'BARANGAY 692', 'BARANGAY 693', 
'BARANGAY 694', 'BARANGAY 695', 'BARANGAY 696', 'BARANGAY 697', 'BARANGAY 698', 'BARANGAY 699', 'BARANGAY 700', 'BARANGAY 701', 'BARANGAY 702', 'BARANGAY 703', 
'BARANGAY 704', 'BARANGAY 705', 'BARANGAY 706', 'BARANGAY 707', 'BARANGAY 708', 'BARANGAY 709', 'BARANGAY 710', 'BARANGAY 711', 'BARANGAY 712', 'BARANGAY 713', 
'BARANGAY 714', 'BARANGAY 715', 'BARANGAY 716', 'BARANGAY 717', 'BARANGAY 718', 'BARANGAY 719', 'BARANGAY 720', 'BARANGAY 721', 'BARANGAY 722', 'BARANGAY 723', 
'BARANGAY 724', 'BARANGAY 725', 'BARANGAY 726', 'BARANGAY 727', 'BARANGAY 728', 'BARANGAY 729', 'BARANGAY 730', 'BARANGAY 731', 'BARANGAY 732', 'BARANGAY 733', 
'BARANGAY 734', 'BARANGAY 735', 'BARANGAY 736', 'BARANGAY 737', 'BARANGAY 738', 'BARANGAY 739', 'BARANGAY 740', 'BARANGAY 741', 'BARANGAY 742', 'BARANGAY 743', 
'BARANGAY 744', 'BARANGAY 745', 'BARANGAY 746', 'BARANGAY 747', 'BARANGAY 748', 'BARANGAY 749', 'BARANGAY 750', 'BARANGAY 751', 'BARANGAY 752', 'BARANGAY 753', 
'BARANGAY 754', 'BARANGAY 755', 'BARANGAY 756', 'BARANGAY 757', 'BARANGAY 758', 'BARANGAY 759', 'BARANGAY 760', 'BARANGAY 761', 'BARANGAY 762', 'BARANGAY 763', 
'BARANGAY 764', 'BARANGAY 765', 'BARANGAY 766', 'BARANGAY 767', 'BARANGAY 768', 'BARANGAY 769', 'BARANGAY 770', 'BARANGAY 771', 'BARANGAY 772', 'BARANGAY 773', 
'BARANGAY 774', 'BARANGAY 775', 'BARANGAY 776', 'BARANGAY 777', 'BARANGAY 778', 'BARANGAY 779', 'BARANGAY 780', 'BARANGAY 781', 'BARANGAY 782', 'BARANGAY 783', 
'BARANGAY 784', 'BARANGAY 785', 'BARANGAY 786', 'BARANGAY 787', 'BARANGAY 788', 'BARANGAY 789', 'BARANGAY 790', 'BARANGAY 791', 'BARANGAY 792', 'BARANGAY 793', 
'BARANGAY 794', 'BARANGAY 795', 'BARANGAY 796', 'BARANGAY 797', 'BARANGAY 798', 'BARANGAY 799', 'BARANGAY 800', 'BARANGAY 801', 'BARANGAY 802', 'BARANGAY 803', 
'BARANGAY 804', 'BARANGAY 805', 'BARANGAY 806', 'BARANGAY 807', 'BARANGAY 808', 'BARANGAY 809', 'BARANGAY 810', 'BARANGAY 811', 'BARANGAY 812', 'BARANGAY 813', 
'BARANGAY 814', 'BARANGAY 815', 'BARANGAY 816', 'BARANGAY 817', 'BARANGAY 818', 
'BARANGAY 818 - A', 'BARANGAY 819', 'BARANGAY 820', 'BARANGAY 821', 'BARANGAY 822', 'BARANGAY 823', 'BARANGAY 824', 'BARANGAY 825', 'BARANGAY 826', 'BARANGAY 827', 
'BARANGAY 828', 'BARANGAY 829', 'BARANGAY 830', 'BARANGAY 831', 'BARANGAY 832', 'BARANGAY 833', 'BARANGAY 834', 'BARANGAY 835', 'BARANGAY 836', 'BARANGAY 837', 
'BARANGAY 838', 'BARANGAY 839', 'BARANGAY 840', 'BARANGAY 841', 'BARANGAY 842', 'BARANGAY 843', 'BARANGAY 844', 'BARANGAY 845', 'BARANGAY 846', 'BARANGAY 847', 
'BARANGAY 848', 'BARANGAY 849', 'BARANGAY 850', 'BARANGAY 851', 'BARANGAY 852', 'BARANGAY 853', 'BARANGAY 854', 'BARANGAY 855', 'BARANGAY 856', 'BARANGAY 857', 
'BARANGAY 858', 'BARANGAY 859', 'BARANGAY 860', 'BARANGAY 861', 'BARANGAY 862', 'BARANGAY 863', 'BARANGAY 864', 'BARANGAY 865', 'BARANGAY 866', 'BARANGAY 867', 
'BARANGAY 868', 'BARANGAY 869', 'BARANGAY 870', 'BARANGAY 871', 'BARANGAY 872', 'BARANGAY 873', 'BARANGAY 874', 'BARANGAY 875', 'BARANGAY 876', 'BARANGAY 877', 
'BARANGAY 878', 'BARANGAY 879', 'BARANGAY 880', 'BARANGAY 881', 'BARANGAY 882', 'BARANGAY 883', 'BARANGAY 884', 'BARANGAY 885', 'BARANGAY 886', 'BARANGAY 887', 
'BARANGAY 888', 'BARANGAY 889', 'BARANGAY 890', 'BARANGAY 891', 'BARANGAY 892', 'BARANGAY 893', 'BARANGAY 894', 'BARANGAY 895', 'BARANGAY 896', 'BARANGAY 897', 
'BARANGAY 898', 'BARANGAY 899', 'BARANGAY 900', 'BARANGAY 901', 'BARANGAY 902', 'BARANGAY 903', 'BARANGAY 904', 'BARANGAY 905'
];

let marikina = ['BARANGKA', 'CALUMPANG', 'CONCEPCION DOS', 'CONCEPCION UNO', 'FORTUNE', 'INDUSTRIAL VALLEY', 'JESUS DELA PEÑA', 'MALANDAY', 'MARIKINA HEIGHTS', 'NANGKA', 
'PARANG', 'SAN ROQUE', 'SANTO NIÑO', 'TAÑONG'];

let muntinlupa = ['ALABANG', 'AYALA ALABANG', 'BAYANAN', 'BULI', 'CUPANG', 'POBLACION', 'PUTATAN', 'SUCAT', 'TUNASAN'];

let navotas = ['BANGKULASI', 'DAANGHARI', 'NAVOTAS EAST', 'NAVOTAS WEST', 'NORTH BAY BOULEVARD NORTH', 'NORTH BAY BOULEVARD SOUTH', 'SAN JOSE', 'SAN RAFAEL VILLAGE', 'TANGOS'];

let paranaque = ['​BACLARAN', 'DON BOSCO', 'LA HUERTA', 'SAN DIONISIO', 'SAN ISIDRO', 'SAN MARTIN DE PORRES', 'SAN ANTONIO', 'SAN ANTONIO VALLEY 1', 'SAN ANTONIO VALLEY 2', 
'STO. NIÑO','SUN VALLEY', 'TAMBO', 'VITALEZ'];

let pasay = ['APELO CRUZ', 'BACLARAN', 'BALTAO', 'BAY CITY', 'CABRERA', 'CARTIMAR', 'CUYEGKENG', 'DON CARLOS VILLAGE', 'EDANG', 'F. B. HARRISON', 'JUAN SUMULONG', 'KALAYAAN',
'LEVERIZA', 'LIBERTAD', 'MALIBAY', 'MANILA BAY RECLAMATION', 'MARCELA MARCELO', 'MARICABAN', 'M. DELA CRUZ', 'NEWPORT CITY', 'NICHOLS', 'PADRE BURGOS', 'PASAY ROTONDA',
'PHILIPPINE INTERNATIONAL CONVENTION CENTER', 'PILDERA I', 'PILDERA II', 'RIVERA VILLAGE', 'SAN PABLO', 'SAN ISIDRO', 'SAN JOSE', 'SAN RAFAEL', 'SAN ROQUE', 'SANTA CLARA', 
'SANTO NIÑO', 'TRAMO', 'TRIPA DE GALLINA', 'VENTANILLA', 'VILLAMOR'];

let pasig = ['BAGONG ILOG', 'BAGONG KATIPUNAN', 'BAGONG KAWAYAN', 'BAGONG TANYAG', 'BAMBANG', 'BUTING', 'CANIOGAN', 'DELA PAZ', 'KALAWAAN', 'KAPASIGAN', 'KAPITOLYO', 'MALINAO', 
'MANGGAHAN', 'MAYBUNGA', 'ORANBO', 'PALATIW', 'PINAGBUHATAN', 'PINEDA', 'ROSARIO', 'SAGAD', 'SAN JOAQUIN', 'SAN MIGUEL', 'SAN NICOLAS', 'SANTA CRUZ', 'SANTOLAN', 'SUMILANG', 'UGONG'];

let quezon = ['Alicia', 'Bagong Pagasa', 'Bahay Toro', 'Balingasa', 'Bungad', 'Damar', 'Damayan', 'Del Monte', 'Katipunan', 'Lourdes', 'Maharlika', 'Manresa', 'Mariblo',
'Masambong', 'N.S. Amoranto', 'Nayon Kanluran', 'Paang Bundok', 'Pag-ibig sa Nayon', 'Paltok', 'Paraiso', 'Phil-am', 'Project 6', 
'R Magsaysay', 'Salvacion', 'San Antonio', 'San Isidro Labrador', 'San Jose', 'Sienna', 'St. Peter', 'Sta. Cruz', 'Sta. Teresita', 
'Sto. Cristo', 'Sto. Domingo', 'Talayan', 'Vasra', 'VeteransVillage', 'West Triangle', 'Bagong Silangan', 'Batasan Hills', 'Commonwealth',
'Holy Spirit', 'Payatas', 'Amihan', 'Bagumbayan', 'Bagumbuhay', 'Bayanihan', 'Blue Ridge A', 'Blue Ridge B', 'Camp Aguinaldo', 'Claro', 'Dioquino Zobel', 
'Duyan-duyan', 'E. Rodriquez', 'East Kamias', 'Escopa 1', 'Escopa 2', 'Escopa 3', 'Escopa 4', 'Libis', 'Loyola Heights', 'Manga', 'Marilag', 'Masagana',
'Matandang Balara', 'Milgrosa', 'Pansol', 'Quirino 2-A', 'Quirino 2-B', 'Quirino 2-C', 'Quirino 3-A', 'San Roque', 'Silangan', 'Socorro', 'St. Ignatius',
'Tagumpay', 'Ugong Norte', 'Villa Maria Clara', 'West Kamias', 'White Plains', 'B.L. ng Crame', 'Botocan', 'Central', 'Damayang Lagi', 'Don Manuel',
'Doña Aurora', 'Doña Imelda', 'Doña Josefa', 'Horseshoe', 'Immaculate Concepcion', 'Kalusugan', 'Kamuning', 'Kaunlaran', 'Kristong Hari', 'Krus na Ligas', 
'Laging Handa', 'Malaya', 'Mariana', 'Obrero', 'Old Capitol Site', 'Paligsahan', 'Pinagkaisahan', 'Pinyahan', 'Roxas', 'Sacred Heart', 'San Isidro Galas', 
'San Martin de Porres', 'San Vicente', 'Santo Niño', 'Santol', 'Sikatuna Village', 'South Triangle', 'Tatalon', 'Teachers Village East', 'Teachers Village West', 
'UP Campus', 'UP Village', 'Valencia', 'Bagbag', 'Capri', 'Fairview', 'Greater Lagro', 'Gulod', 'Kaligayahan', 'Nagkaisang Nayon', 'North Fairview', 'Novaliches', 
'Pasong Putik', 'San Agustin', 'San Bartolome', 'Sta. Lucia', 'Sta. Monica', 'Apilonio Samson', 'Baesa', 'Balumbato', 'Culiat', 'New Era', 'Pasong Tamo', 'Sangandaan', 
'Sauyo', 'Talipapa', 'Tandang Sora', 'Unang Sigaw'
];


let sanjuan = ['Addition Hills', 'Balong Bato', 'Batis', 'Corazon De Jesus', 'Ermitaño', 'Greenhills', 'Isabelita', 'Kabayanan', 'Little Baguio', 'Maytunas', 
'Onse', 'Pasadena', 'Pedro Cruz', 'Progreso', 'Rivera', 'Salapan', 'San Perfecto', 'St. Joseph', 'Tibagan', 'West Crame'];

let taguig = ['Bagumbayan', 'Bambang', 'Calzada', 'Central Bicutan', 'Central Signal Village', 'Fort Bonifacio (including Bonifacio Global City or BGC)', 
'Hagonoy', 'Ibayo-Tipas', 'Katuparan', 'Ligid-Tipas', 'Lower Bicutan', 'Maharlika Village', 'Napindan', 'New Lower Bicutan', 'North Daang Hari', 'North Signal Village', 
'Palingon', 'Pinagsama', 'San Miguel', 'Santa Ana', 'South Daang Hari', 'South Signal Village', 'Tanyag', 'Tuktukan', 'Upper Bicutan', 'Ususan', 'Western Bicutan'];

let velenzuela = ['Arkong Bato', 'Balangkas', 'Bignay', 'Bisig', 'Canumay', 'Coloong', 'Dalandanan', 'Karuhatan', 'Lawang Bato', 'Lingunan', 'Mabolo', 'Malanday',
 'Malinta', 'Mapulang Lupa', 'Marulas', 'Maysan', 'Palasan', 'Parada', 'Pariancillo Villa', 'Pasolo', 'Poblacion', 'Polo', 'Punturin', 'Rincon', 'Tagalag', 'Ugong', 
 'Veinte Reales'];



// caloocan.forEach(function addcity(city){
//     let option = document.createElement('option');
//     option.text = city;
//     option.value = city;
//     I('selectCity_Admin').appendChild(option);
// });

I('selectCity_Admin').onchange = function (){

    I('selectBarangay_Admin').innerHTML = "<option></option>"
    if(this.value == "CALOOCAN CITY"){
        addToSlct2(caloocan);
    }
    if(this.value == "LAS PIÑAS CITY"){
        addToSlct2(laspinas);
    }
    if(this.value == "MAKATI CITY"){
        addToSlct2(makati);
    }
    if(this.value == "MALABON CITY"){
        addToSlct2(malabon);
    }
    if(this.value == "MANDALUYONG CITY"){
        addToSlct2(mandaluyong);
    }
    if(this.value == "MANILA CITY"){
        addToSlct2(manila);
    }
    if(this.value == "MARIKINA CITY"){
        addToSlct2(marikina);
    }
    if(this.value == "MUNTINLUPA CITY"){
        addToSlct2(muntinlupa);
    }
    if(this.value == "NAVOTAS CITY"){
        addToSlct2(navotas);
    }
    if(this.value == "PARANAQUE CITY"){
        addToSlct2(paranaque);
    }
    if(this.value == "PASAY CITY"){
        addToSlct2(pasay);
    }
    if(this.value == "PASIG CITY"){
        addToSlct2(pasig);
    }
    if(this.value == "QUEZON CITY"){
        addToSlct2(quezon);
    }
    if(this.value == "SAN JUAN CITY"){
        addToSlct2(sanjuan);
    }
    if(this.value == "TAGUIG CITY"){
        addToSlct2(taguig);
    }
    if(this.value == "VELENZUELA CITY"){
        addToSlct2(velenzuela);
    }
}
// I('MyBarangay').onchange = function (){
//     I('MyBarangay2').value = I('MyBarangay').value;
//     I('MyBarangay2').style.border = '1px solid black';
// }

I('MyCity').onchange = function (){
    I('MyBarangay2').style.border = '1px solid red';
    I('MyBarangay2').value = '';
    I('MyBarangay').innerHTML = "<option></option>"
    if(this.value == "CALOOCAN CITY"){
        addToSlct3(caloocan);
    }
    if(this.value == "LAS PIÑAS CITY"){
        addToSlct3(laspinas);
    }
    if(this.value == "MAKATI CITY"){
        addToSlct3(makati);
    }
    if(this.value == "MALABON CITY"){
        addToSlct3(malabon);
    }
    if(this.value == "MANDALUYONG CITY"){
        addToSlct3(mandaluyong);
    }
    if(this.value == "MANILA CITY"){
        addToSlct3(manila);
    }
    if(this.value == "MARIKINA CITY"){
        addToSlct3(marikina);
    }
    if(this.value == "MUNTINLUPA CITY"){
        addToSlct3(muntinlupa);
    }
    if(this.value == "NAVOTAS CITY"){
        addToSlct3(navotas);
    }
    if(this.value == "PARANAQUE CITY"){
        addToSlct3(paranaque);
    }
    if(this.value == "PASAY CITY"){
        addToSlct3(pasay);
    }
    if(this.value == "PASIG CITY"){
        addToSlct3(pasig);
    }
    if(this.value == "QUEZON CITY"){
        addToSlct3(quezon);
    }
    if(this.value == "SAN JUAN CITY"){
        addToSlct3(sanjuan);
    }
    if(this.value == "TAGUIG CITY"){
        addToSlct3(taguig);
    }
    if(this.value == "VALENZUELA CITY"){
        addToSlct3(velenzuela);
    }
}
let city = ['CALOOCAN CITY','LAS PIÑAS CITY','MAKATI CITY','MALABON CITY','MANDALUYONG CITY','MANILA CITY',
'MARIKINA CITY','MUNTINLUPA CITY','NAVOTAS CITY','PARAÑAQUE CITY','PASAY CITY','PASIG CITY','QUEZON CITY','SAN JUAN CITY','TAGUIG CITY','VALENZUELA CITY'
];

function addToSlct2(arr){
    arr.forEach(function (item) {
        let option = document.createElement("option");
        option.text = item;
        option.value = item;
        I('selectBarangay_Admin').appendChild(option);
    })
}

function addToSlct3(arr){
    arr.forEach(function (item) {
        let option = document.createElement("option");
        option.text = item;
        option.value = item;
        I('MyBarangay').appendChild(option);
    })
}

// Address controller
I('selectCity_Admin').addEventListener('input', () => {
    if(I('selectCity_Admin').value == "CALOOCAN CITY"){
        
    }
})

// 







let CustomerImagePopupClosebtn = document.getElementById('Customer-Popup-Image-Exit');


let CustomerIdentificationbtn = document.querySelectorAll('.Customer-ID');
let CustomerImagePopup = document.getElementsByClassName('Customer-Popup-Image');

CustomerImagePopupClosebtn.addEventListener('click' , () => {
    CustomerImagePopup[0].style.display = 'none';
    blurRemove();
    console.log('soisdfsdf');
})


CustomerIdentificationbtn.forEach((CPicture) => {
    CPicture.onclick = () => {
        CustomerImagePopup[0].style.display = 'block';
        console.log('soisdfsdf');
        blurActive();
        console.log('soisdfsdf');
    }
});


// Paywallet image popup



let UserIdentificationbtn = document.querySelectorAll('.UserIdentification');

let UserInformationframe = document.getElementsByClassName('UserInformation');

let PersonalInformationFrame = document.getElementsByClassName('PersonalInfo');


// UserIdentificationbtn.forEach((CPicture) => {
//     CPicture.onclick = () => {
//         console.log("Soilo Baisa");
//         UserInformationframe[0].style.display = 'block';
//         PersonalInformationFrame[0].style.display = 'block';

//         searchframe.style.display = 'none';
//         customersearchframe.style.display = 'none';
//         vendorsearchframe.style.display = 'none';
//         customerframe[0].style.display = 'none';
//         // dashboardframe[0].style.display = 'none';
//         messengerframe[0].style.display = 'none';
//         vendorframe[0].style.display = 'none';
//         AddCustomerFrame[0].style.display = 'none';
//         AddVendorFrame[0].style.display = 'none';
//         adminframe[0].style.display = 'none';
//         AddAdminFrame[0].style.display = 'none';
//         transactionframe[0].style.display = 'none';
//         conTD[0].style.display = 'none';
//         conPW[0].style.display = 'none';
//     }
// })




let TransactionApprovalbtn = I('TransactionApprovalBtn');
let TransactionStatusbtn = I('TransactionStatusBtn');

let TransactionFrameApproval = C('Transaction-Approval');
let TransactionFrameHistory = C('Transaction-Status');

TransactionApprovalbtn.addEventListener('click', () => {
    TransactionFrameApproval[0].style.display = 'inline-table';
    TransactionFrameHistory[0].style.display = 'none';
    I('TransactionPrintBtn').style.display = 'none';
})

TransactionStatusbtn.addEventListener('click', () => {
    TransactionFrameApproval[0].style.display = 'none';
    TransactionFrameHistory[0].style.display = 'inline-table';
    I('TransactionPrintBtn').style.display = 'flex';
})







// Disable Customer 

let DisableCustomerExit = document.getElementById('Customer-Popup-Disable-Warning');
let CustomerDisablePopup = document.getElementsByClassName('Customer-Disable-Popup');

DisableCustomerExit.addEventListener('click', () => {
    CustomerDisablePopup[0].style.display = 'none';
    blurRemove1();
})

let CustomerDisabledBtn = document.querySelectorAll('.CDbtn');

    CustomerDisabledBtn.forEach((ClickCDB) => {
        ClickCDB.onclick = () => {
            CustomerDisablePopup[0].style.display = 'block';
            blurActive1();
        }
    });

// Enable Customer

let EnableCustomerExit = document.getElementById('Customer-Popup-Enable-Warning');
let CustomerEnablePopup = document.getElementsByClassName('Customer-Enable-Popup');

EnableCustomerExit.addEventListener('click', () => {
    CustomerEnablePopup[0].style.display = 'none';
    blurRemove1();
})

// let CustomerEnableBtn = document.querySelectorAll('.CEbtn');

//     CustomerEnableBtn.forEach((ClickCDB) => {
//         ClickCDB.onclick = () => {
//             CustomerEnablePopup[0].style.display = 'block';
//             blurActive1();
//         }
//     });

//sdfdsfmdfdslkfmslkfsdmksdfmsdklmfsd

// Vendor Area ONLYYYYYYYYYYYYYYYYYYYYYYYYYY!!!!!!!

// 1. Sorting | Ordering data of HTML table

// For Vendor Sorting

// UserInformation

// let UserIdentificationbtn = document.querySelectorAll('UserIdentification');

// let UserInformationframe = document.getElementsByClassName('UserInformation');







function sortTable2(n , evt){
    var table = document.querySelector('table'),
        thead = document.querySelector('.Vendor-thhead'),
        tbody = table.querySelector('tbody'),
        bRows = [...tbody.rows],
        hData = [...thead.querySelectorAll('.th2')],
        desc = false;

    hData.map ((head) =>{
        if( head != evt ) {
            head.classList.remove('asccc', 'desccc');
        }
    });
    
    desc = evt.classList.contains('asccc') ? true : false;
    evt.classList[desc ? 'remove' : 'add']('asccc');
    evt.classList[desc ? 'add' : 'remove']('desccc');
    // tbody.innerHTML = '';
    // bRows.sort( (a,b) =>{
    //     let x = a.getElementsByTagName('td')[n].innerHTML,
    //         y = b.getElementsByTagName('td')[n].innerHTML;
    //         return desc ? ( x < y ?  1 : -1) : ( x < y ?  -1 : 1);
    // });
    // bRows.map ( (bRow) =>{
    //     tbody.appendChild(bRow);  
    // })
      
}


function sortTable3(n , evt){
    var table = document.querySelector('table'),
        thead = document.querySelector('.Vendor-thead'),
        tbody = table.querySelector('tbody'),
        bRows = [...tbody.rows],
        hData = [...thead.querySelectorAll('.th3')],
        desc = false;

    hData.map ((head) =>{
        if( head != evt ) {
            head.classList.remove('ascccc', 'descccc');
        }
    });
    
    desc = evt.classList.contains('ascccc') ? true : false;
    evt.classList[desc ? 'remove' : 'add']('ascccc');
    evt.classList[desc ? 'add' : 'remove']('descccc');
    // tbody.innerHTML = '';
    // bRows.sort( (a,b) =>{
    //     let x = a.getElementsByTagName('td')[n].innerHTML,
    //         y = b.getElementsByTagName('td')[n].innerHTML;
    //         return desc ? ( x < y ?  1 : -1) : ( x < y ?  -1 : 1);
    // });
    // bRows.map ( (bRow) =>{
    //     tbody.appendChild(bRow);  
    // })
      
}


let VendorImagePopupClosebtn = document.getElementById('Vendor-Popup-Image-Exit');


let VendorIdentificationbtn = document.querySelectorAll('.Vendor-ID');
let VendorImagePopup = document.getElementsByClassName('Vendor-Popup-Image');

VendorImagePopupClosebtn.addEventListener('click' , () => {
    VendorImagePopup[0].style.display = 'none';
    blurRemove();
    console.log('soisdfsdf');
})


VendorIdentificationbtn.forEach((CPicture) => {
    CPicture.onclick = () => {
        VendorImagePopup[0].style.display = 'block';
        console.log('soisdfsdf');
        blurActive();
        console.log('soisdfsdf');
    }
});





// Disable Vendor 

let DisableVendorExit = document.getElementById('Vendor-Popup-Disable-Warning');
let VendorDisablePopup = document.getElementsByClassName('Vendor-Disable-Popup');

DisableVendorExit.addEventListener('click', () => {
    VendorDisablePopup[0].style.display = 'none';
    blurRemove1();
})

let VendorDisabledBtn = document.querySelectorAll('.VDbtn');

    VendorDisabledBtn.forEach((ClickCDB) => {
        ClickCDB.onclick = () => {
            VendorDisablePopup[0].style.display = 'block';
            blurActive1();
        }
    });

// Enable Vendor

let EnableVendorExit = document.getElementById('Vendor-Popup-Enable-Warning');
let VendorEnablePopup = document.getElementsByClassName('Vendor-Enable-Popup');

EnableVendorExit.addEventListener('click', () => {
    VendorEnablePopup[0].style.display = 'none';
    blurRemove1();
})

let VendorEnableBtn = document.querySelectorAll('.VEbtn');

    VendorEnableBtn.forEach((ClickCDB) => {
        ClickCDB.onclick = () => {
            VendorEnablePopup[0].style.display = 'block';
            blurActive1();
        }
    });

// Vendor Table Segeregation

let VendorApprovalBtn = document.getElementById('VendorApprovalBtn');

let VendorStatusBtn = document.getElementById('VendorStatusBtn');

let VendorAddBtn = document.getElementById('VendorAddBtn');

let AddVendorExitBtn = document.getElementById('AddVendorExit');

let MainVendorFrame = document.getElementsByClassName('Vendortable');

let VendorApprovalFrame = document.getElementsByClassName('Vendor-Approval');

let VendorStatusFrame = document.getElementsByClassName('Vendor-Status');

let AddVendorFrame = document.getElementsByClassName('V-infoContainer');

let NoVendorFrame = document.getElementsByClassName('Vendor-No-Vendor');

VendorApprovalBtn.addEventListener('click', () => {
    MainVendorFrame[0].style.display = 'block';
    VendorApprovalFrame[0].style.display = 'inline-table';
    VendorStatusFrame[0].style.display = 'none';
    AddVendorFrame[0].style.display = 'none';
    NoVendorFrame[0].style.display = 'none';
})

VendorStatusBtn.addEventListener('click', () => {
    VendorApprovalFrame[0].style.display = 'none';
    VendorStatusFrame[0].style.display = 'inline-table';
    MainVendorFrame[0].style.display = 'block';
    AddVendorFrame[0].style.display = 'none';
    NoVendorFrame[0].style.display = 'none';
})

VendorAddBtn.addEventListener('click', () =>{
    MainVendorFrame[0].style.display = 'block';
    AddVendorFrame[0].style.display = 'none';
    VendorApprovalFrame[0].style.display = 'none';
    VendorStatusFrame[0].style.display = 'none';
    NoVendorFrame[0].style.display = 'inline-table';
} )

AddVendorExitBtn.addEventListener('click', () => {
    MainVendorFrame[0].style.display = 'block';
    AddVendorFrame[0].style.display = 'none';
})




// Admin na dito okkkkkkkkkkkkkkkkkkk

// For Admin Sorting





function sortTable4(n , evt){
    var table = document.querySelector('table'),
        thead = document.querySelector('.Admin-thhead'),
        tbody = table.querySelector('tbody'),
        bRows = [...tbody.rows],
        hData = [...thead.querySelectorAll('.th4')],
        desc = false;

    hData.map ((head) =>{
        if( head != evt ) {
            head.classList.remove('asccccc', 'desccccc');
        }
    });
    
    desc = evt.classList.contains('asccccc') ? true : false;
    evt.classList[desc ? 'remove' : 'add']('asccccc');
    evt.classList[desc ? 'add' : 'remove']('desccccc');
    // tbody.innerHTML = '';
    // bRows.sort( (a,b) =>{
    //     let x = a.getElementsByTagName('td')[n].innerHTML,
    //         y = b.getElementsByTagName('td')[n].innerHTML;
    //         return desc ? ( x < y ?  1 : -1) : ( x < y ?  -1 : 1);
    // });
    // bRows.map ( (bRow) =>{
    //     tbody.appendChild(bRow);  
    // })
      
}


function sortTable5(n , evt){
    var table = document.querySelector('table'),
        thead = document.querySelector('.Admin-thead'),
        tbody = table.querySelector('tbody'),
        bRows = [...tbody.rows],
        hData = [...thead.querySelectorAll('.th5')],
        desc = false;

    hData.map ((head) =>{
        if( head != evt ) {
            head.classList.remove('ascccccc', 'descccccc');
        }
    });
    
    desc = evt.classList.contains('ascccccc') ? true : false;
    evt.classList[desc ? 'remove' : 'add']('ascccccc');
    evt.classList[desc ? 'add' : 'remove']('descccccc');
    // tbody.innerHTML = '';
    // bRows.sort( (a,b) =>{
    //     let x = a.getElementsByTagName('td')[n].innerHTML,
    //         y = b.getElementsByTagName('td')[n].innerHTML;
    //         return desc ? ( x < y ?  1 : -1) : ( x < y ?  -1 : 1);
    // });
    // bRows.map ( (bRow) =>{
    //     tbody.appendChild(bRow);  
    // })
      
}






let AdminImagePopupClosebtn = document.getElementById('Admin-Popup-Image-Exit');


let AdminIdentificationbtn = document.querySelectorAll('.Admin-ID');
let AdminImagePopup = document.getElementsByClassName('Admin-Popup-Image');

AdminImagePopupClosebtn.addEventListener('click' , () => {
    AdminImagePopup[0].style.display = 'none';
    blurRemove();
    console.log('soisdfsdf');
})


AdminIdentificationbtn.forEach((CPicture) => {
    CPicture.onclick = () => {
        AdminImagePopup[0].style.display = 'block';
        console.log('soisdfsdf');
        blurActive();
        console.log('soisdfsdf');
    }
});





// Disable Admin 

let DisableAdminExit = document.getElementById('Admin-Popup-Disable-Warning');
let AdminDisablePopup = document.getElementsByClassName('Admin-Disable-Popup');

DisableAdminExit.addEventListener('click', () => {
    AdminDisablePopup[0].style.display = 'none';
    blurRemove();
})

let AdminDisabledBtn = document.querySelectorAll('.ADbtn');

    AdminDisabledBtn.forEach((ClickCDB) => {
        ClickCDB.onclick = () => {
            AdminDisablePopup[0].style.display = 'block';
            blurActive();
        }
    });

// Enable Vendor

let EnableAdminExit = document.getElementById('Admin-Popup-Enable-Warning');
let AdminEnablePopup = document.getElementsByClassName('Admin-Enable-Popup');

EnableAdminExit.addEventListener('click', () => {
    AdminEnablePopup[0].style.display = 'none';
    blurRemove();
})

let AdminEnableBtn = document.querySelectorAll('.AEbtn');

    AdminEnableBtn.forEach((ClickCDB) => {
        ClickCDB.onclick = () => {
            AdminEnablePopup[0].style.display = 'block';
            blurActive();
        }
    });

// Vendor Table Segeregation

let AdminApprovalBtn = document.getElementById('AdminApprovalBtn');

let AdminStatusBtn = document.getElementById('AdminStatusBtn');

let AdminAddBtn = document.getElementById('AdminAddBtn');

let SuperAdminbtn = document.getElementById('SuperAdminbtn');

let SuperAdminAddBtn = document.getElementById('SuperAdminAddBtn');

let AddAdminExitBtn = document.getElementById('AddAdminExit');

let MainAdminFrame = document.getElementsByClassName('Admintable');

let MainSuperAdminFrame = document.getElementsByClassName('SuperAdmintable');

let AdminApprovalFrame = document.getElementsByClassName('Admin-Approval');

let AdminStatusFrame = document.getElementsByClassName('Admin-Status');

let AddAdminFrame = document.getElementsByClassName('A-infoContainer');

let AddSuperAdminFrame = document.getElementsByClassName('SA-infoContainer');

AdminApprovalBtn.addEventListener('click', () => {
    C('SA-infoContainer')[0].style.display = 'none';
    MainAdminFrame[0].style.display = 'inline-table';
    // AdminApprovalFrame[0].style.display = 'inline-table';
    AdminStatusFrame[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    MainSuperAdminFrame[0].style.display = 'none';
    // SuperAdminAddBtn[0].style.display = 'none';
    // C('SA-infoContainer')[0].style.display = 'none';
})

SuperAdminbtn.addEventListener('click', () => {
    C('SA-infoContainer')[0].style.display = 'none';
    MainAdminFrame[0].style.display = 'none';
    // AdminApprovalFrame[0].style.display = 'inline-table';
    AdminStatusFrame[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    MainSuperAdminFrame[0].style.display = 'inline-table';
    console.log('SuperAdmin')
    // SuperAdminAddBtn[0].style.display = 'none';
    // C('SA-infoContainer')[0].style.display = 'none';
})

AdminAddBtn.addEventListener('click', () =>{
    MainAdminFrame[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'block';
    AddSuperAdminFrame[0].style.display = 'none';
    MainSuperAdminFrame[0].style.display = 'none';
} )

SuperAdminAddBtn.addEventListener('click', () =>{
    MainAdminFrame[0].style.display = 'none';
    AddAdminFrame[0].style.display = 'none';
    AddSuperAdminFrame[0].style.display = 'block';
    MainSuperAdminFrame[0].style.display = 'none';
} )

// AddAdminExitBtn.addEventListener('click', () => {
//     MainAdminFrame[0].style.display = 'block';
//     AddAdminFrame[0].style.display = 'none';
// })





// 2. Converting HTML table to PDF

const pdf_btn = document.querySelector('#toPDF');
const customers_table = document.querySelector('#customers_table');

const toPDF = function (customers_table) {
    const html_code = `
    <link rel="stylesheet" href="style.css">
    <main class="table" >${customers_table.innerHTML}</main>
    `;

    const new_window = window.open();
    new_window.document.write(html_code);

    setTimeout(() => {
        new_window.print();
        new_window.close();
    }, 400);
}

// pdf_btn.onclick = () => {
//     toPDF(customers_table);
// }



// Blur Background


function blurActive(){
    let blur = document.getElementById('blur');
    blur.classList.toggle('active');
}

function blurRemove(){
    let blur = document.getElementById('blur');
    blur.classList.remove('active');
}

function blurActive1(){
    let blur = document.getElementById('blur');
    blur.classList.toggle('activee');
}

function blurRemove1(){
    let blur = document.getElementById('blur');
    blur.classList.remove('activee');
}

// Customer Table Segeregation

let CustomerApprovalBtn = document.getElementById('CustomerApprovalBtn');

let CustomerStatusBtn = document.getElementById('CustomerStatusBtn');

let CustomerAddBtn = document.getElementById('CustomerAddBtn');

let AddCustomerExitBtn = document.getElementById('AddCustomerExit');

let CustomerReportsBtn = document.getElementById('CustomerReportBtn');

let CustomerTablediv = C('Customertable');



let MainCustomerFrame = document.getElementsByClassName('Customertable');

let CustomerApprovalFrame = document.getElementsByClassName('Customer-Approval');

let CustomerStatusFrame = document.getElementsByClassName('Customer-Status');

let AddCustomerFrame = document.getElementsByClassName('infoContainer');

let CustomerReportsFrame = document.getElementsByClassName('Customer-Reports');

CustomerApprovalBtn.addEventListener('click', () => {
    CustomerApprovalFrame[0].style.display = 'inline-table';
    CustomerTablediv[0].style.display = 'block';
    CustomerStatusFrame[0].style.display = 'none';
    CustomerReportsFrame[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
})

CustomerStatusBtn.addEventListener('click', () => {
    CustomerApprovalFrame[0].style.display = 'none';
    CustomerStatusFrame[0].style.display = 'inline-table';
    CustomerTablediv[0].style.display = 'block';
    CustomerReportsFrame[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'none';
})

CustomerAddBtn.addEventListener('click', () =>{
    MainCustomerFrame[0].style.display = 'none';
    AddCustomerFrame[0].style.display = 'block';
    // CustomerReportsFrame[0].style.display = 'none';

} )

CustomerReportsBtn.addEventListener('click', () => {
    CustomerApprovalFrame[0].style.display = 'none';
    CustomerStatusFrame[0].style.display = 'none';
    CustomerReportsFrame[0].style.display = 'inline-table';
    CustomerTablediv[0].style.display = 'block';
    AddCustomerFrame[0].style.display = 'none';
})

// AddCustomerExitBtn.addEventListener('click', () => {
//     MainCustomerFrame[0].style.display = 'block';
//     AddCustomerFrame[0].style.display = 'none';
// })


// Customer Reports sa transaction na dito ahhhhh

let CustomerTabsMinus = document.getElementsByClassName('Minus-Customer-Tabs');

function AddTabsCustomer(){

    let CustomerTabsID = document.getElementById("Customer-Tabs-ID");

    let Tabs = `
    <div class="C-Tabs">
        <div class="C-Tabs-label">
            T-0000001
        </div>
        <div class="Minus-Customer-Tabs">
            <span class="material-symbols-outlined" >close</span>
        </div>
    </div>
    `;

    
    console.log(Tabs);
    CustomerTabsID.insertAdjacentHTML("beforeend", Tabs);

    // AddTabsCustomer();

    for (let a = 0; a < C('Minus-Customer-Tabs').length ; a++) {
        let sovietisback = C('Minus-Customer-Tabs')[a];
        sovietisback.removeEventListener("click", removeC);
        sovietisback.addEventListener("click", removeC); 
    }
}

let CustomerReportsTransactionNo = document.querySelectorAll('.Customer-Transation-Reports');

CustomerReportsTransactionNo.forEach((CPicture) => {
    CPicture.onclick = () => {
       
        console.log('Customer Transaction Reports Dito');

        
        AddTabsCustomer();
        
    }
});

function removeC() {    
    let nd2 = this.parentNode;
    let nd3 = nd2.parentNode;
    let nd4 = nd3.parentNode;
    nd4.remove();
 }

 let cancellationFrame = C('cancellationdetails');
 let cancellationexitbtn = I('cancellationexit');

 cancellationexitbtn.addEventListener('click', () => {
    cancellationFrame[0].style.display = 'none';
    // I('cancellationgcashreturn').style.opacity = '0';
    // I('cancellationgcashreturn').src = "";
    // C('cancellationdetailsgcashimglabel')[0].style.display = 'flex';
    // I('cancellationgcashreturnbtn').src = '';
 })



// Chart

// const ctx = document.getElementById('myChart');/
const earnings = document.getElementById('earnings');




// loadchart();

function loadchart(){
    let form_data = new FormData();
            

    form_data.append("wtype","loadchartpayment");
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (response) {

            console.log(response);


            let gcd = JSON.parse(response);
            console.log(gcd);
            let cc =0;
            let ccc=0;
            for(let i = 0; i < gcd.length; i++){
                // let cc = parseInt(gcd[i]['PaymentMethod'] );
                if(gcd[i]['PaymentMethod'] == 'Arkiease Wallet'){
                    cc++;
                }

                else if(gcd[i]['PaymentMethod'] == 'GCASH'){
                    ccc++;
                }
            }
            console.log(cc);

            new Chart(ctx, {
                type: 'polarArea',
                data: {
                  labels: ['Wallet', 'G-Cash'],
                  datasets: [{
                    label: 'No. of Used',
                    data: [parseInt(cc), parseInt(ccc)],
                    borderWidth: 1
                  }]
                },
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }
              });
        }
    });
}


//   new Chart(ctx, {
//     type: 'polarArea',
//     data: {
//       labels: ['Wallet', 'G-Cash'],
//       datasets: [{
//         label: 'No. of Used',
//         data: [12, 19],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });

  new Chart(earnings, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October' ,'November', 'December'],
      datasets: [{
        label: 'No. of Rents',
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 50],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
          
        }
      }
      
    }
  });

//   Messenger

// let ShowUserbtn = document.getElementById('UserShowMessage');
// let userlistFrame = document.getElementsByClassName('user-list');
// let MessagesFrame = document.getElementsByClassName('Messages');
// let InputMessageFrame = document.getElementsByClassName('InputMessage');

// ShowUserbtn.addEventListener('click', () =>{
//     userlistFrame[0].style.display = 'block';
//     userlistFrame[0].style.width = '97%';
//     MessagesFrame[0].style.display = 'none';
//     InputMessageFrame[0].style.display = 'none';
// })


// Upload Image




const image_input = document.querySelector("#Customer_image_input");

var uploaded_image = "";

image_input.addEventListener("change" , function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})

// 2

const image_input2 = document.querySelector("#Customer_image_input2");

var uploaded_image2 = "";

image_input2.addEventListener("change" , function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploaded_image2 = reader.result;
        document.querySelector("#display_image2").style.backgroundImage = `url(${uploaded_image2})`;
    });
    reader.readAsDataURL(this.files[0]);
})





// add vendor image

const image_input_vendor = document.querySelector("#Vendor_image_input");

var uploaded_image3 = "";

image_input_vendor.addEventListener("change" , function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploaded_image3 = reader.result;
        document.querySelector("#display_image_vendor").style.backgroundImage = `url(${uploaded_image3})`;
    });
    reader.readAsDataURL(this.files[0]);
})

// 2

const image_input_vendor2 = document.querySelector("#Vendor_image_input2");

var uploaded_image4 = "";

image_input_vendor2.addEventListener("change" , function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploaded_image4 = reader.result;
        document.querySelector("#display_image_vendor2").style.backgroundImage = `url(${uploaded_image4})`;
    });
    reader.readAsDataURL(this.files[0]);
})


const image_input_vendor3 = document.querySelector("#Vendor_image_input3");

var uploaded_image5 = "";

image_input_vendor3.addEventListener("change" , function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploaded_image5 = reader.result;
        document.querySelector("#display_image_vendor3").style.backgroundImage = `url(${uploaded_image5})`;
    });
    reader.readAsDataURL(this.files[0]);
})

// 2

const image_input_vendor4 = document.querySelector("#Vendor_image_input4");

var uploaded_image6 = "";

image_input_vendor4.addEventListener("change" , function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        uploaded_image6 = reader.result;
        document.querySelector("#display_image_vendor4").style.backgroundImage = `url(${uploaded_image6})`;
    });
    reader.readAsDataURL(this.files[0]);
})

I('completefile').addEventListener('click', ()=> {
    let text = I('filename').value;
    I('completefn').value = "\\"+"\\DESKTOP-6BVEP6A\\project\\adminincludes\\"+ text.substring(12, 100);
    // I('completefn').value = "\\"+"\\DESKTOP-6BVEP6A\\project\\adminincludes\\"+ I('filename').value;
    console.log("C:\\Users\\Huawei\\Downloads\\"+I('filename').value);
})


const image_input_gcash1 = document.querySelector("#ChangeGcashImage");

var uploaded_image7 = "";

image_input_gcash1.addEventListener("change" , function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        I('GcashAdmin').src = '';
        uploaded_image7 = reader.result;
        document.querySelector("#GcashAdmin").style.backgroundImage = `url(${uploaded_image7})`;
    });
    reader.readAsDataURL(this.files[0]);

})



const image_change_DP = document.querySelector("#changeDP");

var uploaded_image8 = "";

image_change_DP.addEventListener("change" , function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        I('MyDP').src = '';
        uploaded_image8 = reader.result;
        document.querySelector("#MyDP").style.backgroundImage = `url(${uploaded_image8})`;
    });
    reader.readAsDataURL(this.files[0]);

})

I('saveChangeDP').addEventListener('click' , () =>{
    if(I('changeDP').value == ''){
        console.log('Walang image');
    }
    else{
        let form_data = new FormData(); 

        let uploaddropid = I('changeDP');
        form_data.append("fileID",uploaddropid.files[0]);
        form_data.append("USERID",I('Admin_ID').innerHTML);
        form_data.append("wtype","UpdateDP");
        
        $.ajax({
            url:'../adminincludes/data.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            success: function (Indicator) {
                I('changeDP').value = '';
            }
        })
        console.log('Meron image');
    }
})

// Account settings dito

let accountbtn = document.getElementById("ASaccount");
let contactsbtn = document.getElementById("AScontacts");
let addressbtn = document.getElementById("ASaddress");
let usernamebtn = document.getElementById("ASusername");
let ASclosebtn = document.getElementById('ASclose');


let ASframe = document.getElementsByClassName('AScontainer');
let accountframe = document.getElementById('AccountASframe');
let contactsframe = document.getElementById('ContactsASframe');
let addressframe = document.getElementById('AddressASframe');
let usernameframe = document.getElementById('UsernameASframe');



let accountUDbtn = document.getElementById("AccountUD");
let contactsUDbtn = document.getElementById("ContactsUD");
let addressUDbtn = document.getElementById("AddressUD");
let usernameUDbtn = document.getElementById("UsernameUD");

ASclosebtn.addEventListener('click' , () => {
    ASframe[0].style.display = 'none';
    blurRemove1();
})



accountbtn.addEventListener('click', ()=>{
    accountframe.style.display = 'block';
    accountframe.style.display = 'flex';

    contactsframe.style.display = 'none';
    addressframe.style.display = 'none';
    usernameframe.style.display = 'none';

    accountUDbtn.style.display = 'block';
    accountUDbtn.style.display = 'flex';
    contactsUDbtn.style.display = 'none';
    addressUDbtn.style.display = 'none';
    usernameUDbtn.style.display = 'none';
})

contactsbtn.addEventListener('click', ()=>{
    contactsframe.style.display = 'block';
    contactsframe.style.display = 'flex';

    accountframe.style.display = 'none';
    addressframe.style.display = 'none';
    usernameframe.style.display = 'none';

    contactsUDbtn.style.display = 'block';
    contactsUDbtn.style.display = 'flex';
    accountUDbtn.style.display = 'none';
    addressUDbtn.style.display = 'none';
    usernameUDbtn.style.display = 'none';
})

addressbtn.addEventListener('click', ()=>{
    addressframe.style.display = 'block';
    addressframe.style.display = 'flex';

    accountframe.style.display = 'none';
    contactsframe.style.display = 'none';
    usernameframe.style.display = 'none';

    addressUDbtn.style.display = 'block';
    addressUDbtn.style.display = 'flex';
    accountUDbtn.style.display = 'none';
    contactsUDbtn.style.display = 'none';
    usernameUDbtn.style.display = 'none';
})

addressbtn.addEventListener('click', ()=>{
    addressframe.style.display = 'block';
    addressframe.style.display = 'flex';

    accountframe.style.display = 'none';
    contactsframe.style.display = 'none';
    usernameframe.style.display = 'none';

    addressUDbtn.style.display = 'block';
    addressUDbtn.style.display = 'flex';
    accountUDbtn.style.display = 'none';
    contactsUDbtn.style.display = 'none';
    usernameUDbtn.style.display = 'none';
})

usernamebtn.addEventListener('click', ()=>{
    usernameframe.style.display = 'block';
    usernameframe.style.display = 'flex';

    accountframe.style.display = 'none';
    contactsframe.style.display = 'none';
    addressframe.style.display = 'none';

    usernameUDbtn.style.display = 'block';
    usernameUDbtn.style.display = 'flex';
    accountUDbtn.style.display = 'none';
    contactsUDbtn.style.display = 'none';
    addressUDbtn.style.display = 'none';
})


// Server settings na dito ahhhh


let ssadminpermission = document.getElementById('SSadminpermission');
// let ssserversettings = document.getElementById('SSserversettings');
let ssservermemory = document.getElementById('SSservermemory');
// let ssresetdatabase = document.getElementById('SSresetdatabase');
let SSchangegcash = I('SSchangegcash');

let ssadminpermissionframe = document.getElementsByClassName('AdminPermissionFrame');
let ssserversettingsframe = document.getElementsByClassName('ServerSettingsFrame');
let ssservermemoryframe = document.getElementsByClassName('ServerMemoryFrame');
let ssresetdatabaseframe = document.getElementsByClassName('ResetDatabaseServer');
let GcashSystem = C('GcashSystem')[0];

// ssadminpermission.addEventListener('click', () => {
//     console.log('Soilo pogi');
//     ssadminpermissionframe[0].style.display = 'block';
//     // ssserversettingsframe[0].style.display = 'none';
//     ssservermemoryframe[0].style.display = 'none';
//     ssresetdatabaseframe[0].style.display = 'none';
//     GcashSystem.style.display = 'none';
// });

// ssserversettings.addEventListener('click', () => {
//     ssadminpermissionframe[0].style.display = 'none';
//     // ssserversettingsframe[0].style.display = 'block';
//     ssservermemoryframe[0].style.display = 'none';
//     ssresetdatabaseframe[0].style.display = 'none';
//     GcashSystem.style.display = 'none';
// });

ssservermemory.addEventListener('click', () => {
    ssadminpermissionframe[0].style.display = 'none';
    // ssserversettingsframe[0].style.display = 'none';
    C('restoreDatabaseFrame')[0].style.display = 'none';
    ssservermemoryframe[0].style.display = 'block';
    ssresetdatabaseframe[0].style.display = 'none';
    GcashSystem.style.display = 'none';
});

I('restoredatabase').addEventListener('click', ()=> {
    C('restoreDatabaseFrame')[0].style.display = 'block';
    ssadminpermissionframe[0].style.display = 'none';
    // ssserversettingsframe[0].style.display = 'none';
    
    ssservermemoryframe[0].style.display = 'none';
    ssresetdatabaseframe[0].style.display = 'none';
    GcashSystem.style.display = 'none';
})

// ssresetdatabase.addEventListener('click', () => {
//     ssadminpermissionframe[0].style.display = 'none';
//     // ssserversettingsframe[0].style.display = 'none';
//     ssservermemoryframe[0].style.display = 'none';
//     ssresetdatabaseframe[0].style.display = 'block';
//     GcashSystem.style.display = 'none';
// });

SSchangegcash.addEventListener('click', () => {
    ssadminpermissionframe[0].style.display = 'none';
    // ssserversettingsframe[0].style.display = 'none';
    C('restoreDatabaseFrame')[0].style.display = 'none';
    ssservermemoryframe[0].style.display = 'none';
    ssresetdatabaseframe[0].style.display = 'none';
    GcashSystem.style.display = 'flex';
})


// Exit sa Server Settings

let SSexitbtn = document.getElementById("SSexit");

let Serversettingsframe = document.getElementsByClassName("SScontainer");

SSexitbtn.addEventListener("click", () => {
    Serversettingsframe[0].style.display= "none";
    blurRemove();
})



// Reports na dito

let UserActivity = document.getElementsByClassName('User-Activity');
let RentalPerformance = document.getElementsByClassName('Rental-Performance');
let GeographicalInsights = document.getElementsByClassName('Geographical-Insights');
let BookingsandPayments = document.getElementsByClassName('Booking-Payments');
let renterT = document.getElementsByClassName('Renter-Transaction-log');
let RRL = I('RRL');
let RRRL = I('RRRL');

let btnUserActivity = document.getElementById('useractivity');
let btnrentalperformance = document.getElementById('rentalperformance');
let btngeographicalinsights = document.getElementById('geographicalinsights');
let btnbookingsandpayments = document.getElementById('bookingsandpayments');
let renterTbtn = document.getElementById('renterT');
let renteereportbtn = I('renteereport');
let rentalreportbtn = I('rentalreport');

btnUserActivity.addEventListener('click' ,()=>{
    UserActivity[0].style.display = 'block';
    RentalPerformance[0].style.display = 'none';
    GeographicalInsights[0].style.display = 'none';
    BookingsandPayments[0].style.display = 'none';
    renterT[0].style.display = 'none';
    RRL.style.display = 'none';
    RRRL.style.display = 'none';
})

btnrentalperformance.addEventListener('click' ,()=>{
    UserActivity[0].style.display = 'none';
    RentalPerformance[0].style.display = 'block';
    GeographicalInsights[0].style.display = 'none';
    BookingsandPayments[0].style.display = 'none';
    renterT[0].style.display = 'none';
    RRL.style.display = 'none';
    RRRL.style.display = 'none';
})

btngeographicalinsights.addEventListener('click' , ()=>{
    
    UserActivity[0].style.display = 'none';
    RentalPerformance[0].style.display = 'none';
    GeographicalInsights[0].style.display = 'block';
    BookingsandPayments[0].style.display = 'none';
    renterT[0].style.display = 'none';
    RRL.style.display = 'none';
    RRRL.style.display = 'none';
})

btnbookingsandpayments.addEventListener('click' ,()=>{
    UserActivity[0].style.display = 'none';
    RentalPerformance[0].style.display = 'none';
    GeographicalInsights[0].style.display = 'none';
    BookingsandPayments[0].style.display = 'block';
    renterT[0].style.display = 'none';
    RRL.style.display = 'none';
    RRRL.style.display = 'none';
})

renterTbtn.addEventListener('click' , () => {
    UserActivity[0].style.display = 'none';
    RentalPerformance[0].style.display = 'none';
    GeographicalInsights[0].style.display = 'none';
    BookingsandPayments[0].style.display = 'none';
    renterT[0].style.display = 'block';
    RRL.style.display = 'none';
    RRRL.style.display = 'none';
})

renteereportbtn.addEventListener('click' , () => {
    UserActivity[0].style.display = 'none';
    RentalPerformance[0].style.display = 'none';
    GeographicalInsights[0].style.display = 'none';
    BookingsandPayments[0].style.display = 'none';
    renterT[0].style.display = 'none';
    RRL.style.display = 'block';
    RRRL.style.display = 'none';
})

rentalreportbtn.addEventListener('click', () => {
    UserActivity[0].style.display = 'none';
    RentalPerformance[0].style.display = 'none';
    GeographicalInsights[0].style.display = 'none';
    BookingsandPayments[0].style.display = 'none';
    renterT[0].style.display = 'none';
    RRL.style.display = 'none';
    RRRL.style.display = 'block';
})
// Add ng address sa customer dito


let customerPlusAddress = document.getElementsByClassName('plusaddress');

let customerMinusAddress = document.getElementsByClassName('minusaddress');


// println(customerPlusAddress[0]);
// customerPlusAddress[0].addEventListener("click", addAddressBox); 

function addAddressBox (){
    
    let addressplatform = document.getElementById("AddressPlatform");

    let su35 = `
    
    <div class="current_address"  >

        <div class="widget-platform">
            <div class="address-widgets">
                <div class="plusaddress">
                    <span class="material-symbols-outlined" id="addcircle" >add_circle</span>
                </div>
                <div class="minusaddress">
                    <span class="material-symbols-outlined" >close</span>
                </div>
            </div>
        </div>

        <div class="user-input-box">
            <label for="House">Address</label>
            <input type="text"
                    id="HouseAddress"
                    name="HouseAddress"
                    placeholder="House/Unit/Flr #, Bldg Name, Blk or Lot #"/>
        </div>

        <div class="user-input-box">
            <label for="Cellphone">Cellphone</label>
            <input type="text"
                    id="Cellphone"
                    name="Cellphone"
                    placeholder="Enter Cellphone Number"/>
        </div>

        <div class="user-input-box">
            <label for="Region">Region</label>
            <select name="formatRegion" id="selectRegion" placeholder="Region">
                <option selected disabled>Region</option>
                    
            </select>
        </div>

        <div class="user-input-box">
            <label for="Province">Province</label>
            <select name="formatProvince" id="selectProvince" placeholder="Province">
                <option selected disabled>Province</option>
                    
            </select>
        </div>

        <div class="user-input-box">
            <label for="City">City</label>
            <select name="formatCity" id="selectCity" placeholder="City">
                <option selected disabled>City</option>
                    
            </select>
        </div>

        <div class="user-input-box">
            <label for="Barangay">Barangay</label>
            <select name="formatBarangay" id="selectBarangay" placeholder="Barangay">
                <option selected disabled>Barangay</option>
                    
            </select>
        </div>

    </div>

    
    `;
    
    
 
    addressplatform.insertAdjacentHTML("beforeend", su35);

    for (let a = 0; a < C('plusaddress').length ; a++) {
        let slavarussia = C('plusaddress')[a];
        slavarussia.removeEventListener("click", addAddressBox)
        slavarussia.addEventListener("click", addAddressBox); 
    }


    for (let a = 0; a < C('minusaddress').length ; a++) {
        let sovietisback = C('minusaddress')[a];
        sovietisback.removeEventListener("click", removeAddress)
        sovietisback.addEventListener("click", removeAddress); 
     }

    
}

function removeAddress() {    
    // console.log("russia is bad, usa is awesome");
    let nd2 = this.parentNode;
    let nd3 = nd2.parentNode;
    let nd4 = nd3.parentNode;
    nd4.remove();
 }



// Information ng customer dito

let PIbtn = I('Personal_Information');
let RPbtn = I('Rented_Products');
let REPbtn = I('Reset_Password');
let VDbtn = I('Vendor_Details');

let PIframe = C('PersonalInfo');
let RPframe = C('containerPP');
let REPframe = C('ResetPassword');
let CPframe = C('containerP');

PIbtn.addEventListener("click", ()=>{
    PIframe[0].style.display = 'block';
    RPframe[0].style.display = 'none';
    REPframe[0].style.display = 'none';
    CPframe[0].style.display = 'none';
    CPframe[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
})


RPbtn.addEventListener("click", ()=>{
    PIframe[0].style.display = 'none';
    RPframe[0].style.display = 'block';
    REPframe[0].style.display = 'none';
    CPframe[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
})

REPbtn.addEventListener("click", () => {
    PIframe[0].style.display = 'none';
    RPframe[0].style.display = 'none';
    REPframe[0].style.display = 'flex';
    CPframe[0].style.display = 'none';
    C('AdminInformation2')[0].style.display = 'none';
})

VDbtn.addEventListener('click', () => {
    I('User_Vendor_Details').innerHTML = '';
    PIframe[0].style.display = 'none';
    RPframe[0].style.display = 'none';
    REPframe[0].style.display = 'none';
    CPframe[0].style.display = 'block';
    C('AdminInformation2')[0].style.display = 'none';
    loadVendorProduct();
})
//  Para sa pag insert ng customer dito


I('AAdmin_Reset_Passwordd').addEventListener('click', () => {
    console.log('Reset');
    C('PersonalInfo')[2].style.display = 'none'
    // I('AAdminPersonalInfo').style.display = 'none';
    I('AAdmin_Reset_Password').style.display = 'flex';
})

I('AAdmin_Personal_Information').addEventListener('click', ()=>{
    C('PersonalInfo')[2].style.display = 'block'
    // I('AAdminPersonalInfo').style.display = 'none';
    I('AAdmin_Reset_Password').style.display = 'none';
})

// 


let uploaddropid = document.getElementById("display_image"),
uploaddropselfie = document.getElementById("display_image2");


// let USERID;

function loadUserID(){
    let form_data = new FormData();
            

    form_data.append("wtype","forGetReserveID1");
    $.ajax({
        url:'../adminincludes/signup-module1.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (response) {
            // console.log(response);
            //  USERID = response;
            // loadAddress(response);
        }
    });
}

// LoginAdmin();


    
// function loadAddress(USERID) {
//     // let addressform = document.getElementsByClassName("current_address");
   
//         let FULLADDRESS, PHONENUMBER, REGION, PROVINCE, CITY, BARANGAY;                    
                  
//         REGION = I('Customer_selectRegion').selvalue();          
//         PROVINCE = I('Customer_selectProvince').selvalue();
//         CITY = I('Customer_selectCity').selvalue();
//         BARANGAY = I('Customer_selectBarangay').selvalue();
//         FULLADDRESS = I('Customer_HouseAddress').value;
//         PHONENUMBER = I('Customer_Cellphone2').value;
            
//             let form_data = new FormData();
//             console.log(USERID);
//             form_data.append("USERID",USERID);
//             form_data.append("ADDRESSTITLE","Main Address");
//             form_data.append("FULLADDRESS",FULLADDRESS);
//             form_data.append("PHONENUMBER",PHONENUMBER);
//             form_data.append("REGION",REGION);
//             form_data.append("PROVINCE",PROVINCE);
//             form_data.append("CITY",CITY);
//             form_data.append("BARANGAY",BARANGAY);
//             form_data.append("wtype","forAddress");            
//      $.ajax({
//         url:'../adminincludes/signup-module1.php',
//         method:'POST',
//         data:form_data,
//         contentType:false,
//         cache:false,
//         processData:false,
//         success: function () {
//                     // console.log(response);
//                     //  USERID = response;
//         }
//     });
// }
        // $(document).ajaxStop(function(){
        //     alreadyreg = 1;
        //     MicroModal.close('loading-upload'); // [2]
        //     MicroModal.show('register-upload',{
        //         disableScroll: true,
        //         awaitCloseAnimation: true,
        //         onShow: function(modal){
        //             let REGISTERCPLT = I('REGISTERCPLT');
        //             let ACCOUNTREGNAME = I('ACCOUNTREG-NAME');
        //             let UpUSERNAMEBOX = I('USERNAMEBOX').value;
        //             ACCOUNTREGNAME.innerText = UpUSERNAMEBOX;
        //             resetScroll();
        //             REGISTERCPLT.onclick = function() {
        //                 setc('userID', USERID);
        //                 window.location = "homepage.php";
        //             }
        //         },
        //     });
        // });

// function buildTable(data){
//     let cancellationTableFetch = I('cancellationTableFetch');
//     cancellationTableFetch.innerHTML = '';

//     for(var i = 0; i < data.length; i++){
//         var row = `
                
//         <tr>
//             <td>${data[i]['TransactionID']}</td>
//             <td>${data[i]['Customer']}</td>
//             <td>${data[i]['FirstName']} ${data[i]['MiddleName']} ${data[i]['LastName']}</td>
//             <td>${data[i]['Vendor']}</td>
//             <td>${data[i]['StoreName']}</td>
//             <td>${data[i]['ReceiptNumber']}</td>
//             <td>${data[i]['PaymentMethod']}</td>
//             <td></td>
//             <td class="cancellationTableFetch">${'--'}</td>                            
//         </tr>  
//         `;
//         cancellationTableFetch.innerHTML += row;
//     }
// }

// function searchtable(value, data){
//     var filtereddata = [];

//     for( var i = 0; i < data.length; i++){
//         value = value.toLowerCase();
//         // var name = data[i].name.toLowerCase();
        
//         // if(name.includes(value)){
//             filtereddata.push(data[i]);
//         // }
//     }
//     return filtereddata;
// }

// Disaled Product

I('commentBtn').addEventListener('click' , () => {
    // console.log('disalbed na!');

    

    Swal.fire({
        title: "Are you sure you want to disable the product?",
        // text: "You !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, disable it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        const { value: text } = await Swal.fire({
            input: "textarea",
            inputLabel: "Message",
            inputPlaceholder: "Type your message here...",
            inputAttributes: {
              "aria-label": "Type your message here"
            },
            showCancelButton: true
          });
          if (text) {
            // Swal.fire(text);
            console.log(text);
                let form_data = new FormData(); 
                form_data.append("PRODUCTID",I('commentProductID').innerHTML);
                form_data.append("wtype","CheckAvailability");
                
                $.ajax({
                    url:'../adminincludes/InformationLoad.php',
                    method:'POST',
                    data:form_data,
                    contentType:false,
                    cache:false,
                    processData:false,
                    beforeSend: function(){
                        C('containerloader')[0].style.display = 'block';
                    },
                    success: function (CheckAvailability) {
                        // console.log(CheckAvailability);
                        let gcd = JSON.parse(CheckAvailability);
                        C('containerloader')[0].style.display = 'none';
                        Swal.fire({
                            title: "Product Disabled",
                            // text: "That thing is still around?",
                            icon: "success"

                           
                        });

                        // notificationInsert3(I('commentStoreID').innerHTML,`Your product No. .${I('commentProductID').innerHTML}. has been disabled by Admin! Here's why: .${text}.`, 
                        // "itempage.php?productid="`${I('commentProductID').innerHTML}` ,"inventory_2", "1","");
                    }
                })
          }

        //   let form_data = new FormData(); 
        //     form_data.append("PRODUCTID",I('commentProductID').innerHTML);
        //     form_data.append("wtype","CheckAvailability");
            
        //     $.ajax({
        //         url:'../adminincludes/InformationLoad.php',
        //         method:'POST',
        //         data:form_data,
        //         contentType:false,
        //         cache:false,
        //         processData:false,
        //         beforeSend: function(){
        //             C('containerloader')[0].style.display = 'block';
        //         },
        //         success: function (CheckAvailability) {
        //             console.log(CheckAvailability);
        //             let gcd = JSON.parse(CheckAvailability);
        //             C('containerloader')[0].style.display = 'none';
        //             Swal.fire({
        //                 title: "Product Disabled",
        //                 // text: "That thing is still around?",
        //                 icon: "success"
        //               });
        //         }
        //     })
        }
      });
})

I('CancelRefNumber').addEventListener('input', () => {
    if(I('CancelRefNumber').value != ''){
        I('CancelRefNumber').style.borderColor = 'black';
    }
})

I('CancellationRenteeBtn').addEventListener('click', () => {
    if(I('CancelRefNumber').value == ''){
        I('CancelRefNumber').style.borderColor = 'red';
        Swal.fire({
            title: "Reference Number?",
            text: "Please insert the reference number!",
            icon: "warning"
          });
    }
    else{
        Swal.fire({
            title: "Are you sure you want to approve this cancellation?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
          }).then((result) => {
            if (result.isConfirmed) {
                let form_data = new FormData(); 
                form_data.append("REF",I('CancelRefNumber').value);
                form_data.append("GLOBALRECEIPTNUMBER", I('CancellDetailsRNo').innerHTML);
                form_data.append("USERID", I('AdminFullName').innerHTML);
                form_data.append("wtype","ApprovedRenteeCancellation");
                
                $.ajax({
                    url:'../adminincludes/data.php',
                    method:'POST',
                    data:form_data,
                    contentType:false,
                    cache:false,
                    processData:false,
                    success: function (Indicator) {
                        C('CancellDetails')[0].style.display = 'none';
                        Swal.fire({
                            title: "Cancel Request Done!",
                            text: "The Transaction is now already Cancelled",
                            icon: "success"
                          });
                        blurRemove();
                    }
                })
            }
          });
        
    }
});
IndicatorLoad();
function IndicatorLoad(){
    let form_data = new FormData(); 
    form_data.append("wtype","loadIndicatorData");
    
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (Indicator) {
            // console.log(Indicator);
            let gcd = JSON.parse(Indicator);

            // $('#cancelsearch').on('keyup', function (){

            //     // var value  = $(this).val();
            //     // console.log("Value: " + value);
            //     // var data = searchtable(value, gcd);
            //     // buildTable(data);
            // })
            

            let cancellationTableFetch = I('cancellationTableFetch');

            for(let i = 0; i < gcd.length; i++){

                let Indicator;

                // indicator7 = 1 means cancelled by rentee / 2 means cancelled by rental store

                // indicator6 = rentee review 1 pending review 2 succesful review

                // indicator5 = 1 means refund request / 2 means refund request completed

                // indicator4 =  rental review 1 pending review 2 succesful review

                // Indicator3 = delivery delay

                // CASE WHEN AE_TRANSACTION_ADDITIONAL_INFORMATION.Indicator2 = 0 THEN
                // 'To Deliver'
                // WHEN AE_TRANSACTION_ADDITIONAL_INFORMATION.Indicator2 = 1 THEN 
                // 'Duration Waiting'
                // WHEN AE_TRANSACTION_ADDITIONAL_INFORMATION.Indicator2 = 2 THEN 
                // 'Duration Running'
                // WHEN AE_TRANSACTION_ADDITIONAL_INFORMATION.Indicator2 = 3  AND AE_TRANSACTION_ADDITIONAL_INFORMATION.Indicator5 = 2 THEN 
                // 'Refunded / To Inspect'
                // WHEN AE_TRANSACTION_ADDITIONAL_INFORMATION.Indicator2 = 3 THEN 
                // 'Duration End / To Inspect'
                // WHEN AE_TRANSACTION_ADDITIONAL_INFORMATION.Indicator2 = 4 AND AE_TRANSACTION_ADDITIONAL_INFORMATION.Indicator6 = 1 THEN 
                // 'Transaction Completed / To Review'
                // WHEN AE_TRANSACTION_ADDITIONAL_INFORMATION.Indicator2 = 4 THEN 
                // 'Transaction Completed' 
                // WHEN AE_TRANSACTION_ADDITIONAL_INFORMATION.Indicator2 = 5 THEN 
                // 'Report reviewing'
                // WHEN AE_TRANSACTION_ADDITIONAL_INFORMATION.Indicator2 = 6 THEN  

                if(gcd[i]['Indicator7'] == 1 ){
                    Indicator = 'Cancellation request by rentee';
                }
                else if(gcd[i]['Indicator7'] == 2 ){
                    Indicator = 'Cancellation request by renter';
                }
                else if(gcd[i]['Indicator6'] == 1 ){
                    Indicator = 'Pending review';
                }
                else if(gcd[i]['Indicator6'] == 2 ){
                    Indicator = 'Succesful review';
                }
                else if(gcd[i]['Indicator5'] == 1 ){
                    Indicator = 'Refund request';
                }
                else if(gcd[i]['Indicator5'] == 2 ){
                    Indicator = 'Refund request completed';
                }

                else if(gcd[i]['Indicator4'] == 1 ){
                    Indicator = 'Pending review';
                }
                else if(gcd[i]['Indicator4'] == 2 ){
                    Indicator = 'Successful Review';
                }

                else if(gcd[i]['Indicator3'] == 1 ){
                    Indicator = 'Delivery Delay';
                }

                else if(gcd[i]['Indicator2'] == 3 && gcd[i]['Indicator5'] == 2  ){
                    Indicator = 'Refunded / To Inspect';
                }
                else if(gcd[i]['Indicator2'] == 4 && gcd[i]['Indicator6'] == 1  ){
                    Indicator = 'Transaction Completed / To Review';
                }
                // else if(Cell[6].innerHTML == 'GCASH' && Cell[7].innerHTML == 'To Deliver' ){
                //     action = '--';
                // }
                else if(gcd[i]['Indicator2'] == 0 ){
                     Indicator = 'To Deliver';
                }
                else if(gcd[i]['Indicator2'] == 1 ){
                    Indicator = 'Duration Waiting';
                }
                else if(gcd[i]['Indicator2'] == 2 ){
                    Indicator = 'Duration Running';
                }
                
                else if(gcd[i]['Indicator2'] == 3 ){
                    Indicator =  'Duration End / To Inspect';
                }
                
                else if(gcd[i]['Indicator2'] == 4 ){
                    Indicator =  'Transaction Completed';
                }
                else if(gcd[i]['Indicator2'] == 5 ){
                    Indicator =  'Report reviewing';
                }
                else if(gcd[i]['Indicator2'] == 6 ){
                    Indicator =  'Gcash Request';
                }

                let action;
                
                if(gcd[i]['PaymentMethod'] == 'Arkiease Wallet' ){
                    action = '--';
                }
                else if(gcd[i]['PaymentMethod'] == 'GCASH' ){
                    action = '<span class="material-symbols-outlined">question_exchange</span>';
                }
                cancellationTableFetch.innerHTML += `
                
                <tr>
                    <td>${gcd[i]['TransactionID']}</td>
                    <td>${gcd[i]['Customer']}</td>
                    <td>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                    <td>${gcd[i]['Vendor']}</td>
                    <td>${gcd[i]['StoreName']}</td>
                    <td>${gcd[i]['ReceiptNumber']}</td>
                    <td>${gcd[i]['PaymentMethod']}</td>
                    <td>${Indicator}</td>
                    <td class="cancellationTableFetch">${action}</td>                            
                </tr>  
                `;

                let search = I('cancelsearch'),
                table_rows = document.querySelectorAll('tbody tr');
            
                search.addEventListener('input', searchTable);

                function searchTable() {
                    table_rows.forEach((row, i) => {
                        let table_data = row.textContent.toLowerCase(),
                            search_data = search.value.toLowerCase();

                        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
                        row.style.setProperty('--delay', i / 25 + 's');
                    })

                    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
                        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000';
                    });
                }

                for(var r = 0; r < cancellationTableFetch.rows.length; r++){
                    let Cell = cancellationTableFetch.rows[r].cells;
                    for(var t = 0; t < cancellationTableFetch.rows[r].cells.length; t++){
                        cancellationTableFetch.rows[r].cells[8].onclick = function(){

                            
                            // console.log(Cell[8].innerHTML);

                            

                            if(Cell[6].innerHTML == 'GCASH' && Cell[7].innerHTML == 'To Deliver'){
                                blurActive();
                                C('CancellDetails')[0].style.display = 'block';

                                let form_data = new FormData(); 
                                form_data.append("TNUMBER", Cell[0].innerHTML);
                                form_data.append("wtype","loadSingleIndicatorData");
                                
                                $.ajax({
                                    url:'../adminincludes/InformationLoad.php',
                                    method:'POST',
                                    data:form_data,
                                    contentType:false,
                                    cache:false,
                                    processData:false,
                                    success: function (Indicator2) {
                                        let gcd = JSON.parse(Indicator2);
                                        console.log(gcd);
                                        I('CancellDetailsID').innerHTML = gcd[0]['TransactionID'];

                                        I('CancellDetailsName').innerHTML = gcd[0]['FirstName'] + " " + gcd[0]['MiddleName'] + " " + gcd[0]['LastName'];

                                        I('CancellDetailsIDName').innerHTML = gcd[0]['Customer'];

                                        I('CancellDetailsRNo').innerHTML = gcd[0]['RequestIDE'];

                                        I('CancellDetailsStoreName').innerHTML = gcd[0]['StoreName'];

                                        I('CancellDetailsStoreIDName').innerHTML = gcd[0]['Vendor'];

                                        I('CancellationNote').innerHTML = gcd[0]['RefundDepositNote'];

                                        I('CancellationImg').src = gcd[0]['Image'];

                                        I('CancellationNumber').innerHTML = gcd[0]['PhoneNumber'];

                                        I('CancellationAmount').innerHTML = gcd[0]['Payment'];
                                        console.log(gcd[0]['RefundNote']);
                                        I('CancellationNote').innerHTML = gcd[0][14];

                                        I('CancellationP').innerHTML = "Reference No: " + gcd[0]['RefNumber'];

                                        I('CancellDetailsStatus').innerHTML = Cell[7].innerHTML;



                                        let form_data = new FormData(); 
                                        form_data.append("TNUMBER", I('CancellDetailsID').innerHTML);
                                        form_data.append("wtype","loadSingleIndicatorTableData");
                                        
                                        $.ajax({
                                            url:'../adminincludes/InformationLoad.php',
                                            method:'POST',
                                            data:form_data,
                                            contentType:false,
                                            cache:false,
                                            processData:false,
                                            success: function (Indicator2) {

                                                let gcd = JSON.parse(Indicator2)
                                                let table = I('CancellationTable');


                                                for(let i=0; i < gcd.length; i++){
                                                    table.innerHTML +=`
                                                    <tr>
                                                        <td >${gcd[i]['Name']}</td>
                                                       
                                                        <td >${gcd[i]['PriceRent']}</td>
                                                        <td >${gcd[i]['Qty']}</td> 
                                                    </tr> 
                                                `;
                                                }
                                                

                                            }
                                        })

                                    }
                                });
                            }
                            else if(Cell[7].innerHTML == 'To Deliver' ){
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: "top-end",
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                      toast.onmouseenter = Swal.stopTimer;
                                      toast.onmouseleave = Swal.resumeTimer;
                                    }
                                  });
                                  Toast.fire({
                                    icon: "info",
                                    title: "No action for this transaction!"
                                  });
                            }
                            else if(Cell[8].innerHTML == '--'){
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: "top-end",
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                      toast.onmouseenter = Swal.stopTimer;
                                      toast.onmouseleave = Swal.resumeTimer;
                                    }
                                  });
                                  Toast.fire({
                                    icon: "info",
                                    title: "No action for this transaction!"
                                  });
                            }
                            else{
                                C('CancellDetails')[0].style.display = 'block';
                                blurActive();
                                let form_data = new FormData(); 
                                form_data.append("TNUMBER", Cell[0].innerHTML);
                                form_data.append("wtype","loadSingleIndicatorData");
                                
                                $.ajax({
                                    url:'../adminincludes/InformationLoad.php',
                                    method:'POST',
                                    data:form_data,
                                    contentType:false,
                                    cache:false,
                                    processData:false,
                                    success: function (Indicator2) {
                                        let gcd = JSON.parse(Indicator2);
                                        console.log(gcd);
                                        I('CancellDetailsID').innerHTML = gcd[0]['TransactionID'];

                                        I('CancellDetailsName').innerHTML = gcd[0]['FirstName'] + " " + gcd[0]['MiddleName'] + " " + gcd[0]['LastName'];

                                        I('CancellDetailsIDName').innerHTML = gcd[0]['Customer'];

                                        I('CancellDetailsRNo').innerHTML = gcd[0]['RequestIDE'];

                                        I('CancellDetailsStoreName').innerHTML = gcd[0]['StoreName'];

                                        I('CancellDetailsStoreIDName').innerHTML = gcd[0]['Vendor'];

                                        // I('CancellationP').innerHTML = gcd[0]['RefundNote'];

                                        I('CancellationImg').src = gcd[0]['Image'];

                                        I('CancellationNumber').innerHTML = gcd[0]['PhoneNumber'];

                                        I('CancellationAmount').innerHTML = gcd[0]['Payment'];
                                        console.log(gcd[0]['RefundNote']);
                                        I('CancellationNote').innerHTML = gcd[0][14];

                                        I('CancellationP').innerHTML = "Reference No: " + gcd[0]['RefNumber'];

                                        I('CancellDetailsStatus').innerHTML = Cell[7].innerHTML;



                                        let form_data = new FormData(); 
                                        form_data.append("TNUMBER", I('CancellDetailsID').innerHTML);
                                        form_data.append("wtype","loadSingleIndicatorTableData");
                                        
                                        $.ajax({
                                            url:'../adminincludes/InformationLoad.php',
                                            method:'POST',
                                            data:form_data,
                                            contentType:false,
                                            cache:false,
                                            processData:false,
                                            success: function (Indicator2) {

                                                let gcd = JSON.parse(Indicator2)
                                                let table = I('CancellationTable');


                                                for(let i=0; i < gcd.length; i++){
                                                    table.innerHTML +=`
                                                    <tr>
                                                        <td >${gcd[i]['Name']}</td>
                                                       
                                                        <td >${gcd[i]['PriceRent']}</td>
                                                        <td >${gcd[i]['Qty']}</td> 
                                                    </tr> 
                                                `;
                                                }
                                                

                                            }
                                        })

                                    }
                                });
                            }

                            
                        }
                    }
                }
            }
        }
    })
}

I('#CancellDetailsClose').addEventListener('click', () => {
    C('CancellDetails')[0].style.display = 'none';
    I('CancellationTable').innerHTML ='';
    blurRemove();
})

NotificationNum();

function NotificationNum(){
    let form_data = new FormData(); 
    form_data.append("wtype","NotificationNum");
    
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (Notification) {
            let gcd = JSON.parse(Notification);
            if(gcd[0][0] == 0){
                I('notificationnum').style.display = 'none';
            }
            else{
                I('notificationnum').innerHTML = gcd[0][0];
            }
            

            console.log(gcd);
        }
    })
}

// NotificationLoad();

function NotificationLoad(){
    let form_data = new FormData(); 
    form_data.append("wtype","Notification");
    
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (Notification) {
            let gcd = JSON.parse(Notification);
            console.log(gcd);

            let NotificationTable = I('NotificationTable');

            // C('NatificationText')[0].innerHTML = gcd[0][3];

            for(let i = 0; i < gcd.length; i++){

                let seen;

                if(gcd[i]['Status'] == 1){
                    seen = "visibility_off";
                }
                else if(gcd[i]['Status'] == 2){
                    seen = "visibility";
                }

                NotificationTable.innerHTML += `
                    <tr class="HoverNotification">
                        <td class="notificationmark" style="min-width: 76px;padding: unset; width: 34px;"><span class="material-symbols-outlined">mark_email_unread</span> </td>
                        <td class="notificationtd">${gcd[i]['UserID']}</td>  
                        <td class="notificationtd">${gcd[i]['FirstName']}</td>  
                        <td class="notificationtd">${gcd[i]['MiddleName']}</td>  
                        <td class="notificationtd">${gcd[i]['LastName']}</td>
                        <td class="notificationtd">${gcd[i]['Type']}</td>
                        <td class="notificationtd">${gcd[i]['ID']}</td>
                        <td class="notificationtd">${gcd[i]['TypeName']} </td>        
                        <td style="padding: 6px;text-align: left; "> <div>${gcd[i]['Description']}</div> <div style="font-size: 12px;" >${gcd[i]['time']}</div></td>   
                        <td class="notificationtd" style="padding-right: 50px;"> <span class="material-symbols-outlined">${seen}</span> </td>
                        <td class="notificationtd">${gcd[i]['NotificationID']}</td>   
                        <td class="notificationtd">${gcd[i]['Month']}</td>   
                        <td class="notificationtd">${gcd[i]['Day']}</td>   
                        <td class="notificationtd">${gcd[i]['Year']}</td>   
                                  
                    </tr>
                `;

                // for(var r = 0; r < NotificationTable.rows.length; r++){
                //     let Cell = NotificationTable.rows[r].cells;
                //     for(var t = 0; t < NotificationTable.rows[r].cells.length; t++){
                //         NotificationTable.rows[r].cells[t].onclick = function(){

                //             console.log(Cell[1].innerHTML);
                //             console.log(Cell[2].innerHTML);
                //             let form_data = new FormData(); 
                //             form_data.append("TYPE",Cell[5].innerHTML);
                //             form_data.append("NAME",Cell[7].innerHTML);
                //             form_data.append("USERID",Cell[1].innerHTML);
                //             form_data.append("ID",Cell[6].innerHTML);

                //             form_data.append("wtype","TabbingInsert");
                //             console.log("gcd");    
                //             $.ajax({
                //                 url:'../adminincludes/data.php',
                //                 method:'POST',
                //                 data:form_data,
                //                 contentType:false,
                //                 cache:false,
                //                 processData:false,
                //                 success: function (GetCustomerData) {
                //                     tabbingload();
                //                 }
                //             })
                //         }
                //     }
                // }

                let search = I('notificationsearch'),
                table_rows = document.querySelectorAll('tbody tr');
            
                search.addEventListener('input', searchTable);

                function searchTable() {
                    table_rows.forEach((row, i) => {
                        let table_data = row.textContent.toLowerCase(),
                            search_data = search.value.toLowerCase();

                        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
                        row.style.setProperty('--delay', i / 25 + 's');
                    })

                    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
                        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000';
                    });
                }


            }

            for(var r = 0; r < NotificationTable.rows.length; r++){
                let Cell = NotificationTable.rows[r].cells;
                for(var t = 0; t < NotificationTable.rows[r].cells.length; t++){
                    NotificationTable.rows[r].cells[8].onclick = function(){
            
            
                        console.log('Soilo gg');
                        console.log(Cell[1].innerHTML);
                        console.log(Cell[2].innerHTML);
                        let form_data = new FormData(); 
                        form_data.append("TYPE",Cell[5].innerHTML);
                        form_data.append("NAME",Cell[13].innerHTML +""+ Cell[11].innerHTML +""+Cell[12].innerHTML+"-");
                        console.log(Cell[13].innerHTML +""+ Cell[11].innerHTML +""+Cell[12].innerHTML+"-"+ Cell[6].innerHTML);
                        form_data.append("USERID",Cell[1].innerHTML);
                        form_data.append("ADMINID",I('Admin_ID').innerHTML);
                        form_data.append("ID",Cell[6].innerHTML);
                        form_data.append("NID",Cell[10].innerHTML);
                        form_data.append("wtype","TabbingInsert");
                        console.log("gcd");    
                        $.ajax({
                            url:'../adminincludes/data.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (GetCustomerData) {
                                I('Tabbing').innerHTML = '';
                                tabbingload();
                                
                            }
                        })
                    }
                }

                // for(var t = 0; t < NotificationTable.rows[r].cells.length; t++){
                //     NotificationTable.rows[r].cells[14].onclick = function(){
            
                        
                        
                //         form_data.append("NID",Cell[10].innerHTML);
            
                //         form_data.append("wtype","NotificationExit");
                //         console.log("gcd");    
                //         $.ajax({
                //             url:'../adminincludes/informationLoad.php',
                //             method:'POST',
                //             data:form_data,
                //             contentType:false,
                //             cache:false,
                //             processData:false,
                //             success: function (GetCustomerData) {
                //                 I('NotificationTable').innerHTML = '';
                //                 NotificationLoad();
                                
                //             }
                //         })
                //     }
                // }
            }
            
        }
    })
}

let NotificationTable = I('NotificationTable');
// for(var r = 0; r < NotificationTable.rows.length; r++){
//     let Cell = NotificationTable.rows[r].cells;
//     for(var t = 0; t < NotificationTable.rows[r].cells.length; t++){
//         NotificationTable.rows[r].cells[t].onclick = function(){


//             console.log('Soilo gg');
//             // console.log(Cell[1].innerHTML);
//             // console.log(Cell[2].innerHTML);
//             // let form_data = new FormData(); 
//             // form_data.append("TYPE",Cell[5].innerHTML);
//             // form_data.append("NAME",Cell[7].innerHTML);
//             // form_data.append("USERID",Cell[1].innerHTML);
//             // form_data.append("ID",Cell[6].innerHTML);

//             // form_data.append("wtype","TabbingInsert");
//             // console.log("gcd");    
//             // $.ajax({
//             //     url:'../adminincludes/data.php',
//             //     method:'POST',
//             //     data:form_data,
//             //     contentType:false,
//             //     cache:false,
//             //     processData:false,
//             //     success: function (GetCustomerData) {
//             //         tabbingload();
//             //     }
//             // })
//         }
//     }
// }

let ColorStatus = C('status');

LoadCustomerData();

function LoadCustomerData(){
    let form_data = new FormData(); 
    form_data.append("wtype","GetCustomerData");
    console.log("gcd");    
    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (GetCustomerData) {
            let CustomerTableFetch = I('CustomerTableFetch');
           console.log(GetCustomerData);
            let gcd = JSON.parse(GetCustomerData), rIndex;
            console.log(gcd);   
            // console.log(GetCustomerData);
            // let gcd = 9;
        //     for(let i = 0; i < gcd.length; i++){

        //         CustomerTableFetch.innerHTML = CustomerTableFetch.innerHTML + `


        //     <tr>
        //         <td> ${gcd[i]['userID']} </td>
        //         <td> ${gcd[i]['FirstName']}  ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} </td>
        //         <td> <p class="status">${gcd[i]['userIDandFaceVerification']}</p> </td>
        //         <td>
                    
        //             <div class="Customer-Identification">
        //                 <div  class="Customer-ID" id="Customer-IDD">
        //                     <span class="material-symbols-outlined">fact_check</span>
        //                 </div>
        //             </div>   

        //         </td>                            
        //     </tr>
           
            

         
        // `;

        //     };

            

            let userIDandFaceVerificationstatus;

           
            
            for(let i = 0; i < gcd.length; i++){

                if(gcd[i]['userIDandFaceVerification'] == 2){
                    userIDandFaceVerificationstatus = 'Pending';
                    ColorStatus[i].style.cssText = "background-color: red";
                    // ColorStatus[i].classList.add("cancelled");
                }
                else if(gcd[i]['userIDandFaceVerification'] == 1){
                    userIDandFaceVerificationstatus = 'Approved';
                    // ColorStatus[i].classList.add("cancelled");
                }
                else if(gcd[i]['userIDandFaceVerification'] == 0){
                    userIDandFaceVerificationstatus = 'Declined';
                    // ColorStatus[i].classList.toggle("cancelled");
                    // ColorStatus[i].style.cssText = "background-color: red;";
                }

                var html_append = "";

                // console.log(gcd[i]['userID']);

                // $.each(GetCustomerData, function(index, item){
                //     html_append +=
                // });                
                CustomerTableFetch.innerHTML +=  `
                    

                    
                    <tr style="border-bottom: 1px solid black;">
                        <td class="UserIdentification"> ${gcd[i]['userID']} </td>
                        <td class="UserIdentification"> ${gcd[i]['FirstName']}  ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} </td>
                        <td > <p class="status">${userIDandFaceVerificationstatus}</p> </td>
                        <td >
                            
                            <div class="Customer-Identification">
                                <div  class="Customer-ID" id="Customer-IDD">
                                    <span class="material-symbols-outlined">fact_check</span>
                                </div>
                            </div>   

                        </td>                            
                    </tr>
                
                    

                    

                 
                `;

                // let CC = C('Customer-ID');

                // CC.forEach((CPicture) => {
                //     CPicture.onclick = () => {
                //         CustomerImagePopup[i].style.display = 'block';

                //         I('Customer-Popup-Image-No').innerHTML = `${gcd[i]['userID']}`;
                //         I('Customer-Popup-Image-Name').innerHTML = `${gcd[i]['FirstName']}  ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}`;
    
                //         I('Customer-Popup-Image-Picture').innerHTML = `${gcd[i]['userIDImage']} `;
    
                //         loadImage(I('Customer-Popup-Image-Picture'), gcd[i]['userIDImage']  );
                //         loadImage(I('Customer-Popup-Image-Picture2'), gcd[i]['userFaceImage']  );

                //         console.log('soisdfsdf');
                //         blurActive();
                //         console.log('soisdfsdf');
                //     }
                // });

                let CustomerIdentificationbtnn = document.querySelectorAll('.Customer-ID');

                let CustomerTableApproval = I('CustomerTableFetch'), yIndex;
                
                let CustomerID = C('Customer-ID');

                let inputssss = C("Menu-Search");
                let ins = inputssss.childNodes;
                console.log(ins); 
                let nd2 = inputssss.children;
                function removeInput(){
                    let nd2 = this.parentNode;
                    let nd3 = nd2.parentNode;
                    let nd4 = nd3.parentNode;
                    nd2.remove();

                }

                for(var r = 0; r < CustomerTableApproval.rows.length; r++){
                    let Cell = I('CustomerTableFetch').rows[r].cells;
                    const input = document.querySelector(".Menu-Search");
                    CustomerTableApproval.rows[r].cells[0].onclick = function()
                    {
                        let CustomerDashBoard = C('CustomerDashBoard');
                        let UserPersonalInfoframe = C('UserInformation');
                        UserPersonalInfoframe[0].style.display = 'block';
                        CustomerDashBoard[0].style.display = 'none';
                        
                        let form_data = new FormData(); 
                        form_data.append("wtype","LoadCustomerInfo");
                        form_data.append("USERID",Cell[0].innerHTML);
                        

                        $.ajax({
                            url:'../adminincludes/InformationLoad.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (userIDImage) {
                                
                                let status;
                                let gcd = JSON.parse(userIDImage);

                                let text = gcd[0]['userProfileFace'];
                                let text2;
                                if(text.substring(0,3) == 'ass'){
                                    text2 = '../' + gcd[0]['userProfileFace'];
                                }else{
                                    text2 = gcd[0]['userProfileFace'];
                                }
                                I('UIfaceimage').src = text2;

                                I('UIfullname').innerHTML = gcd[0]['FirstName'] + " " + gcd[0]['MiddleName'] + " " + gcd[0]['LastName'];
                                I('UserInformationID').innerHTML = gcd[0]['userID'];
                                I('UIpaywallet').innerHTML =  "₱" +gcd[0]['Coins'];

                                // I('UIstatus').innerHTML = gcd[0][15];

                                if(gcd[0][14] == 2){
                                    status = 'Reviewing';
                                }
                                else if(gcd[0][14] == 1){
                                    status = 'Verified';
                                }
                                else{
                                    status = 'Unverified';
                                }

                                I('UIstatus').innerHTML = status;

                                I('UIusertype').innerHTML = gcd[0]['userType'];
                                I('UInumber').innerHTML = gcd[0]['userID'];
                                I('UIfirstname').innerHTML = gcd[0]['FirstName'];
                                I('UIlastname').innerHTML = gcd[0]['LastName'];
                                I('UImiddlename').innerHTML = gcd[0]['MiddleName'];
                                I('UIsuffix').innerHTML = gcd[0]['SuffixName'];
                                I('UIbirthdate').innerHTML = gcd[0]['Birthdate'];
                                I('UIGender').innerHTML = gcd[0]['Gender'];
                                I('UIemail').innerHTML = gcd[0]['Email'];
                                I('UIphone').innerHTML = gcd[0]['ContactNumber'];
                                I('UIaddress').innerHTML = gcd[0]['Address'] + " " + gcd[0]['Barangay'] + " " + gcd[0]['City'] + " " + gcd[0]['Region'] + " " + gcd[0]['Province'];
                                I('UIphone2').innerHTML = gcd[0]['CN'];
                                I('UIusername').innerHTML = gcd[0]['userName'];

                                I('UIrenteeImage').src = gcd[0]['userIDImage'];
                                // I('UIrenteeImage2').src = '../' + gcd[0][23];
                                I('CustomerTypeImg').innerHTML = gcd[0]['userIDType'];

                                LoadRentedProducts();
                            
                            }
                        });

                    }
                }


                for(var r = 0; r < CustomerTableApproval.rows.length; r++){
                    let Cell = I('CustomerTableFetch').rows[r].cells;
                    const input = document.querySelector(".Menu-Search");
                    CustomerTableApproval.rows[r].cells[1].onclick = function()
                    {
                        let CustomerDashBoard = C('CustomerDashBoard');
                        let UserPersonalInfoframe = C('UserInformation');
                        UserPersonalInfoframe[0].style.display = 'block';
                        CustomerDashBoard[0].style.display = 'none';
                        
                        let form_data = new FormData(); 
                        form_data.append("wtype","LoadCustomerInfo");
                        form_data.append("USERID",Cell[0].innerHTML);
                        

                        $.ajax({
                            url:'../adminincludes/InformationLoad.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (userIDImage) {
                                
                                let status;
                                let gcd = JSON.parse(userIDImage);

                                let text = gcd[0]['userProfileFace'];
                                let text2;
                                if(text.substring(0,3) == 'ass'){
                                    text2 = '../' + gcd[0]['userProfileFace'];
                                }else{
                                    text2 = gcd[0]['userProfileFace'];
                                }
                                I('UIfaceimage').src = text2;

                                I('UIfullname').innerHTML = gcd[0]['FirstName'] + " " + gcd[0]['MiddleName'] + " " + gcd[0]['LastName'];
                                I('UserInformationID').innerHTML = gcd[0]['userID'];
                                I('UIpaywallet').innerHTML =  "₱" +gcd[0]['Coins'];

                                // I('UIstatus').innerHTML = gcd[0][15];

                                if(gcd[0][14] == 2){
                                    status = 'Reviewing';
                                }
                                else if(gcd[0][14] == 1){
                                    status = 'Verified';
                                }
                                else{
                                    status = 'Unverified';
                                }

                                I('UIstatus').innerHTML = status;

                                I('UIusertype').innerHTML = gcd[0]['userType'];
                                I('UInumber').innerHTML = gcd[0]['userID'];
                                I('UIfirstname').innerHTML = gcd[0]['FirstName'];
                                I('UIlastname').innerHTML = gcd[0]['LastName'];
                                I('UImiddlename').innerHTML = gcd[0]['MiddleName'];
                                I('UIsuffix').innerHTML = gcd[0]['SuffixName'];
                                I('UIbirthdate').innerHTML = gcd[0]['Birthdate'];
                                I('UIGender').innerHTML = gcd[0]['Gender'];
                                I('UIemail').innerHTML = gcd[0]['Email'];
                                I('UIphone').innerHTML = gcd[0]['ContactNumber'];
                                I('UIaddress').innerHTML = gcd[0]['Address'] + " " + gcd[0]['Barangay'] + " " + gcd[0]['City'] + " " + gcd[0]['Region'] + " " + gcd[0]['Province'];
                                I('UIphone2').innerHTML = gcd[0]['CN'];
                                I('UIusername').innerHTML = gcd[0]['userName'];

                                I('UIrenteeImage').src = gcd[0]['userIDImage'];
                                // I('UIrenteeImage2').src = '../' + gcd[0][23];
                                I('CustomerTypeImg').innerHTML = gcd[0]['userIDType'];

                                LoadRentedProducts();

                            
                            }
                        });

                    }
                }



                for(var r = 0; r < CustomerTableApproval.rows.length; r++){
                    let Cell = I('CustomerTableFetch').rows[r].cells;
                    CustomerTableApproval.rows[r].cells[3].onclick = function()
                    {
                        
                        // yIndex = this.columnIndex;

                        // console.log(Cell[0].innerHTML);



                        // console.log(yIndex);

                        // // CustomerTableApproval.Row(yIndex);

                        // console.log(this.cells[0].innerHTML);

                        // console.log(yIndex.cells[].innerHTML);

                        let form_data = new FormData(); 
                        form_data.append("wtype","GetCustomerImage");
                        form_data.append("USERID",Cell[0].innerHTML);
                        

                        $.ajax({
                            url:'../adminincludes/data.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (userIDImage) {
                                
                                let gcd = JSON.parse(userIDImage);

                                console.log(gcd[0][0]);
                                console.log(gcd[0]['userProfileFace']);

                                I('Customer-Popup-Image-Picture').src = gcd[0]['userIDImage'];
                                console.log(loadImage(I('Customer-Popup-Image-Picture2'),gcd[0]['userProfileFace']));
                                I('Customer-Popup-Image-Picture2').src =  '../'+ gcd[0]['userProfileFace'];
                                // loadImage(I('Customer-Popup-Image-Picture2'), '../' + gcd[0]['userProfileFace']);
                            
                            }
                        });


                       
                        console.log(yIndex);
                        CustomerImagePopup[0].style.display = 'block';
                        I('Customer-Popup-Image-No').innerHTML = Cell[0].innerHTML;
                        I('Customer-Popup-Image-Name').innerHTML = Cell[1].innerHTML;

                        // I('Customer-Popup-Image-Picture').innerHTML = `${gcd[i]['userIDImage']} `;
    
                        
                    }
                }



                

                CustomerIdentificationbtnn.forEach((CPicture) => {
                    CPicture.onclick = () => {
                        console.log("Soilo Pogi");
                        CustomerImagePopup[0].style.display = 'block';

                        I('Customer-Popup-Image-No').innerHTML = `${gcd[i]['userID']}`;
                        I('Customer-Popup-Image-Name').innerHTML = `${gcd[i]['FirstName']}  ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}`;
    
                        I('Customer-Popup-Image-Picture').innerHTML = `${gcd[i]['userIDImage']} `;
    
                        // loadImage(I('Customer-Popup-Image-Picture'), gcd[i]['userIDImage']  );
                        // loadImage(I('Customer-Popup-Image-Picture2'), gcd[0]['userProfileFace']  );
                    }
                });

                
                

                // C('Customer-ID')[0].addEventListener('click', function(){
                //     CustomerImagePopup[0].style.display = 'block';

                //     console.log('Soilo');
                //     I('Customer-Popup-Image-No').innerHTML = `${gcd[i]['userID']}`;
                //     I('Customer-Popup-Image-Name').innerHTML = `${gcd[i]['FirstName']}  ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}`;

                //     I('Customer-Popup-Image-Picture').innerHTML = `${gcd[i]['userIDImage']} `;

                //     loadImage(I('Customer-Popup-Image-Picture'), gcd[i]['userIDImage']  );
                //     loadImage(I('Customer-Popup-Image-Picture2'), gcd[i]['userFaceImage']  );
                    
                //     console.log('soisdfsdf');
                //     blurActive();
                //     console.log('soisdfsdf');
                // });



                // I('addcustomer').addEventListener('click', function(){



                //     let form_data = new FormData(); 
                //         form_data.append("wtype","forupdatecustomerstatus");
                //         form_data.append("USERID", I('Customer-Popup-Image-No').innerHTML);
                //         form_data.append("ADMINNAME", I('AdminFullName').innerHTML);
                //         form_data.append("STATUSNUMBER", 1);
                //         $.ajax({
                //             url:'../adminincludes/signup-module1.php',
                //             method:'POST',
                //             data:form_data,
                //             contentType:false,
                //             cache:false,
                //             processData:false,
                //             success: function (response) {
                //                 notificationInsert2(I('Customer-Popup-Image-No').innerHTML,`Great news! You are now Verified by admin.`, 
				//                 "myaccount.php#dashboard","verified", "1","");
                //             }
                //         });
                // });

                
            }
        }
    });


}

I('addcustomer').addEventListener('click', function(){



    let form_data = new FormData(); 
        form_data.append("wtype","forupdatecustomerstatus");
        form_data.append("USERID", I('Customer-Popup-Image-No').innerHTML);
        form_data.append("ADMINNAME", I('AdminFullName').innerHTML);
        form_data.append("STATUSNUMBER", 1);
        $.ajax({
            url:'../adminincludes/signup-module1.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            beforeSend: function(){
                C('containerloader')[0].style.display = 'block';
            },
            success: function (response) {

                C('containerloader')[0].style.display = 'none';
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'You Verified a Customer!',
                    showConfirmButton: false,
                    timer: 1500
                })

                notificationInsert2(I('Customer-Popup-Image-No').innerHTML,`Great news! You are now Verified by admin.`, 
                "myaccount.php#dashboard","verified", "1","");
                C('Customer-Popup-Image')[0].style.display = 'none';
            }
        });
});


// beforeSend: function(){
//     C('containerloader')[0].style.display = 'block';
// },
// success: function (PayWalletLoad) {

//     C('containerloader')[0].style.display = 'none';
//     Swal.fire({
//         position: 'middle',
//         icon: 'success',
//         title: 'You Enabled a Vendor!',
//         showConfirmButton: false,
//         timer: 1500
//     })

I('disablecustomer').addEventListener('click', function(){
    let form_data = new FormData(); 
        form_data.append("wtype","forupdatecustomerstatus");
        form_data.append("USERID",gcd[i]['userID']);
        form_data.append("STATUSNUMBER", 0);

        $.ajax({
            url:'../adminincludes/signup-module1.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            beforeSend: function(){
                C('containerloader')[0].style.display = 'block';
            },
            success: function (response) {

                C('containerloader')[0].style.display = 'none';
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'You Rejected a Customer!',
                    showConfirmButton: false,
                    timer: 1500
                })
            
                notificationInsert2(I('Customer-Popup-Image-No').innerHTML,`Im sorry to inform that your Requirements are not qualified!.`, 
                "myaccount.php#dashboard","verified", "1","");

                C('Customer-Popup-Image')[0].style.display = 'none';
            }
        });
});

LoadNoVendorData();
function LoadNoVendorData(){
    let form_data = new FormData(); 
    form_data.append("wtype","loadNoVendorData");
    console.log("gcd");    
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (GetCustomerApprovedData) {
            let NoVendor = I('NoVendor');
            let gcd = JSON.parse(GetCustomerApprovedData);
            console.log(gcd);

            for(let i = 0; i < gcd.length; i++){
                NoVendor.innerHTML +=  `

                <tr>
                    <td>${gcd[i]['userID']}</td>
                    <td>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                    <td>${gcd[i]['ContactNumber']}</td>
                    <td class="NoVendorHover"><span class="material-symbols-outlined">fact_check</span></td>
                </tr> 
                `;

                for(var x = 0; x < NoVendor.rows.length; x++){

                    let Cell = NoVendor.rows[x].cells;
                    NoVendor.rows[x].cells[3].onclick = function()
                    {
                        MainVendorFrame[0].style.display = 'none';
                        AddVendorFrame[0].style.display = 'block';

                        console.log(Cell[1].innerHTML);
                        I('FullName_Vendor').value = Cell[1].innerHTML;
                        I('ID_Vendor').value = Cell[0].innerHTML;
                    }
                }
            }
        }
    });
}


LoadApprovedCustomerData();

function LoadApprovedCustomerData(){
    let form_data = new FormData(); 
    form_data.append("wtype","GetApprovedCustomer");
    console.log("gcd");    
    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (GetCustomerApprovedData) {
            let CustomerReportsTable = I('CustomerReportsTable');
            let gcd = JSON.parse(GetCustomerApprovedData);
            console.log(gcd);

            for(let i = 0; i < gcd.length; i++){
                CustomerReportsTable.innerHTML +=  `
                <tr>
                    <td class="UserIdentification"> ${gcd[i]['userID']} </td>
                    <td class="UserIdentification">  ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                    <td> ${gcd[i]['userIDandFaceVerification']} </td>
                    <td> ${gcd[i]['ApprovalDate']}</td>   
                    <td> ${gcd[i]['ApprovedBy']}</td>
                </tr>   
                `;
            }
        }
    });
}


I('commentsectionExit').addEventListener('click', () => {
    C('commentsection')[0].style.display = 'none';
    C('commentColor')[0].innerHTML = '';
    I('AvailableStock').innerHTML = '';
    I('AvailableSize').innerHTML = '';
   
    I('commentSize').innerHTML = '';
    C('AvailableStock')[0].style.display = 'none';
    I('SeeStock').style.display = 'block';
    I('NotSeeStock').style.display = 'none';

    C('AvailableSize')[0].style.display = 'none';
    I('SeeSize').style.display = 'block';
    I('NotSeeSize').style.display = 'none';

    C('ThreeCommentIma')[0].innerHTML = '';
    C('big_img')[1].src = '';
    C('big_img1')[1].style.display = 'none';

    I('ProductsRatings').innerHTML = '';
    I('commentBtn').style.display = 'block';
})

loadAllVendorProduct();


I('SeeStock').addEventListener('click', () => {
    C('AvailableStock')[0].style.display = 'inline-table';
    I('SeeStock').style.display = 'none';
    I('NotSeeStock').style.display = 'block';
})

I('NotSeeStock').addEventListener('click', () => {
    C('AvailableStock')[0].style.display = 'none';
    I('SeeStock').style.display = 'block';
    I('NotSeeStock').style.display = 'none';
})


I('SeeSize').addEventListener('click', () => {
    I('SeeStock').style.pointerEvents = 'none';
    C('AvailableSize')[0].style.display = 'inline-table';
    I('SeeSize').style.display = 'none';
    I('NotSeeSize').style.display = 'block';
})

I('NotSeeSize').addEventListener('click', () => {
    I('SeeStock').style.pointerEvents = 'auto';
    C('AvailableSize')[0].style.display = 'none';
    I('SeeSize').style.display = 'block';
    I('NotSeeSize').style.display = 'none';
})

function loadCommentReports(){
    let form_data = new FormData(); 
    console.log(I('commentProductID').innerHTML);
    form_data.append("PRODUCTID", I('commentProductID').innerHTML);
    form_data.append("wtype","loadReports");
    console.log("gcd");    
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (Reports) {
            console.log(Reports);

            let gcd = JSON.parse(Reports);

            let ProductsRatings = I('ProductsRatings');
            for(let i = 0; i < gcd.length; i++){
                console.log(gcd[i]['Media3']);
                console.log(gcd[i]['Media2']);
                let video;

                let text = gcd[i]['userProfileFace'];
                let text2;
                console.log(text.substring(0,3));
                if(text.substring(0,3) == 'ass'){
                    
                    text2 = '../'+ gcd[i]['userProfileFace'];
                }
                else{
                    text2 = gcd[i]['userProfileFace'];
                }
                if(gcd[i]['Media1'] == '", "IMG2": "", "VID": ""} ]'){
                    video = `<div>
                    <div class="comments">
                        <img src="${text2}" alt=""> 

                        <div>
                        <p style="font-weight: 900">${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} ${gcd[i]['SuffixName']}</p>
                        <p>${gcd[i]['Description']}</p>
                        </div>
                        
                    </div>

                    <div class="othercomment">
                        <div class="othercomments">
                            
                            
                        </div>                                 
                    </div>
                </div>`
                }
                else if(  gcd[i]['Media2']   == '", "VID": ""} ]'){
                    video = `<div>
                    <div class="comments">
                        <img src="${text2}" alt=""> 

                        <div>
                        <p style="font-weight: 900">${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} ${gcd[i]['SuffixName']}</p>
                        <p>${gcd[i]['Description']}</p>
                        </div>
                        
                    </div>

                    <div class="othercomment">
                        <div class="othercomments">
                            <img src="${gcd[i]['Media1']}" alt="" onclick="changezoom(this)"> 
                            
                            
                        </div>                                 
                    </div>
                </div>`
                }
                else if(gcd[i]['Media3'] == '"} ]'){    
                    video = `<div>
                    <div class="comments">
                        <img src="${text2}" alt=""> 

                        <div>
                        <p style="font-weight: 900; width: 716;">${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} ${gcd[i]['SuffixName']}</p>
                        <p style="width: 716px;">${gcd[i]['Description']}</p>
                        </div>
                        
                    </div>

                    <div class="othercomment">
                        <div class="othercomments">
                            <img src="${gcd[i]['Media1']}" alt="" onclick="changezoom(this)"> 
                            <img src="${gcd[i]['Media2']}" alt="" onclick="changezoom(this)"> 
                            
                        </div>                                 
                    </div>
                </div>`
                }
                else if(gcd[i]['Media3'] == ''){    
                    video = `<div>
                    <div class="comments">
                        <img src="${text2}" alt=""> 

                        <div>
                        <p style="font-weight: 900">${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} ${gcd[i]['SuffixName']}</p>
                        <p>${gcd[i]['Description']}</p>
                        </div>
                        
                    </div>

                    <div class="othercomment">
                        <div class="othercomments">
                            <img src="${gcd[i]['Media1']}" alt="" onclick="changezoom(this)"> 
                            <img src="${gcd[i]['Media2']}" alt="" onclick="changezoom(this)"> 
                            
                        </div>                                 
                    </div>
                </div>`
                }
            
                else{
                    video = `<div>
                    <div class="comments">
                        <img src="${text2}" alt=""> 

                        <div>
                        <p style="font-weight: 900">${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} ${gcd[i]['SuffixName']}</p>
                        <p>${gcd[i]['Description']}</p>
                        </div>
                        
                    </div>

                    <div class="othercomment">
                        <div class="othercomments">
                            <img src="${gcd[i]['Media1']}" alt="" onclick="changezoom(this)"> 
                            <img src="${gcd[i]['Media2']}" alt="" onclick="changezoom(this)"> 
                            <video class="reportvideo" controls autoplay muted src="${gcd[i]['Media3']}"></video>
                        </div>                                 
                    </div>
                </div>`
                }

                console.log(video);
               
                ProductsRatings.innerHTML += `
                    ${video}
                `;
            }
        }   
    })
}

function loadAllVendorProduct(){
    let form_data = new FormData(); 
    console.log(I('UserInformationID').innerHTML);
    // form_data.append("USERID", I('UserInformationID').innerHTML);
    form_data.append("wtype","loadAllVenderProducts");
    console.log("gcd");    
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (GetCustomerApprovedData) {
            let User_Vendor_Details = I('All_User_Vendor_Details');
            let gcd = JSON.parse(GetCustomerApprovedData);
            console.log(gcd);

            // C('Product-Vendor-Button')[0].style.backgroundColor = 'green';
            for(let i = 0; i < gcd.length; i++){

                let status;

                if(gcd[i]['Status'] == 1){
                    status = `<span class="material-symbols-outlined" style="background: aquamarine; border-radius: 16px;">verified</span>`;
                    // C('Product-Vendor-Button')[i].style.color = 'green';
                }

                else if(gcd[i]['Status'] == 0){
                    status = `<span class="material-symbols-outlined" style="background: red; color: white; border-radius: 16px;">dangerous</span>`;
                    // C('Product-Vendor-Button')[i].style.color = 'green';
                }
                // C('Product-Vendor-Button')[i].style.backgroundColor = 'green';
                console.log(i);
                User_Vendor_Details.innerHTML +=  `
                <div class="product" data-name="p-1">
                    <img src=${gcd[i]['Image']} alt="">
                    <div style="display: flex;justify-content: space-between;padding: -1px;align-items: center;padding-left: 5px;padding-right: 5px; max-width:337px;">
                    <h3>${gcd[i]['Name']}</h3>

                    <div style="text-align: end; padding-top: 16px;">
                        <div class="price">₱${gcd[i]['PriceRent']}</div>
                        <div class="price">DEP.₱${gcd[i]['DepositRent']}</div>
                    </div>
                    
                    </div>
                   
                    <button class="Product-Vendor-Button" style="color:green;">${status}</button>
                    <div class="Product-Vendor-ID">${gcd[i]['ProductID']}</div>
                </div>
                `;

                for(var x = 0; x < User_Vendor_Details.querySelectorAll('.product').length; x++){

                    // console.log(tabtable.querySelectorAll('.tabbingborder')[x].class+"123");
        
                    User_Vendor_Details.querySelectorAll('.product')[x].onclick = function()
                    {
                       
                        let form_data1 = new FormData(); 
                        // console.log(I('UserInformationID').innerHTML);
                        form_data1.append("PRODUCTID", this.children[3].innerText);
                        form_data1.append("wtype","CheckStatus");
                        console.log("gcd");    
                        $.ajax({
                            url:'../adminincludes/InformationLoad.php',
                            method:'POST',
                            data:form_data1,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (CheckStatus) {
                                let gcd = JSON.parse(CheckStatus);
                                if(gcd[0]['Status'] == 1){
                                    I('commentEnableBtn').style.display = 'none';
                                    I('commentBtn').style.display = 'block';
                                    // I('commentEnableBtn').style.display = 'none';
                                }
                                else if(gcd[0]['Status'] == 0){
                                    I('commentBtn').style.display = 'none';
                                    I('commentEnableBtn').style.display = 'block';
                                }
                            }
                        })

                        C('big_img')[1].style.display = 'block';
                        // C('big_img1')[1].style.display = 'block';
                        // console.log(this.parentNode.innerHTML);
                        console.log(this.children[1].innerText);
                        console.log(this.children[2].innerText);
                        console.log(this.children[3].innerText);

                        let form_data = new FormData(); 
                        console.log(I('UserInformationID').innerHTML);
                        form_data.append("PRODUCTID", this.children[3].innerText);
                        form_data.append("wtype","loadVenderProductsDetails");
                        console.log("gcd");    
                        $.ajax({
                            url:'../adminincludes/InformationLoad.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (GetCustomerApprovedData) {
                                console.log(GetCustomerApprovedData);

                                let gcd = JSON.parse(GetCustomerApprovedData);
                                let Rating;
                                if(gcd[0]['Rating'] == null){
                                    Rating = 'There is no Rating yet';
                                }
                                else{
                                    Rating = gcd[0]['Rating'] + " out of 5";
                                }

                                I('commentRenterName').innerHTML = gcd[0]['FirstName'] + " " + gcd[0]['MiddleName'] + " " +gcd[0]['LastName'];
                                I('commentRenterID').innerHTML = gcd[0]['userID'];
                                I('commentStoreName').innerHTML = gcd[0]['StoreName'];
                                I('commentStoreID').innerHTML = gcd[0]['RenterID'];
                                I('commentProductName').innerHTML = gcd[0]['Name'];
                                I('commentProductID').innerHTML = gcd[0]['ProductID'];
                                loadCommentReports();

                                I('commentProductRating').innerHTML = Rating;
                                I('commentloaction').innerHTML = gcd[0]['Address'] + " " + gcd[0]['Barangay'] + " " + gcd[0]['City'] + " " + gcd[0]['Province'] + " " + gcd[0]['Region'];

                                I('commentPrice').innerHTML = gcd[0]['PriceRent'];
                                I('commentDeposit').innerHTML = gcd[0]['DepositRent'];
                                I('commentDiscount').innerHTML = gcd[0]['Discount'];



                                let form_data2 = new FormData(); 
                                console.log(I('UserInformationID').innerHTML);
                                form_data2.append("PRODUCTID", I('commentProductID').innerHTML);
                                form_data2.append("wtype","loadSize");
                                console.log("gcd");    
                                $.ajax({
                                url:'../adminincludes/InformationLoad.php',
                                method:'POST',
                                data:form_data2,
                                contentType:false,
                                cache:false,
                                processData:false,
                                    success: function (GetCustomerApprovedData) {
                                        let gcd = JSON.parse(GetCustomerApprovedData);
                                        for(let i = 0; i < gcd.length; i++){
                                            let commentColor = I('commentSize');
        
                                            commentColor.innerHTML +=`
                                                <div class="size">
                                                    ${gcd[i]['Size']}
                                                </div>
                                            `;
                                        }

                                        let form_data2 = new FormData(); 
                                        console.log(I('UserInformationID').innerHTML);
                                        form_data2.append("PRODUCTID", I('commentProductID').innerHTML);
                                        form_data2.append("wtype","loadSizeAll");
                                        console.log("gcd");    
                                        $.ajax({
                                        url:'../adminincludes/InformationLoad.php',
                                        method:'POST',
                                        data:form_data2,
                                        contentType:false,
                                        cache:false,
                                        processData:false,
                                            success: function (GetCustomerApprovedData) {
                                                let gcd = JSON.parse(GetCustomerApprovedData);
                                                for(let i = 0; i < gcd.length; i++){
        
                                                    let AvailableStock = I('AvailableSize');
        
                                                    AvailableStock.innerHTML +=`
                                                    <tr>
                                                        <td >${gcd[i]['Size']}</td>
                                                        <td >${gcd[i]['SizeType']}</td>
                                                        <td >${gcd[i]['Chest']}</td>   
                                                        <td >${gcd[i]['Waist']}</td>
                                                        <td >${gcd[i]['Hip']}</td>                                
                                                    </tr>
                                                    `;
        
                                                }
                                            }
                                        })
                                        
                                    }
                                });


                                // let form_data = new FormData(); 
                                // console.log(I('UserInformationID').innerHTML);
                                // form_data.append("PRODUCTID", I('commentProductID').innerHTML);
                                // form_data.append("wtype","loadColour");
                                // console.log("gcd");    
                                // $.ajax({
                                // url:'../adminincludes/InformationLoad.php',
                                // method:'POST',
                                // data:form_data,
                                // contentType:false,
                                // cache:false,
                                // processData:false,
                                //     success: function (GetCustomerApprovedData) {
                                //         let gcd = JSON.parse(GetCustomerApprovedData);
                                //         for(let i = 0; i < gcd.length; i++){

                                //             let commentColor = C('commentColor');
                                //             console.log(gcd[i]['Colour']);
        
                                //             commentColor[0].innerHTML +=`
                                //                 <div class="color">
                                //                     ${gcd[i]['Colour']}
                                //                 </div>
                                //             `;

                                //             let AvailableStock = I('AvailableStock');

                                //             AvailableStock.innerHTML +=`
                                //             <tr>
                                //                 <td >${gcd[i]['Colour']}</td>
                                //                 <td >${gcd[i]['Size']}</td>
                                //                 <td >${gcd[i]['Brand']}</td>   
                                //                 <td >${gcd[i]['Material']}</td>
                                //                 <td >${gcd[i]['Qty']}</td>                                
                                //             </tr>
                                //             `;

                                //         }
                                //     }
                                // })


                                let form_data3 = new FormData(); 
                                console.log(I('UserInformationID').innerHTML);
                                form_data3.append("PRODUCTID", I('commentProductID').innerHTML);
                                form_data3.append("wtype","loadImgAll");
                                console.log("gcd");    
                                $.ajax({
                                url:'../adminincludes/InformationLoad.php',
                                method:'POST',
                                data:form_data3,
                                contentType:false,
                                cache:false,
                                processData:false,
                                    success: function (GetCustomerApprovedData) {
                                        let gcd = JSON.parse(GetCustomerApprovedData);
                                        console.log(gcd);
                                        let Video;  
                                        

                                        for(let i = 0; i < gcd.length; i++){

                                            
                                            // if(gcd[i]['Video'] != ''){
                                            //     C('small_img1')[0].style.display = 'none';
                                            // }

                                            C('big_img')[1].src = gcd[0]['Image'];

                                            C('ThreeCommentIma')[0].innerHTML +=`
                                                <img src=${gcd[i]['Image']} class="small_img">
                                                
                                            `;


                                            $(document).ready(function(){
                                                $(".small_img").hover(function(){
                                                    C("big_img1")[1].style.display = 'none';
                                                    C("big_img")[1].style.display = 'block';
                                                    // C('tracker')[0].style.display = 'block';
                                                    $(".big_img").attr('src', $(this).attr('src'));
                                            
                                                })
                                            })

                                            $(document).ready(function(){
                                                $(".small_img1").hover(function(){
                                                    C("big_img1")[1].style.display = 'block';
                                                    C("big_img")[1].style.display = 'none';
                                                    // C('tracker')[0].style.display = 'none';
                                                    $(".big_img1").attr('src', $(this).attr('src'));
                                                })
                                            })

                                            // $(document).ready(function () {
                                            //     $(".big_img").imagezoomsl({
                                            //         zoomrange: [5, 5]
                                            //     });
                                            // })
                                            
                                            
                                        }


                                        let form_data = new FormData(); 
                                        console.log(I('UserInformationID').innerHTML);
                                        form_data.append("PRODUCTID", I('commentProductID').innerHTML);
                                        form_data.append("wtype","loadVideoAll");
                                        console.log("gcd");    
                                        $.ajax({
                                        url:'../adminincludes/InformationLoad.php',
                                        method:'POST',
                                        data:form_data,
                                        contentType:false,
                                        cache:false,
                                        processData:false,
                                            success: function (GetCustomerApprovedData) {
                                                let gcd = JSON.parse(GetCustomerApprovedData);

                                                for(let i = 0; i < gcd.length; i++){
                                                    console.log(gcd[i]['Video']);
                                                    C('ThreeCommentIma')[0].innerHTML +=`
                                                    <video autoplay muted controls src="${gcd[i]['Video']}" class="small_img1"></video>
                                                    `;

                                                    $(document).ready(function(){
                                                        $(".small_img").hover(function(){
                                                            // C('small_img1')[1].muted =true;
                                                            C("big_img1")[1].style.display = 'none';
                                                            C("big_img")[1].style.display = 'block';
                                                            // C('tracker')[0].style.display = 'block';
                                                            $(".big_img").attr('src', $(this).attr('src'));
                                                    
                                                        })
                                                    })

                                                    // $(document).ready(function(){
                                                    //     $(".small_img1").hover(function(){
                                                    //         C("big_img1")[1].style.display = 'block';
                                                    //         C("big_img")[1].style.display = 'none';
                                                    //         // C('tracker')[0].style.display = 'none';
                                                    //         $(".big_img1").attr('src', $(this).attr('src'));
                                                    //     })
                                                    // })

                                                    // $(document).ready(function () {
                                                    //     $(".big_img").imagezoomsl({
                                                    //         zoomrange: [5, 5]
                                                    //     });
                                                    // })
                                                }

                                                // if(gcd[0]['Video'] == ''){
                                                //     C('small_img1')[0].style.display = 'none';
                                                // }
                                                // else{
                                                //     C('small_img1')[0].style.display = 'block';
                                                //     C('small_img1')[0].src = gcd[0]['Video'];
                                                // }
                                            }
                                        })
                                    }
                                })
                                
                            }
                        })

                        C('commentsection')[0].style.display = 'block';

                        

                        // console.log(this.children[4].innerText);
                        // tabtable.removeChild(tabtable.firstElementChild);
                        // tabtable.parentNode.parentNode.removeChild(tabtable.parentNode);
                        // index = this.parentElement.childNodes;
                        // console.log(index);
                        // User_Vendor_Details.children[0].remove();
                        // tabtable.removeChild(tabtable.children[0]);
                        // console.log(tabtable.parentNode.remove(tabtable.childNodes));
                        // while (tabtable.hasChildNodes()) {
                        //     tabtable.removeChild(tabtable.firstChild);
                        //   }
    
                        
                    };
                };   

            }
        }
    });
}

// function showDisbled(){
//     C('DepositBtn')[1].style.display = 'none';
// }

function changezoom(element){

    element.classList.toggle('fullsize');
    
    // C('commentsection')[0].style.display = 'none';
    blurActive();
    // element.style.width  = '800px';
    // element.style.height  = '800px';
}


I('commentEnableBtn').addEventListener('click', () => {
    Swal.fire({
        title: "Are you sure you want to enable the product?",
        // text: "You !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, enable it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });

          let form_data = new FormData(); 
            form_data.append("PRODUCTID",I('commentProductID').innerHTML);
            form_data.append("wtype","UpdateStatusProduct");
            
            $.ajax({
                url:'../adminincludes/InformationLoad.php',
                method:'POST',
                data:form_data,
                contentType:false,
                cache:false,
                processData:false,
                beforeSend: function(){
                    C('containerloader')[0].style.display = 'block';
                },
                success: function (CheckAvailability) {
                    console.log(CheckAvailability);
                    let gcd = JSON.parse(CheckAvailability);
                    C('containerloader')[0].style.display = 'none';
                    Swal.fire({
                        title: "Product Enabled",
                        // text: "That thing is still around?",
                        icon: "success"
                      });
                }
            })
        }
      });
});

function loadVendorProduct(){

    let form_data2 = new FormData(); 
    console.log(I('UserInformationID').innerHTML);
    form_data2.append("RENTERID", I('UserInformationID').innerHTML);
    form_data2.append("wtype","loadVenderProfile");
    console.log( I('UserInformationID').innerHTML);    
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data2,
        contentType:false,
        cache:false,
        processData:false,
        success: function (GetCustomerApprovedData) {
            let gcd = JSON.parse(GetCustomerApprovedData);
            console.log(gcd);

            let status;
            if(gcd[0]['BusinessRegistrationVerification'] == 1){
                status = 'Verified'
            }
            I('RUIstatus').innerHTML = status;

            I('RUIusertype').innerHTML = gcd[0]['StoreType'];
            I('RUInumber').innerHTML = gcd[0]['renterID'];
            I('RUIfirstname').innerHTML = gcd[0]['StoreName'];
            // I('UIlastname').innerHTML = gcd[0]['LastName'];
            // I('UImiddlename').innerHTML = gcd[0]['MiddleName'];
            // I('UIsuffix').innerHTML = gcd[0]['SuffixName'];
            // I('UIbirthdate').innerHTML = gcd[0]['Birthdate'];
            // I('UIGender').innerHTML = gcd[0]['Gender'];
            I('RUIemail').innerHTML = gcd[0]['Email'];
            I('RUIphone').innerHTML = gcd[0]['PhoneNumber'];
            I('RUIaddress').innerHTML = gcd[0]['Address'] + " " + gcd[0]['Barangay'] + " " + gcd[0]['City'] + " " + gcd[0]['Region'] + " " + gcd[0]['Province'];
            I('RUIphone2').innerHTML = gcd[0]['GcashNumber'];
            I('UIusername').innerHTML = gcd[0]['userName'];
            I('RUIrenteeImage').src = gcd[0]['BusinessRegistration'];
            I('RUIrenteeImage2').src = gcd[1]['BusinessRegistration'];
        }
    });

    let form_data = new FormData(); 
    console.log(I('UserInformationID').innerHTML);
    form_data.append("USERID", I('UserInformationID').innerHTML);
    form_data.append("wtype","loadVenderProducts");
    console.log( I('UserInformationID').innerHTML);    
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (GetCustomerApprovedData) {
            let User_Vendor_Details = I('User_Vendor_Details');
            let gcd = JSON.parse(GetCustomerApprovedData);
            console.log(gcd);

            for(let i = 0; i < gcd.length; i++){
                let status;

                if(gcd[i]['Status'] == 1){
                    status = `<span class="material-symbols-outlined" style="background: aquamarine; border-radius: 16px;">verified</span>`;
                    // C('Product-Vendor-Button')[i].style.color = 'green';
                }

                else if(gcd[i]['Status'] == 0){
                    status = `<span class="material-symbols-outlined" style="background: red; color: white; border-radius: 16px;">dangerous</span>`;
                    // C('Product-Vendor-Button')[i].style.color = 'green';
                }
                // C('Product-Vendor-Button')[i].style.backgroundColor = 'green';
                console.log(i);
                User_Vendor_Details.innerHTML +=  `
                <div class="product" data-name="p-1">
                    <img src=${gcd[i]['Image']} alt="">
                    <div style="display: flex;justify-content: space-between;padding: -1px;align-items: center;padding-left: 5px;padding-right: 5px; max-width:337px;">
                    <h3>${gcd[i]['Name']}</h3>

                    <div style="text-align: end; padding-top: 16px;">
                        <div class="price">₱${gcd[i]['PriceRent']}</div>
                        <div class="price">DEP.₱${gcd[i]['DepositRent']}</div>
                    </div>
                    
                    </div>
                   
                    <button class="Product-Vendor-Button" style="color:green;">${status}</button>
                    <div class="Product-Vendor-ID">${gcd[i]['ProductID']}</div>
                </div>
                `;

                for(var x = 0; x < User_Vendor_Details.querySelectorAll('.product').length; x++){

                    // console.log(tabtable.querySelectorAll('.tabbingborder')[x].class+"123");
        
                    User_Vendor_Details.querySelectorAll('.product')[x].onclick = function()
                    {

                        // if(gcd[i]['Status'] == 1){
                        //     I('commentBtn').style.display = 'block';
                        // }
                        // else if(gcd[i]['Status'] == 0){
                        //     I('commentBtn').style.display = 'none';
                        // }

                        let form_data1 = new FormData(); 
                        // console.log(I('UserInformationID').innerHTML);
                        form_data1.append("PRODUCTID", this.children[3].innerText);
                        form_data1.append("wtype","CheckStatus");
                        console.log("gcd");    
                        $.ajax({
                            url:'../adminincludes/InformationLoad.php',
                            method:'POST',
                            data:form_data1,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (CheckStatus) {
                                let gcd = JSON.parse(CheckStatus);
                                if(gcd[0]['Status'] == 1){
                                    I('commentEnableBtn').style.display = 'none';
                                    I('commentBtn').style.display = 'block';
                                    // I('commentEnableBtn').style.display = 'none';
                                }
                                else if(gcd[0]['Status'] == 0){
                                    I('commentBtn').style.display = 'none';
                                    I('commentEnableBtn').style.display = 'block';
                                }
                            }
                        })
                        
                        C('big_img')[1].style.display = 'block';
                        // C('big_img1')[1].style.display = 'block';
                        // console.log(this.parentNode.innerHTML);
                        console.log(this.children[1].innerText);
                        console.log(this.children[2].innerText);
                        console.log(this.children[3].innerText);

                        let form_data = new FormData(); 
                        console.log(I('UserInformationID').innerHTML);
                        form_data.append("PRODUCTID", this.children[3].innerText);
                        form_data.append("wtype","loadVenderProductsDetails");
                        console.log("gcd");    
                        $.ajax({
                            url:'../adminincludes/InformationLoad.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (GetCustomerApprovedData) {
                                console.log(GetCustomerApprovedData);

                                let gcd = JSON.parse(GetCustomerApprovedData);
                                let Rating;
                                if(gcd[0]['Rating'] == null){
                                    Rating = 'There is no Rating yet';
                                }
                                else{
                                    Rating = gcd[0]['Rating'] + " out of 5";
                                }

                                I('commentRenterName').innerHTML = gcd[0]['FirstName'] + " " + gcd[0]['MiddleName'] + " " +gcd[0]['LastName'];
                                I('commentRenterID').innerHTML = gcd[0]['userID'];
                                I('commentStoreName').innerHTML = gcd[0]['StoreName'];
                                I('commentStoreID').innerHTML = gcd[0]['RenterID'];
                                I('commentProductName').innerHTML = gcd[0]['Name'];
                                I('commentProductID').innerHTML = gcd[0]['ProductID'];
                                loadCommentReports();

                                I('commentProductRating').innerHTML = Rating;
                                I('commentloaction').innerHTML = gcd[0]['Address'] + " " + gcd[0]['Barangay'] + " " + gcd[0]['City'] + " " + gcd[0]['Province'] + " " + gcd[0]['Region'];

                                I('commentPrice').innerHTML = gcd[0]['PriceRent'];
                                I('commentDeposit').innerHTML = gcd[0]['DepositRent'];
                                I('commentDiscount').innerHTML = gcd[0]['Discount'];



                                let form_data2 = new FormData(); 
                                console.log(I('UserInformationID').innerHTML);
                                form_data2.append("PRODUCTID", I('commentProductID').innerHTML);
                                form_data2.append("wtype","loadSize");
                                console.log("gcd");    
                                $.ajax({
                                url:'../adminincludes/InformationLoad.php',
                                method:'POST',
                                data:form_data2,
                                contentType:false,
                                cache:false,
                                processData:false,
                                    success: function (GetCustomerApprovedData) {
                                        let gcd = JSON.parse(GetCustomerApprovedData);
                                        for(let i = 0; i < gcd.length; i++){
                                            let commentColor = I('commentSize');
        
                                            commentColor.innerHTML +=`
                                                <div class="size">
                                                    ${gcd[i]['Size']}
                                                </div>
                                            `;
                                        }

                                        let form_data2 = new FormData(); 
                                        console.log(I('UserInformationID').innerHTML);
                                        form_data2.append("PRODUCTID", I('commentProductID').innerHTML);
                                        form_data2.append("wtype","loadSizeAll");
                                        console.log("gcd");    
                                        $.ajax({
                                        url:'../adminincludes/InformationLoad.php',
                                        method:'POST',
                                        data:form_data2,
                                        contentType:false,
                                        cache:false,
                                        processData:false,
                                            success: function (GetCustomerApprovedData) {
                                                let gcd = JSON.parse(GetCustomerApprovedData);
                                                for(let i = 0; i < gcd.length; i++){
        
                                                    let AvailableStock = I('AvailableSize');
        
                                                    AvailableStock.innerHTML +=`
                                                    <tr>
                                                        <td >${gcd[i]['Size']}</td>
                                                        <td >${gcd[i]['SizeType']}</td>
                                                        <td >${gcd[i]['Chest']}</td>   
                                                        <td >${gcd[i]['Waist']}</td>
                                                        <td >${gcd[i]['Hip']}</td>                                
                                                    </tr>
                                                    `;
        
                                                }
                                            }
                                        })
                                        
                                    }
                                });


                                // let form_data = new FormData(); 
                                // console.log(I('UserInformationID').innerHTML);
                                // form_data.append("PRODUCTID", I('commentProductID').innerHTML);
                                // form_data.append("wtype","loadColour");
                                // console.log("gcd");    
                                // $.ajax({
                                // url:'../adminincludes/InformationLoad.php',
                                // method:'POST',
                                // data:form_data,
                                // contentType:false,
                                // cache:false,
                                // processData:false,
                                //     success: function (GetCustomerApprovedData) {
                                //         let gcd = JSON.parse(GetCustomerApprovedData);
                                //         for(let i = 0; i < gcd.length; i++){

                                //             let commentColor = C('commentColor');
                                //             console.log(gcd[i]['Colour']);
        
                                //             commentColor[0].innerHTML +=`
                                //                 <div class="color">
                                //                     ${gcd[i]['Colour']}
                                //                 </div>
                                //             `;

                                //             let AvailableStock = I('AvailableStock');

                                //             AvailableStock.innerHTML +=`
                                //             <tr>
                                //                 <td >${gcd[i]['Colour']}</td>
                                //                 <td >${gcd[i]['Size']}</td>
                                //                 <td >${gcd[i]['Brand']}</td>   
                                //                 <td >${gcd[i]['Material']}</td>
                                //                 <td >${gcd[i]['Qty']}</td>                                
                                //             </tr>
                                //             `;

                                //         }
                                //     }
                                // })


                                let form_data3 = new FormData(); 
                                console.log(I('UserInformationID').innerHTML);
                                form_data3.append("PRODUCTID", I('commentProductID').innerHTML);
                                form_data3.append("wtype","loadImgAll");
                                console.log("gcd");    
                                $.ajax({
                                url:'../adminincludes/InformationLoad.php',
                                method:'POST',
                                data:form_data3,
                                contentType:false,
                                cache:false,
                                processData:false,
                                    success: function (GetCustomerApprovedData) {
                                        let gcd = JSON.parse(GetCustomerApprovedData);
                                        console.log(gcd);
                                        let Video;  
                                        

                                        for(let i = 0; i < gcd.length; i++){

                                            
                                            // if(gcd[i]['Video'] != ''){
                                            //     C('small_img1')[0].style.display = 'none';
                                            // }

                                            C('big_img')[1].src = gcd[0]['Image'];

                                            C('ThreeCommentIma')[0].innerHTML +=`
                                                <img src=${gcd[i]['Image']} class="small_img">
                                                
                                            `;


                                            $(document).ready(function(){
                                                $(".small_img").hover(function(){
                                                    C("big_img1")[1].style.display = 'none';
                                                    C("big_img")[1].style.display = 'block';
                                                    // C('tracker')[0].style.display = 'block';
                                                    $(".big_img").attr('src', $(this).attr('src'));
                                            
                                                })
                                            })

                                            // $(document).ready(function(){
                                            //     $(".small_img1").hover(function(){
                                            //         C("big_img1")[1].style.display = 'block';
                                            //         C("big_img")[1].style.display = 'none';
                                            //         // C('tracker')[0].style.display = 'none';
                                            //         $(".big_img1").attr('src', $(this).attr('src'));
                                            //     })
                                            // })

                                            // $(document).ready(function () {
                                            //     $(".big_img").imagezoomsl({
                                            //         zoomrange: [5, 5]
                                            //     });
                                            // })
                                            
                                            
                                        }


                                        let form_data = new FormData(); 
                                        console.log(I('UserInformationID').innerHTML);
                                        form_data.append("PRODUCTID", I('commentProductID').innerHTML);
                                        form_data.append("wtype","loadVideoAll");
                                        console.log("gcd");    
                                        $.ajax({
                                        url:'../adminincludes/InformationLoad.php',
                                        method:'POST',
                                        data:form_data,
                                        contentType:false,
                                        cache:false,
                                        processData:false,
                                            success: function (GetCustomerApprovedData) {
                                                let gcd = JSON.parse(GetCustomerApprovedData);

                                                for(let i = 0; i < gcd.length; i++){
                                                    console.log(gcd[i]['Video']);
                                                    C('ThreeCommentIma')[0].innerHTML +=`
                                                    <video autoplay muted controls src="${gcd[i]['Video']}" class="small_img1"></video>
                                                    `;

                                                    // $(document).ready(function(){
                                                    //     $(".small_img").hover(function(){
                                                    //         C('small_img1')[1].muted =true;
                                                    //         C("big_img1")[1].style.display = 'none';
                                                    //         C("big_img")[1].style.display = 'block';
                                                    //         // C('tracker')[0].style.display = 'block';
                                                    //         $(".big_img").attr('src', $(this).attr('src'));
                                                    
                                                    //     })
                                                    // })

                                                    // $(document).ready(function(){
                                                    //     $(".small_img1").hover(function(){
                                                    //         C("big_img1")[1].style.display = 'block';
                                                    //         C("big_img")[1].style.display = 'none';
                                                    //         // C('tracker')[0].style.display = 'none';
                                                    //         $(".big_img1").attr('src', $(this).attr('src'));
                                                    //     })
                                                    // })

                                                    // $(document).ready(function () {
                                                    //     $(".big_img").imagezoomsl({
                                                    //         zoomrange: [5, 5]
                                                    //     });
                                                    // })
                                                }

                                                // if(gcd[0]['Video'] == ''){
                                                //     C('small_img1')[0].style.display = 'none';
                                                // }
                                                // else{
                                                //     C('small_img1')[0].style.display = 'block';
                                                //     C('small_img1')[0].src = gcd[0]['Video'];
                                                // }
                                            }
                                        })
                                    }
                                })
                                
                            }
                        })

                        C('commentsection')[0].style.display = 'block';

                        

                        // console.log(this.children[4].innerText);
                        // tabtable.removeChild(tabtable.firstElementChild);
                        // tabtable.parentNode.parentNode.removeChild(tabtable.parentNode);
                        // index = this.parentElement.childNodes;
                        // console.log(index);
                        // User_Vendor_Details.children[0].remove();
                        // tabtable.removeChild(tabtable.children[0]);
                        // console.log(tabtable.parentNode.remove(tabtable.childNodes));
                        // while (tabtable.hasChildNodes()) {
                        //     tabtable.removeChild(tabtable.firstChild);
                        //   }
    
                        
                    };
                };   


            }
        }
    });
}

C('DepositExit2')[0].addEventListener('click', () => {
    C('DepositDescript2')[0].style.display = 'none';
    blurRemove();
})

async function RentalReportApproved(){
    if(parseFloat(I('DepositDefault2').value) > parseFloat(I('DepositRentt2').innerText)){
        Swal.fire({
            title: "The number you input is bigger than the deposit!",
            text: "",
            icon: "warning"
          });
    }
    else if(I('DepositDefault2').value == ''){
        Swal.fire({
            title: "Please input an Amount!",
            text: "",
            icon: "warning"
          });
    }
    else if(I('RentalReferenceNumber2').value == ''){
        Swal.fire({
            title: "Please input a Reference Number!",
            text: "",
            icon: "warning"
          });
    }
    else{

        Swal.fire({
            title: "Are you sure you are going to approve this request?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, approve it!"
          }).then((result) => {
            if (result.isConfirmed) {
                let form_data = new FormData(); 
                
                form_data.append("RI", I('DepositReceiptNo2').innerHTML);
                form_data.append("DE", I('DepositDefault2').value);
                form_data.append("RN", I('DepositRequestNo2').innerHTML);
                form_data.append("ASA", 1);
                form_data.append("REF", I('RentalReferenceNumber2').value);
                form_data.append("AB", I('AdminFullName').innerHTML);
                form_data.append("wtype","RentalReport");
                console.log("gcd");    
                $.ajax({
                    url:'../adminincludes/data.php',
                    method:'POST',
                    data:form_data,
                    contentType:false,
                    cache:false,
                    processData:false,
                    beforeSend: function() {
                        C('containerloader')[0].style.display = 'block';
                    },
                    success: function (Deposit) {
                        C('containerloader')[0].style.display = 'none';
                        console.log(Deposit);
                        Swal.fire({
                            title: "Approved!",
                            text: "The deposit is successfully deducted from the rentee.",
                            icon: "success"
                          });

                        C('DepositDescript2')[0].style.display = 'none';
                        blurRemove();
                    }
                })
        
            }
        });
       
        // const { value: text } = await Swal.fire({
        //     input: "textarea",
        //     inputLabel: "Message",
        //     inputPlaceholder: "Type your message here...",
        //     inputAttributes: {
        //       "aria-label": "Type your message here"
        //     },
        //     showCancelButton: true
        //   });
        //   if (text) {
        //         console.log(text);
        //   }
    }
}



async function RentalReportCancelled(){
    Swal.fire({
        title: "Are you sure you are going to cancel this request?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!"
      }).then((result) => {
        if (result.isConfirmed) {
            let form_data = new FormData(); 
            form_data.append("RI", I('DepositReceiptNo2').innerHTML);
            form_data.append("DE", 0);
            form_data.append("ASA", 0);
            form_data.append("AB", I('AdminFullName').innerHTML);
            form_data.append("wtype","RentalReport");
            console.log("gcd");    
            $.ajax({
                url:'../adminincludes/data.php',
                method:'POST',
                data:form_data,
                contentType:false,
                cache:false,
                processData:false,
                beforeSend: function() {
                    C('containerloader')[0].style.display = 'block';
                },
                success: function (Deposit) {
                    C('containerloader')[0].style.display = 'none';
                    console.log(Deposit);
                    Swal.fire({
                        title: "Cancelled!",
                        text: "The Request has been now Cancelled!",
                        icon: "success"
                      });
                }
            })
    
        }
    });
    // if(parseFloat(I('DepositDefault2').value) > parseFloat(I('DepositRentt2').innerText)){
    //     Swal.fire({
    //         title: "The number you input is bigger than the deposit!",
    //         text: "",
    //         icon: "warning"
    //       });
    // }
    // else if(I('DepositDefault2').value == ''){
    //     Swal.fire({
    //         title: "Please input an Amount!",
    //         text: "",
    //         icon: "warning"
    //       });
    // }
    // else if(I('RentalReferenceNumber2').value == ''){
    //     Swal.fire({
    //         title: "Please input a Reference Number!",
    //         text: "",
    //         icon: "warning"
    //       });
    // }
    // else{
        
    //     // const { value: text } = await Swal.fire({
    //     //     input: "textarea",
    //     //     inputLabel: "Message",
    //     //     inputPlaceholder: "Type your message here...",
    //     //     inputAttributes: {
    //     //       "aria-label": "Type your message here"
    //     //     },
    //     //     showCancelButton: true
    //     //   });
    //     //   if (text) {
    //     //         console.log(text);
    //     //   }
    // }
}


function RenteeReportApproved(){

        Swal.fire({
            title: "Are you sure you are going to approve this request?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, approve it!"
          }).then((result) => {
            if (result.isConfirmed) {
    
                let form_data = new FormData(); 
                form_data.append("RI", I('DepositRequestNo').innerHTML);
                form_data.append("RID", I('DepositRequestNo').innerHTML);
                form_data.append("RE", I('DepositDefault').value);
                form_data.append("ASA", 1);
                form_data.append("AB", I('AdminFullName').innerHTML);
                form_data.append("wtype","RenteeReportControl");
                console.log("gcd");    
                $.ajax({
                    url:'../adminincludes/data.php',
                    method:'POST',
                    data:form_data,
                    contentType:false,
                    cache:false,
                    processData:false,
                    beforeSend: function() {
                        C('containerloader')[0].style.display = 'block';
                    },
                    success: function (Deposit) {
                        C('containerloader')[0].style.display = 'none';
                        console.log(Deposit);
                        Swal.fire({
                            title: "Approved!",
                            text: "The deposit is successfully returned to the rentee.",
                            icon: "success"
                          });
                        C('DepositDescript')[0].style.display = 'none';
                        blurRemove();
                    }
    
                })
              
            }
          }); 
    
    
    
}

function RenteeReportCancelled(){
    Swal.fire({
        title: "Are you sure you are going to cancel this request?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!"
      }).then((result) => {
        if (result.isConfirmed) {

            let form_data = new FormData(); 
            form_data.append("RI", I('DepositReceiptNo').innerHTML);
            form_data.append("RID", I('DepositRequestNo').innerHTML);
            form_data.append("RE", 0);
            form_data.append("ASA", 0);
            form_data.append("AB", I('AdminFullName').innerHTML);
            form_data.append("wtype","RenteeReportControl");
            console.log("gcd");    
            $.ajax({
                url:'../adminincludes/data.php',
                method:'POST',
                data:form_data,
                contentType:false,
                cache:false,
                processData:false,
                beforeSend: function() {
                    C('containerloader')[0].style.display = 'block';
                },
                success: function (Deposit) {
                    console.log(Deposit);
                    C('containerloader')[0].style.display = 'none';
                    Swal.fire({
                        title: "Cancelled!",
                        text: "The report from rentee is cancelled.",
                        icon: "success"
                      });
                      C('DepositDescript')[0].style.display = 'none';
                      blurRemove();
                }

            })
          
        }
      }); 
}

LoadDepositProblem();

function LoadDepositProblem(){
    let form_data = new FormData(); 
    // form_data.append("FN", FN);
    form_data.append("wtype","LoadDepositProduct");
    console.log("gcd");    
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (Deposit) {
            let DepositTable = I('DepositTable');
            let gcd = JSON.parse(Deposit);
            console.log(gcd);

            // let deposit = gcd[i]['DepositRent'];
            // console.log(deposit);

            for(let i = 0; i < gcd.length; i++){
                let totalreturn = parseFloat(gcd[i][9]) + parseFloat(gcd[i][11]);

                DepositTable.innerHTML += `
                <tr style="background: white;">
                    <td>${gcd[i]['RequestIDE']}</td>
                    <td>${gcd[i]['userID']}</td>
                    <td>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                    
                    <td>${gcd[i]['ReceiptNumber']}</td>
                    <td> ${gcd[i]['Type']}</td>
                    <td>${totalreturn}</td>
                    <td class="DepositAction"> 
                        <span class="material-symbols-outlined" style="padding: 5px; color: black;">package</span>
                    </td>
                </tr>  
                `;
            }

            for(var x = 0; x < DepositTable.rows.length; x++){

                let Cell = DepositTable.rows[x].cells;
                DepositTable.rows[x].cells[6].onclick = function()
                {
                    blurActive();
                    C('DepositDescript')[0].style.display = 'block';
                    I('DepositReceiptNo').innerHTML = Cell[3].innerHTML;
                    I('DepositRequestNo').innerHTML = Cell[0].innerHTML;
                    I('DepositDefault').value = Cell[5].innerHTML;


                    let form_data = new FormData(); 
                    form_data.append("RECEIPTNO",I('DepositReceiptNo').innerHTML);
                    form_data.append("wtype","LoadDepositProductImage");
                      
                    $.ajax({
                        url:'../adminincludes/InformationLoad.php',
                        method:'POST',
                        data:form_data,
                        contentType:false,
                        cache:false,
                        processData:false,
                        success: function (GetImageDepositData) {
                            let gcd = JSON.parse(GetImageDepositData);
                            console.log(gcd);
                            C('big_img')[0].src = gcd[0][9];
                            C('small_img')[0].src = gcd[0][9];
                            C('small_img')[1].src = gcd[0][10];
                            C('small_img')[2].src = gcd[0][11];
                            C('small_img1')[0].src = gcd[0][12];
                            I('DepositRenterNo').innerHTML = gcd[0][0];
                            I('DepositRenteeNo').innerHTML = gcd[0][2];
                            
                            C('DepositDesc')[0].innerHTML = gcd[0][8];

                            
                        }
                    })

                }
            }

            
        }
    });
}

function FilterPrice() {
    if (this.value > 0) {
        let value =  parseFloat(this.value).toFixed(2)
        this.value = value;
        return true;
    }
    else {
        this.value = parseFloat(1).toFixed(2)
        return false;
    }
}

// ^[0-9].[0-9]{2}
I('DepositPecent').addEventListener('input', ()=>{
    if(!(/^[0-9]*\d$/).test(I('DepositPecent').value)){
        // console.log("Bawal Hindi Number Dito!!");
        // Swal.fire(
        //     'Error',
        //     'You cant enter a text or character here!!',
        //     'error'
        // )
        I('DepositPecent').style.border = "1px solid red";
        // I('DepositPecent').value = '';
    }
    else{
        I('DepositPecent').style.border = "1px solid black";
    }
});

I('DepositDefault').addEventListener('input', ()=>{
    if(!(/^[0-9]*\d$/).test(I('DepositDefault').value)){
        // console.log("Bawal Hindi Number Dito!!");
        // Swal.fire(
        //     'Error',
        //     'You cant enter a text or character here!!',
        //     'error'
        // )
        I('DepositDefault').style.border = "1px solid red";
        // I('DepositPecent').value = '';
    }
    else{
        I('DepositDefault').style.border = "1px solid black";
    }
});


I('GcashIMgSave').addEventListener('click', () => {
    let form_data = new FormData();

    let uploaddropid = I('ChangeGcashImage');
    form_data.append("fileID1",uploaddropid.files[0]);

    form_data.append("userID", I('Admin_ID').innerHTML);
    form_data.append("FLN", I('GcashName').value);
    form_data.append("NB", I('GcashNumberChange').value);
    form_data.append("wtype","forChangeGcash");

    
    $.ajax({
        url:'../adminincludes/SIGNUO.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        beforeSend: function() {
            C('containerloader')[0].style.display = 'block';
        },
        success: function (forRegister) {
            C('containerloader')[0].style.display = 'none';
            console.log(forRegister);
            I('GcashName').value = '';
            I('GcashNumberChange').value = '';
        }
    })
})

// I('DepositBtn').addEventListener('click', () => {


//     let deposit = I('DepositDefault').value;
//     let depositenter = parseFloat(I('DepositPecent').value);
   

//     if(I('DepositPecent').value == ""){
//         console.log("Walang Laman!!");
//         Swal.fire(
//             'Error',
//             'Please input an amount in deposit!',
//             'error'
//         )
//         I('DepositPecent').style.border = "1px solid red";
//         I('DepositPecent').value = '';
//     }
//     else if(I('DepositPecent').value > parseFloat(deposit.substring(1))){
//         console.log('Ooooooops mas malaki pa ibabawas mo kaysa deposit!!');
//         Swal.fire(
//             'Error',
//             'You cant a value that is bigger than the deposit!!',
//             'error'
//         )
//         I('DepositPecent').style.border = "1px solid red";
//         I('DepositPecent').value = '';
//     }
//     else if((/^[0-9]$/).test(I('DepositPecent').value)){
//         console.log("Bawal Hindi Number Dito!!");
//         Swal.fire(
//             'Error',
//             'You cant enter a text or character here!!',
//             'error'
//         )
//         I('DepositPecent').style.border = "1px solid red";
//         I('DepositPecent').value = '';
//     }
//     else if(I('DepositPecent').style.borderColor == "red"){
//         Swal.fire(
//             'Error',
//             'You cant enter a text or character here!!',
//             'error'
//         )
//         I('DepositPecent').style.border = "1px solid black";
//         I('DepositPecent').value = '';
//     }
    
//     else{
//         console.log('Ok na bawas na');
//         Swal.fire(
//             'Success',
//             'You have send notification to both Customer and Vender!',
//             'success'
//         )

//         let form_data = new FormData(); 
//         form_data.append("DEPOSITDEDUCTION",I('DepositPecent').value);
//         form_data.append("RECEIPTID",I('DepositRequestNo').innerHTML);
//         form_data.append("RECEIPTNO",I('DepositReceiptNo').innerHTML);
//         form_data.append("wtype","InputDeposit");
//         console.log(I('UInumber').innerHTML);    
//         $.ajax({
//             url:'../adminincludes/data.php',
//             method:'POST',
//             data:form_data,
//             contentType:false,
//             cache:false,
//             processData:false,
//             success: function (changedeposit) {

//             }
//         })

//         I('DepositPecent').style.border = "1px solid black";
//         I('DepositPecent').value = '';
//         C('DepositDescript')[0].style.display = 'none';

//         blurRemove();
//     }


//     // notificationInsert2(I('DepositRenteeNo').innerHTML,`Bad News, the product that you have return has damage on it!`, 
// 	// 			                "myaccount.php#dashboard","fact_check", "1","");

//     // notificationInsert3(I('DepositRenterNo').innerHTML,`Your Request Has been Given to Customer! by Admin!`, 
// 	// "myaccount.php#dashboard","fact_check", "1","");
// })

I('UInumber').innerHTML = '';

function LoadRentedProducts(){
    let form_data = new FormData(); 
    form_data.append("USERID",I('UInumber').innerHTML);
    form_data.append("wtype","LoadRentedProducts");
    console.log(I('UInumber').innerHTML);    
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (GetProductsData) {
            let RentedProductsTable = I('Rented-Products'), rIndex;
            let gcd = JSON.parse(GetProductsData);
            console.log(gcd);

            for(let i = 0; i < gcd.length; i++){
                RentedProductsTable.innerHTML += `
                <tr style="background: white; border-bottom: 1px solid;">
                    <td> ${gcd[i]['userID']} </td>
                    <td> ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                    <td> ${gcd[i]['ReceiptNumber']}  </td>
                    <td> ${gcd[i]['Status']} </td>
                    <td> ${gcd[i]['PaymentMethod']} </td>                            
                </tr> 
                
                `;
            }

            for(var x = 0; x < RentedProductsTable.rows.length; x++){

                // let Cell = gcd.rows[x].cells;
                RentedProductsTable.rows[x].onclick = function()
                {
                    rIndex = this.rowsIndex;

                    C('containerRP')[0].style.display = 'block';

                    let ReceiptNo = this.cells[2].innerHTML;
                    console.log(this.cells[2].innerHTML);

                    let form_data = new FormData(); 
                    form_data.append("RECEIPTNO",this.cells[2].innerHTML);
                    form_data.append("wtype","LoadRentedProductsByReceipt");
                    // console.log(I('UInumber').innerHTML);    
                    $.ajax({
                        url:'../adminincludes/InformationLoad.php',
                        method:'POST',
                        data:form_data,
                        contentType:false,
                        cache:false,
                        processData:false,
                        success: function (GetProductsByReceiptData) {
                            let gcd = JSON.parse(GetProductsByReceiptData);

                            I('RPID').innerHTML = gcd[0][21];
                            I('RPRID').innerHTML = gcd[0][2];
                            I('RPRName').innerHTML = gcd[0][3] + " " + gcd[0][4] + " " + gcd[0][5];
                            I('RPRRID').innerHTML = gcd[0][6];
                            I('RPRRName').innerHTML = gcd[0][7];
                            I('RPPM').innerHTML = gcd[0][10];
                            I('RPS').innerHTML = gcd[0][0];
                            I('RPToDelivery').innerHTML = gcd[0][16];
                            I('RPStartDate').innerHTML = gcd[0][14];
                            I('RPEndDate').innerHTML = gcd[0][15];



                            let table = I('RPProduct');


                            for(let z = 0; z < gcd.length; z++){
                                table.innerHTML = table.innerHTML + `
                                <tr>
                                    <td > <img src="${gcd[z]['Image']}"> </td>
                                    <td > ${gcd[z]['Name']} </td>
                                    <td > ${gcd[z]['Size']} </td>
                                    <td > ${gcd[z]['PriceRent']} </td>
                                </tr>                
                                `;
                            }

                            let form_data = new FormData(); 
                            form_data.append("RECEIPTNO",ReceiptNo);
                            form_data.append("wtype","LoadRentedDepositPrice");
                            // console.log(I('UInumber').innerHTML);    
                            $.ajax({
                                url:'../adminincludes/InformationLoad.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (GetProductsPrice) {
                                    let gcd = JSON.parse(GetProductsPrice);

                                    I('RPDeposit').innerHTML = "₱"+gcd[0][0];
                                    I('RPPrice').innerHTML = "₱"+gcd[0][1];

                                    I('RPTotal').innerHTML = "₱" + (parseFloat(gcd[0][0]) + parseFloat(gcd[0][1]));
                                }
                            })



                        }
                    })



                }
            }


        }
    });
}


// Vendor Table na dito

LoadStoreData();

function LoadStoreData(){
    let form_data = new FormData(); 
    form_data.append("wtype","GetStoreData");
    console.log("gcd");    
    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (GetStoreData) {
            let StoreTable = I('StoreTable');
            let gcd = JSON.parse(GetStoreData);
            console.log(gcd);

            for(let i = 0; i < gcd.length; i++){

                let status;

                if(gcd[i]['BusinessRegistrationVerification'] == 1){
                    status = 'Approved';
                }
                else if(gcd[i]['BusinessRegistrationVerification'] == 2){
                    status = 'Pending';
                }

                StoreTable.innerHTML +=  `
                <tr style="background: white; border-bottom: 1px solid;">
                    <td class="UserIdentification"> ${gcd[i]['RenterID']} </td>
                    <td class="UserIdentification"> ${gcd[i]['userID']} </td>
                    <td class="UserIdentification"> ${gcd[i]['StoreName']}</td>
                    <td> ${status}</td>
                    <td>
                        <div class="Vendor-Identification">
                            <div  class="Vendor-ID" id="Vendor-IDD">
                                <span class="material-symbols-outlined">fact_check</span>
                            </div>
                        </div>                               
                    </td> 
                </tr>  
                `;


                let VendorImagePopupClosebtn = document.getElementById('Vendor-Popup-Image-Exit');


                let VendorIdentificationbtn = document.querySelectorAll('.Vendor-ID');
                let VendorImagePopup = document.getElementsByClassName('Vendor-Popup-Image');

                VendorImagePopupClosebtn.addEventListener('click' , () => {
                    VendorImagePopup[0].style.display = 'none';
                    blurRemove();
                    console.log('soisdfsdf');
                })


                // VendorIdentificationbtn.forEach((CPicture) => {
                //     CPicture.onclick = () => {
                //         VendorImagePopup[0].style.display = 'block';
                //         console.log('soisdfsdf');
                //         blurActive();
                //         console.log('soisdfsdf');
                //     }
                // });

                for(var x = 0; x < StoreTable.rows.length; x++){

                    let Cell = StoreTable.rows[x].cells;
                    StoreTable.rows[x].cells[4].onclick = function()
                    {

                        I('StoreID').innerHTML = Cell[0].innerHTML;
                        I('StoreName').innerHTML = Cell[2].innerHTML;
                        
                        VendorImagePopup[0].style.display = 'block';
                        blurActive();

                        let form_data = new FormData(); 
                        form_data.append("RENTERID",I('StoreID').innerHTML);
                        form_data.append("wtype","GetStoreImageData");

                        $.ajax({
                            url:'../adminincludes/data.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (GetStoreImageData) {
                               
                                let gcd = JSON.parse(GetStoreImageData);
                                console.log(gcd);


                                I('StoreImage1').src = gcd[0]['BusinessRegistration'];
                                I('StoreImage2').src = gcd[1]['BusinessRegistration'];

                                console.log(gcd[2]['BusinessRegistration']);

                                if(gcd[2]['BusinessRegistration'] == ''){
                                    I('StoreImage3').src = "../assets/adminimage/Noimage2.png";
                                }
                                else{
                                    I('StoreImage3').src = gcd[2]['BusinessRegistration'];
                                }

                                if(gcd[3]['BusinessRegistration'] == ''){
                                    I('StoreImage4').src = "../assets/adminimage/Noimage2.png";
                                }
                                else{
                                    I('StoreImage4').src = gcd[3]['BusinessRegistration'];
                                }
                                
                                
                            }      
                        })
                    }

                    // I('addvendor').addEventListener('click' , () => {

                    //     let form_data = new FormData(); 
                    //     form_data.append("RENTERID", I('StoreID').innerHTML);
                    //     // form_data.append("ASN", 1);
                    //     // form_data.append("WB", I('PayWalletApprovalPayment').innerHTML);
                    //     // form_data.append("UI", I('PayWalletApprovalID').innerHTML);
                    //     form_data.append("wtype","UpdateStoreData");
    
                    //     $.ajax({
                    //         url:'../adminincludes/data.php',
                    //         method:'POST',
                    //         data:form_data,
                    //         contentType:false,
                    //         cache:false,
                    //         processData:false,
                           
                    //         success: function (PayWalletImg) {
                            
                    //             console.log(PayWalletImg); 

                    //             notificationInsert2(I('StoreID').innerHTML,`Congratulations! Your store account is now verified by the Admin. You can now transact with customers.`, 
				    //             "myaccount.php#dashboard","fact_check", "1","");
                             
                    //         }
    
                    //     });

                    // })
                }
            }
        }
    });
}


I('addvendor').addEventListener('click' , () => {

    let form_data = new FormData(); 
    form_data.append("RENTERID", I('StoreID').innerHTML);
    // form_data.append("ASN", 1);
    // form_data.append("WB", I('PayWalletApprovalPayment').innerHTML);
    // form_data.append("UI", I('PayWalletApprovalID').innerHTML);
    form_data.append("wtype","UpdateStoreData");

    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        beforeSend: function(){
            C('containerloader')[0].style.display = 'block';
        },
        success: function (PayWalletImg) {
        
            C('containerloader')[0].style.display = 'none';
            Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'You Verified a Verified!',
                showConfirmButton: false,
                timer: 1500
            })

            console.log(PayWalletImg); 

            notificationInsert3(I('StoreID').innerHTML,`Congratulations! Your store account is now verified by the Admin. You can now transact with customers.`, 
            "myaccount.php#dashboard","fact_check", "1","");
            C('Vendor-Popup-Image')[0].style.display = 'none';
            blurRemove();
        }

    });

})



LoadStoreStatusData();

function LoadStoreStatusData(){
    let form_data = new FormData(); 
    form_data.append("wtype","SelectStoreStatusData");

    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (response) {
            
            let StoreStatusTable = I('StoreStatusTable');
            let gcd = JSON.parse(response);
            console.log(gcd);

            for(let i = 0; i < gcd.length; i++){

                if(gcd[i]['BusinessRegistrationVerification'] == 1){
                    Statuss = 'Activated';   
                }

                if(gcd[i]['BusinessRegistrationVerification'] == 0){
                    Statuss = 'Deactivated';   
                }

                StoreStatusTable.innerHTML +=`
                <tr style="background: white; border-bottom: 1px solid;">
                    <td> ${gcd[i]['RenterID']} </td>
                    <td> ${gcd[i]['StoreName']}</td>
                    <td> ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                    <td> ${Statuss} </td>

                    <td>
                        <div class="Vendor-Control">
                            <div class="VEbtn">
                                <span class="Vendor-Enable-Btn material-symbols-outlined">how_to_reg</span>
                            </div>
                            <div class="VDbtn">
                                <span class="Vendor-Disable-Btn material-symbols-outlined">frame_person_off</span>
                            </div>
                        
                            
                        </div> 
                    </td>
                    
                                              
                </tr>  
                `;

                
                if(gcd[i]['BusinessRegistrationVerification'] == 0){
                    C('Vendor-Disable-Btn')[i].style.display = 'none';
                    C('Vendor-Enable-Btn')[i].style.display = 'inline-block';
                }
                else if(gcd[i]['BusinessRegistrationVerification'] == 1){
                    C('Vendor-Disable-Btn')[i].style.display = 'inline-block';
                    C('Vendor-Enable-Btn')[i].style.display = 'none';
                }
                

                for(var x = 0; x < StoreStatusTable.rows.length; x++){
                    let Cell = StoreStatusTable.rows[x].cells;
                    StoreStatusTable.rows[x].cells[4].onclick = function()
                    {
                        blurActive1();
                        if( Cell[3].innerText == 'Activated'){


                            I('Vendor-Popup-Image-No1').innerHTML = Cell[0].innerHTML;
                            C('Vendor-Disable-Popup')[0].style.display = 'block';

                            // I('DisableVendor-Yes').addEventListener('click', () => {
                            //     let form_data = new FormData(); 
                            //     form_data.append("RENTERID",I('Vendor-Popup-Image-No1').innerHTML);
                            //     form_data.append("NUMBER",0);
                            //     form_data.append("wtype","UpdateStoreStatusData");
                            
                            //     $.ajax({
                            //         url:'../adminincludes/data.php',
                            //         method:'POST',
                            //         data:form_data,
                            //         contentType:false,
                            //         cache:false,
                            //         processData:false,
                            //         success: function (PayWalletLoad) {
                            
                                        
                            //         }
                            //     });
                            // })

                            


                        }

                        if( Cell[3].innerText == 'Deactivated'){
                            I('Vendor-Popup-Image-No2').innerHTML = Cell[0].innerHTML;
                            C('Vendor-Enable-Popup')[0].style.display = 'block';

                            // I('EnableVendor-Yes').addEventListener('click', () => {
                            //     let form_data = new FormData(); 
                            //     form_data.append("RENTERID",I('Vendor-Popup-Image-No2').innerHTML);
                            //     form_data.append("NUMBER",1);
                            //     form_data.append("wtype","UpdateStoreStatusData");
                            
                            //     $.ajax({
                            //         url:'../adminincludes/data.php',
                            //         method:'POST',
                            //         data:form_data,
                            //         contentType:false,
                            //         cache:false,
                            //         processData:false,
                            //         success: function (PayWalletLoad) {
                            
                                        
                            //         }
                            //     });
                            // })
                            
                        }

                    }
                }
                // if( gcd[i]['BusinessRegistrationVerification'] == 1){
                //     C('VEbtn')[0].style.display = 'block';
                //     C('VDbtn')[0].style.display = 'none';
                //     // C('Vendor-Disable-Popup')[0].style.display = 'none';
                //     // C('Vendor-Enable-Popup')[0].style.display = 'block';
                // }

                // if( Statuss == 'Deactivated'){
                //     C('Vendor-Disable-Popup')[0].style.display = 'none';
                //     C('Vendor-Enable-Popup')[0].style.display = 'block';
                // }
            }
        }
    })
}

I('EnableVendor-Yes').addEventListener('click', () => {
    let form_data = new FormData(); 
    form_data.append("RENTERID",I('Vendor-Popup-Image-No2').innerHTML);
    form_data.append("NUMBER",1);
    form_data.append("wtype","UpdateStoreStatusData");

    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        beforeSend: function(){
            C('containerloader')[0].style.display = 'block';
        },
        success: function (PayWalletLoad) {

            C('containerloader')[0].style.display = 'none';
            Swal.fire({
                position: 'middle',
                icon: 'success',
                title: 'You Enabled a Vendor!',
                showConfirmButton: false,
                timer: 1500
            })
            notificationInsert3(I('Vendor-Popup-Image-No2').innerHTML,`Good news! Your Store has been Verified again by Admin!.`, 
            "myaccount.php#dashboard","verified", "1","");
            C('Vendor-Enable-Popup')[0].style.display = 'none';
        }
    });
})

I('DisableVendor-Yes').addEventListener('click', () => {

    if(I('PermissionUpdate').innerHTML == 3){
        Swal.fire({
            title: "Prohibited!",
            text: "Call the SuperAdmin to change your Priveledge!",
            icon: "warning"
        });
        C('Vendor-Disable-Popup')[0].style.display = 'none';
        blurRemove1();

    }
    else{
        let form_data = new FormData(); 
        form_data.append("RENTERID",I('Vendor-Popup-Image-No1').innerHTML);
        form_data.append("NUMBER",0);
        form_data.append("wtype","UpdateStoreStatusData");
    
        $.ajax({
            url:'../adminincludes/data.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            beforeSend: function(){
                C('containerloader')[0].style.display = 'block';
            },
            success: function (PayWalletLoad) {
    
                C('containerloader')[0].style.display = 'none';
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'You Disabled a Vendor!',
                    showConfirmButton: false,
                    timer: 1500
                })
                notificationInsert3(I('Vendor-Popup-Image-No1').innerHTML,`Bad news! Your Store has been Unverified by Admin!.`, 
                "myaccount.php#dashboard","verified", "1","");
                C('Vendor-Disable-Popup')[0].style.display = 'none';
                blurRemove1();
            }
        });
    }
    
})


I('DisableVendor-No').addEventListener('click', () => {
    C('Vendor-Disable-Popup')[0].style.display = 'none';
    blurRemove1();
})



    

let CustomerPopupEnableExitbtn = I('#Customer-Popup-Enable-Warning');

I('DepositDefault2').addEventListener('input', () => {
    
    if(parseFloat(I('DepositDefault2').value) > parseFloat(I('DepositRentt2').innerHTML)){

        let form_data = new FormData(); 
        form_data.append("RI", I('DepositReceiptNo2').innerHTML);
        form_data.append("wtype","PriceLoad");
    
        $.ajax({
            url:'../adminincludes/data.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            success: function (PayWalletLoad) { 
                let gcd = JSON.parse(PayWalletLoad);           
                I('PriceRent2').innerHTML = parseFloat(gcd[0]['PriceRent']);    
            }
        })
        console.log('HeHEHE');
        I('DepositDefault2').value = '';
    }
    else{
        let form_data = new FormData(); 
        form_data.append("RI", I('DepositReceiptNo2').innerHTML);
        form_data.append("wtype","PriceLoad");
    
        $.ajax({
            url:'../adminincludes/data.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            success: function (PayWalletLoad) {
    
                let gcd = JSON.parse(PayWalletLoad);
                if(parseFloat(I('DepositDefault2').value) > 0){
                    I('PriceRent2').innerHTML = parseFloat(gcd[0]['PriceRent']) + parseFloat(I('DepositDefault2').value);
                }
                else{
                    I('PriceRent2').innerHTML = parseFloat(gcd[0]['PriceRent']);
                }
                
            }
        })
    }
    
    
})

LoadPayWalletTable();

function LoadPayWalletTable(){
    // C('containerLoader')[0].style.display = 'block';
    let form_data = new FormData(); 
    // form_data.append("FN",FN);
    form_data.append("wtype","PayWalletLoad");

    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        // beforeSend: function(){
        //     C('containerloader')[0].style.display = 'block';
        // },
        success: function (PayWalletLoad) {

            let PayWalletTable = I('PayWalletLoadTable');
            let gcd = JSON.parse(PayWalletLoad);
            console.log(gcd);

           
           

            for(let i = 0; i < gcd.length; i++){
                let Statuss;
                // console.log(gcd);

                // PayWalletTable.innerHTML = "";
                PayWalletTable.innerHTML += `
                <tr style="background: white;">
                    <td >${gcd[i]['RequestID']}</td>
                    <td class="UserIdentification">${gcd[i]['renterID']}</td>
                    <td class="UserIdentification">${gcd[i]['StoreName']}</td>
                    <td >${gcd[i]['GcashNumber']}</td>
                    
                    <td >${gcd[i]['ReceiptNumber']}</td>
                    <td >${gcd[i]['PriceRent']}</td>
                    <td >${gcd[i]['DepositRent']}</td>
                   
                    <td class="PayWallet-ID1">
                        <div class="PayWallet-Identification">
                            <div  class="PayWallet-ID" id="PayWallet-IDD">
                                <span class="material-symbols-outlined">fact_check</span>
                            </div>
                        </div>                               
                    </td>                            
                </tr>
                `;
                console.log(Statuss);

                for(var x = 0; x < PayWalletTable.rows.length; x++){

                    let Cell = PayWalletTable.rows[x].cells;
                    PayWalletTable.rows[x].cells[7].onclick = function()
                    {
                    //     console.log(Cell[0].innerText);

                        


                    
                    // let PayWalletImagePopup = document.getElementsByClassName('PayWallet-Popup-Image');

                    let form_data = new FormData(); 
                    form_data.append("RECEIPTNO",Cell[4].innerText);
                    form_data.append("REQUESTID",Cell[0].innerText);
                    form_data.append("wtype","LoadRenteeID");
                
                    $.ajax({
                        url:'../adminincludes/InformationLoad.php',
                        method:'POST',
                        data:form_data,
                        contentType:false,
                        cache:false,
                        processData:false,
                        success: function (Load) {
                            let gcd = JSON.parse(Load);
                            I('DepositRenteeNo2').innerHTML = gcd[0]['userID'];
                            C('big_img2')[0].src = gcd[0][2];
                            C('small_img2')[0].src = gcd[0][2];
                            C('small_img2')[1].src = gcd[0][3];
                            C('small_img2')[2].src = gcd[0][4];
                            C('small_img12')[0].src = gcd[0][5];
                            C('DepositDesc')[1].innerHTML = gcd[0][1];
                        }   
                    })
                    // C('depinputandtext')[1].style.display = 'none';
                    I('DepositRenterNo2').innerHTML = Cell[1].innerText;
                    I('DepositReceiptNo2').innerHTML = Cell[0].innerText;
                    I('DepositRequestNo2').innerHTML = Cell[4].innerText;
                    I('DepositRentt2').innerHTML = Cell[6].innerText;
                    I('PriceRent2').innerHTML = Cell[5].innerText;
                    C('depinputandtext2')[1].style.display = 'flex';
                    I('DepositDefault2').disabled = false; 
                    C('DepositDescript2')[0].style.display = 'block';
                    // C('depinputandtext')[0].style.display = 'flex';
                    C('inputdeposit2')[0].style.marginTop = '0px';
                    C('textdeposit2')[2].innerHTML = "Deposit Deduction Amount:";
                    // C('textdeposit')[2].style.setFontSize = "15px";
                    I('DepositGcashNumberr2').style.display = 'flex';
                    I('DepositGcashNumber2').innerHTML = Cell[3].innerHTML;
                    C('DepositBtnn2')[0].innerHTML = "Send Money";
                    C('DepositDescript2')[0].style.height = '784px';
                    // I('PayWalletID').innerHTML = Cell[0].innerText;
                    // I('PayWalletApprovalID').innerHTML = Cell[4].innerText;
                    // I('PayWalletApprovalName').innerHTML = Cell[1].innerText;
                    // I('PayWalletApprovalNumber').innerHTML = Cell[2].innerText;
                    // I('PayWalletApprovalPayment').innerHTML = Cell[3].innerText;



                    // let form_data = new FormData(); 
                    // form_data.append("RI",Cell[4].innerText);
                    // form_data.append("wtype","PayWalletLoadImage");

                    // $.ajax({
                    //     url:'../adminincludes/data.php',
                    //     method:'POST',
                    //     data:form_data,
                    //     contentType:false,
                    //     cache:false,
                    //     processData:false,
                    //     success: function (PayWalletImg) {

                    //         // let PayWalletImage = I('PayWalletApprovalImg');
                    //         let gcdd = JSON.parse(PayWalletImg);
                    //         console.log(gcdd);

                    //         // for(let i = 0; i < gcdd.length; i++){


                                
                    //         // for(var xe = 0; xe < gcdd.rows.length; xe++){

                    //         // }
                    //         I('PayWalletApprovalImg').src = gcdd[0]['Img'];

                    //         // }


                    //     }

                    // });

                


                    $(document).ready(function(){
                        $(".small_img2").hover(function(){
                            C("big_img2")[0].style.display = 'none';
                            C("big_img2")[0].style.display = 'block';
                            
                            $(".big_img2").attr('src', $(this).attr('src'));
                    
                        })
                    })


                    blurActive();
                    
                    }

                    // let PayWalletProofClosebtn = document.getElementById('PayWallet-Popup-Image-Exit');
                    // PayWalletProofClosebtn.addEventListener('click' , () => {
                    //     let PayWalletImagePopup = document.getElementsByClassName('PayWallet-Popup-Image');
                    //     PayWalletImagePopup[0].style.display = 'none';
                        
                    //         blurRemove();
                    // })
                }


                

            }

            

            
        }
    });
}

I('addpaywallet').addEventListener('click', () => {

    Swal.fire({
        title: 'Are you sure you are going to approve this request?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, approve it!'
      }).then((result) => {
        if (result.isConfirmed) {      
            let form_data = new FormData(); 
            form_data.append("RID", I('PayWalletApprovalID').innerHTML);
            // form_data.append("USERID", I('PayWalletID').innerHTML);
            // form_data.append("AMOUNT", I('PayWalletApprovalPayment').innerHTML);
            // form_data.append("TITLE", 'Wallet Approved');
            // form_data.append("DESCRIPTION", 'Your request for wallet is now approved');
            form_data.append("ASN", 1);
            form_data.append("ADMINID", I('Admin_ID').innerHTML);
            form_data.append("wtype","ChangePayment");

            $.ajax({
                url:'../adminincludes/data.php',
                method:'POST',
                data:form_data,
                contentType:false,
                cache:false,
                processData:false,
                beforeSend: function(){
                    C('containerloader')[0].style.display = 'block';
                },
            
                success: function (PayWalletImg) {
                
                    C('containerloader')[0].style.display = 'none';
                    
                    // notificationInsert2(I('PayWalletID').innerHTML,`Great news! You have earned a balance in your Arkiease wallet, and we're pleased to inform you that it has been officially approved by the Arkiease admin. Balance Added : ₱ ${I('PayWalletApprovalPayment').innerHTML}`, 
                    // "myaccount.php#dashboard","fact_check", "1","");

                    console.log(I('PayWalletID').innerHTML);
                
                    C('PayWallet-Popup-Image')[0].style.display = 'none';
                    blurRemove();
                }
            });
          Swal.fire(
            'Approved!',
            'The request for wallet has been approved.',
            'success'
          )
        }
    })
});

I('disablepaywallet').addEventListener('click', () => {
    Swal.fire({
        title: 'Are you sure you are going to decline this request?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, decline it!'
      }).then((result) => {
        if (result.isConfirmed) {
        let form_data = new FormData(); 
        form_data.append("RID", I('PayWalletApprovalID').innerHTML);
        form_data.append("USERID", I('PayWalletID').innerHTML);
        form_data.append("AMOUNT", I('PayWalletApprovalPayment').innerHTML);
        form_data.append("TITLE", 'Wallet Rejected');
        form_data.append("DESCRIPTION", 'Your request for wallet is now approved');
        form_data.append("ASN", 0);
        // form_data.append("WB", I('PayWalletApprovalPayment').innerHTML);
        // form_data.append("UI", I('PayWalletApprovalID').innerHTML);
        form_data.append("wtype","ChangePayment");

        $.ajax({
            url:'../adminincludes/data.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            beforeSend: function(){
                C('containerloader')[0].style.display = 'block';
            },
        
            success: function (PayWalletImg) {
            
                C('containerloader')[0].style.display = 'none';
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Wallet Rejected',
                    showConfirmButton: false,
                    timer: 1500
                })
                // console.log(Cell[0].innerText + "Soilo eto"); 

                notificationInsert2(I('PayWalletID').innerHTML,`Bad News your request for wallet is rejected by admin!`, 
                "myaccount.php#dashboard","fact_check", "1","");
            
                C('PayWallet-Popup-Image')[0].style.display = 'none';
                blurRemove();
            }

        });
          Swal.fire(
            'Declined!',
            'The request for wallet has been declined.',
            'declined'
          )
        }
    })
    // let form_data = new FormData(); 
    // form_data.append("RID", I('PayWalletApprovalID').innerHTML);
    // form_data.append("USERID", I('PayWalletID').innerHTML);
    // form_data.append("AMOUNT", I('PayWalletApprovalPayment').innerHTML);
    // form_data.append("TITLE", 'Wallet Rejected');
    // form_data.append("DESCRIPTION", 'Your request for wallet is now approved');
    // form_data.append("ASN", 0);
    // // form_data.append("WB", I('PayWalletApprovalPayment').innerHTML);
    // // form_data.append("UI", I('PayWalletApprovalID').innerHTML);
    // form_data.append("wtype","ChangePayment");

    // $.ajax({
    //     url:'../adminincludes/data.php',
    //     method:'POST',
    //     data:form_data,
    //     contentType:false,
    //     cache:false,
    //     processData:false,
    //     beforeSend: function(){
    //         C('containerloader')[0].style.display = 'block';
    //     },
       
    //     success: function (PayWalletImg) {
        
    //         C('containerloader')[0].style.display = 'none';
    //         Swal.fire({
    //             position: 'middle',
    //             icon: 'success',
    //             title: 'Wallet Rejected',
    //             showConfirmButton: false,
    //             timer: 1500
    //         })
    //         // console.log(Cell[0].innerText + "Soilo eto"); 

    //         notificationInsert2(I('PayWalletID').innerHTML,`Bad News your request for wallet is rejected by admin!`, 
    //         "myaccount.php#dashboard","fact_check", "1","");
         
    //         C('PayWallet-Popup-Image')[0].style.display = 'none';
    //         blurRemove();
    //     }

    // });
})


       
    



// LoadPayWalletHistoryTable();

function LoadPayWalletHistoryTable(){
    let form_data = new FormData(); 
    form_data.append("wtype","PayWalletHistoryLoad");

    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (PayWalletLoad) {

            let PayWalletTable = I('PayWalletTableHistory');
            let gcd = JSON.parse(PayWalletLoad);
            console.log(gcd);

            

            for(let i = 0; i < gcd.length; i++){

                let Status;

                // console.log(gcd);

                if(gcd[i]['ApproveStatus'] == 3){
                    Status = 'Transaction Complete';
                    
                }
                else if(gcd[i]['ApproveStatus'] == 1){
                    Status = 'Admin Approved';
                    
                }

                PayWalletTable.innerHTML += `

                <tr style="background: white; border-bottom: 1px solid;">
                    <td class="UserIdentification"> ${gcd[i]['userID']} </td>
                    <td class="UserIdentification"> ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} </td>
                    <td > ${gcd[i]['PhoneNumber']}</td>
                    <td > ${gcd[i]['Payment']}</td>
                    <td > ${gcd[i]['RequestID']}</td>
                    <td > ${gcd[i]['ApprovedDate']}</td>
                    <td> ${Status} </td>                           
                </tr>
                `;
            }
        }
    });
}
// mywalletapprovalload();
function mywalletapprovalload(){
    let form_data = new FormData();
    form_data.append("USERID",I('Admin_ID').innerHTML); 
    form_data.append("wtype","MyPayWalletHistoryLoad");

    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (PayWalletLoad) {

            let PayWalletTable = I('ApprovalWallet');
            let gcd = JSON.parse(PayWalletLoad);
            console.log(gcd);

            

            for(let i = 0; i < gcd.length; i++){

                let Status;

                // console.log(gcd);

                if(gcd[i]['ApproveStatus'] == 3){
                    Status = 'Transaction Complete';
                    
                }
                else if(gcd[i]['ApproveStatus'] == 1){
                    Status = 'Admin Approved';
                    
                }

                PayWalletTable.innerHTML += `

                <tr style="background: white; border-bottom: 1px solid;">
                    <td class="UserIdentification"> ${gcd[i]['userID']} </td>
                    <td class="UserIdentification"> ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} </td>
                    <td > ${gcd[i]['PhoneNumber']}</td>
                    <td > ${gcd[i]['Payment']}</td>
                    <td > ${gcd[i]['RequestID']}</td>
                    <td > ${gcd[i]['ApprovedDate']}</td>                           
                </tr>
                `;
                
            }
        }
    });
}




I('Admin_IDType').addEventListener("input", () => {
    if(I('Admin_IDType').value == 'Others'){
        C('otherAdminID')[0].style.display = 'block';
        // C('AdminID')[0].style.display = 'none';
    }
})



I('Admin_IDType').addEventListener("input", () => {
    if(I('Admin_IDType').value == 'Philippine Passport' || I('Admin_IDType').value == 'Identification(UMID) Card' ||  
    I('Admin_IDType').value == 'SSS / GSIS ID' || I('Admin_IDType').value == 'Unified Multi-Purpose' ||
    I('Admin_IDType').value == 'Drivers License' || I('Admin_IDType').value == 'National Bureau of investigation (NBI) Clearance' ||
    I('Admin_IDType').value == 'Professional ID Card' || I('Admin_IDType').value == 'Postal ID' ||
    I('Admin_IDType').value == 'HDMF/Pag-IBIG ID' || I('Admin_IDType').value == 'Philhealth ID' || 
    I('Admin_IDType').value == 'Seaferers Identification Book(Seamans Book)' || I('Admin_IDType').value == 'Voters ID Card'){
        C('otherAdminID')[0].style.display = 'none';
        // C('AdminID')[0].style.display = 'none';
    }
})

I('SuperAdmin_IDType').addEventListener("input", () => {
    if(I('SuperAdmin_IDType').value == 'Others'){
        C('otherAdminID')[1].style.display = 'block';
        // C('AdminID')[0].style.display = 'none';
    }
})

I('SuperAdmin_IDType').addEventListener("input", () => {
    if(I('SuperAdmin_IDType').value == 'Philippine Passport' || I('Admin_IDType').value == 'Identification(UMID) Card' ||  
    I('SuperAdmin_IDType').value == 'SSS / GSIS ID' || I('Admin_IDType').value == 'Unified Multi-Purpose' ||
    I('SuperAdmin_IDType').value == 'Drivers License' || I('Admin_IDType').value == 'National Bureau of investigation (NBI) Clearance' ||
    I('SuperAdmin_IDType').value == 'Professional ID Card' || I('Admin_IDType').value == 'Postal ID' ||
    I('SuperAdmin_IDType').value == 'HDMF/Pag-IBIG ID' || I('Admin_IDType').value == 'Philhealth ID' || 
    I('SuperAdmin_IDType').value == 'Seaferers Identification Book(Seamans Book)' || I('Admin_IDType').value == 'Voters ID Card'){
        C('otherAdminID')[1].style.display = 'none';
        // C('AdminID')[0].style.display = 'none';
    }
})


// <option value="Unified Multi-Purpose">Unified Multi-Purpose</option>
// <option value="Identification Card">Identification(UMID) Card</option>
// <option value="SSS / GSIS ID">SSS / GSIS ID</option>
//                                             <option value="Philippine Passport">Philippine Passport</option>
//                                             <option value="Driver's License">Driver's License</option>
//                                             <option value="National Bureau of investigation (NBI) Clearance">National Bureau of investigation (NBI) Clearance</option>
//                                             <option value="Professional ID Card">Professional ID Card</option>
//                                             <option value="Postal ID">Postal ID</option>
//                                             <option value="HDMF/Pag-IBIG ID">HDMF/Pag-IBIG ID</option>
//                                             <option value="Philhealth ID">Philhealth ID</option>
//                                             <option value="Seaferer's Identification Book(Seaman's Book)">Seaferer's Identification Book(Seaman's Book)</option>  
//                                             <option value="Voter's ID Card">Voter's ID Card</option>

// let cancellationgcashreturn = I('cancellationgcashreturn');
// let cancellationgcashreturnbtn = I('cancellationgcashreturnbtn');

// cancellationgcashreturnbtn.onchange = function(){
//     cancellationgcashreturn.src = URL.createObjectURL(cancellationgcashreturnbtn.files[0]);
//     I('cancellationgcashreturn').style.opacity = '1';
//     C('cancellationdetailsgcashimglabel')[0].style.display = 'none';
// }


// Database Control na dito

    let databasehost = '128.0.239.15';
    let databaseusername = 'qgvrffmxze';
    let databasepassword = 'ArkieaseDB2023';
    let databasename = 'qgvrffmxze';

    function backup(){
    let form_data = new FormData(); 
        
        form_data.append("server", databasehost);
        form_data.append("username", databaseusername);
        form_data.append("password", databasepassword);
        form_data.append("dbname", databasename);
        form_data.append("wtype","Backup");

        $.ajax({
            url:'../adminincludes/database_backup.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            success: function (ff) {
                console.log(ff);
            }
        })
    }


LoadMyInfo();
function LoadMyInfo(){
    let form_data = new FormData(); 
  
    form_data.append("USERID",  I('Admin_ID').innerHTML);
    form_data.append("wtype","LoadAdminInfo");

    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (GetMyData) {

            let gcd = JSON.parse(GetMyData);
            console.log(gcd);
            
            let userstatus, usertele;
            if (gcd[0][14] == 1){
                userstatus = 'Active';
            }

            if(gcd[0][27] = 'N/A'){
                usertele = '';
            }
            let text = gcd[0]['userProfileFace'];
            let text2;

            if(text.substring(0, 3) == 'ass'){
                text2 = '../' + gcd[0]['userProfileFace'];
            }
            else if(text.substring(0,3) == '../'){
                text2 = gcd[0]['userProfileFace'];
            }
            I('MyDP').src = text2;
            // I('imgSubMenu').src = gcd[0][28];
            I('MyName').innerHTML = gcd[0][1] + ' ' + gcd[0][2] + ' ' + gcd[0][3];
            
            I('MyUserStatus').value = userstatus;
            I('MyUserType').value = gcd[0][10];
            I('MyUserNo').value = gcd[0][0];
            I('MyFirstName').value = gcd[0][1];
            I('MyLastName').value = gcd[0][3];
            I('MyMiddleName').value = gcd[0][2];
            I('MySuffix').value = gcd[0][4];
            I('MyMonth').value = gcd[0][25];
            I('MyDay').value = gcd[0][26];
            I('MyYear').value = gcd[0][24];
            I('MyEmail').value = gcd[0][7];
            I('MyPhoneNo').value = gcd[0][8];
            I('MyTele').value = usertele;
            I('MyAddress').value = gcd[0][18];
            I('MyRegion').value = gcd[0][20];
            I('MyProvince').value = gcd[0][21];
            
            // I('MyCity1').innerHTML = gcd[0][22];

            I('MyCity').value = gcd[0][22];

            

            I('MyBarangay2').value = gcd[0][23];
            // I('MyBarangay').value = gcd[0][23];
            // console.log(I('MyBarangay').value);
            I('MyPhone2').value = gcd[0][19];
            I('MyUsername').value = gcd[0][9];
            I('MyUsername2').innerHTML = gcd[0][9];
            console.log()
            I('MyPhoto').src = gcd[0][13];
            I('MyPhotoID').src = gcd[0][14];

        }
    })
}

// loadCancellation();
function loadCancellation(){
    let form_data = new FormData(); 
  
    form_data.append("wtype","loadcancellation");

    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (GetCancellationData) {
            let gcd = JSON.parse(GetCancellationData);
            console.log(gcd);

            let cancellationTable = I('cancellationTableFetch');

            for(let i = 0; i < gcd.length; i++){

                cancellationTable.innerHTML += `
                <tr>
                    <td> ${gcd[i]['userID']} </td>
                    <td> ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}  </td>
                    <td> ${gcd[i]['RequestID']} </td>
                    <td> ${gcd[i]['PaymentMethod']} </td>
                    <td class="cancellationhover">  <span class="material-symbols-outlined">question_exchange</span></td>                            
                </tr> 
                `;

                for(var x = 0; x < cancellationTable.rows.length; x++){
                    let Cell = cancellationTable.rows[x].cells;
                    cancellationTable.rows[x].cells[4].onclick = function()
                    {
                        C('cancellationdetails')[0].style.display = 'block';

                        let form_data = new FormData(); 
                        form_data.append("RECEIPTNUMBER",Cell[2].innerHTML);
                        form_data.append("wtype","loadcancellationData");

                        $.ajax({
                            url:'../adminincludes/InformationLoad.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (GetCancellationData) {

                                let gcd = JSON.parse(GetCancellationData);

                                console.log(gcd);
                                I('cancellationReceiptNo').value = Cell[2].innerHTML;
                                I('cancellationGcashNo').value = gcd[0][6];
                                I('cancellationReferenceNo').value = gcd[0][8];
                                I('cancellationAmount').value = gcd[0][5];
                                I('cancellationImg').src = gcd[0]['Img'];
                            }
                        })
                    }
                }
            }
        }
    });
}

I('approvecancellationbtn').addEventListener('click', () => {
    Swal.fire({
        title: 'Are you sure you are going to approve this cancellation request?',
        text: "You won't be able to undo this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, approve it!'
    }).then((result) => {
        if (result.isConfirmed) {
        let form_data = new FormData(); 
        form_data.append("APPROVESTATUS",1);
        form_data.append("RECEIPTID",I('cancellationReceiptNo').value);
        form_data.append("wtype","cancellationdataupdate");

            $.ajax({
                url:'../adminincludes/InformationLoad.php',
                method:'POST',
                data:form_data,
                contentType:false,
                cache:false,
                processData:false,
                success: function (GetCancellationData) {
                    Swal.fire(
                        'Approved!',
                        'The request for cancellation of transaction has been approved.',
                        'success'
            
                    )
                }
            })      
        }   
    })
})

I('cancellationbtn').addEventListener('click', () => {
    Swal.fire({
        title: 'Are you sure you are going to cancel this cancellation request?',
        text: "You won't be able to undo this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!'
      }).then((result) => {
        if (result.isConfirmed) {
        let form_data = new FormData(); 
        form_data.append("APPROVESTATUS",0);
        form_data.append("RECEIPTID",I('cancellationReceiptNo').value);
        form_data.append("wtype","cancellationdataupdate");
            $.ajax({
                url:'../adminincludes/InformationLoad.php',
                method:'POST',
                data:form_data,
                contentType:false,
                cache:false,
                processData:false,
                success: function (GetCancellationData) {
                    Swal.fire(
                        'Cancelled!',
                        'The request for cancellation of transaction has been cancelled.',
                        'cancelled'
            
                    )
                }
            })      
        } 
    })
})







function SendEmail(){


    var length = 8;
    var chars = "!@#$%^&*()1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYS";

    var passwords = "";

    for ( var i = 1; i < length; i++){
        var randomNumber = Math.floor(Math.random() * 70);

        passwords += chars[randomNumber];
    }

    console.log(passwords);

    let form_data = new FormData(); 
    form_data.append("FullName",I('firstName_Admin').value);
    form_data.append("Password",passwords);
    form_data.append("email", I('Email_admin').value);
    form_data.append("wtype","SendEmailAdmin");


   

    $.ajax({
        url:'../adminincludes/AdminVerifyEmail.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (GetAdminData) {
            console.log(GetAdminData);
        }
    });



}
padleft();
function padleft(){
// var n = 123;
//     String("00000" + n).slice(-5); // returns 00123
//     console.log(("00000" + n).slice(-5));
//     ("00000" + n).slice(-5); // returns 00123
//     // ("     " + n).slice(-5);

    let form_data = new FormData(); 
        // form_data.append("FullName",I('firstName_Admin').value);
        // form_data.append("Password",passwords);
        // form_data.append("email", I('Email_admin').value);
        form_data.append("wtype","numbert");


    

        $.ajax({
            url:'../adminincludes/data.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            success: function (GetAdminData) {
                // console.log(GetAdminData +"-" + );

                console.log(GetAdminData);
            }
        });
}

I('InsertMessageBtn').addEventListener('click', () => {
    // console.log('RENTEE');

    if(I('id2').innerHTML == ''){
        Swal.fire({
            title: "Please select a renter or rentee!",
            text: "",
            icon: "Info"
          });
    }else{
        // console.log();
        if(I('w3review').value == ''){
            Swal.fire({
                title: "Please input a message!",
                text: "",
                icon: "Info"
              });
        }
        else{
            if(I('utype').innerHTML == 'rentee'){
                console.log(I('utype').innerHTML);
        
                notificationInsert2(I('id2').innerHTML, 'This is a Message from Admin: '+I('w3review').value, 
                "myaccount.php#dashboard","groups", "1","");
                I('w3review').value = '';
        
            }
        
            else if(I('utype').innerHTML == 'renter'){
                console.log(I('utype').innerHTML);
                // console.log('RENTER');
                notificationInsert3(I('id2').innerHTML,'This is a Message from Admin: '+ I('w3review').value, 
                "myaccount.php#dashboard" ,"groups", "1","");
                I('w3review').value = '';
            }
        }
    }
    
   

    // let form_data = new FormData(); 
    // form_data.append("YOURID",I('Admin_ID').innerHTML);
    // form_data.append("HISID",I('id2').innerHTML);
    // form_data.append("MESSAGE",I('InputMessageHere').value);
    // form_data.append("wtype","InsertMessage");

    // $.ajax({
    //     url:'../adminincludes/data.php',
    //     method:'POST',
    //     data:form_data,
    //     contentType:false,
    //     cache:false,
    //     processData:false,
    //     beforeSend: function(){
    //         C('containerloader')[0].style.display = 'block';
    //     },
    //     success: function () {
    //         C('containerloader')[0].style.display = 'none';
    //         I('InputMessageHere').value = "";
    //         I('MessengerLoad').innerHTML = "";
    //         // MessengerLoad(I('id2').innerHTML);
    //     }
    // })
})

// MessengerLoad(I('Admin_ID').innerHTML, 0);



// loadGcashInfo();
function loadGcashInfo(){

    let form_data = new FormData(); 
    
    form_data.append("wtype","GetGcashInfo");

    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        
        success: function (GetImage) {
            let gcd = JSON.parse(GetImage);

            console.log(gcd);
            I('GcashAdmin').src = gcd[0]['Image'];
            I('GcashName').value = gcd[0]['Name'];
            I('GcashNumberChange').value = gcd[0]['Number'];

        }
    })
}

// function secured_decrypt($input)
// {
//   // echo base64_encode(openssl_random_pseudo_bytes(32));
//   // echo base64_encode(openssl_random_pseudo_bytes(64));
  
//   $first_key = base64_decode('ALk5Uz3slx3BrAghS1aaW5AYgWZRV0tIX5eI0yPchFz4X987654=');
//   $second_key = base64_decode('AEZ44mFi3TlAey1b2w4Y7lVDuqO+SRxGXsa7nctnr/JmMrA2vN6EJhrvdVZbxaQs5jpSe34X3ejFK/o9+Y5c83wx987654==');            
//   $mix = base64_decode($input);
          
//   $method = "aes-256-cbc";    
//   $iv_length = openssl_cipher_iv_length($method);
              
//   $iv = substr($mix,0,$iv_length);
//   $second_encrypted = substr($mix,$iv_length,64);
//   $first_encrypted = substr($mix,$iv_length+64);
              
//   $data = openssl_decrypt($first_encrypted,$method,$first_key,OPENSSL_RAW_DATA,$iv);
//   $second_encrypted_new = hash_hmac('sha3-512', $first_encrypted, $second_key, TRUE);
      
//   if (hash_equals($second_encrypted,$second_encrypted_new))
//   return $data;
//   return false;
// }

function MessengerLoad(FN , SN, TN, AN){
    // let form_data = new FormData(); 
    // form_data.append("INBOXID", FN);
    // form_data.append("USERID", AN);
    // form_data.append("wtype","getmessage");

    // $.ajax({
    //     url:'../adminincludes/adminmessage.php',
    //     method:'POST',
    //     data:form_data,
    //     contentType:false,
    //     cache:false,
    //     processData:false,
        
    //     success: function (GetMessage) {
    //         let gcd = JSON.parse(GetMessage);

    //         console.log(gcd);

            let MessengerLoad = I('MessengerLoad');


            let form_data = new FormData(); 
                        form_data.append("INBOXID", FN);
                        // form_data.append("ADMINID", AN);
                        form_data.append("wtype","getmessage");

                        $.ajax({
                            url:'../adminincludes/adminmessage.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            
                            success: function (GetMessage) {
                                let gcd = JSON.parse(GetMessage);
                                console.log(gcd);
                                for(let i = 0; i < gcd.length; i++){

                                    let you;

                                    console.log(gcd[i]['renteeOwnerID']);

                                    if(gcd[i]['renteeOwnerID'] == AN ){
                                        console.log(gcd[i]['renteeOwnerID'] );
                                        you = `<div id="mas-row" class="msg-row">
                                        <div class="msg-text">
                                            <h2> <div style="font-size: 0px"></div>You</h2>
                                            <p>${gcd[i]['Message']}</p>
                                        </div>
                                    </div>`;
                                    }
                                    else{
                                        you = `<div id="mas-row" class="msg-row">
                                        <div class="msg-text">
                                            <h2> <div style="font-size: 0px"></div>${gcd[i]['StoreName']}</h2>
                                            <p>${gcd[i]['Message']}</p>
                                        </div>
                                    </div>`;
                                    }

                                    let you1;
                                    if(gcd[i]['renteeOwnerID'] == AN ){
                                        console.log(gcd[i]['renteeOwnerID'] );
                                        you1 = `<div id="mas-row" class="msg-row">
                                        <div class="msg-text">
                                            <h2> <div style="font-size: 0px"></div>You</h2>
                                            <p><img src=" ${gcd[i]['Picture']}"> </p>
                                        </div>
                                    </div>`;
                                    }
                                    else{
                                        you1 = `<div id="mas-row" class="msg-row">
                                        <div class="msg-text">
                                            <h2> <div style="font-size: 0px"></div>${gcd[i]['StoreName']}</h2>
                                            <p><img src=" ${gcd[i]['Picture']}"></p>
                                        </div>
                                    </div>`;
                                    }

                                    
                                    if(gcd[i]['Message'] != '' && gcd[i]['Video'] == '' && gcd[i]['Picture'] == ''){
                                        MessengerLoad.innerHTML += `
                                        
                                        ${you}
                                        `;
                        
                                    }
                                    else if(gcd[i]['Message'] == '' && gcd[i]['Video'] == '' && gcd[i]['Picture'] != ''){
                                        MessengerLoad.innerHTML += `
                                        
                                        ${you1}
                                        `;
                        
                                    }
                    
                                }
                                
                                // else if(gcd[i]['Message'] == '' && gcd[i]['Video'] != '' && gcd[i]['Picture'] == ''){
                                //     MessengerLoad.innerHTML += `
                                    
                                //     <div id="mas-row" class="msg-row">
                                //         <div class="msg-text">
                                //             <h2> <div style="font-size: 0px"></div>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</h2>
                                //             <p> <video width="320" height="240" controls>
                                //             <source src=${gcd[i]['Video']} type="video/mp4">
                                //           </video></p>
                                //         </div>
                                //     </div>
                                //     `;
                                //     if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
                                //         console.log(gcd[i]);
                                //         for(let x = 0; x < gcd.length; x++){
                                //             document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
                                //             document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
                                //         }
                                        
                                //     };
                    
                                // }
                
                                // else if(gcd[i]['Message'] == '' && gcd[i]['Video'] == '' && gcd[i]['Picture'] != ''){
                                //     MessengerLoad.innerHTML += `
                                    
                                //     <div id="mas-row" class="msg-row">
                                //         <div class="msg-text">
                                //             <h2> <div style="font-size: 0px"></div>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</h2>
                                //             <p>${gcd[i]['Picture']}</p>
                                //         </div>
                                //     </div>
                                //     `;
                                //     if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
                                //         console.log(gcd[i]);
                                //         for(let x = 0; x < gcd.length; x++){
                                //             document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
                                //             document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
                                //         }
                                        
                                //     };
                    
                                // }
                            }
                        })

            // for(let i = 0; i < gcd.length; i++){
            //     console.log(SN);
            //     console.log(TN);
            //    if(SN == "RENTEE"){
            //     console.log(gcd[i]['renteeOwnerID'] );
            //     if(gcd[i]['renteeOwnerID'] != ''){
            //         // if(gcd[i]['Message'] != '' && gcd[i]['Video'] == '' && gcd[i]['Picture'] == ''){
            //         //     MessengerLoad.innerHTML += `
                        
            //         //     <div id="mas-row" class="msg-row">
            //         //         <div class="msg-text">
            //         //             <h2> <div style="font-size: 0px"></div>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</h2>
            //         //             <p>${gcd[i]['Message']}</p>
            //         //         </div>
            //         //     </div>
            //         //     `;
            //         //     if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
            //         //         console.log(gcd[i]);
            //         //         for(let x = 0; x < gcd.length; x++){
            //         //             document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //         //             document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
            //         //         }
                            
            //         //     };
        
            //         // }
    
            //         // else if(gcd[i]['Message'] == '' && gcd[i]['Video'] != '' && gcd[i]['Picture'] == ''){
            //         //     MessengerLoad.innerHTML += `
                        
            //         //     <div id="mas-row" class="msg-row">
            //         //         <div class="msg-text">
            //         //             <h2> <div style="font-size: 0px"></div>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</h2>
            //         //             <p> <video width="320" height="240" controls>
            //         //             <source src=${gcd[i]['Video']} type="video/mp4">
            //         //           </video></p>
            //         //         </div>
            //         //     </div>
            //         //     `;
            //         //     if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
            //         //         console.log(gcd[i]);
            //         //         for(let x = 0; x < gcd.length; x++){
            //         //             document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //         //             document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
            //         //         }
                            
            //         //     };
        
            //         // }
    
            //         // else if(gcd[i]['Message'] == '' && gcd[i]['Video'] == '' && gcd[i]['Picture'] != ''){
            //         //     MessengerLoad.innerHTML += `
                        
            //         //     <div id="mas-row" class="msg-row">
            //         //         <div class="msg-text">
            //         //             <h2> <div style="font-size: 0px"></div>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</h2>
            //         //             <p>${gcd[i]['Picture']}</p>
            //         //         </div>
            //         //     </div>
            //         //     `;
            //         //     if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
            //         //         console.log(gcd[i]);
            //         //         for(let x = 0; x < gcd.length; x++){
            //         //             document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //         //             document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
            //         //         }
                            
            //         //     };
        
            //         // }
            //     }
            //     // if(gcd[i]['userID'] != ''){
            //     //     let form_data = new FormData(); 
            //     //         form_data.append("INBOXID", FN);
            //     //         form_data.append("USERID", TN);
            //     //         form_data.append("wtype","MessengerLoad2");

            //     //         $.ajax({
            //     //             url:'../adminincludes/data.php',
            //     //             method:'POST',
            //     //             data:form_data,
            //     //             contentType:false,
            //     //             cache:false,
            //     //             processData:false,
                            
            //     //             success: function (GetMessage) {
            //     //                 let gcd = JSON.parse(GetMessage);
            //     //             for(let i = 0; i < gcd.length; i++){
            //     //                 if(gcd[i]['Message'] != '' && gcd[i]['Video'] == '' && gcd[i]['Picture'] == ''){
            //     //                     MessengerLoad.innerHTML += `
                                    
            //     //                     <div id="mas-row" class="msg-row">
            //     //                         <div class="msg-text">
            //     //                             <h2> <div style="font-size: 0px"></div>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</h2>
            //     //                             <p>${gcd[i]['Message']}</p>
            //     //                         </div>
            //     //                     </div>
            //     //                     `;
            //     //                     // if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
            //     //                     //     console.log(gcd[i]);
            //     //                     //     for(let x = 0; x < gcd.length; x++){
            //     //                     //         document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //     //                     //         document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
            //     //                     //     }
                                        
            //     //                     // };
                    
            //     //                 }
                
            //     //                 else if(gcd[i]['Message'] == '' && gcd[i]['Video'] != '' && gcd[i]['Picture'] == ''){
            //     //                     MessengerLoad.innerHTML += `
                                    
            //     //                     <div id="mas-row" class="msg-row">
            //     //                         <div class="msg-text">
            //     //                             <h2> <div style="font-size: 0px"></div>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</h2>
            //     //                             <p>${gcd[i]['Video']}</p>
            //     //                         </div>
            //     //                     </div>
            //     //                     `;
            //     //                     // if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
            //     //                     //     console.log(gcd[i]);
            //     //                     //     for(let x = 0; x < gcd.length; x++){
            //     //                     //         document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //     //                     //         document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
            //     //                     //     }
                                        
            //     //                     // };
                    
            //     //                 }
                
            //     //                 else if(gcd[i]['Message'] == '' && gcd[i]['Video'] == '' && gcd[i]['Picture'] != ''){
            //     //                     MessengerLoad.innerHTML += `
                                    
            //     //                     <div id="mas-row" class="msg-row">
            //     //                         <div class="msg-text">
            //     //                             <h2> <div style="font-size: 0px"></div>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</h2>
            //     //                             <p><img src=${gcd[i]['Picture']}></p>
            //     //                         </div>
            //     //                     </div>
            //     //                     `;
            //     //                     // if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
            //     //                     //     console.log(gcd[i]);
            //     //                     //     for(let x = 0; x < gcd.length; x++){
            //     //                     //         document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //     //                     //         document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
            //     //                     //     }
                                        
            //     //                     // };
                    
            //     //                 }
            //     //             }
            //     //             }
            //     //         })
                    
                    
            //     // }
            //     // if(gcd[i]['Messages'] == '' &&  gcd[i]['Picture'] == ''){
            //     //     MessengerLoad.innerHTML += `
                    
            //     //     <div id="mas-row" class="msg-row">
            //     //         <div class="msg-text">
            //     //             <h2> <div style="font-size: 0px"></div> ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} </h2>
            //     //             <p>${gcd[i]['Video']}</p>
            //     //         </div>
            //     //     </div>
            //     //     `;
            //     // }

            //     // else if(gcd[i]['Messages'] == '' &&  gcd[i]['Video'] == ''){
            //     //     MessengerLoad.innerHTML += `
                    
            //     //     <div id="mas-row" class="msg-row">
            //     //         <div class="msg-text">
            //     //             <h2> <div style="font-size: 0px"></div> ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} </h2>
            //     //             <p>${gcd[i]['Picture']}</p>
            //     //         </div>
            //     //     </div>
            //     //     `;
            //     // }
                
                

            //    }

            //    else if(SN == "RENTER"){

            //     console.log(gcd[i]['renteeOwnerID'] );

            //     if(gcd[i]['renteeOwnerID'] != ''){
            //         let form_data = new FormData(); 
            //             form_data.append("INBOXID", I('id2').innerHTML);
            //             // form_data.append("ADMINID", AN);
            //             form_data.append("wtype","getmessage");

            //             $.ajax({
            //                 url:'../adminincludes/adminmessage.php',
            //                 method:'POST',
            //                 data:form_data,
            //                 contentType:false,
            //                 cache:false,
            //                 processData:false,
                            
            //                 success: function (GetMessage) {
            //                     let gcd = JSON.parse(GetMessage);
            //                     for(let i = 0; i < gcd.length; i++){
            //                         if(gcd[i]['Message'] != '' && gcd[i]['Video'] == '' && gcd[i]['Picture'] == ''){
            //                             MessengerLoad.innerHTML += `
                                        
            //                             <div id="mas-row" class="msg-row">
            //                                 <div class="msg-text">
            //                                     <h2> <div style="font-size: 0px"></div>${gcd[i]['StoreName']}</h2>
            //                                     <p>${gcd[i]['Message']}</p>
            //                                 </div>
            //                             </div>
            //                             `;
                        
            //                         }
                    
            //                     }
                                
            //                     // else if(gcd[i]['Message'] == '' && gcd[i]['Video'] != '' && gcd[i]['Picture'] == ''){
            //                     //     MessengerLoad.innerHTML += `
                                    
            //                     //     <div id="mas-row" class="msg-row">
            //                     //         <div class="msg-text">
            //                     //             <h2> <div style="font-size: 0px"></div>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</h2>
            //                     //             <p> <video width="320" height="240" controls>
            //                     //             <source src=${gcd[i]['Video']} type="video/mp4">
            //                     //           </video></p>
            //                     //         </div>
            //                     //     </div>
            //                     //     `;
            //                     //     if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
            //                     //         console.log(gcd[i]);
            //                     //         for(let x = 0; x < gcd.length; x++){
            //                     //             document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //                     //             document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
            //                     //         }
                                        
            //                     //     };
                    
            //                     // }
                
            //                     // else if(gcd[i]['Message'] == '' && gcd[i]['Video'] == '' && gcd[i]['Picture'] != ''){
            //                     //     MessengerLoad.innerHTML += `
                                    
            //                     //     <div id="mas-row" class="msg-row">
            //                     //         <div class="msg-text">
            //                     //             <h2> <div style="font-size: 0px"></div>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</h2>
            //                     //             <p>${gcd[i]['Picture']}</p>
            //                     //         </div>
            //                     //     </div>
            //                     //     `;
            //                     //     if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
            //                     //         console.log(gcd[i]);
            //                     //         for(let x = 0; x < gcd.length; x++){
            //                     //             document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //                     //             document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
            //                     //         }
                                        
            //                     //     };
                    
            //                     // }
            //                 }
            //             })
                    
            //     }
            //     // if(gcd[i]['renterID'] != ''){
            //     //     let form_data = new FormData(); 
            //     //         form_data.append("INBOXID", FN);
            //     //         // form_data.append("ADMINID", TN);
            //     //         form_data.append("wtype","SeeOnline5");

            //     //         $.ajax({
            //     //             url:'../adminincludes/data.php',
            //     //             method:'POST',
            //     //             data:form_data,
            //     //             contentType:false,
            //     //             cache:false,
            //     //             processData:false,
                            
            //     //             success: function (GetMessage) {
            //     //                 let gcd = JSON.parse(GetMessage);
            //     //             for(let i = 0; i < gcd.length; i++){
            //     //                 if(gcd[i]['Message'] != '' && gcd[i]['Video'] == '' && gcd[i]['Picture'] == ''){
            //     //                     MessengerLoad.innerHTML += `
                                    
            //     //                     <div id="mas-row" class="msg-row">
            //     //                         <div class="msg-text">
            //     //                             <h2> <div style="font-size: 0px"></div>${gcd[i]['StoreName']}</h2>
            //     //                             <p>${gcd[i]['Message']}</p>
            //     //                         </div>
            //     //                     </div>
            //     //                     `;
            //     //                     // if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
            //     //                     //     console.log(gcd[i]);
            //     //                     //     for(let x = 0; x < gcd.length; x++){
            //     //                     //         document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //     //                     //         document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
            //     //                     //     }
                                        
            //     //                     // };
                    
            //     //                 }
                
            //     //                 else if(gcd[i]['Message'] == '' && gcd[i]['Video'] != '' && gcd[i]['Picture'] == ''){
            //     //                     MessengerLoad.innerHTML += `
                                    
            //     //                     <div id="mas-row" class="msg-row">
            //     //                         <div class="msg-text">
            //     //                             <h2> <div style="font-size: 0px"></div>${gcd[i]['StoreName']}</h2>
            //     //                             <p>${gcd[i]['Video']}</p>
            //     //                         </div>
            //     //                     </div>
            //     //                     `;
            //     //                     // if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
            //     //                     //     console.log(gcd[i]);
            //     //                     //     for(let x = 0; x < gcd.length; x++){
            //     //                     //         document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //     //                     //         document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
            //     //                     //     }
                                        
            //     //                     // };
                    
            //     //                 }
                
            //     //                 else if(gcd[i]['Message'] == '' && gcd[i]['Video'] == '' && gcd[i]['Picture'] != ''){
            //     //                     MessengerLoad.innerHTML += `
                                    
            //     //                     <div id="mas-row" class="msg-row">
            //     //                         <div class="msg-text">
            //     //                             <h2> <div style="font-size: 0px"></div>${gcd[i]['StoreName']}</h2>
            //     //                             <p><img src=${gcd[i]['Picture']}></p>
            //     //                         </div>
            //     //                     </div>
            //     //                     `;
            //     //                     // if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
            //     //                     //     console.log(gcd[i]);
            //     //                     //     for(let x = 0; x < gcd.length; x++){
            //     //                     //         document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //     //                     //         document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
            //     //                     //     }
                                        
            //     //                     // };
                    
            //     //                 }
            //     //             }
            //     //             }
            //     //         })
                    
                    
            //     // }
            //     // if(gcd[i]['Messages'] == '' &&  gcd[i]['Picture'] == ''){
            //     //     MessengerLoad.innerHTML += `
                    
            //     //     <div id="mas-row" class="msg-row">
            //     //         <div class="msg-text">
            //     //             <h2> <div style="font-size: 0px"></div> ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} </h2>
            //     //             <p>${gcd[i]['Video']}</p>
            //     //         </div>
            //     //     </div>
            //     //     `;
            //     // }

            //     // else if(gcd[i]['Messages'] == '' &&  gcd[i]['Video'] == ''){
            //     //     MessengerLoad.innerHTML += `
                    
            //     //     <div id="mas-row" class="msg-row">
            //     //         <div class="msg-text">
            //     //             <h2> <div style="font-size: 0px"></div> ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} </h2>
            //     //             <p>${gcd[i]['Picture']}</p>
            //     //         </div>
            //     //     </div>
            //     //     `;
            //     // }
                
                

            //    }
               

            //     // MessengerLoad.innerHTML += `
                
            //     // <div id="mas-row" class="msg-row">
                    
            //     //     <div class="msg-text">
            //     //         <h2> <div style="font-size: 0px"></div> ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} </h2>
            //     //         <p>${gcd[i]['Msg']}</p>
            //     //     </div>
                
            //     // </div>


                
            //     // `;

            //     // if(gcd[i]['renteeOwnerID'] == I('Admin_ID').innerHTML){
            //     //     console.log(gcd[i]);
            //     //     for(let x = 0; x < gcd.length; x++){
            //     //         document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //     //         document.getElementsByClassName('msg-row')[i].style.textAlign = "end";
            //     //     }
                    
            //     // };

            //     // if(gcd[i]['IncomingMsgID'] == I('Admin_ID').innerHTML){
            //     //     console.log(gcd[i]);
            //     //     document.getElementsByClassName('msg-row')[i].style.justifyContent = "flex-end";
            //     // };

               
            // }
            
    //     }
    // })
}

loadOnlineRenterUser();

function loadOnlineRenterUser(){
    let form_data = new FormData(); 
    // form_data.append("ADMINID",I('Admin_ID').innerHTML);
    form_data.append("wtype","SeeRenterOnline");

    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
      
        success: function (GetDataOnline) {
            let gcd = JSON.parse(GetDataOnline);
            console.log(gcd);
            let OnlineUser = I('OnlineRenterUser');

            for(let i = 0; i < gcd.length; i++){   
                OnlineUser.innerHTML += `
                <tr style="height: 0px;" class="tabbb">
                    <td style="padding: 2px; text-align: left; width:0px; font-size:0px;">${gcd[i]['renterID']}</td>
                    <td class="mimg" style="max-width: 100px; padding: 6px;"><img style="max-width: 91px;max-height: 31px; border-radius: 50%;" src="${gcd[i]['BusinessRegistration']}"></td>
                    <td style="padding: 2px; text-align: left; margin-bottom: 15px; text-decoration: underline;">${gcd[i]['StoreName']}</td>
                    <td style="padding: 2px; text-align: left; width:0px; font-size:0px;">${gcd[i]['BusinessRegistration']}</td>
                </tr>
                `;


                for(var x = 0; x < OnlineUser.rows.length; x++){
                    let Cell = OnlineUser.rows[x].cells;
                    OnlineUser.rows[x].onclick = function()
                    {
                        console.log(Cell[3].innerHTML);
                        I('callerdp').style.display = 'block';
                        I('callerdp').src = Cell[3].innerHTML;
                        I('callername').innerHTML = Cell[2].innerHTML;
                        I('id2').innerHTML = Cell[0].innerHTML;
                        I('utype').innerHTML = 'renter';
                    }
                }
            }
            
            console.log(gcd);
        }
    })
}

loadOnlineUser();

function loadOnlineUser(){
    let form_data = new FormData(); 
    // form_data.append("ADMINID",I('Admin_ID').innerHTML);
    form_data.append("wtype","SeeOnline");

    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
      
        success: function (GetDataOnline) {
            let gcd = JSON.parse(GetDataOnline);
            console.log(gcd);
            let OnlineUser = I('OnlineUser');

            for(let i = 0; i < gcd.length; i++){
                let text = gcd[i]['userProfileFace'];
                let img;
                if(text.substring(0,3) == 'ass'){
                    img = '../' + gcd[i]['userProfileFace'];
                }   
                else{
                    img = gcd[i]['userProfileFace'];
                }
                OnlineUser.innerHTML += `
                <tr style="height: 0px;" class="tabbb">
                    <td style="padding: 2px; text-align: left; width:0px; font-size:0px;">${gcd[i]['userID']}</td>
                    <td class="mimg" style="max-width: 100px; padding: 6px;"><img style="max-width: 91px;max-height: 31px; border-radius: 50%;" src="${img}"></td>
                    <td style="padding: 2px; text-align: left; margin-bottom: 15px; text-decoration: underline;">${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                    <td style="padding: 2px; text-align: left; width:0px; font-size:0px;">${img}</td>
                </tr>
                `;

                for(var x = 0; x < OnlineUser.rows.length; x++){
                    let Cell = OnlineUser.rows[x].cells;
                    OnlineUser.rows[x].onclick = function()
                    {
                        console.log(Cell[3].innerHTML);
                        I('callerdp').style.display = 'block';
                        I('callerdp').src = Cell[3].innerHTML;
                        I('callername').innerHTML = Cell[2].innerHTML;
                        I('id2').innerHTML = Cell[0].innerHTML;
                        I('utype').innerHTML = 'rentee';
                    }
                }
                
            }
            

            // for(let i = 0; i < gcd.length; i++){    
            //     let hehe;   

            //     if(gcd[i]['userID'] == null && gcd[i]['renterID'] != null){
            //         let form_data = new FormData(); 
            //         form_data.append("ADMINID",I('Admin_ID').innerHTML);
            //         form_data.append("wtype","SeeOnline3");

            //         $.ajax({
            //             url:'../adminincludes/data.php',
            //             method:'POST',
            //             data:form_data,
            //             contentType:false,
            //             cache:false,
            //             processData:false,
                    
            //             success: function (GetDataOnline) {
            //                 let gcd = JSON.parse(GetDataOnline);
            //                 for(let i = 0; i < gcd.length; i++){    
            //                     hehe = gcd[i]['StoreName'];
            //                     OnlineUser.innerHTML += `
            //                     <tr style="height: 0px;" class="tabbb">
            //                         <td style="padding: 2px; text-align: left; width:0px; font-size:0px;">${gcd[i]['renterID']}</td>
            //                         <td class="mimg" style="max-width: 100px;"><img style="max-width: 70px;max-height: 70px; border-radius: 82px;" src="${gcd[i]['Img']}"></td>
            //                         <td style="padding: 2px; text-align: left;">${hehe}</td>
            //                         <td style="padding: 2px; text-align: left; font-size:0px;">${'RENTER'}</td>
            //                         <td style="padding: 2px; text-align: left; font-size: 0px;">${gcd[i]['InboxID']}</td>
            //                         <td style="padding: 2px; text-align: left; font-size: 0px;">${gcd[i]['Img']}</td>
            //                     </tr>
            //                     `;
            //                 }
            //                 for(var x = 0; x < OnlineUser.rows.length; x++){
            //                     let Cell = OnlineUser.rows[x].cells;
            //                     OnlineUser.rows[x].onclick = function()
            //                     {
            //                         I('MessengerLoad').innerHTML = '';
            //                         // let form_data = new FormData(); 
            //                         // form_data.append("USERID", Cell[0].innerHTML);
            //                         // form_data.append("wtype","loadChatImg");

            //                         // $.ajax({
            //                         //     url:'../adminincludes/data.php',
            //                         //     method:'POST',
            //                         //     data:form_data,
            //                         //     contentType:false,
            //                         //     cache:false,
            //                         //     processData:false,
                                    
            //                         //     success: function (GetDataOnline) {
            //                         //         let gcd = JSON.parse(GetDataOnline);
            //                                 I('callerdp').src = '';
            //                                 I('callerdp').style.display = 'block';
            //                                 I('id2').innerHTML = Cell[4].innerHTML;
            //                                 I('utype').innerHTML = Cell[3].innerHTML;
            //                                 I('callerdp').src = Cell[5].innerHTML;
            //                         //     }
            //                         // })
            //                         I('callername').innerHTML = Cell[2].innerHTML;
            //                         console.log(Cell[0].innerHTML);
            //                         console.log(Cell[4].innerHTML);
            //                         MessengerLoad(I('id2').innerHTML, Cell[3].innerHTML, Cell[0].innerHTML, I('Admin_ID').innerHTML );
            //                         // console.log('heheheheh');
            //                         // I('callerdp').style.display = 'block';
            //                         // I('callerdp').src = Cell[0].innerHTML;
            //                     }
            //                 }
                           
            //             }
            //         })
                    
            //     }
            //     else if (gcd[i]['userID'] != null && gcd[i]['renterID'] == null){

            //         let form_data = new FormData(); 
            //         form_data.append("ADMINID",I('Admin_ID').innerHTML);
            //         form_data.append("wtype","SeeOnline2");

            //         $.ajax({
            //             url:'../adminincludes/data.php',
            //             method:'POST',
            //             data:form_data,
            //             contentType:false,
            //             cache:false,
            //             processData:false,
                    
            //             success: function (GetDataOnline) {
            //                 let gcd = JSON.parse(GetDataOnline);
            //                 for(let i = 0; i < gcd.length; i++){ 
            //                 hehe = gcd[i]['FirstName'] + ' ' + gcd[i]['LastName'];
            //                 OnlineUser.innerHTML += `
            //                 <tr style="height: 0px;" class=tabbb>
            //                     <td style="padding: 2px; text-align: left; width:0px; font-size:0px;">${gcd[i]['userID']}</td>
            //                     <td class="mimg" style="max-width: 100px;"><img style="max-width: 70px; max-height: 70px; border-radius: 82px;" src="${gcd[i]['userProfileFace']}"></td>
            //                     <td style="padding: 2px; text-align: left;"> ${hehe}</td>
            //                     <td style="padding: 2px; text-align: left; font-size: 0px;">${'RENTEE'}</td>
            //                     <td style="padding: 2px; text-align: left; font-size: 0px;">${gcd[i]['InboxID']}</td>
            //                     <td style="padding: 2px; text-align: left; font-size: 0px;"> ${gcd[i]['userProfileFace']}</td>
            //                 </tr>
            //                 `;
            //                 }
            //                 for(var x = 0; x < OnlineUser.rows.length; x++){
            //                     let Cell = OnlineUser.rows[x].cells;
            //                     OnlineUser.rows[x].onclick = function()
            //                     {
            //                         I('MessengerLoad').innerHTML = '';
            //                         // MessengerLoad(I('id2').innerHTML, Cell[3].innerHTML );
            //                         // let form_data = new FormData(); 
            //                         // form_data.append("USERID", Cell[0].innerHTML);
            //                         // form_data.append("wtype","loadChatImg2");

            //                         // $.ajax({
            //                         //     url:'../adminincludes/data.php',
            //                         //     method:'POST',
            //                         //     data:form_data,
            //                         //     contentType:false,
            //                         //     cache:false,
            //                         //     processData:false,
                                    
            //                         //     success: function (GetDataOnline) {
            //                                 // let gcd = JSON.parse(GetDataOnline);
            //                                 I('callerdp').src = '';
            //                                 I('callerdp').style.display = 'block';
            //                                 I('id2').innerHTML = Cell[4].innerHTML;
            //                                 I('utype').innerHTML = Cell[3].innerHTML;
            //                                 I('callerdp').src = Cell[5].innerHTML;
            //                                 console.log(I('id2').innerHTML);
            //                                 console.log(Cell[3].innerHTML);
            //                                 MessengerLoad(I('id2').innerHTML, Cell[3].innerHTML, Cell[0].innerHTML, I('Admin_ID').innerHTML);
            //                         //     }
            //                         // })
            //                         I('callername').innerHTML = Cell[2].innerHTML;
            //                         console.log(Cell[0].innerHTML);
            //                         console.log(Cell[4].innerHTML);
                                    
            //                         // console.log('heheheheh');
            //                     }
            //                 }
            //             }
            //         })
                    
            //     }
                
            //     // for(var x = 0; x < OnlineUser.rows.length; x++){
            //     //     let Cell = OnlineUser.rows[x].cells;
            //     //     OnlineUser.rows[x].onclick = function()
            //     //     {
            //     //         console.log('heheheheh');
            //     //     }
            //     // }
                
               
            //     // for(var x = 0; x < OnlineUser.rows.length; x++){
            //     //     let Cell = OnlineUser.rows[x].cells;
            //     //     OnlineUser.rows[x].cells[0].onclick = function()
            //     //     {
            //     //         // I('callerdp').style.display = 'block';
            //     //         // I('callerdp').src = Cell[0].innerHTML;
            //     //         // I('callername').innerHTML = Cell[1].innerHTML;
            //     //         // I('id2').innerHTML = Cell[2].innerHTML;
            //     //         // I('MessengerLoad').innerHTML = "";
            //     //         // MessengerLoad(I('Admin_ID').innerHTML,I('id2').innerHTML );    
                        
            //     //        console.log('heheheheh');
                        
            //     //     }
            //     // }
            // }

            

            console.log(gcd);
        }
    })
}


function tabbingload2(){
    let form_data = new FormData(); 
    form_data.append("ADMINID",I('Admin_ID').innerHTML);
    form_data.append("wtype","Tabbing");

    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        beforeSend: function(){
            // I('TransactionApprovalTable').innerHTML = "";
            // I('PayWalletLoadTable').innerHTML = '';
            // I('DepositTable').innerHTML = "";
        },
        success: function (GetTabData) {
            let gcd = JSON.parse(GetTabData);

            // console.log(gcd);

            let tabtable = I('Tabbing'), index;
            
            for(let i = 0; i < gcd.length; i++){

                let tabid;
                tabid = gcd[i]['TabID'];

                tabtable.innerHTML +=  `

                <tr class="tabbingborder">
                    <td class="tabbingtd">${gcd[i]['UserID']} </td>
                    <td class="tabbingtd1">${gcd[i]['Name']} </td>
                    <td class="tabbingtd"> ${gcd[i]['ID']} </td>
                    <td class="tabbingtdtype">${gcd[i]['Type']} </td>  
                    <td class="tabbingtdtype">${gcd[i]['TabID']} </td>  
                    <td class="tabbingtd2"> X  </td>       
                </tr>
                `;
            }
        }
    })
}


// tabbingload();

function tabbingload(){
    let form_data = new FormData(); 
    form_data.append("ADMINID",I('Admin_ID').innerHTML);
    form_data.append("wtype","Tabbing");

    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        beforeSend: function(){
            // I('TransactionApprovalTable').innerHTML = "";
            // I('PayWalletLoadTable').innerHTML = '';
            // I('DepositTable').innerHTML = "";
        },
        success: function (GetTabData) {
            let gcd = JSON.parse(GetTabData);

            // console.log(gcd);

            let tabtable = I('Tabbing'), index;
            
            for(let i = 0; i < gcd.length; i++){

                

                tabtable.innerHTML +=  `

                <div class="tabbingborder">
                    <div class="tabbingborderdivi">
                        <p class="tabbingtdtype">${gcd[i]['TabID']}</p>
                        <p class="tabbingtd" style="opacity: 0">${gcd[i]['UserID']}</p>
                        <p class="tabbingtd1">${gcd[i]['Name']}${gcd[i]['CompleteTab']}</p>
                        <p class="tabbingtdtype"> ${gcd[i]['ID']}</p>
                        <p class="tabbingtdtype">${gcd[i]['Type']}</p>  
                        <p class="tabbingtdtype">${gcd[i]['TabID']}</p> 
                    </div>
                     
                    <div class="tabbingtd2">
                        X
                    </div>       
                </div>
                `;
                
                
                let E = 1;
                let r = 0;

                // for(var x = 0; x < tabtable.rows.length; x++){
                //     let Cell = tabtable.rows[x].cells;
                //     tabtable.rows[x].cells[5].onclick = function()
                //     {
                       
                //             console.log(Cell[5].innerHTML);

                //             let form_data = new FormData(); 
                //             form_data.append("TABID",Cell[4].innerHTML);
                //             form_data.append("wtype","TabbingExit");
                        
                //             $.ajax({
                //                 url:'../adminincludes/InformationLoad.php',
                //                 method:'POST',
                //                 data:form_data,
                //                 contentType:false,
                //                 cache:false,
                //                 processData:false,
                                
                //                 success: function (GetTabData) {
                //                 tabtable.innerHTML = '';
                //                 // tabbingload2();
                //                 tabtable.innerHTML = '';
                //                 tabbingload();
                //                 }
                                
                //             })
                //     }
                // }
                // console.log(tabtable.querySelectorAll('.tabbingborder')[x].class+"123");
                // for (let a = 0; a < C('minusaddress').length ; a++) {
                //     let sovietisback = C('minusaddress')[a];
                //     sovietisback.removeEventListener("click", removeAddress)
                //     sovietisback.addEventListener("click", removeAddress); 
                //  }
    

            for(var x = 0; x < tabtable.querySelectorAll('.tabbingborder').length; x++){

                // console.log(tabtable.querySelectorAll('.tabbingborder')[x].class+"123");
    
                tabtable.querySelectorAll('.tabbingborder')[x].children[1].onclick = function()
                {
                    
                    console.log(this.parentElement.childNodes[1].innerHTML);
                    console.log(this.parentElement.children[0].childNodes[1].innerHTML);


                    let form_data = new FormData(); 
                    form_data.append("TABID",this.parentElement.children[0].childNodes[1].innerHTML);
                    form_data.append("wtype","UpdateTab");

                    $.ajax({
                        url:'../adminincludes/data.php',
                        method:'POST',
                        data:form_data,
                        contentType:false,
                        cache:false,
                        processData:false,
                        beforeSend: function(){

                        }
                    })


                    index = this.parentElement;
                    index.remove();
                    // console.log(this.parentElement.children[0].innerText);


                    // console.log(index);
                    // tabtable.children[i].remove();
                    // console.log(tabtable.children[i]);

                    // tabtable.removeChild(tabtable.children[0]);
                    // console.log(tabtable.parentNode.remove(tabtable.childNodes));
                    // while (tabtable.hasChildNodes()) {
                    //     tabtable.removeChild(tabtable.firstChild);
                    //   }

                    
                };
            };    
            
            
            for(var x = 0; x < tabtable.querySelectorAll('.tabbingborder').length; x++){

                // console.log(tabtable.querySelectorAll('.tabbingborder')[x].class+"123")

                // tabtable.querySelectorAll('.tabbingborder')[x].children[1].onclick = function()
                // {
                //         console.log(this.children[0].innerText);
                // }
                tabtable.querySelectorAll('.tabbingborder')[x].children[0].onclick = function()
                {
                        I('PayWalletLoadTable').innerHTML = '';
                        console.log(this.children[4].innerText);
                            if(this.children[4].innerText == 6){
                                // C('tabbingborder')[index - 1].style.borderBottom = '1px solid black';
                                I('tdProduct').innerHTML = "";
                                I('Rented-Products').innerHTML = "";
                                I('UInumber').innerHTML = "";
                                I('TransactionApprovalTable').innerHTML = '';
                                
                                // if(){
    
                                // }
                                LoadRequestTransaction(this.children[2].innerText);
                                // LoadRequestTransaction(Cell[2].innerHTML);
                                // tabtable.rows[x].cells[1].disabled = true;
                                // console.log(Cell[2].disabled);
                                I('TransactionApprovalTable').innerHTML = '';
                                dashboardbtn.classList.remove('active');
                                vendorbtn.classList.remove('active');
                                adminbtn.classList.remove('active');
                                depositbtn.classList.remove('active');
                                // messengerbtn.classList.remove('active');
                                // serverAbtn.classList.remove('active');
                                serversettingsbtn.classList.remove('active');
                                transactionbtn.classList.add('active');
                                paywalletbtn.classList.remove('active');
                                reportsbtn.classList.remove('active');
                                customerbtn.classList.remove('active');
                                C('SuperAdmintable')[0].style.display = 'none';
                                C('ResetPassword')[0].style.display = 'none';
                                C('ResetPassword')[1].style.display = 'none';
                                C('ResetPassword')[2].style.display = 'none';
                                C('CustomerDashBoard')[0].style.display = 'none';
                                C('AdminInformation2')[0].style.display = 'none';
                                // searchframe.style.display = 'none';
                                // customersearchframe.style.display = 'none';
                                // vendorsearchframe.style.display = 'none';
                                AdminInformationframe[0].style.display = 'none';
                                graph[0].style.display = 'none';
                                urgentfeaturecon[0].style.display = 'none';
                                CustomerDashboard[0].style.display = 'none';
                                customerframe[0].style.display = 'none';
                                // dashboardframe[0].style.display = 'none';
                                messengerframe[0].style.display = 'none';
                                VendorDashboard[0].style.display = 'none';
                                vendorframe[0].style.display = 'none';
                                AddCustomerFrame[0].style.display = 'none';
                                AddVendorFrame[0].style.display = 'none';
                                adminframe[0].style.display = 'none';
                                AddAdminFrame[0].style.display = 'none';
                                AdminDashboard[0].style.display = 'none';
                                transactionframe[0].style.display = 'block';
                                conTD[0].style.display = 'none';
                                console.log('Soilo Pogi');
                                conPW[0].style.display = 'none';
                                UserInformationframe[0].style.display = 'none';
                                reportsframe[0].style.display = 'none';
                                DepositDashboard[0].style.display = 'none';
                            }
                            if(this.children[4].innerText == 7){
                                // C('tabbingborder')[index - 1].style.borderBottom = '1px solid black';
                                I('PayWalletLoadTable').innerHTML = '';
                                // console.log(Cell[2].innerHTML);
                                LoadPayWalletTable(this.children[2].innerText);
                                I('PayWalletLoadTable').innerHTML = '';
                                I('tdProduct').innerHTML = "";
                                I('Rented-Products').innerHTML = "";
                                I('UInumber').innerHTML = "";
                                dashboardbtn.classList.remove('active');
                                vendorbtn.classList.remove('active');
                                adminbtn.classList.remove('active');
                                depositbtn.classList.remove('active');
                                // messengerbtn.classList.remove('active');
                                C('SuperAdmintable')[0].style.display = 'none';
                                // serverAbtn.classList.remove('active');
                                serversettingsbtn.classList.remove('active');
                                transactionbtn.classList.remove('active');
                                paywalletbtn.classList.add('active');
                                reportsbtn.classList.remove('active');
                                customerbtn.classList.remove('active');
                                C('ResetPassword')[0].style.display = 'none';
                                C('ResetPassword')[1].style.display = 'none';
                                C('ResetPassword')[2].style.display = 'none';
                                C('CustomerDashBoard')[0].style.display = 'none';
                                C('AdminInformation2')[0].style.display = 'none';
                                // searchframe.style.display = 'none';
                                // customersearchframe.style.display = 'none';
                                // vendorsearchframe.style.display = 'none';
                                AdminInformationframe[0].style.display = 'none';
                                graph[0].style.display = 'none';
                                urgentfeaturecon[0].style.display = 'none';
                                CustomerDashboard[0].style.display = 'none';
                                customerframe[0].style.display = 'none';
                                // dashboardframe[0].style.display = 'none';
                                messengerframe[0].style.display = 'none';
                                VendorDashboard[0].style.display = 'none';
                                vendorframe[0].style.display = 'none';
                                AddCustomerFrame[0].style.display = 'none';
                                AddVendorFrame[0].style.display = 'none';
                                adminframe[0].style.display = 'none';
                                AddAdminFrame[0].style.display = 'none';
                                AdminDashboard[0].style.display = 'none';
                                transactionframe[0].style.display = 'none';
                                conTD[0].style.display = 'none';
                                // console.log('Soilo Pogi');
                                conPW[0].style.display = 'block';
                                UserInformationframe[0].style.display = 'none';
                                reportsframe[0].style.display = 'none';
                                DepositDashboard[0].style.display = 'none';
                            }
    
                            if(this.children[4].innerText == 8){
                                // C('tabbingborder')[index - 1].style.borderBottom = '1px solid black';
                                I('tdProduct').innerHTML = "";
                                I('Rented-Products').innerHTML = "";
                                I('UInumber').innerHTML = "";
                                I('DepositTable').innerHTML = "";
                                LoadDepositProblem(this.children[2].innerText);
                                I('DepositTable').innerHTML = "";
                                dashboardbtn.classList.remove('active');
                                depositbtn.classList.add('active');
                                vendorbtn.classList.remove('active');
                                adminbtn.classList.remove('active');
                                C('ResetPassword')[0].style.display = 'none';
                                C('ResetPassword')[1].style.display = 'none';
                                C('ResetPassword')[2].style.display = 'none';
                                C('CustomerDashBoard')[0].style.display = 'none';
                                C('AdminInformation2')[0].style.display = 'none';
                                // messengerbtn.classList.remove('active');
                                // serverAbtn.classList.remove('active');
                                serversettingsbtn.classList.remove('active');
                                transactionbtn.classList.remove('active');
                                paywalletbtn.classList.remove('active');
                                reportsbtn.classList.remove('active');
                                customerbtn.classList.remove('active');
                                AdminInformationframe[0].style.display = 'none';
                                C('SuperAdmintable')[0].style.display = 'none';
                                graph[0].style.display = 'none';
                                urgentfeaturecon[0].style.display = 'none';
                                // searchframe.style.display = 'none';
                                // customersearchframe.style.display = 'none';
                                // vendorsearchframe.style.display = 'block';
                                CustomerDashboard[0].style.display = 'none';
                                customerframe[0].style.display = 'none';
                                // dashboardframe[0].style.display = 'none';
                                messengerframe[0].style.display = 'none';
                                VendorDashboard[0].style.display = 'none';
                                vendorframe[0].style.display = 'none';
                                AddCustomerFrame[0].style.display = 'none';
                                AddVendorFrame[0].style.display = 'none';
                                adminframe[0].style.display = 'none';
                                AddAdminFrame[0].style.display = 'none';
                                AdminDashboard[0].style.display = 'none';
                                transactionframe[0].style.display = 'none';
                                conTD[0].style.display = 'none';
                                // console.log('Soilo Pogi');s
                                conPW[0].style.display = 'none';
                                UserInformationframe[0].style.display = 'none';
                                reportsframe[0].style.display = 'none';
                                DepositDashboard[0].style.display = 'block';
                            }
                }
                            
                }
    
                        
                       
                //         }
                    
                //     let Cell = tabtable.rows[x].cells;
                //     // tabtable.rows[x].onclick = function()
                //     // {
                //     //     // C('tabbingborder')[x].style.borderBottom = '1px solid white';
                //     //     // Cell[2].style.pointerEvents = "none";
                //     // //    console.log(x);
                //     // // //    C('tabbingborder')[i].style.borderBottom = '1px white';
                //     // //     let vv = Cell[4].innerHTML;
                //     // //     // tabbingload();
                //     //     // index = this.parentElement.rowIndex;
                //     //     // console.log(index);
                //     // //     if(vv == Cell[4].innerHTML){
                //     // //         C('tabbingborder')[index - 1].style.borderBottom = '1px solid';
                //     // //     }
                //     // //     else if(!vv == Cell[4].innerHTML){
                //     // //         C('tabbingborder')[i].style.borderBottom = '1px white';
                //     // //     }

                //     //     Array.from(this.parentNode.children).forEach(function(el){
                //     //         el.classList.remove('selected');
                //     //         // tabtable.rows[x].cells[1].style.disabled = true;
                            
                //     //     });

                //     //     [...this.parentNode.children].forEach((el) => el.classList.remove('selected'));
                //     //     this.classList.add('selected');

                //     //     // index = this.rowsIndex;
                //     //     // // this.classList.remove("selected");
                //     //     // this.classList.toggle("selected");
                //     //     // console.log(typeof index);


                //     //     console.log();
                        

                //     //     I('PayWalletLoadTable').innerHTML = '';
                      


                //     //     if(Cell[3].innerHTML == 6){
                //     //         // C('tabbingborder')[index - 1].style.borderBottom = '1px solid black';
                //     //         I('tdProduct').innerHTML = "";
                //     //         I('Rented-Products').innerHTML = "";
                //     //         I('UInumber').innerHTML = "";
                //     //         I('TransactionApprovalTable').innerHTML = '';
                            
                //     //         // if(){

                //     //         // }
                //     //         LoadRequestTransaction(Cell[2].innerHTML);
                //     //         // LoadRequestTransaction(Cell[2].innerHTML);
                //     //         // tabtable.rows[x].cells[1].disabled = true;
                //     //         // console.log(Cell[2].disabled);
                //     //         I('TransactionApprovalTable').innerHTML = '';
                //     //         dashboardbtn.classList.remove('active');
                //     //         vendorbtn.classList.remove('active');
                //     //         adminbtn.classList.remove('active');
                //     //         depositbtn.classList.remove('active');
                //     //         messengerbtn.classList.remove('active');
                //     //         serverAbtn.classList.remove('active');
                //     //         serversettingsbtn.classList.remove('active');
                //     //         transactionbtn.classList.add('active');
                //     //         paywalletbtn.classList.remove('active');
                //     //         reportsbtn.classList.remove('active');
                //     //         customerbtn.classList.remove('active');
                //     //         // searchframe.style.display = 'none';
                //     //         // customersearchframe.style.display = 'none';
                //     //         // vendorsearchframe.style.display = 'none';
                //     //         CustomerDashboard[0].style.display = 'none';
                //     //         customerframe[0].style.display = 'none';
                //     //         // dashboardframe[0].style.display = 'none';
                //     //         messengerframe[0].style.display = 'none';
                //     //         VendorDashboard[0].style.display = 'none';
                //     //         vendorframe[0].style.display = 'none';
                //     //         AddCustomerFrame[0].style.display = 'none';
                //     //         AddVendorFrame[0].style.display = 'none';
                //     //         adminframe[0].style.display = 'none';
                //     //         AddAdminFrame[0].style.display = 'none';
                //     //         AdminDashboard[0].style.display = 'none';
                //     //         transactionframe[0].style.display = 'block';
                //     //         conTD[0].style.display = 'none';
                //     //         console.log('Soilo Pogi');
                //     //         conPW[0].style.display = 'none';
                //     //         UserInformationframe[0].style.display = 'none';
                //     //         reportsframe[0].style.display = 'none';
                //     //         DepositDashboard[0].style.display = 'none';
                //     //     }
                //     //     if(Cell[3].innerHTML == 7){
                //     //         // C('tabbingborder')[index - 1].style.borderBottom = '1px solid black';
                //     //         I('PayWalletLoadTable').innerHTML = '';
                //     //         console.log(Cell[2].innerHTML);
                //     //         LoadPayWalletTable(Cell[2].innerHTML);
                //     //         I('PayWalletLoadTable').innerHTML = '';
                //     //         I('tdProduct').innerHTML = "";
                //     //         I('Rented-Products').innerHTML = "";
                //     //         I('UInumber').innerHTML = "";
                //     //         dashboardbtn.classList.remove('active');
                //     //         vendorbtn.classList.remove('active');
                //     //         adminbtn.classList.remove('active');
                //     //         depositbtn.classList.remove('active');
                //     //         messengerbtn.classList.remove('active');
                //     //         serverAbtn.classList.remove('active');
                //     //         serversettingsbtn.classList.remove('active');
                //     //         transactionbtn.classList.remove('active');
                //     //         paywalletbtn.classList.add('active');
                //     //         reportsbtn.classList.remove('active');
                //     //         customerbtn.classList.remove('active');
                //     //         // searchframe.style.display = 'none';
                //     //         // customersearchframe.style.display = 'none';
                //     //         // vendorsearchframe.style.display = 'none';
                //     //         CustomerDashboard[0].style.display = 'none';
                //     //         customerframe[0].style.display = 'none';
                //     //         // dashboardframe[0].style.display = 'none';
                //     //         messengerframe[0].style.display = 'none';
                //     //         VendorDashboard[0].style.display = 'none';
                //     //         vendorframe[0].style.display = 'none';
                //     //         AddCustomerFrame[0].style.display = 'none';
                //     //         AddVendorFrame[0].style.display = 'none';
                //     //         adminframe[0].style.display = 'none';
                //     //         AddAdminFrame[0].style.display = 'none';
                //     //         AdminDashboard[0].style.display = 'none';
                //     //         transactionframe[0].style.display = 'none';
                //     //         conTD[0].style.display = 'none';
                //     //         // console.log('Soilo Pogi');
                //     //         conPW[0].style.display = 'block';
                //     //         UserInformationframe[0].style.display = 'none';
                //     //         reportsframe[0].style.display = 'none';
                //     //         DepositDashboard[0].style.display = 'none';
                //     //     }

                //     //     if(Cell[3].innerHTML == 8){
                //     //         // C('tabbingborder')[index - 1].style.borderBottom = '1px solid black';
                //     //         I('tdProduct').innerHTML = "";
                //     //         I('Rented-Products').innerHTML = "";
                //     //         I('UInumber').innerHTML = "";
                //     //         I('DepositTable').innerHTML = "";
                //     //         LoadDepositProblem(Cell[2].innerHTML);
                //     //         I('DepositTable').innerHTML = "";
                //     //         dashboardbtn.classList.remove('active');
                //     //         depositbtn.classList.add('active');
                //     //         vendorbtn.classList.remove('active');
                //     //         adminbtn.classList.remove('active');
                //     //         messengerbtn.classList.remove('active');
                //     //         serverAbtn.classList.remove('active');
                //     //         serversettingsbtn.classList.remove('active');
                //     //         transactionbtn.classList.remove('active');
                //     //         paywalletbtn.classList.remove('active');
                //     //         reportsbtn.classList.remove('active');
                //     //         customerbtn.classList.remove('active');
                //     //         // searchframe.style.display = 'none';
                //     //         // customersearchframe.style.display = 'none';
                //     //         // vendorsearchframe.style.display = 'block';
                //     //         CustomerDashboard[0].style.display = 'none';
                //     //         customerframe[0].style.display = 'none';
                //     //         // dashboardframe[0].style.display = 'none';
                //     //         messengerframe[0].style.display = 'none';
                //     //         VendorDashboard[0].style.display = 'none';
                //     //         vendorframe[0].style.display = 'none';
                //     //         AddCustomerFrame[0].style.display = 'none';
                //     //         AddVendorFrame[0].style.display = 'none';
                //     //         adminframe[0].style.display = 'none';
                //     //         AddAdminFrame[0].style.display = 'none';
                //     //         AdminDashboard[0].style.display = 'none';
                //     //         transactionframe[0].style.display = 'none';
                //     //         conTD[0].style.display = 'none';
                //     //         // console.log('Soilo Pogi');
                //     //         conPW[0].style.display = 'none';
                //     //         UserInformationframe[0].style.display = 'none';
                //     //         reportsframe[0].style.display = 'none';
                //     //         DepositDashboard[0].style.display = 'block';
                //     //     }
                //     // }
                // }

            }
        }
    })
}

LoadSuperAdminPermission();

function LoadSuperAdminPermission(){
    let form_data = new FormData(); 
    form_data.append("wtype","GetSuperAdminData");

    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
      
        success: function (GetAdminData) {

         

            let AdminPermissionTable = I('SuperAdminPermissionTable');
            let gcd = JSON.parse(GetAdminData);
            console.log(gcd);

            let Select, Update, Insert;

            

            for(let i = 0; i < gcd.length; i++){

                if(gcd[i]['SelectTable'] == 3){
                    Select = 'X';
                                        
                }
                else if(gcd[i]['SelectTable'] == 4){
                    Select = '✓';
                }

                if(gcd[i]['UpdateTable'] == 3){
                    Update = 'X';
                    
                }
                else if(gcd[i]['UpdateTable'] == 4){
                    Update = '✓';
                }

                if(gcd[i]['InsertTable'] == 3){
                    Insert = 'X';
                    
                }
                else if(gcd[i]['InsertTable'] == 4){
                    Insert = '✓';
                }

                AdminPermissionTable.innerHTML += `

                <tr style="background: white; border-bottom: 1px solid;">
                    <td>${gcd[i]['userID']}</td>
                    <td>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                    <td>${Select}</td>
                    <td>${Update}</td>
                    <td>${Insert}</td>
                                        
                                        
                    <td>
                        <div class="Admin-Identification">
                           <div  class="Admin-ID" id="Admin-IDD">
                                <span class="material-symbols-outlined">fact_check</span>
                            </div>
                        </div>                               
                    </td>                            
                </tr>  
                
                `;

                if(gcd[i]['UpdateTable'] == 3){
                    I('UpdateCheck').style.display = 'none';
                    I('UpdateUnCheck').style.display = 'block';
                }
                else if(gcd[i]['UpdateTable'] == 4){
                    I('UpdateCheck').style.display = 'block';
                    I('UpdateUnCheck').style.display = 'none';
                }

                if(gcd[i]['InsertTable'] == 3){
                    I('InsertCheck').style.display = 'none';
                    I('InsertUnCheck').style.display = 'block';
                }
                else if(gcd[i]['InsertTable'] == 4){
                    I('InsertCheck').style.display = 'block';
                    I('InsertUnCheck').style.display = 'none';
                }

                if(gcd[i]['SelectTable'] == 3){
                    I('SelectCheck').style.display = 'none';
                    I('SelectUnCheck').style.display = 'block';
                }
                else if(gcd[i]['SelectTable'] == 4){
                    I('SelectCheck').style.display = 'block';
                    I('SelectUnCheck').style.display = 'none';
                }

                for(var x = 0; x < AdminPermissionTable.rows.length; x++){
                    let Cell = AdminPermissionTable.rows[x].cells;
                    AdminPermissionTable.rows[x].cells[5].onclick = function()
                    {
                        console.log(Cell[1].innerHTML);

                        AdminImagePopup[0].style.display = 'block';
                        I('AdminNumber').innerHTML = Cell[0].innerHTML; 
                        I('Admin_Name').innerHTML = Cell[1].innerHTML;
                        
                        
                        if(Cell[3].innerHTML == 'X'){
                            I('UpdateCheck').style.display = 'none';
                            I('UpdateUnCheck').style.display = 'block';
                        }
                        else if(Cell[3].innerHTML == '✓'){
                            I('UpdateCheck').style.display = 'block';
                            I('UpdateUnCheck').style.display = 'none';
                        }

                        if(Cell[4].innerHTML == 'X'){
                            I('InsertCheck').style.display = 'none';
                            I('InsertUnCheck').style.display = 'block';
                        }
                        else if(Cell[4].innerHTML== '✓'){
                            I('InsertCheck').style.display = 'block';
                            I('InsertUnCheck').style.display = 'none';
                        }

                        console.log(Cell[2].innerHTML);
                        if(Cell[2].innerHTML == 'X'){
                            I('SelectCheck').style.display = 'none';
                            I('SelectUnCheck').style.display = 'block';
                        }
                        else if(Cell[2].innerHTML == '✓'){
                            I('SelectCheck').style.display = 'block';
                            I('SelectUnCheck').style.display = 'none';
                        }



                        I('UpdateUnCheck').addEventListener('click' , () => {

                            let form_data = new FormData(); 
                            form_data.append("wtype","UpdatePermission");
                            form_data.append("PNBOX",4);
                            form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/AdminPermission.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {
                                
                                    I('UpdateCheck').style.display = 'block';
                                    I('UpdateUnCheck').style.display = 'none';
                                }
                            });
            
                            
                        });

                        I('UpdateCheck').addEventListener('click' , () => {

                            let form_data = new FormData(); 
                            form_data.append("wtype","UpdatePermission");
                            form_data.append("PNBOX",3);
                            form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/AdminPermission.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {
                                
                                    I('UpdateCheck').style.display = 'none';
                                    I('UpdateUnCheck').style.display = 'block';
                                }
                            });

                            
                        });



                        I('SelectUnCheck').addEventListener('click' , () => {

                            let form_data = new FormData(); 
                            form_data.append("wtype","SelectPermission");
                            form_data.append("PNBOX",4);
                            form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/AdminPermission.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {        
                                    I('SelectCheck').style.display = 'block';
                                    I('SelectUnCheck').style.display = 'none';
                                }
                            });


                            
                        });

                        I('SelectCheck').addEventListener('click' , () => {

                            let form_data = new FormData(); 
                            form_data.append("wtype","SelectPermission");
                            form_data.append("PNBOX",3);
                            form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/AdminPermission.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {        
                                    I('SelectCheck').style.display = 'none';
                                    I('SelectUnCheck').style.display = 'block';
                                }
                            });

                            
                        });



                        I('InsertUnCheck').addEventListener('click' , () => {

                            let form_data = new FormData(); 
                            form_data.append("wtype","InsertPermission");
                            form_data.append("PNBOX",4);
                            form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/AdminPermission.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {        
                                    I('InsertCheck').style.display = 'block';
                                    I('InsertUnCheck').style.display = 'none';
                                }
                            });

                            
                        });

                        I('InsertCheck').addEventListener('click' , () => {

                            let form_data = new FormData(); 
                            form_data.append("wtype","InsertPermission");
                            form_data.append("PNBOX",3);
                            form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/AdminPermission.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {        
                                    I('InsertCheck').style.display = 'none';
                                    I('InsertUnCheck').style.display = 'block';
                                }
                            });


                            
                        });




                        blurActive();
                        
                       

                    }

                }
            }
        }
    });
}
loadGcashInfo();
function loadGcashInfo(){
    let form_data = new FormData(); 
    form_data.append("wtype","loadGcashInfo");

    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
      
        success: function (GetGcashData) {
            let gcd = JSON.parse(GetGcashData);

            I('GcashNumberChange').value = gcd[0]['AmountLimit'];
            I('GcashName').value = gcd[0]['FeeAmount'];
        }
    })
}

I('GcashIMgSave').addEventListener('click', () => {
    let form_data = new FormData(); 
    form_data.append("AL",I('GcashNumberChange').value );
    form_data.append("FA",I('GcashName').value );
    form_data.append("wtype","UpdateGcashInfo");

    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
      
        success: function (GetGcashData) {
            let gcd = JSON.parse(GetGcashData);

            loadGcashInfo();
            Swal.fire({
                title: "Successfully Updated!!",
                text: "",
                icon: "success"
              });
        }
    })
})

I('ReturnRenteeMoneyGcash').addEventListener('click', () =>{
    if(I('GcasfrenteeRefout').value == ''){
        Swal.fire({
            title: "Please input the Reference Number!",
            text: "",
            icon: "info"
          });
    }
    else{
        let form_data = new FormData(); 
        form_data.append("USERID", I('AdminFullName').innerHTML);
        form_data.append("REF", I('GcasfrenteeRefout').value);
        form_data.append("GLOBALRECEIPTNUMBER",I('cashoutrenteerequestNumber').innerHTML);
        form_data.append("wtype","ReturnRenteeGcash");
    
        $.ajax({
            url:'../adminincludes/data.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            beforeSend: function(){
                C('containerloader')[0].style.display = 'block';
            },
            success: function (GetAdminData) {
                C('containerloader')[0].style.display = 'none';
                Swal.fire({
                    title: "Gcash Transaction Complete!",
                    text: "",
                    icon: "success"
                  });
                  C('cashoutrenteerequest')[0].style.display = 'none';
                  blurRemove();
            }
        });
    }
    
})

function addWeeks(date, weeks) {
    let d = new Date(date);
    d.setDate(d.getDate() + 7 * weeks);
    const withSlashes = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('/');

    return withSlashes;
}

LoadCashoutRentee();
function LoadCashoutRentee(){
    let form_data = new FormData(); 
    form_data.append("wtype","CashoutRentee");

    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
      
        success: function (GetAdminData) {
            let gcd = JSON.parse(GetAdminData);
            let cashouttable = I('cashoutRenteetable');
            for(let i = 0; i < gcd.length; i++){
                let newDate = addWeeks(gcd[i]['DateUp'], 1);

                cashouttable.innerHTML += 
                `
                <tr>
                    <td>${gcd[i]['RequestID']}</td>             
                    <td>${gcd[i]['userID']}</td>  
                    <td>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>                    
                    <td>${gcd[i]['GCASHPhoneNumber']}</td>
                    <td>${gcd[i]['Amount']}</td>
                    <td>${gcd[i]['AmountFee']}</td>
                    <td>${newDate}</td>
                    <td class="cashouthover"> <span class="material-symbols-outlined">monetization_on</span></td>                          
                </tr>  
                `;

                for(var x = 0; x < cashouttable.rows.length; x++){
                    let Cell = cashouttable.rows[x].cells;
                    const date = new Date();

                    let day = date.getDate();
                    let month = date.getMonth() + 1;
                    let year = date.getFullYear();

                    const withSlashes = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('/');

                    cashouttable.rows[x].cells[7].onclick = function()
                    {
                        
                            console.log('HEHE');
                            C('cashoutrenteerequest')[0].style.display = 'block';
                            blurActive();
                            I('cashoutrenteerequestNumber').innerHTML = Cell[0].innerHTML;
                            I('cashoutrenteerenterNumber').innerHTML = Cell[1].innerHTML;
                            I('cashoutrenteeNumber').innerHTML = Cell[3].innerHTML;
                            I('cashoutrenteeAmount').innerHTML = Cell[4].innerHTML;
                            I('cashoutrenteefee').innerHTML =  Cell[5].innerHTML;
                            I('cashouttotalrenteefee').innerHTML = parseFloat(Cell[4].innerHTML) - parseFloat(Cell[5].innerHTML);
                            I('cashoutP').innerHTML ="Reference No: " + Cell[4].innerHTML;
                        
                        
                    }
                }
            }
        }
    })
}

I('cashoutrenteerequestexit').addEventListener('click', () =>{
    C('cashoutrenteerequest')[0].style.display = 'none';
    blurRemove();
})

LoadCashout();
function LoadCashout(){
    let form_data = new FormData(); 
    form_data.append("wtype","CashoutStore");

    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
      
        success: function (GetAdminData) {
            let gcd = JSON.parse(GetAdminData);
            console.log(gcd);

            let cashouttable = I('cashouttable');
            let hehe;
            for(let i = 0; i < gcd.length; i++){
                if (gcd[i]['ApproveStatus'] == '3'){
                    hehe = "Transaction Done";
                }
                else if(gcd[i]['ApproveStatus'] == '2'){
                    hehe = "Pending";
                }
                else if(gcd[i]['ApproveStatus'] == '1'){
                    hehe = "Admin Approved";
                }
                else{
                    hehe = "Cancelled";
                }
                cashouttable.innerHTML += 
                `
                <tr>
                    <td>${gcd[i]['RequestID']}</td>             
                    <td>${gcd[i]['renterID']}</td>  
                    <td>${gcd[i]['StoreName']}</td>                    
                    <td>${gcd[i]['GcashNumber']}</td>
                    <td>${gcd[i]['PriceRent']}</td>
                    <td class="cashouthover"> <span class="material-symbols-outlined">monetization_on</span></td>                          
                </tr>  
                `;

                for(var x = 0; x < cashouttable.rows.length; x++){
                    let Cell = cashouttable.rows[x].cells;
                    cashouttable.rows[x].cells[5].onclick = function()
                    {
                        C('cashoutrequest')[0].style.display = 'block';
                        I('cashoutrequestNumber').innerHTML = Cell[0].innerHTML;
                        I('cashoutrenterNumber').innerHTML = Cell[1].innerHTML;
                        I('cashoutNumber').innerHTML = Cell[3].innerHTML;
                        I('cashoutAmount').innerHTML = Cell[4].innerHTML;
                        // I('cashoutP').innerHTML ="Reference No: " + Cell[4].innerHTML;
                    }
                }
            }

        }
    })
}

I('cashoutrequestexit').addEventListener('click', ()=>{
    C('cashoutrequest')[0].style.display = 'none';
})

I('ReturnMoneyGcash').addEventListener('click', () => {
    console.log('Return hehe');
    Swal.fire({
        title: "Make sure you already give the money!",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I already send it!"
      }).then((result) => {
        if (result.isConfirmed) {

            let form_data = new FormData(); 
            form_data.append("RID",I('cashoutrequestNumber').innerHTML);
            form_data.append("REF",I('GcasfRefout').value);
            form_data.append("ADMINNAME", I('AdminFullName').innerHTML);
            form_data.append("wtype","UpdateCashoutRef");
        
            $.ajax({
                url:'../adminincludes/data.php',
                method:'POST',
                data:form_data,
                contentType:false,
                cache:false,
                processData:false,
              
                success: function (GetAdminData) {
                    I('GcasfRefout').value = '';
                    C('cashoutrequest')[0].style.display = 'none';
                    notificationInsert3(I('cashoutrenterNumber').innerHTML,`Your request for cash-out has bee approved by Admin`, 
                        "itempage.php?productid="`${I('commentProductID').innerHTML}` ,"payments", "1","");
                }
            });
          Swal.fire({
            title: "Transaction Done!",
            // text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
})

LoadAdminPermission();

function LoadAdminPermission(){
    let form_data = new FormData(); 
    form_data.append("wtype","GetAdminData");

    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
      
        success: function (GetAdminData) {

         

            let AdminPermissionTable = I('AdminPermissionTable');
            let gcd = JSON.parse(GetAdminData);
            console.log(gcd);

            let Select, Update, Insert;

            

            for(let i = 0; i < gcd.length; i++){

                // if(gcd[i]['SelectTable'] == 3){
                //     Select = 'X';
                                        
                // }
                // else if(gcd[i]['SelectTable'] == 4){
                //     Select = '✓';
                // }

                if(gcd[i]['UpdateTable'] == 3){
                    Update = 'X';
                    
                }
                else if(gcd[i]['UpdateTable'] == 4){
                    Update = '✓';
                }

                if(gcd[i]['InsertTable'] == 3){
                    Insert = 'X';
                    
                }
                else if(gcd[i]['InsertTable'] == 4){
                    Insert = '✓';
                }

                AdminPermissionTable.innerHTML += `

                <tr style="background: white; border-bottom: 1px solid;">
                    <td class=AdminTouch>${gcd[i]['userID']}</td>
                    <td class=AdminTouch>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                
                    <td>${Update}</td>
                    <td>${Insert}</td>
                                        
                                        
                    <td>
                        <div class="Admin-Identification">
                           <div  class="Admin-ID" id="Admin-IDD">
                                <span class="material-symbols-outlined">fact_check</span>
                            </div>
                        </div>                               
                    </td>                            
                </tr>  
                
                `;

                if(gcd[i]['UpdateTable'] == 3){
                    I('UpdateCheck').style.display = 'none';
                    I('UpdateUnCheck').style.display = 'block';
                }
                else if(gcd[i]['UpdateTable'] == 4){
                    I('UpdateCheck').style.display = 'block';
                    I('UpdateUnCheck').style.display = 'none';
                }

                if(gcd[i]['InsertTable'] == 3){
                    I('InsertCheck').style.display = 'none';
                    I('InsertUnCheck').style.display = 'block';
                }
                else if(gcd[i]['InsertTable'] == 4){
                    I('InsertCheck').style.display = 'block';
                    I('InsertUnCheck').style.display = 'none';
                }

                // if(gcd[i]['SelectTable'] == 3){
                //     I('SelectCheck').style.display = 'none';
                //     I('SelectUnCheck').style.display = 'block';
                // }
                // else if(gcd[i]['SelectTable'] == 4){
                //     I('SelectCheck').style.display = 'block';
                //     I('SelectUnCheck').style.display = 'none';
                // }

                for(var x = 0; x < AdminPermissionTable.rows.length; x++){
                    let Cell = AdminPermissionTable.rows[x].cells;
                    AdminPermissionTable.rows[x].cells[0].onclick = function()
                    {
                        C('AdminDashBoard')[0].style.display = 'none';
                        C('AdminInformation2')[0].style.display = 'block';
                        C('PersonalInfo')[2].style.display = 'block';
                        // I('AAdminPersonalInfo').style.display = 'block';

                        let form_data = new FormData(); 
                            form_data.append("wtype","LoadAAdminInfo");
                            form_data.append("USERID", Cell[0].innerHTML);
                            // form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/InformationLoad.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {
                                    let gcd = JSON.parse(response);
                                    console.log(gcd);
                                    I('UpdateCheck').style.display = 'block';
                                    I('UpdateUnCheck').style.display = 'none';

                                    // I('AdminUserStatus') = gcd[0]['userType'];
                                    I('AdminDP').src = gcd[0]['userProfileFace'];
                                    I('AdminNName').innerHTML = gcd[0]['FirstName'] + ' ' + gcd[0]['MiddleName'] + ' ' + gcd[0]['LastName'];
                                    I('AdminUserType').value = gcd[0]['userType'];
                                    I('AdminUserNo').value =gcd[0]['userID'];
                                    I('AdminFirstName').value = gcd[0]['FirstName'];
                                    I('AdminLastName').value = gcd[0]['LastName'];
                                    I('AdminMiddleName').value = gcd[0]['MiddleName'];
                                    I('AdminSuffix').value = gcd[0]['SuffixName'];
                                    I('AdminMonth').value = gcd[0]['Birthdate'];
                                    I('AdminEmail').value = gcd[0]['Email'];
                                    I('AdminPhoneNo').value = gcd[0]['ContactNumber'];
                                    I('AdminAddress').value = gcd[0]['Address'] + ' ' + gcd[0]['Barangay'] + ' ' + gcd[0]['City'] + ' ' + gcd[0]['Province'] + ' ' + gcd[0]['Region'];
                                    I('AdminUsername').value = gcd[0]['userName'];   
                                    I('AdminPhoto').src = gcd[0]['userIDImage'];
                                    I('AdminPhotoID').src = gcd[0]['userFaceImage']; 
                                }
                            });



                    }

                }

                for(var x = 0; x < AdminPermissionTable.rows.length; x++){
                    let Cell = AdminPermissionTable.rows[x].cells;
                    AdminPermissionTable.rows[x].cells[1].onclick = function()
                    {
                        // C('AdminDashBoard')[0].style.display = 'none';
                        // C('AdminInformation2')[0].style.display = 'block';

                        C('AdminDashBoard')[0].style.display = 'none';
                        C('AdminInformation2')[0].style.display = 'block';
                        C('PersonalInfo')[2].style.display = 'block';
                        // I('AAdminPersonalInfo').style.display = 'block';

                        let form_data = new FormData(); 
                        form_data.append("wtype","LoadAAdminInfo");
                        form_data.append("USERID", Cell[0].innerHTML);
                        // form_data.append("IDBOX", I('AdminNumber').innerHTML);

                        $.ajax({
                            url:'../adminincludes/InformationLoad.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (response) {
                                let gcd = JSON.parse(response);
                                console.log(gcd);
                                I('UpdateCheck').style.display = 'block';
                                I('UpdateUnCheck').style.display = 'none';

                                // I('AdminUserStatus') = gcd[0]['userType'];
                                I('AdminDP').src = gcd[0]['userProfileFace'];
                                I('AdminNName').innerHTML = gcd[0]['FirstName'] + ' ' + gcd[0]['MiddleName'] + ' ' + gcd[0]['LastName'];
                                I('AdminUserType').value = gcd[0]['userType'];
                                I('AdminUserNo').value =gcd[0]['userID'];
                                I('AdminFirstName').value = gcd[0]['FirstName'];
                                I('AdminLastName').value = gcd[0]['LastName'];
                                I('AdminMiddleName').value = gcd[0]['MiddleName'];
                                I('AdminSuffix').value = gcd[0]['SuffixName'];
                                I('AdminMonth').value = gcd[0]['Birthdate'];
                                I('AdminEmail').value = gcd[0]['Email'];
                                I('AdminPhoneNo').value = gcd[0]['ContactNumber'];
                                I('AdminAddress').value = gcd[0]['Address'] + ' ' + gcd[0]['Barangay'] + ' ' + gcd[0]['City'] + ' ' + gcd[0]['Province'] + ' ' + gcd[0]['Region'];
                                I('AdminUsername').value = gcd[0]['userName'];   
                                I('AdminPhoto').src = gcd[0]['userIDImage'];
                                I('AdminPhotoID').src = gcd[0]['userFaceImage']; 
                            }
                        });
                    }

                }

                for(var x = 0; x < AdminPermissionTable.rows.length; x++){
                    let Cell = AdminPermissionTable.rows[x].cells;
                    AdminPermissionTable.rows[x].cells[4].onclick = function()
                    {
                        console.log(Cell[1].innerHTML);

                        AdminImagePopup[0].style.display = 'block';
                        I('AdminNumber').innerHTML = Cell[0].innerHTML; 
                        I('Admin_Name').innerHTML = Cell[1].innerHTML;
                        
                        
                        if(Cell[2].innerHTML == 'X'){
                            I('UpdateCheck').style.display = 'none';
                            I('UpdateUnCheck').style.display = 'block';
                        }
                        else if(Cell[2].innerHTML == '✓'){
                            I('UpdateCheck').style.display = 'block';
                            I('UpdateUnCheck').style.display = 'none';
                        }

                        if(Cell[3].innerHTML == 'X'){
                            I('InsertCheck').style.display = 'none';
                            I('InsertUnCheck').style.display = 'block';
                        }
                        else if(Cell[3].innerHTML== '✓'){
                            I('InsertCheck').style.display = 'block';
                            I('InsertUnCheck').style.display = 'none';
                        }

                        // console.log(Cell[2].innerHTML);
                        // if(Cell[2].innerHTML == 'X'){
                        //     I('SelectCheck').style.display = 'none';
                        //     I('SelectUnCheck').style.display = 'block';
                        // }
                        // else if(Cell[2].innerHTML == '✓'){
                        //     I('SelectCheck').style.display = 'block';
                        //     I('SelectUnCheck').style.display = 'none';
                        // }



                        I('UpdateUnCheck').addEventListener('click' , () => {

                            let form_data = new FormData(); 
                            form_data.append("wtype","UpdatePermission");
                            form_data.append("PNBOX",4);
                            form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/AdminPermission.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {
                                
                                    I('UpdateCheck').style.display = 'block';
                                    I('UpdateUnCheck').style.display = 'none';
                                }
                            });
            
                            
                        });

                        I('UpdateCheck').addEventListener('click' , () => {

                            let form_data = new FormData(); 
                            form_data.append("wtype","UpdatePermission");
                            form_data.append("PNBOX",3);
                            form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/AdminPermission.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {
                                
                                    I('UpdateCheck').style.display = 'none';
                                    I('UpdateUnCheck').style.display = 'block';
                                }
                            });

                            
                        });



                        I('SelectUnCheck').addEventListener('click' , () => {

                            let form_data = new FormData(); 
                            form_data.append("wtype","SelectPermission");
                            form_data.append("PNBOX",4);
                            form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/AdminPermission.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {        
                                    I('SelectCheck').style.display = 'block';
                                    I('SelectUnCheck').style.display = 'none';
                                }
                            });


                            
                        });

                        I('SelectCheck').addEventListener('click' , () => {

                            let form_data = new FormData(); 
                            form_data.append("wtype","SelectPermission");
                            form_data.append("PNBOX",3);
                            form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/AdminPermission.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {        
                                    I('SelectCheck').style.display = 'none';
                                    I('SelectUnCheck').style.display = 'block';
                                }
                            });

                            
                        });



                        I('InsertUnCheck').addEventListener('click' , () => {

                            let form_data = new FormData(); 
                            form_data.append("wtype","InsertPermission");
                            form_data.append("PNBOX",4);
                            form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/AdminPermission.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {        
                                    I('InsertCheck').style.display = 'block';
                                    I('InsertUnCheck').style.display = 'none';
                                }
                            });

                            
                        });

                        I('InsertCheck').addEventListener('click' , () => {

                            let form_data = new FormData(); 
                            form_data.append("wtype","InsertPermission");
                            form_data.append("PNBOX",3);
                            form_data.append("IDBOX", I('AdminNumber').innerHTML);

                            $.ajax({
                                url:'../adminincludes/AdminPermission.php',
                                method:'POST',
                                data:form_data,
                                contentType:false,
                                cache:false,
                                processData:false,
                                success: function (response) {        
                                    I('InsertCheck').style.display = 'none';
                                    I('InsertUnCheck').style.display = 'block';
                                }
                            });


                            
                        });




                        blurActive();
                        
                       

                    }

                }
            }
        }
    });
}

LoadRequestTransaction(1);

function LoadRequestTransaction(FN){
    let form_data = new FormData(); 
    // form_data.append("FN",FN);
    form_data.append("wtype","RequestTransaction");
            
    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        beforeSend: function(){
            // C('containerloader')[0].style.display = 'block';
        },
        success: function (RequestTransaction) {
            // C('containerloader')[0].style.display = 'none';
            let TransactionRequestTable = I('TransactionApprovalTable');

            let gcd = JSON.parse(RequestTransaction), rIndex;

            console.log(gcd);

            for(let i = 0; i < gcd.length; i++){

                let Status;

                if( gcd[i]['TrackingStatus'] == 0){
                    Status = 'Pending';
                }
                
                TransactionRequestTable.innerHTML +=  `
                <tr style="background: white;">
                    <td class="UserIdentification" style="font-size: 0px;">${gcd[i]['ReceiptNumber']}</td>
                    <td class="UserIdentification">${gcd[i]['RequestID']}</td>
                    <td class="UserIdentification">${gcd[i]['userID']}</td>
                    <td class="UserIdentification">${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']} </td>
                    <td > ${Status} </td>
                    
                                        
                    <td class="Transaction-Details1">
                        <div class="Transaction-Details">
                            <div  class="Transaction-D" id="Transaction-DD">
                                <span class="material-symbols-outlined">description</span>
                            </div>
                        </div>   
                    </td>  
                    <td class="UserIdentification" style="font-size: 0px;">${gcd[i]['TransactionID']}</td>                          
                </tr>  
                `;
                

                for(var x = 0; x < TransactionRequestTable.rows.length; x++){
                    let Cell = TransactionRequestTable.rows[x].cells;
                    TransactionRequestTable.rows[x].cells[5].onclick = function()
                    {

                        console.log('hehe');
                        
                        // let TransactionDetailsbtn = document.querySelectorAll('.Transaction-D');
                        let TransactionDetailsframe = document.getElementsByClassName('containerTD');
                        let transactionTableFrame = document.getElementsByClassName('Transactiontable');

                        
                        TransactionDetailsframe[0].style.display = 'block';
                        transactionTableFrame[0].style.display = 'none';

                        // I('tdID').innerHTML = ;
                         
                        let form_data = new FormData(); 
                        form_data.append("wtype","RequestTransactionUpdate");
                        form_data.append("TI",Cell[0].innerHTML);

                        $.ajax({
                            url:'../adminincludes/data.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (response) {        
                                let gcd = JSON.parse(response);
                                console.log(gcd);
                                // console.log(gcd[0][7]);

                                I('tdID').innerHTML = Cell[1].innerHTML;
                                I('trID').innerHTML = Cell[0].innerHTML;
                                I('tdRID').innerHTML = gcd[0][0];
                                I('tdRName').innerHTML = gcd[0][1] + " " + gcd[0][2] + " " + gcd[0][3];
                                I('tdRRID').innerHTML = gcd[0][4];
                                I('tdRRName').innerHTML = gcd[0][5];
                                I('tdPM').innerHTML = gcd[0][9];

                                I('tdToDelivery').innerHTML = gcd[0][15];

                                I('tdStartDate').innerHTML = gcd[0][13];
                                I('tdEndDate').innerHTML = gcd[0][14];

                                // I('tdDeposit').innerHTML = "₱" +gcd[0][11];

                                // I('trPrice').innerHTML = "₱" +gcd[0][10];

                                

                                I('GcashNumber').innerHTML = gcd[0][19];
                                I('GcashRefNo').innerHTML = gcd[0]['RefNumber'];
                                I('GcashAmount').innerHTML = "₱" + gcd[0][20];

                                I('GcashTD').src = gcd[0]['Img'];


                                // I('ApprovedTransactionTD').addEventListener('click', () => {
                                //     let form_data = new FormData();
                                //     form_data.append("wtype","ApprovedTransaction");
                                //     form_data.append("GLOBALRECEIPTNUMBER",I('tdID').innerHTML);
                                //     form_data.append("USERID",I('tdRID').innerHTML);
                                //     form_data.append("VERIFIEDBY",'ADMIN');
                                    
    
                                //     $.ajax({
                                //         url:'../adminincludes/data.php',
                                //         method:'POST',
                                //         data:form_data,
                                //         contentType:false,
                                //         cache:false,
                                //         processData:false,
                                    
                                //         success: function (response) {        
                                            
                                            
    
                                //         }
                                //     });
                                // });






                                let form_data3 = new FormData();
                                form_data3.append("wtype","TotalDepositPrice");
                                form_data3.append("TI",I('trID').innerHTML);

                                $.ajax({
                                    url:'../adminincludes/data.php',
                                    method:'POST',
                                    data:form_data3,
                                    contentType:false,
                                    cache:false,
                                    processData:false,
                                    success: function (response) {        
                                        
                                        let gcd = JSON.parse(response);
                                        console.log(gcd);
                                        I('tdDeposit').innerHTML = "₱" +gcd[0][2];

                                        I('trPrice').innerHTML = "₱" +gcd[0][1];
                                        // console.log(gcd[0][8]);
                                        // I('DiscountPricee').innerHTML = gcd[0]['Discount'] + '%';

                                        let deposit = parseFloat(gcd[0][2]);

                                        let price = parseFloat(gcd[0][1]);

                                        let Discount = parseFloat(gcd[0]['Discount']);

                                        I('tdTotal').innerHTML = "₱" + (price + deposit);

                                    }
                                });


                                let form_data2 = new FormData();
                                form_data2.append("wtype","ProductTransaction");
                                form_data2.append("TI",Cell[0].innerHTML);

                                $.ajax({
                                    url:'../adminincludes/data.php',
                                    method:'POST',
                                    data:form_data2,
                                    contentType:false,
                                    cache:false,
                                    processData:false,
                                    // beforeSend: function (){
                                    //     let loader = C('containerloader');
                                    //     loader[0].style.display = 'flex';
                                    //     blurActive();
                                    // },
                                    success: function (response) {    
                                       
                                        
                                        let gcddd = JSON.parse(response);
                                        console.log(gcddd);

                                        let tdProduct = I('tdProduct');

                                        for(let i = 0; i < gcddd.length; i++){


                                            var row = `
                                            <tr>
                                                <td > <img src="${gcddd[i]['Image']}"></td>
                                                <td data-label="Product"> <div class="TDlabel">${gcddd[i]['Name']}</div> </td>
                                                
                                                <td data-label="Price">₱${gcddd[i]['PriceRent']}</td>
                                                <td data-label="Price">${gcddd[i]['Qty']}</td>
                                            </tr>
                                            `;

                                            tdProduct.innerHTML += row;


                                        }

                                    }
                                });


                            }
                        });

                        


                        let TransactionExit = document.getElementById('TDexitbtn');
                        TransactionExit.addEventListener('click' , () => {
                            TransactionDetailsframe[0].style.display = 'none';
                            transactionTableFrame[0].style.display = 'block';
                            I('tdProduct').innerHTML = "";
                        })
                        
                    }
                }



            }
            // TransactionRequestTable.innerHTML = '';
        }
    });


}


I('ApprovedTransactionTD').addEventListener('click', () => {


    if(I('PermissionUpdate').innerHTML == 3){
        Swal.fire({
            title: "Prohibited!",
            text: "Call the SuperAdmin to change your Priveledge!",
            icon: "warning"
        });
    }
    else{
        Swal.fire({
            title: 'Are you sure you are going to approve this Transaction?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, approve it!'
          }).then((result) => {
            if (result.isConfirmed) {
                let form_data = new FormData();
                form_data.append("GLOBALRECEIPTNUMBER",I('tdID').innerHTML);
                form_data.append("USERID",I('AdminFullName').innerHTML);
                form_data.append("wtype","ApprovedTransaction");
                
             
                // form_data.append("ADMINID", I('Admin_ID').innerHTML);
                // form_data.append("RID", I('PayWalletApprovalID').innerHTML);
                
                $.ajax({
                    url:'../adminincludes/data.php',
                    method:'POST',
                    data:form_data,
                    contentType:false,
                    cache:false,
                    processData:false,
                    beforeSend: function(){
                        C('containerloader')[0].style.display = 'block';
                    },
                    success: function (response) {       
                        console.log(response); 

                       


                        C('containerloader')[0].style.display = 'none';
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'You Approved a transaction!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // notificationInsert2(I('tdRID').innerHTML,`Good News! The Transaction has been Approved by Admin! Transaction No: ${I('tdID').innerHTML}.`, 
                        // "myaccount.php#dashboard","verified", "1","");
            
                        // notificationInsert3(I('tdRRID').innerHTML,`Good News! The Transaction has been Approved by Admin! Transaction No: ${I('tdID').innerHTML}.`, 
                        // "myaccount.php#dashboard","verified", "1","");
            
                        C('containerTD')[0].style.display = 'none';
            
                        
                        let transactionTableFrame = document.getElementsByClassName('Transactiontable');             
                        transactionTableFrame[0].style.display = 'block';
                        Swal.fire(
                            'Approved!',
                            'The transaction has been approved.',
                            'success'
                          )

                          I('TransactionApprovalTable').innerHTML = '';
                          LoadRequestTransaction(1);
                    }
                });
                
        
              
            }
        })  
    }
    
});


I('CancelledTransactionTD').addEventListener('click', () => {

    if(I('PermissionUpdate').innerHTML == 3){
        Swal.fire({
            title: "Prohibited!",
            text: "Call the SuperAdmin to change your Priveledge!",
            icon: "warning"
        });
    }
    else{
        Swal.fire({
            title: 'Are you sure you are going to declined this Transaction?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, decline it!'
          }).then((result) => {
            if (result.isConfirmed) {
                let form_data = new FormData();
                form_data.append("wtype","CancelledTransaction");
                form_data.append("AB",I('AdminFullName').innerHTML);
                form_data.append("RI",I('tdID').innerHTML);
                form_data.append("GLOBALRECEIPTNUMBER",I('trID').innerHTML);
                form_data.append("USERID",I('tdRID').innerHTML);
                
    
                $.ajax({
                    url:'../adminincludes/data.php',
                    method:'POST',
                    data:form_data,
                    contentType:false,
                    cache:false,
                    processData:false,
                    beforeSend: function(){
                        C('containerloader')[0].style.display = 'block';
                    },
                    success: function (response) {     
                        console.log(response);
                        // I('TransactionApprovalTable').innerHTML = '';
                        // LoadRequestTransaction(1);


                        
                        
                        C('containerloader')[0].style.display = 'none';
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'You declinedf a transaction!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // notificationInsert2(I('tdRID').innerHTML,`Bad News! The Transaction has been Cancelled by Admin! Transaction No: ${I('tdID').innerHTML}.`, 
                        // "myaccount.php#dashboard","verified", "1","");
            
                        // notificationInsert3(I('tdRRID').innerHTML,`Bad News! The Transaction has been Cancelled by Admin! Transaction No: ${I('tdID').innerHTML}.`, 
                        // "myaccount.php#dashboard","verified", "1","");
            
                        C('containerTD')[0].style.display = 'none';
            
                        
                        let transactionTableFrame = document.getElementsByClassName('Transactiontable');             
                        transactionTableFrame[0].style.display = 'block';
                        Swal.fire(
                            'Cancelled!',
                            'The transaction has been cancelled.',
                            'cancelled'
                          )

                        //   I('TransactionApprovalTable').innerHTML = '';
                        // LoadRequestTransaction(1);
                    }
                });
        
              
            }
        }) 
    }
    
});


TransactionHistoryLoad();

function TransactionHistoryLoad(){
    let form_data = new FormData(); 
    form_data.append("wtype","TransactionHistory");
            
    $.ajax({
        url:'../adminincludes/InformationLoad.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (TransactionHistory) {
            let gcd = JSON.parse(TransactionHistory);

            console.log(gcd);

            let TransactionHistoryTable = I('TransactionHistoryTable');

            for(let i = 0; i < gcd.length; i++){
                TransactionHistoryTable.innerHTML += `
                <tr style="background: white; border-bottom: 1px solid;">
                    <td> ${gcd[i]['ReceiptNumber']} </td>
                    <td> ${gcd[i]['userID']} </td>
                    <td>  ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                    <td> ${gcd[i]['RenterID']}</td>
                    <td> ${gcd[i]['StoreName']} </td>
                    <td> ${gcd[i]['ProductID']}</td>
                    <td> ${gcd[i]['Name']}</td>
                    <td> ${gcd[i]['PaymentMethod']}</td>                            
                </tr>  
                `;
            }
        }
    })
}

    

// LoadCustomerData();

LoadCustomerDataStatus();

function LoadCustomerDataStatus(){
    let form_data = new FormData(); 
    form_data.append("wtype","GetCustomerDataStatus");
            
    $.ajax({
        url:'../adminincludes/data.php',
        method:'POST',
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        success: function (GetCustomerDataStatus) {
            let CustomerTableFetch = I('CustomerTableFetchStatus');
           
            let gcd = JSON.parse(GetCustomerDataStatus), rIndex;
            // console.log(gcd);
            // console.log(GetCustomerData)
            let userIDandFaceVerificationstatus;
            for(let i = 0; i < gcd.length; i++){

             
                if(gcd[i]['userIDandFaceVerification'] == 1){
                    userIDandFaceVerificationstatus = 'Activated';
                    // ColorStatus[i].classList.add("cancelled");
                }
                else if(gcd[i]['userIDandFaceVerification'] == 0){
                    userIDandFaceVerificationstatus = 'Deactivated';
                    // ColorStatus[i].classList.toggle("cancelled");
                    // ColorStatus[i].style.cssText = "background-color: red;";
                }


                console.log(gcd[i]['userID']);
                CustomerTableFetch.innerHTML += `
                <tr>
                    <td> ${gcd[i]['userID']} </td>
                    <td class="hoverblue" style="cursor: pointer; text-decoration: underline;"> ${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                    
                    <td> <p class="status">${userIDandFaceVerificationstatus}</p> </td>
                    
                    <td>
                        <div class="Customer-Control">
                            <div class="CEbtn">
                                <span class="Customer-Enable-Btn material-symbols-outlined">how_to_reg</span>
                            </div>
                            <div class="CDbtn">
                                <span class="Customer-Disable-Btn material-symbols-outlined">frame_person_off</span>
                            </div>
                        
                            
                        </div>                               
                    </td>   

                      
                    
                    
                </tr>  
                `;
                
                // C('CDbtn')[0].addEventListener('click', function(){
                //     CustomerDisablePopup[0].style.display = 'block';
                //     blurActive1();
                // });


                
                // if(gcd[i]['userStatus'] == 0){
                //     C('Customer-Disable-Btn')[i].style.display = 'inline-block';
                //     C('Customer-Enable-Btn')[i].style.display = 'none';
                // }
                // else if(gcd[i]['userStatus'] == 1){
                //     C('Customer-Disable-Btn')[i].style.display = 'none';
                //     C('Customer-Enable-Btn')[i].style.display = 'inline-block';
                // }

                let CustomerStatusApproval = I('CustomerTableFetchStatus'), yyIndex;

                for(var x = 0; x < CustomerStatusApproval.rows.length; x++){
                    let Cell = I('CustomerTableFetchStatus').rows[x].cells;
                    CustomerStatusApproval.rows[x].cells[0].onclick = function()
                    {
                        C('containerP')[0].style.display = 'none';
                        C('PersonalInfo')[0].style.display = 'block';
                        C('containerPP')[0].style.display = 'none';
                        // C('RentedProducts')[0].style.display = 'none';
                        C('ResetPassword')[0].style.display = 'none';
                        let CustomerDashBoard = C('CustomerDashBoard');
                        let UserPersonalInfoframe = C('UserInformation');
                        UserPersonalInfoframe[0].style.display = 'block';
                        CustomerDashBoard[0].style.display = 'none';
                        
                        let form_data = new FormData(); 
                        form_data.append("wtype","LoadCustomerInfo");
                        form_data.append("USERID",Cell[0].innerHTML);
                        

                        $.ajax({
                            url:'../adminincludes/InformationLoad.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (userIDImage) {
                                
                                let status;
                                let gcd = JSON.parse(userIDImage);

                                let text = gcd[0]['userProfileFace'];
                                let text2;
                                if(text.substring(0,3) == 'ass'){
                                    text2 = '../' + gcd[0]['userProfileFace'];
                                }else{
                                    text2 = gcd[0]['userProfileFace'];
                                }
                                I('UIfaceimage').src = text2;

                                I('UIfullname').innerHTML = gcd[0]['FirstName'] + " " + gcd[0]['MiddleName'] + " " + gcd[0]['LastName'];

                                let form_data = new FormData(); 
                                form_data.append("wtype","LoadRenterID");
                                form_data.append("USERID",Cell[0].innerHTML);
                                
        
                                $.ajax({
                                    url:'../adminincludes/InformationLoad.php',
                                    method:'POST',
                                    data:form_data,
                                    contentType:false,
                                    cache:false,
                                    processData:false,
                                    success: function (userIDImage) {
                                        let gcd = JSON.parse(userIDImage);
                                        I('UserInformationID').innerHTML = '';
                                        for(let i = 0; i < gcd.length; i++){
                                            I('UserInformationID').innerHTML = gcd[i]['renterID'];
                                        }
                                        
                                    }
                                })

                                
                                I('UIpaywallet').innerHTML =  "₱" +gcd[0]['Coins'];

                                // I('UIstatus').innerHTML = gcd[0][15];

                                if(gcd[0][14] == 2){
                                    status = 'Reviewing';
                                }
                                else if(gcd[0][14] == 1){
                                    status = 'Verified';
                                }
                                else{
                                    status = 'Unverified';
                                }

                                I('UIstatus').innerHTML = status;

                                I('UIusertype').innerHTML = gcd[0]['userType'];
                                I('UInumber').innerHTML = gcd[0]['userID'];
                                I('UIfirstname').innerHTML = gcd[0]['FirstName'];
                                I('UIlastname').innerHTML = gcd[0]['LastName'];
                                I('UImiddlename').innerHTML = gcd[0]['MiddleName'];
                                I('UIsuffix').innerHTML = gcd[0]['SuffixName'];
                                I('UIbirthdate').innerHTML = gcd[0]['Birthdate'];
                                I('UIGender').innerHTML = gcd[0]['Gender'];
                                I('UIemail').innerHTML = gcd[0]['Email'];
                                I('UIphone').innerHTML = gcd[0]['ContactNumber'];
                                I('UIaddress').innerHTML = gcd[0]['Address'] + " " + gcd[0]['Barangay'] + " " + gcd[0]['City'] + " " + gcd[0]['Region'] + " " + gcd[0]['Province'];
                                I('UIphone2').innerHTML = gcd[0]['CN'];
                                I('UIusername').innerHTML = gcd[0]['userName'];

                                I('UIrenteeImage').src = gcd[0]['userIDImage'];
                                // I('UIrenteeImage2').src = '../' + gcd[0][23];
                                I('CustomerTypeImg').innerHTML = gcd[0]['userIDType'];

                                LoadRentedProducts();
                            }
                        })

                    }
                }

                for(var x = 0; x < CustomerStatusApproval.rows.length; x++){
                    let Cell = I('CustomerTableFetchStatus').rows[x].cells;
                    CustomerStatusApproval.rows[x].cells[1].onclick = function()
                    {
                        C('containerP')[0].style.display = 'none';
                        C('PersonalInfo')[0].style.display = 'block';
                        C('containerPP')[0].style.display = 'none';
                        // C('RentedProducts')[0].style.display = 'none';
                        C('ResetPassword')[0].style.display = 'none';
                        let CustomerDashBoard = C('CustomerDashBoard');
                        let UserPersonalInfoframe = C('UserInformation');
                        UserPersonalInfoframe[0].style.display = 'block';
                        CustomerDashBoard[0].style.display = 'none';
                        
                        let form_data = new FormData(); 
                        form_data.append("wtype","LoadCustomerInfo");
                        form_data.append("USERID",Cell[0].innerHTML);
                        

                        $.ajax({
                            url:'../adminincludes/InformationLoad.php',
                            method:'POST',
                            data:form_data,
                            contentType:false,
                            cache:false,
                            processData:false,
                            success: function (userIDImage) {
                                
                                let status;
                                let gcd = JSON.parse(userIDImage);

                                let text = gcd[0]['userProfileFace'];
                                let text2;
                                if(text.substring(0,3) == 'ass'){
                                    text2 = '../' + gcd[0]['userProfileFace'];
                                }else{
                                    text2 = gcd[0]['userProfileFace'];
                                }
                                I('UIfaceimage').src = text2;

                                I('UIfullname').innerHTML = gcd[0]['FirstName'] + " " + gcd[0]['MiddleName'] + " " + gcd[0]['LastName'];
                                let form_data = new FormData(); 
                                form_data.append("wtype","LoadRenterID");
                                form_data.append("USERID",Cell[0].innerHTML);
                                
        
                                $.ajax({
                                    url:'../adminincludes/InformationLoad.php',
                                    method:'POST',
                                    data:form_data,
                                    contentType:false,
                                    cache:false,
                                    processData:false,
                                    success: function (userIDImage) {
                                        let gcd = JSON.parse(userIDImage);
                                        I('UserInformationID').innerHTML = '';
                                        for(let i = 0; i < gcd.length; i++){
                                            I('UserInformationID').innerHTML = gcd[i]['renterID'];
                                        }
                                    }
                                })
                                I('UIpaywallet').innerHTML =  "₱" +gcd[0]['Coins'];

                                // I('UIstatus').innerHTML = gcd[0][15];

                                if(gcd[0][14] == 2){
                                    status = 'Reviewing';
                                }
                                else if(gcd[0][14] == 1){
                                    status = 'Verified';
                                }
                                else{
                                    status = 'Unverified';
                                }

                                I('UIstatus').innerHTML = status;

                                I('UIusertype').innerHTML = gcd[0]['userType'];
                                I('UInumber').innerHTML = gcd[0]['userID'];
                                I('UIfirstname').innerHTML = gcd[0]['FirstName'];
                                I('UIlastname').innerHTML = gcd[0]['LastName'];
                                I('UImiddlename').innerHTML = gcd[0]['MiddleName'];
                                I('UIsuffix').innerHTML = gcd[0]['SuffixName'];
                                I('UIbirthdate').innerHTML = gcd[0]['Birthdate'];
                                I('UIGender').innerHTML = gcd[0]['Gender'];
                                I('UIemail').innerHTML = gcd[0]['Email'];
                                I('UIphone').innerHTML = gcd[0]['ContactNumber'];
                                I('UIaddress').innerHTML = gcd[0]['Address'] + " " + gcd[0]['Barangay'] + " " + gcd[0]['City'] + " " + gcd[0]['Region'] + " " + gcd[0]['Province'];
                                I('UIphone2').innerHTML = gcd[0]['CN'];
                                I('UIusername').innerHTML = gcd[0]['userName'];

                                I('UIrenteeImage').src = gcd[0]['userIDImage'];
                                // I('UIrenteeImage2').src = '../' + gcd[0][23];
                                I('CustomerTypeImg').innerHTML = gcd[0]['userIDType'];

                                LoadRentedProducts();
                            }
                        })

                    }
                }

                for(var x = 0; x < CustomerStatusApproval.rows.length; x++){
                    let Cell = I('CustomerTableFetchStatus').rows[x].cells;
                    CustomerStatusApproval.rows[x].cells[3].onclick = function()
                    {
                        
                        // console.log(gcd[i]['userStatus']);
                        console.log(Cell[2].innerText);

                        let USERID = I('Customer-Popup-Image-No2').innerHTML = Cell[0].innerHTML;
                        let USERID1 = I('Customer-Popup-Image-No3').innerHTML = Cell[0].innerHTML;

                        

                        if(Cell[2].innerText == 'Deactivated'){
                            CustomerEnablePopup[0].style.display = 'block';
                            CustomerDisablePopup[0].style.display = 'none';


                            console.log("Soilo");
                            blurActive1();
                            // yIndex = this.rowsIndex;
                            

                            // console.log(this.cells[0].innerHTML);
                            // I('EnableCustumer-Yes').addEventListener('click', function(){
                            //     console.log(USERID);
                            //     let form_data = new FormData(); 
                            //     // yIndex = this.rowsIndex;
                            //     form_data.append("wtype","forupdatecustomerstatusyesorno");
                            //     form_data.append("USERID",USERID1);
                            //     form_data.append("STATUSNUMBER", 1);
                            //     // console.log(this.cells[0].innerHTML);
                            //     $.ajax({
                            //         url:'../adminincludes/signup-module1.php',



                            //         method:'POST',
                            //         data:form_data,
                            //         contentType:false,
                            //         cache:false,
                            //         processData:false,
                            //         success: function (response) {
                                    
                            //         console.log("Soilo");
                            //         }
                            //     });
                            // });    
                        }

                        if(Cell[2].innerText == 'Activated'){
                            CustomerEnablePopup[0].style.display = 'none';
                            CustomerDisablePopup[0].style.display = 'block';
                            blurActive1();
                            
    
                            // console.log(this.cells[0].innerHTML);
                            // I('DisableCustumer-Yes').addEventListener('click', function(){
                            //     console.log(I('Customer-Popup-Image-No2').innerHTML);
                                
                            //     yIndex = this.rowsIndex;
                            //     let form_data = new FormData(); 
                            //     form_data.append("wtype","forupdatecustomerstatusyesorno");
                            //     form_data.append("USERID",I('Customer-Popup-Image-No2').innerHTML);
                            //     form_data.append("STATUSNUMBER", 0);
                            //     // console.log(this.cells[0].innerHTML + "Soilo");
                            //     $.ajax({
                            //         url:'../adminincludes/signup-module1.php',
                            //         method:'POST',
                            //         data:form_data,
                            //         contentType:false,
                            //         cache:false,
                            //         processData:false,
                            //         success: function (response) {
                                    
                            //         console.log("Soilo");
                            //         }
                            //     });
                            // });
                        }
                        

                        
    
                        
                    }
                }
                if(gcd[i]['userIDandFaceVerification'] == 0){
                    C('Customer-Disable-Btn')[i].style.display = 'none';
                    C('Customer-Enable-Btn')[i].style.display = 'inline-block';
                }
                else if(gcd[i]['userIDandFaceVerification'] == 1){
                    C('Customer-Disable-Btn')[i].style.display = 'inline-block';
                    C('Customer-Enable-Btn')[i].style.display = 'none';
                }

                // I('EnableCustumer-Yes').addEventListener('click', function(){
                //     let form_data = new FormData(); 
                //         form_data.append("wtype","forupdatecustomerstatusyesorno");
                //         form_data.append("USERID",gcd[i]['userID']);
                //         form_data.append("STATUSNUMBER", 1);

                //         $.ajax({
                //             url:'includes/signup-module1.php',
                //             method:'POST',
                //             data:form_data,
                //             contentType:false,
                //             cache:false,
                //             processData:false,
                //             success: function (response) {
                            
                //             console.log("Soilo");
                //             }
                //         });
                // });
                
                
            }
        }
    });


}

I('EnableCustumer-Yes').addEventListener('click', function(){

    if(I('PermissionUpdate').innerHTML == 3){
        Swal.fire({
            title: "Prohibited!",
            text: "Call the SuperAdmin to change your Priveledge!",
            icon: "warning"
          });
          C('Customer-Disable-Popup')[0].style.display = 'none';
          blurRemove1();
    }
    else{
        console.log(USERID);
        let form_data = new FormData(); 
        // yIndex = this.rowsIndex;
        form_data.append("wtype","forupdatecustomerstatusyesorno");
        form_data.append("USERID",I('Customer-Popup-Image-No3').innerHTML);
        form_data.append("STATUSNUMBER", 1);
        // console.log(this.cells[0].innerHTML);
        $.ajax({
            url:'../adminincludes/signup-module1.php',



            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            beforeSend: function(){
                C('containerloader')[0].style.display = 'block';
            },
            success: function (response) {
                C('containerloader')[0].style.display = 'none';
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'You Enabled a Customer!',
                    showConfirmButton: false,
                    timer: 1500
                })
                notificationInsert2(I('Customer-Popup-Image-No3').innerHTML,`Good news! You are Verified Again by admin!.`, 
                "myaccount.php#dashboard","verified", "1","");
                C('Customer-Enable-Popup')[0].style.display = 'none';
                blurRemove1();
            }
        });
    }
    
});    

I('DisableCustumer-Yes').addEventListener('click', function(){
    console.log(I('Customer-Popup-Image-No2').innerHTML);
    
    if(I('PermissionUpdate').innerHTML == 3){
        Swal.fire({
            title: "Prohibited!",
            text: "Call the SuperAdmin to change your Priveledge!",
            icon: "warning"
          });
          C('Customer-Disable-Popup')[0].style.display = 'none';
          blurRemove1();
    }
    else{
        yIndex = this.rowsIndex;
        let form_data = new FormData(); 
        form_data.append("wtype","forupdatecustomerstatusyesorno");
        form_data.append("USERID",I('Customer-Popup-Image-No2').innerHTML);
        form_data.append("STATUSNUMBER", 0);
        // console.log(this.cells[0].innerHTML + "Soilo");
        $.ajax({
            url:'../adminincludes/signup-module1.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            beforeSend: function(){
                C('containerloader')[0].style.display = 'block';
            },
            success: function (response) {
                C('containerloader')[0].style.display = 'none';
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'You Disabled a Customer!',
                    showConfirmButton: false,
                    timer: 1500
                })
                notificationInsert2(I('Customer-Popup-Image-No2').innerHTML,`Bad news! You are being unverified by the admin!.`, 
                    "myaccount.php#dashboard","verified", "1","");
                C('Customer-Disable-Popup')[0].style.display = 'none';
                blurRemove1();
            }
        });
    }
    
});

I('DisableCustumer-No').addEventListener('click', function(){
    C('Customer-Disable-Popup')[0].style.display = 'none';
    blurRemove1();
})


I('EnableCustumer-No').addEventListener('click', function(){
    C('Customer-Enable-Popup')[0].style.display = 'none';
    blurRemove1();
})


function notificationInsert2(ID,DESCRIPTION, LINK ,LOGO, CONFIRMATION, SECRETKEY) {
	let form_data = new FormData();
	form_data.append("USERID",ID);
	form_data.append("DESCRIPTION",DESCRIPTION);
	form_data.append("LOGO",LOGO);
	form_data.append("LINK",LINK);
	form_data.append("CONFIRMATION",CONFIRMATION);
	form_data.append("SECRETKEY",SECRETKEY);
	form_data.append("wtype","addnotification");
	$.ajax({
		url:'../adminincludes/data.php',
		method:'POST',
		data:form_data,
		contentType:false,
		cache:false,
		processData:false,
        success: function(response){
            console.log(response);
        }
	});
}

function notificationInsert3(ID,DESCRIPTION, LINK ,LOGO, CONFIRMATION, SECRETKEY) {
	let form_data = new FormData();
	form_data.append("USERID",ID);
	form_data.append("DESCRIPTION",DESCRIPTION);
	form_data.append("LOGO",LOGO);
	form_data.append("LINK",LINK);
	form_data.append("CONFIRMATION",CONFIRMATION);
	form_data.append("SECRETKEY",SECRETKEY);
	form_data.append("wtype","addnotification2");
	$.ajax({
		url:'../adminincludes/data.php',
		method:'POST',
		data:form_data,
		contentType:false,
		cache:false,
		processData:false,
        success: function(response){
            console.log(response);
        }
	});
}

loadtotalWallet();
function loadtotalWallet(){
    let form_data = new FormData();
	
	form_data.append("wtype","loadWalletUsed");
	$.ajax({
		url:'../adminincludes/data.php',
		method:'POST',
		data:form_data,
		contentType:false,
		cache:false,
		processData:false,
        success: function(response){
            let gcd = JSON.parse(response);
            I('totalWalletUsed').innerHTML = gcd[0][0];
        }
	});
}
// RenteeTransactionLog();
// RenteeRequestLog();
function RenteeRequestLog(){

    if(I('RenteeRLog1').value == '' || I('RenteeRLog2').value == ''){
        Swal.fire({
            title: "Date?",
            text: "Please Choose a date!",
            icon: "info"
          });
    }
    else{
        let form_data = new FormData();
        form_data.append("FD",I('RenteeRLog1').value);
        form_data.append("SD",I('RenteeRLog2').value);
        form_data.append("wtype","RenteeRequestLog");
        $.ajax({
            url:'../adminincludes/InformationLoad.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            success: function(response){
                let gcd = JSON.parse(response);
                console.log(gcd);
                let RenteeTransactionLog = I('RenteeRequestLog');
                RenteeTransactionLog.innerHTML = '';
                for(let i = 0; i < gcd.length; i++){
                    RenteeTransactionLog.innerHTML += `
                    <tr style="background: white; border-bottom: 1px solid;">
                        <td>${gcd[i]['RequestID']}</td>
                        <td>${gcd[i]['userID']}</td>
                        <td>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                        <td>${gcd[i]['Date']}</td>
                        <td>${gcd[i]['ApproveStatus']}</td>
                        <td>${gcd[i]['ApprovedDate']}</td>
                        <td>${gcd[i]['ApprovedBy']}</td>
                    </tr>
                    `;
                }
                // I('totalWalletUsed').innerHTML = gcd[0][0];
            }
        });
    }
    
}

// RentalRequestLog();
function RentalRequestLog(){

    if(I('RenterRLog1').value == '' || I('RenterRLog2').value == ''){
        Swal.fire({
            title: "Date?",
            text: "Please Choose a date!",
            icon: "info"
          });
    }
    else{
        let form_data = new FormData();
        form_data.append("FD",I('RenterRLog1').value);
        form_data.append("SD",I('RenterRLog2').value);
        form_data.append("wtype","RenterRequestLog");
        $.ajax({
            url:'../adminincludes/InformationLoad.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            success: function(response){
                let gcd = JSON.parse(response);
                console.log(gcd);
                let RenteeTransactionLog = I('RenterRequestLog');
                RenteeTransactionLog.innerHTML = '';
                for(let i = 0; i < gcd.length; i++){
                    RenteeTransactionLog.innerHTML += `
                    <tr style="background: white; border-bottom: 1px solid;">
                        <td>${gcd[i]['RequestID']}</td>
                        <td>${gcd[i]['renterID']}</td>
                        <td>${gcd[i]['StoreName']}</td>
                        <td>${gcd[i]['Date']}</td>
                        <td>${gcd[i]['ApproveStatus']}</td>
                        <td>${gcd[i]['ApprovedDate']}</td>
                        <td>${gcd[i]['ApprovedBy']}</td>
                    </tr>
                    `;
                }
                // I('totalWalletUsed').innerHTML = gcd[0][0];
            }
        });
    }
    
}


function RenteeTransactionLog(){

    if(I('RenteeTLog1').value == '' || I('RenteeTLog2').value == ''){
        Swal.fire({
            title: "Date?",
            text: "Please Choose a date!",
            icon: "info"
          });
    }
    else{
        let form_data = new FormData();
        form_data.append("FD",I('RenteeTLog1').value);
        form_data.append("SD",I('RenteeTLog2').value);
        form_data.append("wtype","RenteeTransactionLog");
        $.ajax({
            url:'../adminincludes/data.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            success: function(response){
                let gcd = JSON.parse(response);
                console.log(gcd);
                let RenteeTransactionLog = I('RenteeTransactionLog');
                RenteeTransactionLog.innerHTML = '';
                for(let i = 0; i < gcd.length; i++){
                    RenteeTransactionLog.innerHTML += `
                    <tr style="background: white; border-bottom: 1px solid;">
                        <td>${gcd[i]['TransactionID']}</td>
                        <td>${gcd[i]['userID']}</td>
                        <td>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                        <td>${gcd[i]['Title']}</td>
                        <td>${gcd[i]['Amount']}</td>
                        <td>${gcd[i]['Description']}</td>
                        <td>${gcd[i]['LogCreated']}</td>
                    </tr>
                    `;
                }
                // I('totalWalletUsed').innerHTML = gcd[0][0];
            }
        });
    }
    
}

function RenterTransactionLog(){

    if(I('RenterTLog1').value == '' || I('RenterTLog2').value == ''){
        Swal.fire({
            title: "Date?",
            text: "Please Choose a date!",
            icon: "info"
          });
    }
    else{
        let form_data = new FormData();
        form_data.append("FD",I('RenterTLog1').value);
        form_data.append("SD",I('RenterTLog2').value);
        form_data.append("wtype","RenterTransactionLog");
        $.ajax({
            url:'../adminincludes/data.php',
            method:'POST',
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            success: function(response){
                let gcd = JSON.parse(response);
                console.log(gcd);
                let RenteeTransactionLog = I('RenterTransactionLog');
                RenteeTransactionLog.innerHTML = '';
                for(let i = 0; i < gcd.length; i++){
                    RenteeTransactionLog.innerHTML += `
                    <tr style="background: white; border-bottom: 1px solid;">
                        <td>${gcd[i]['TransactionID']}</td>
                        <td>${gcd[i]['RenterID']}</td>
                        <td>${gcd[i]['StoreName']}</td>
                        <td>${gcd[i]['Title']}</td>
                        <td>${gcd[i]['Amount']}</td>
                        <td>${gcd[i]['Description']}</td>
                        <td>${gcd[i]['LogCreated']}</td>
                    </tr>
                    `;
                }
                // I('totalWalletUsed').innerHTML = gcd[0][0];
            }
        });
    }
    
}


loadtotalReports();
function loadtotalReports(){
    let form_data = new FormData();
	
	form_data.append("wtype","loadReports");
	$.ajax({
		url:'../adminincludes/data.php',
		method:'POST',
		data:form_data,
		contentType:false,
		cache:false,
		processData:false,
        success: function(response){
            let gcd = JSON.parse(response);
            I('ReportsNumber').innerHTML = gcd[0][0];
        }
	});
}

loadtotalTransaction();
function loadtotalTransaction(){
    let form_data = new FormData();
	
	form_data.append("wtype","loadTransactionUsed");
	$.ajax({
		url:'../adminincludes/data.php',
		method:'POST',
		data:form_data,
		contentType:false,
		cache:false,
		processData:false,
        success: function(response){
            let gcd = JSON.parse(response);
            I('totalTransactionUsed').innerHTML = gcd[0][0];
        }
	});
}


function UpdateCustomerStatusYes(USERID){
    let form_data = new FormData(); 
            form_data.append("wtype","forupdatecustomerstatusyesorno");
            form_data.append("USERID",USERID);
            form_data.append("STATUSNUMBER", 1);

            $.ajax({
                url:'../adminincludes/signup-module1.php',
                method:'POST',
                data:form_data,
                contentType:false,
                cache:false,
                processData:false,
                success: function (response) {
                
                console.log("Soilo");
                }
            });
}


// Logs na dito

I('RenterLogShow').addEventListener('click', ()=> {

    I('RenterLog').innerHTML = '';
    console.log( I('RenterLog1').value);

    if(I('RenterLog1').value == '' || I('RenterLog2').value == ''){
        Swal.fire({
            title: "Date?",
            text: "Please Choose a date!",
            icon: "info"
          });
    }
    else{
        Renterlog(I('RenterLog1').value, I('RenterLog2').value);
    }
    
   
})

// Renterlog();
function Renterlog(FDATE, SDATE){
    let form_data = new FormData();
	form_data.append("FDATE",FDATE);
    form_data.append("SDATE",SDATE);
	form_data.append("wtype","RenterLog");
	$.ajax({
		url:'../adminincludes/informationLoad.php',
		method:'POST',
		data:form_data,
		contentType:false,
		cache:false,
		processData:false,
        success: function(response){
            let gcd = JSON.parse(response);
            let RenterLog = I('RenterLog');

            for(let i = 0; i < gcd.length; i++){
                RenterLog.innerHTML  += `
                <tr style="background: white; border-bottom: 1px solid;">
                    <td>${gcd[i]['userID']}</td>
                    <td>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                    <td>${gcd[i]['RenterID']}</td>
                    <td>${gcd[i]['RenterDateLogCreated']}</td>
                    <td>${gcd[i]['RenterLog']}</td>
                </tr>
                `;
            }
            
        }
	});
}

I('RentalLogShow').addEventListener('click', ()=> {

    I('RentalLogs').innerHTML = '';
    console.log( I('RentalLog1').value);

    if(I('RentalLog1').value == '' || I('RentalLog2').value == ''){
        Swal.fire({
            title: "Date?",
            text: "Please Choose a date!",
            icon: "info"
          });
    }
    else{
        Rentallog(I('RentalLog1').value, I('RentalLog2').value);
    }
    
   
})

function Rentallog(FDATE, SDATE){
    let form_data = new FormData();
	form_data.append("FDATE",FDATE);
    form_data.append("SDATE",SDATE);
	form_data.append("wtype","RentalLog");
	$.ajax({
		url:'../adminincludes/informationLoad.php',
		method:'POST',
		data:form_data,
		contentType:false,
		cache:false,
		processData:false,
        success: function(response){
            let gcd = JSON.parse(response);
            let RenterLog = I('RentalLogs');

            for(let i = 0; i < gcd.length; i++){
                RenterLog.innerHTML  += `
                <tr style="background: white; border-bottom: 1px solid;">
                    <td>${gcd[i]['userID']}</td>
                    <td>${gcd[i]['FirstName']} ${gcd[i]['MiddleName']} ${gcd[i]['LastName']}</td>
                    <td>${gcd[i]['userDateLogCreated']}</td>
                    <td>${gcd[i]['userLog']}</td>
                </tr>
                `;
            }
            
        }
	});
}


$("#Fpdf").on("click",function(){
    var doc = new jsPDF('landscape');
    
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector  
        '#bypassme': function(element, renderer) {
            // true = "handled elsewhere, bypass text extraction"  
            return true
        }
    };
    margins = {
        top: 150,
        bottom: 60,
        left: 40,
        right: 40,
        width: 600,
        
    };
    var y = 30;
    


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(50);
    doc.setFontStyle('italic');
    doc.text(118, 25, "Arkiease");



    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 30, "................................................................................................................................................................................................................................................................................................................");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(118, 35, "32 – A. Malta St., Pinagbuklod Purok 1-A,");

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(133, 41, "New Lower Bicutan");

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(128, 47, "Taguig City, Metro Manila");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(122, 53, "Email: arkieasewebsite@gmail.com");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.setFontStyle('italic');
    doc.text(121, 65, "Wallet Logs View");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 71, "Date Printed: 2023-11-11");

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 76, "Printed by: soilobaisa");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(242, 71, "Time Printed: 12:02:00 AM");
    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(50);
    // doc.text(270, 70, "Arkiease");

    const pageCount = doc.internal.getNumberOfPages();
    console.log(pageCount)
    
    
    doc.autoTable({
        html: '#MAWallet',
        startY: 80,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 40,
            },
            1: {
                cellWidth: 40,
            },
            2: {
                cellWidth: 40,
            }
        },
        styles: {
            minCellHeight: 10
        }
    })

    // for(var i = 1; i <= pageCount; i++){
    //     doc.setPage(i);

    //     doc.setLineWidth(1);
    //     doc.setFontSize(8);
    //     doc.setFont("Calibri");
    //     doc.setFontType("bold");
    //     doc.setFontSize(10);
    //     doc.setFontStyle('italic');
    //     doc.text(262, 200,'Page ' + String(i) + ' of ' + String(pageCount), );
    // }


    // doc.text(242, y = y + 100, String(pageCount));
    doc.save('DepositLog.pdf');

    


});


$("#Fpdf2").on("click",function(){
    var doc = new jsPDF('landscape');
    
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector  
        '#bypassme': function(element, renderer) {
            // true = "handled elsewhere, bypass text extraction"  
            return true
        }
    };
    margins = {
        top: 150,
        bottom: 60,
        left: 40,
        right: 40,
        width: 600,
        
    };
    var y = 30;
    


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(50);
    doc.setFontStyle('italic');
    doc.text(118, 25, "Arkiease");



    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 30, "................................................................................................................................................................................................................................................................................................................");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(118, 35, "32 – A. Malta St., Pinagbuklod Purok 1-A,");

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(133, 41, "New Lower Bicutan");

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(128, 47, "Taguig City, Metro Manila");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(122, 53, "Email: arkieasewebsite@gmail.com");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.setFontStyle('italic');
    doc.text(115, 65, "Transaction Logs View");


    const d = new Date("July 21, 1983");
    let day = d.getDate();


    const T = new Date("01:15:00 AM");
    let time = T.getDate();

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 71, "Date Printed: " );

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 76, "Printed by: soilobaisa");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(242, 71, "Time Printed: " + "");
    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(50);
    // doc.text(270, 70, "Arkiease");

    const pageCount = doc.internal.getNumberOfPages();
    console.log(pageCount)
    
    
    doc.autoTable({
        html: '#MATransaction',
        startY: 80,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 40,
            },
            1: {
                cellWidth: 40,
            },
            2: {
                cellWidth: 40,
            }
        },
        styles: {
            minCellHeight: 10
        }
    })

    // for(var i = 1; i <= pageCount; i++){
    //     doc.setPage(i);

    //     doc.setLineWidth(1);
    //     doc.setFontSize(8);
    //     doc.setFont("Calibri");
    //     doc.setFontType("bold");
    //     doc.setFontSize(10);
    //     doc.setFontStyle('italic');
    //     doc.text(262, 200,'Page ' + String(i) + ' of ' + String(pageCount), );
    // }


    // doc.text(242, y = y + 100, String(pageCount));
    doc.save('TransactionLog.pdf');

    


});


$("#TransactionPrintBtn").on("click",function(){
    var doc = new jsPDF('landscape');
    
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector  
        '#bypassme': function(element, renderer) {
            // true = "handled elsewhere, bypass text extraction"  
            return true
        }
    };
    margins = {
        top: 150,
        bottom: 60,
        left: 40,
        right: 40,
        width: 600,
        
    };
    var y = 30;
    


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(50);
    doc.setFontStyle('italic');
    doc.text(118, 25, "Arkiease");



    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 30, "................................................................................................................................................................................................................................................................................................................");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(118, 35, "32 – A. Malta St., Pinagbuklod Purok 1-A,");

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(133, 41, "New Lower Bicutan");

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(128, 47, "Taguig City, Metro Manila");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(122, 53, "Email: arkieasewebsite@gmail.com");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.setFontStyle('italic');
    doc.text(105, 65, "Transaction History Logs View");


    const d = new Date("July 21, 1983");
    let day = d.getDate();


    const T = new Date("01:15:00 AM");
    let time = T.getDate();

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 71, "Date Printed: " );

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 76, "Printed by: soilobaisa");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(242, 71, "Time Printed: " + "");
    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(50);
    // doc.text(270, 70, "Arkiease");

    const pageCount = doc.internal.getNumberOfPages();
    console.log(pageCount)
    
    
    doc.autoTable({
        html: '.Transaction-Status',
        startY: 80,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 40,
            },
            1: {
                cellWidth: 40,
            },
            2: {
                cellWidth: 40,
            }
        },
        styles: {
            minCellHeight: 10
        }
    })

    // for(var i = 1; i <= pageCount; i++){
    //     doc.setPage(i);

    //     doc.setLineWidth(1);
    //     doc.setFontSize(8);
    //     doc.setFont("Calibri");
    //     doc.setFontType("bold");
    //     doc.setFontSize(10);
    //     doc.setFontStyle('italic');
    //     doc.text(262, 200,'Page ' + String(i) + ' of ' + String(pageCount), );
    // }


    // doc.text(242, y = y + 100, String(pageCount));
    doc.save('TransactionHistoryLog.pdf');

    


});

$("#PayWalletPDFBtn").on("click",function(){
    var doc = new jsPDF('landscape');
    
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector  
        '#bypassme': function(element, renderer) {
            // true = "handled elsewhere, bypass text extraction"  
            return true
        }
    };
    margins = {
        top: 150,
        bottom: 60,
        left: 40,
        right: 40,
        width: 600,
        
    };
    var y = 30;
    


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(50);
    doc.setFontStyle('italic');
    doc.text(118, 25, "Arkiease");



    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 30, "................................................................................................................................................................................................................................................................................................................");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(118, 35, "32 – A. Malta St., Pinagbuklod Purok 1-A,");

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(133, 41, "New Lower Bicutan");

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(128, 47, "Taguig City, Metro Manila");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(122, 53, "Email: arkieasewebsite@gmail.com");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.setFontStyle('italic');
    doc.text(105, 65, "PayWallet History Logs View");


    const d = new Date("July 21, 1983");
    let day = d.getDate();


    const T = new Date("01:15:00 AM");
    let time = T.getDate();

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 71, "Date Printed: " );

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 76, "Printed by: soilobaisa");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(242, 71, "Time Printed: " + "");
    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(50);
    // doc.text(270, 70, "Arkiease");

    const pageCount = doc.internal.getNumberOfPages();
    console.log(pageCount)
    
    
    doc.autoTable({
        html: '.PayWallet-Status',
        startY: 80,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 40,
            },
            1: {
                cellWidth: 40,
            },
            2: {
                cellWidth: 40,
            }
        },
        styles: {
            minCellHeight: 10
        }
    })

    // for(var i = 1; i <= pageCount; i++){
    //     doc.setPage(i);

    //     doc.setLineWidth(1);
    //     doc.setFontSize(8);
    //     doc.setFont("Calibri");
    //     doc.setFontType("bold");
    //     doc.setFontSize(10);
    //     doc.setFontStyle('italic');
    //     doc.text(262, 200,'Page ' + String(i) + ' of ' + String(pageCount), );
    // }


    // doc.text(242, y = y + 100, String(pageCount));
    doc.save('PayWalletHistoryLog.pdf');

    


});


$("#RenterLogPDF").on("click",function(){

    console.log(I('RenterLog1').value);
    console.log(I('RenterLog2').value);
    console.log(I('RenterLog').innerHTML);

    if (I('RenterLog1').value == '' && I('RenterLog2').value == '' || I('RenterLog1').value != '' && I('RenterLog2').value == '' || I('RenterLog1').value == '' && I('RenterLog2').value != ''){
        Swal.fire({
            title: "Choose Date!",
            text: "Please check if you already choose a date!",
            icon: "info"
          });
    }

    else if(I('RenterLog').innerHTML == ''){
        Swal.fire({
            title: "Filter!",
            text: "Please check the filter first!",
            icon: "info"
          });
    }
    else{
    var doc = new jsPDF('landscape');
    
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector  
        '#bypassme': function(element, renderer) {
            // true = "handled elsewhere, bypass text extraction"  
            return true
        }
    };
    margins = {
        top: 150,
        bottom: 60,
        left: 40,
        right: 40,
        width: 600,
        
    };
    var y = 30;
    


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(50);
    doc.setFontStyle('italic');
    doc.text(118, 25, "Arkiease");



    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 30, "................................................................................................................................................................................................................................................................................................................");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(118, 35, "32 – A. Malta St., Pinagbuklod Purok 1-A,");

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(133, 41, "New Lower Bicutan");

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(128, 47, "Taguig City, Metro Manila");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("harlow solid italic");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(122, 53, "Email: arkieasewebsite@gmail.com");


    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.setFontStyle('italic');
    doc.text(130, 65, "Renter Logs");


    const d = new Date("July 21, 1983");
    let day = d.getDate();


    const T = new Date("01:15:00 AM");
    let time = T.getDate();

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 71, "Date Printed: " + Date());

    doc.setLineWidth(1);
    doc.setFontSize(8);
    doc.setFont("Calibri");
    doc.setFontType("bold");
    doc.setFontSize(10);
    doc.setFontStyle('italic');
    doc.text(15, 76, "Printed by: " + I('AdminFullName').innerHTML);


    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("Calibri");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(242, 71, "Time Printed: " + "");
    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(50);
    // doc.text(270, 70, "Arkiease");

    const pageCount = doc.internal.getNumberOfPages();
    console.log(pageCount)
    
    
    doc.autoTable({
        html: '.RenterLog3',
        startY: 80,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 40,
            },
            1: {
                cellWidth: 40,
            },
            2: {
                cellWidth: 40,
            }
        },
        styles: {
            minCellHeight: 10
        }
    })

    // for(var i = 1; i <= pageCount; i++){
    //     doc.setPage(i);

    //     doc.setLineWidth(1);
    //     doc.setFontSize(8);
    //     doc.setFont("Calibri");
    //     doc.setFontType("bold");
    //     doc.setFontSize(10);
    //     doc.setFontStyle('italic');
    //     doc.text(262, 200,'Page ' + String(i) + ' of ' + String(pageCount), );
    // }


    // doc.text(242, y = y + 100, String(pageCount));
    doc.save('RenterLog.pdf');

    }
    // var doc = new jsPDF('landscape');
    
    // var htmlstring = '';
    // var tempVarToCheckPageHeight = 0;
    // var pageHeight = 0;
    // pageHeight = doc.internal.pageSize.height;
    // specialElementHandlers = {
    //     // element with id of "bypass" - jQuery style selector  
    //     '#bypassme': function(element, renderer) {
    //         // true = "handled elsewhere, bypass text extraction"  
    //         return true
    //     }
    // };
    // margins = {
    //     top: 150,
    //     bottom: 60,
    //     left: 40,
    //     right: 40,
    //     width: 600,
        
    // };
    // var y = 30;
    


    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(50);
    // doc.setFontStyle('italic');
    // doc.text(118, 25, "Arkiease");



    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(15, 30, "................................................................................................................................................................................................................................................................................................................");


    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(118, 35, "32 – A. Malta St., Pinagbuklod Purok 1-A,");

    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(133, 41, "New Lower Bicutan");

    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(128, 47, "Taguig City, Metro Manila");


    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(122, 53, "Email: arkieasewebsite@gmail.com");


    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("Calibri");
    // doc.setFontType("bold");
    // doc.setFontSize(20);
    // doc.setFontStyle('italic');
    // doc.text(130, 65, "Renter Logs");


    // const d = new Date("July 21, 1983");
    // let day = d.getDate();


    // const T = new Date("01:15:00 AM");
    // let time = T.getDate();

    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("Calibri");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(15, 71, "Date Printed: " );

    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("Calibri");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(15, 76, "Printed by: soilobaisa");


    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("Calibri");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(242, 71, "Time Printed: " + "");
    // // doc.setLineWidth(1);
    // // doc.setFontSize(8);
    // // doc.setFont("harlow solid italic");
    // // doc.setFontType("bold");
    // // doc.setFontSize(50);
    // // doc.text(270, 70, "Arkiease");

    // const pageCount = doc.internal.getNumberOfPages();
    // console.log(pageCount)
    
    
    // doc.autoTable({
    //     html: '.RenterLog3',
    //     startY: 80,
    //     theme: 'grid',
    //     columnStyles: {
    //         0: {
    //             cellWidth: 40,
    //         },
    //         1: {
    //             cellWidth: 40,
    //         },
    //         2: {
    //             cellWidth: 40,
    //         }
    //     },
    //     styles: {
    //         minCellHeight: 10
    //     }
    // })

    // for(var i = 1; i <= pageCount; i++){
    //     doc.setPage(i);

    //     doc.setLineWidth(1);
    //     doc.setFontSize(8);
    //     doc.setFont("Calibri");
    //     doc.setFontType("bold");
    //     doc.setFontSize(10);
    //     doc.setFontStyle('italic');
    //     doc.text(262, 200,'Page ' + String(i) + ' of ' + String(pageCount), );
    // }


    // // doc.text(242, y = y + 100, String(pageCount));
    // doc.save('RenterLog.pdf');

    


});


$("#RentalLogPDF").on("click",function(){

    
    if (I('RentalLog1').value == '' && I('RentalLog2').value == '' || I('RentalLog1').value != '' && I('RentalLog2').value == '' || I('RentalLog1').value == '' && I('RentalLog2').value != ''){
        Swal.fire({
            title: "Choose Date!",
            text: "Please check if you already choose a date!",
            icon: "info"
          });
    }

    else if(I('RentalLogs').innerHTML == ''){
        Swal.fire({
            title: "Filter!",
            text: "Please check the filter first!",
            icon: "info"
          });
    }
    else{
        var doc = new jsPDF('landscape');
    
        var htmlstring = '';
        var tempVarToCheckPageHeight = 0;
        var pageHeight = 0;
        pageHeight = doc.internal.pageSize.height;
        specialElementHandlers = {
            // element with id of "bypass" - jQuery style selector  
            '#bypassme': function(element, renderer) {
                // true = "handled elsewhere, bypass text extraction"  
                return true
            }
        };
        margins = {
            top: 150,
            bottom: 60,
            left: 40,
            right: 40,
            width: 600,
            
        };
        var y = 30;
        
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(50);
        doc.setFontStyle('italic');
        doc.text(118, 25, "Arkiease");
    
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 30, "................................................................................................................................................................................................................................................................................................................");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(118, 35, "32 – A. Malta St., Pinagbuklod Purok 1-A,");
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(133, 41, "New Lower Bicutan");
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(128, 47, "Taguig City, Metro Manila");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(122, 53, "Email: arkieasewebsite@gmail.com");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(20);
        doc.setFontStyle('italic');
        doc.text(130, 65, "Rental Logs");
    
    
        const d = new Date("July 21, 1983");
        let day = d.getDate();
    
    
        const T = new Date("01:15:00 AM");
        let time = T.getDate();
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 71, "Date Printed: " + Date());
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 76, "Printed by: " + I('AdminFullName').innerHTML);
    
    
        // doc.setLineWidth(1);
        // doc.setFontSize(8);
        // doc.setFont("Calibri");
        // doc.setFontType("bold");
        // doc.setFontSize(10);
        // doc.setFontStyle('italic');
        // doc.text(242, 71, "Time Printed: " + "");
        // doc.setLineWidth(1);
        // doc.setFontSize(8);
        // doc.setFont("harlow solid italic");
        // doc.setFontType("bold");
        // doc.setFontSize(50);
        // doc.text(270, 70, "Arkiease");
    
        const pageCount = doc.internal.getNumberOfPages();
        console.log(pageCount)
        
        
        doc.autoTable({
            html: '.RentalLogs3',
            startY: 80,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 40,
                },
                1: {
                    cellWidth: 40,
                },
                2: {
                    cellWidth: 40,
                }
            },
            styles: {
                minCellHeight: 10
            }
        })
    
        // for(var i = 1; i <= pageCount; i++){
        //     doc.setPage(i);
    
        //     doc.setLineWidth(1);
        //     doc.setFontSize(8);
        //     doc.setFont("Calibri");
        //     doc.setFontType("bold");
        //     doc.setFontSize(10);
        //     doc.setFontStyle('italic');
        //     doc.text(262, 200,'Page ' + String(i) + ' of ' + String(pageCount), );
        // }
    
    
        // doc.text(242, y = y + 100, String(pageCount));
        doc.save('RenteeLog.pdf');
    }
    // var doc = new jsPDF('landscape');
    
    // var htmlstring = '';
    // var tempVarToCheckPageHeight = 0;
    // var pageHeight = 0;
    // pageHeight = doc.internal.pageSize.height;
    // specialElementHandlers = {
    //     // element with id of "bypass" - jQuery style selector  
    //     '#bypassme': function(element, renderer) {
    //         // true = "handled elsewhere, bypass text extraction"  
    //         return true
    //     }
    // };
    // margins = {
    //     top: 150,
    //     bottom: 60,
    //     left: 40,
    //     right: 40,
    //     width: 600,
        
    // };
    // var y = 30;
    


    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(50);
    // doc.setFontStyle('italic');
    // doc.text(118, 25, "Arkiease");



    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(15, 30, "................................................................................................................................................................................................................................................................................................................");


    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(118, 35, "32 – A. Malta St., Pinagbuklod Purok 1-A,");

    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(133, 41, "New Lower Bicutan");

    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(128, 47, "Taguig City, Metro Manila");


    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("harlow solid italic");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(122, 53, "Email: arkieasewebsite@gmail.com");


    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("Calibri");
    // doc.setFontType("bold");
    // doc.setFontSize(20);
    // doc.setFontStyle('italic');
    // doc.text(130, 65, "Rental Logs");


    // const d = new Date("July 21, 1983");
    // let day = d.getDate();


    // const T = new Date("01:15:00 AM");
    // let time = T.getDate();

    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("Calibri");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(15, 71, "Date Printed: " );

    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("Calibri");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(15, 76, "Printed by: soilobaisa");


    // doc.setLineWidth(1);
    // doc.setFontSize(8);
    // doc.setFont("Calibri");
    // doc.setFontType("bold");
    // doc.setFontSize(10);
    // doc.setFontStyle('italic');
    // doc.text(242, 71, "Time Printed: " + "");
    // // doc.setLineWidth(1);
    // // doc.setFontSize(8);
    // // doc.setFont("harlow solid italic");
    // // doc.setFontType("bold");
    // // doc.setFontSize(50);
    // // doc.text(270, 70, "Arkiease");

    // const pageCount = doc.internal.getNumberOfPages();
    // console.log(pageCount)
    
    
    // doc.autoTable({
    //     html: '.RentalLogs3',
    //     startY: 80,
    //     theme: 'grid',
    //     columnStyles: {
    //         0: {
    //             cellWidth: 40,
    //         },
    //         1: {
    //             cellWidth: 40,
    //         },
    //         2: {
    //             cellWidth: 40,
    //         }
    //     },
    //     styles: {
    //         minCellHeight: 10
    //     }
    // })

    // for(var i = 1; i <= pageCount; i++){
    //     doc.setPage(i);

    //     doc.setLineWidth(1);
    //     doc.setFontSize(8);
    //     doc.setFont("Calibri");
    //     doc.setFontType("bold");
    //     doc.setFontSize(10);
    //     doc.setFontStyle('italic');
    //     doc.text(262, 200,'Page ' + String(i) + ' of ' + String(pageCount), );
    // }


    // // doc.text(242, y = y + 100, String(pageCount));
    // doc.save('RenteeLog.pdf');

    


});


$("#RenteeTLogPDF").on("click",function(){

    if(I('RenteeTLog1').value == '' || I('RenteeTLog2').value == ''){
        Swal.fire({
            title: "Date?",
            text: "Please Choose a date!",
            icon: "info"
          });
    }
    else{
        var doc = new jsPDF('landscape');
    
        var htmlstring = '';
        var tempVarToCheckPageHeight = 0;
        var pageHeight = 0;
        pageHeight = doc.internal.pageSize.height;
        specialElementHandlers = {
            // element with id of "bypass" - jQuery style selector  
            '#bypassme': function(element, renderer) {
                // true = "handled elsewhere, bypass text extraction"  
                return true
            }
        };
        margins = {
            top: 150,
            bottom: 60,
            left: 40,
            right: 40,
            width: 600,
            
        };
        var y = 30;
        
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(50);
        doc.setFontStyle('italic');
        doc.text(118, 25, "Arkiease");
    
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 30, "................................................................................................................................................................................................................................................................................................................");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(118, 35, "32 – A. Malta St., Pinagbuklod Purok 1-A,");
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(133, 41, "New Lower Bicutan");
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(128, 47, "Taguig City, Metro Manila");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(122, 53, "Email: arkieasewebsite@gmail.com");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(20);
        doc.setFontStyle('italic');
        doc.text(112, 65, "Rentee Transaction Log");
    
    
        const d = new Date("July 21, 1983");
        let day = d.getDate();
    
    
        const T = new Date("01:15:00 AM");
        let time = T.getDate();
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 71, "Date Printed: " + Date());
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 76, "Printed by: "+ I('AdminFullName').innerHTML);
    
    
        // doc.setLineWidth(1);
        // doc.setFontSize(8);
        // doc.setFont("Calibri");
        // doc.setFontType("bold");
        // doc.setFontSize(10);
        // doc.setFontStyle('italic');
        // doc.text(242, 71, "Time Printed: " + "");
        // doc.setLineWidth(1);
        // doc.setFontSize(8);
        // doc.setFont("harlow solid italic");
        // doc.setFontType("bold");
        // doc.setFontSize(50);
        // doc.text(270, 70, "Arkiease");
    
        const pageCount = doc.internal.getNumberOfPages();
        console.log(pageCount)
        
        
        doc.autoTable({
            html: '.RenteeTransactionLog',
            startY: 80,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 40,
                },
                1: {
                    cellWidth: 40,
                },
                2: {
                    cellWidth: 40,
                }
            },
            styles: {
                minCellHeight: 10
            }
        })
    
        // for(var i = 1; i <= pageCount; i++){
        //     doc.setPage(i);
    
        //     doc.setLineWidth(1);
        //     doc.setFontSize(8);
        //     doc.setFont("Calibri");
        //     doc.setFontType("bold");
        //     doc.setFontSize(10);
        //     doc.setFontStyle('italic');
        //     doc.text(262, 200,'Page ' + String(i) + ' of ' + String(pageCount), );
        // }
    
    
        // doc.text(242, y = y + 100, String(pageCount));
        doc.save('RenteeTransactionLog.pdf');
    
    }
   
    


});


$("#RenterTLogPDF").on("click",function(){

    if(I('RenterTLog1').value == '' || I('RenterTLog2').value == ''){
        Swal.fire({
            title: "Date?",
            text: "Please Choose a date!",
            icon: "info"
          });
    }
    else{
        var doc = new jsPDF('landscape');
    
        var htmlstring = '';
        var tempVarToCheckPageHeight = 0;
        var pageHeight = 0;
        pageHeight = doc.internal.pageSize.height;
        specialElementHandlers = {
            // element with id of "bypass" - jQuery style selector  
            '#bypassme': function(element, renderer) {
                // true = "handled elsewhere, bypass text extraction"  
                return true
            }
        };
        margins = {
            top: 150,
            bottom: 60,
            left: 40,
            right: 40,
            width: 600,
            
        };
        var y = 30;
        
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(50);
        doc.setFontStyle('italic');
        doc.text(118, 25, "Arkiease");
    
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 30, "................................................................................................................................................................................................................................................................................................................");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(118, 35, "32 – A. Malta St., Pinagbuklod Purok 1-A,");
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(133, 41, "New Lower Bicutan");
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(128, 47, "Taguig City, Metro Manila");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(122, 53, "Email: arkieasewebsite@gmail.com");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(20);
        doc.setFontStyle('italic');
        doc.text(112, 65, "Renter Transaction Log");
    
    
        const d = new Date("July 21, 1983");
        let day = d.getDate();
    
    
        const T = new Date("01:15:00 AM");
        let time = T.getDate();
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 71, "Date Printed: " + Date());
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 76, "Printed by: "+ I('AdminFullName').innerHTML);
    
    
        // doc.setLineWidth(1);
        // doc.setFontSize(8);
        // doc.setFont("Calibri");
        // doc.setFontType("bold");
        // doc.setFontSize(10);
        // doc.setFontStyle('italic');
        // doc.text(242, 71, "Time Printed: " + "");
        // doc.setLineWidth(1);
        // doc.setFontSize(8);
        // doc.setFont("harlow solid italic");
        // doc.setFontType("bold");
        // doc.setFontSize(50);
        // doc.text(270, 70, "Arkiease");
    
        const pageCount = doc.internal.getNumberOfPages();
        console.log(pageCount)
        
        
        doc.autoTable({
            html: '.RenterTransactionLog',
            startY: 80,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 40,
                },
                1: {
                    cellWidth: 40,
                },
                2: {
                    cellWidth: 40,
                }
            },
            styles: {
                minCellHeight: 10
            }
        })
    
        // for(var i = 1; i <= pageCount; i++){
        //     doc.setPage(i);
    
        //     doc.setLineWidth(1);
        //     doc.setFontSize(8);
        //     doc.setFont("Calibri");
        //     doc.setFontType("bold");
        //     doc.setFontSize(10);
        //     doc.setFontStyle('italic');
        //     doc.text(262, 200,'Page ' + String(i) + ' of ' + String(pageCount), );
        // }
    
    
        // doc.text(242, y = y + 100, String(pageCount));
        doc.save('RenterTransactionLog.pdf');
    
    }
   
    


});


$("#RenteeRLogPDF").on("click",function(){

    if(I('RenteeRLog1').value == '' || I('RenteeRLog2').value == ''){
        Swal.fire({
            title: "Date?",
            text: "Please Choose a date!",
            icon: "info"
          });
    }
    else{
        var doc = new jsPDF('landscape');
    
        var htmlstring = '';
        var tempVarToCheckPageHeight = 0;
        var pageHeight = 0;
        pageHeight = doc.internal.pageSize.height;
        specialElementHandlers = {
            // element with id of "bypass" - jQuery style selector  
            '#bypassme': function(element, renderer) {
                // true = "handled elsewhere, bypass text extraction"  
                return true
            }
        };
        margins = {
            top: 150,
            bottom: 60,
            left: 40,
            right: 40,
            width: 600,
            
        };
        var y = 30;
        
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(50);
        doc.setFontStyle('italic');
        doc.text(118, 25, "Arkiease");
    
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 30, "................................................................................................................................................................................................................................................................................................................");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(118, 35, "32 – A. Malta St., Pinagbuklod Purok 1-A,");
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(133, 41, "New Lower Bicutan");
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(128, 47, "Taguig City, Metro Manila");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(122, 53, "Email: arkieasewebsite@gmail.com");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(20);
        doc.setFontStyle('italic');
        doc.text(118, 65, "Rentee Request Log");
    
    
        const d = new Date("July 21, 1983");
        let day = d.getDate();
    
    
        const T = new Date("01:15:00 AM");
        let time = T.getDate();
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 71, "Date Printed: " + Date());
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 76, "Printed by: "+ I('AdminFullName').innerHTML);
    
    
        // doc.setLineWidth(1);
        // doc.setFontSize(8);
        // doc.setFont("Calibri");
        // doc.setFontType("bold");
        // doc.setFontSize(10);
        // doc.setFontStyle('italic');
        // doc.text(242, 71, "Time Printed: " + "");
        // doc.setLineWidth(1);
        // doc.setFontSize(8);
        // doc.setFont("harlow solid italic");
        // doc.setFontType("bold");
        // doc.setFontSize(50);
        // doc.text(270, 70, "Arkiease");
    
        const pageCount = doc.internal.getNumberOfPages();
        console.log(pageCount)
        
        
        doc.autoTable({
            html: '.RenteeRequestLog',
            startY: 80,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 40,
                },
                1: {
                    cellWidth: 40,
                },
                2: {
                    cellWidth: 40,
                }
            },
            styles: {
                minCellHeight: 10
            }
        })
    
        // for(var i = 1; i <= pageCount; i++){
        //     doc.setPage(i);
    
        //     doc.setLineWidth(1);
        //     doc.setFontSize(8);
        //     doc.setFont("Calibri");
        //     doc.setFontType("bold");
        //     doc.setFontSize(10);
        //     doc.setFontStyle('italic');
        //     doc.text(262, 200,'Page ' + String(i) + ' of ' + String(pageCount), );
        // }
    
    
        // doc.text(242, y = y + 100, String(pageCount));
        doc.save('RenteeRequestLog.pdf');
    
    }
   
    


});


$("#RenterRLogPDF").on("click",function(){

    if(I('RenterRLog1').value == '' || I('RenterRLog2').value == ''){
        Swal.fire({
            title: "Date?",
            text: "Please Choose a date!",
            icon: "info"
          });
    }
    else{
        var doc = new jsPDF('landscape');
    
        var htmlstring = '';
        var tempVarToCheckPageHeight = 0;
        var pageHeight = 0;
        pageHeight = doc.internal.pageSize.height;
        specialElementHandlers = {
            // element with id of "bypass" - jQuery style selector  
            '#bypassme': function(element, renderer) {
                // true = "handled elsewhere, bypass text extraction"  
                return true
            }
        };
        margins = {
            top: 150,
            bottom: 60,
            left: 40,
            right: 40,
            width: 600,
            
        };
        var y = 30;
        
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(50);
        doc.setFontStyle('italic');
        doc.text(118, 25, "Arkiease");
    
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 30, "................................................................................................................................................................................................................................................................................................................");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(118, 35, "32 – A. Malta St., Pinagbuklod Purok 1-A,");
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(133, 41, "New Lower Bicutan");
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(128, 47, "Taguig City, Metro Manila");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("harlow solid italic");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(122, 53, "Email: arkieasewebsite@gmail.com");
    
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(20);
        doc.setFontStyle('italic');
        doc.text(118, 65, "Renter Request Log");
    
    
        const d = new Date("July 21, 1983");
        let day = d.getDate();
    
    
        const T = new Date("01:15:00 AM");
        let time = T.getDate();
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 71, "Date Printed: " + Date());
    
        doc.setLineWidth(1);
        doc.setFontSize(8);
        doc.setFont("Calibri");
        doc.setFontType("bold");
        doc.setFontSize(10);
        doc.setFontStyle('italic');
        doc.text(15, 76, "Printed by: "+ I('AdminFullName').innerHTML);
    
    
        // doc.setLineWidth(1);
        // doc.setFontSize(8);
        // doc.setFont("Calibri");
        // doc.setFontType("bold");
        // doc.setFontSize(10);
        // doc.setFontStyle('italic');
        // doc.text(242, 71, "Time Printed: " + "");
        // doc.setLineWidth(1);
        // doc.setFontSize(8);
        // doc.setFont("harlow solid italic");
        // doc.setFontType("bold");
        // doc.setFontSize(50);
        // doc.text(270, 70, "Arkiease");
    
        const pageCount = doc.internal.getNumberOfPages();
        console.log(pageCount)
        
        
        doc.autoTable({
            html: '.RenterRequestLog',
            startY: 80,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 40,
                },
                1: {
                    cellWidth: 40,
                },
                2: {
                    cellWidth: 40,
                }
            },
            styles: {
                minCellHeight: 10
            }
        })
    
        // for(var i = 1; i <= pageCount; i++){
        //     doc.setPage(i);
    
        //     doc.setLineWidth(1);
        //     doc.setFontSize(8);
        //     doc.setFont("Calibri");
        //     doc.setFontType("bold");
        //     doc.setFontSize(10);
        //     doc.setFontStyle('italic');
        //     doc.text(262, 200,'Page ' + String(i) + ' of ' + String(pageCount), );
        // }
    
    
        // doc.text(242, y = y + 100, String(pageCount));
        doc.save('RenterRequestLog.pdf');
    
    }
   
    


});
// let CustomerEnableBtn = document.querySelectorAll('.CEbtn');

//     CustomerEnableBtn.forEach((ClickCDB) => {
//         ClickCDB.onclick = () => {
//             CustomerEnablePopup[0].style.display = 'block';
//             blurActive1();
//         }
//     });
    
// let CustomerDisabledBtn = document.querySelectorAll('.CDbtn');

//     CustomerDisabledBtn.forEach((ClickCDB) => {
//         ClickCDB.onclick = () => {
//             CustomerDisablePopup[0].style.display = 'block';
//             blurActive1();
//         }
//     });
    
    
    // I('HELPIDCARD').onclick = function() {
    //     MicroModal.show('id-image-example',{
    //         disableScroll: true,
    //         awaitCloseAnimation: true,
    //         onShow: function(modal){
        
    //         },
    //     });
        
    // }
    
    
    // I('HELPFACE').onclick = function() {
    //     MicroModal.show('face-image-example',{
    //         disableScroll: true,
    //         awaitCloseAnimation: true,
    //         onShow: function(modal){
        
    //         },
    //     });
        
    // }

    // function Checkdata () {
    //     let EMAILUSERNAMEBOX = I("AdminUsername").value;
    //     let PASSBOX = I("AdminPassword").value;
    //     let form_data = new FormData();
    //     form_data.append("EMAILUSERNAMEBOX",EMAILUSERNAMEBOX);
    //     form_data.append("PASSBOX",PASSBOX);
    //     form_data.append("wtype","forlogin");
    //     $.ajax({
    //         url:'../adminincludes/informationLoad.php',
    //         method:'POST',
    //         data:form_data,
    //         contentType:false,
    //         cache:false,
    //         processData:false,
    //         // beforeSend: function() {
    //         //     let EMAILUSERNAMEBOX = I("EMAILUSERNAMEBOX");
    //         //     let HINT =  EMAILUSERNAMEBOX.nextElementSibling;
    //         //     let WARNCIRCLE = HINT;
    //         //     WARNINGBOX.style.cssText = 'display:none !important';
    //         //     WARNCIRCLE.style.cssText = 'display:none !important';
    //         //     EMAILUSERNAMEBOX.parentElement.style.borderColor = "grey";
    //         //     let PASSBOX = I("PASSBOX");
    //         //     let HINT1 =  PASSBOX.nextElementSibling;
    //         //     let WARNCIRCLE1 = HINT1;
    //         //     // parent.className="hint--top hint--per hint--error hint--always";
    //         //     WARNINGBOX.style.cssText = 'display:none !important';
    //         //     WARNCIRCLE1.style.cssText = 'display:none !important';
    //         //     PASSBOX.parentElement.style.borderColor = "grey";
    //         //     MicroModal.show('loading-register',{
    //         //         disableScroll: true,
    //         //         awaitCloseAnimation: true,
    //         //         onShow: function(modal){
    //         //             resetScroll();
    //         //         },
    //         //     });
    //         // },
    //         success: function(response){
    //             let r = JSON.parse(response);
    //             // WARNINGBOX.style.cssText = 'display:none !important';
    //             // MicroModal.close('loading-register'); 
    //             if ((response != -1 && response != 0 && r != 0) && r[0]['ACCEX'] == 1) {
    //                 // if (r[0]['userType'] == "Rentee"){
    //                 //     setc('userID', r[0]['userID']);
    //                 //     if (r[0]['renterID'] > 0){
    //                 //         setc("renterID", r[0]['renterID']);
    //                 //         console.log();
    //                 //         if (window.history.length > 2) {
    //                 //             history.back();
    //                 //         }
    //                 //         else {
    //                 //             window.location.href = "homepage.php";
    //                 //         }
    //                 //     }
    //                 //     window.location.reload();
    //                 //     window.location = "homepage.php";
    //                 //     console.log();
    //                 //     if (window.history.length > 2) {
    //                 //         history.back();
    //                 //     }
    //                 //     else {
    //                 //         window.location.href = "homepage.php";
    //                 //     }
    //                 // }
    //                 if (r[0]['userType'] == "Admin"){
    //                     setc('adminID', r[0]['userID']);
    //                     window.location.reload();
    //                     window.location = "adminpage/index.php";
    //                     console.log(getc('adminID'));
    //                 }
    //                 else if (r[0]['userType'] == "SuperAdmin"){
    //                     setc('adminID', r[0]['userID']);
    //                     window.location.reload();
    //                     window.location = "adminpage/index.php";
    //                     console.log(getc('adminID'));
    //                 }
    //             }
    //             else {
    //                 console.log('hehe login');
    //                 // let EMAILUSERNAMEBOX = I("EMAILUSERNAMEBOX");
    //                 // let HINT =  EMAILUSERNAMEBOX.nextElementSibling;
    //                 // let WARNCIRCLE = HINT;
    //                 // WARNINGBOX.style.cssText = 'display:flex !important';
    //                 // WARNCIRCLE.style.cssText = 'display:flex !important';
    //                 // EMAILUSERNAMEBOX.parentElement.style.borderColor = "red";
    //                 // let PASSBOX = I("PASSBOX");
    //                 // let HINT1 =  PASSBOX.nextElementSibling;
    //                 // let WARNCIRCLE1 = HINT1;
    //                 // // parent.className="hint--top hint--per hint--error hint--always";
    //                 // WARNINGBOX.style.cssText = 'display:flex !important';
    //                 // WARNCIRCLE1.style.cssText = 'display:flex !important';
    //                 // PASSBOX.parentElement.style.borderColor = "red";
    //                 // I("EMAILUSERNAMEBOX").value = "";
    //                 // I("PASSBOX").value = "";
    //             }
    //         }
    //     });
    // }

 