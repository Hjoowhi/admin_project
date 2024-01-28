// 크롤링한 데이터를 아래와 같은 형태의 객체 배열로 가정합니다.
// 추후 데이터베이스에 있는 데이터를 쿼리문으로 불러 올 수 있게 쿼리르 작성해 볼 수 있음

/* 데이터 */
const data = [
    { category: "상의", gender: '남성', brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
    { category: "하의", gender: '남성', brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
    { category: "신발", gender: '여성', brand: 'Nike', product: '에어포스 1', price: '137,000' },
    { category: "패션잡화", gender: '공용', brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
    { category: "상의", gender: '남성', brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
    { category: "하의", gender: '남성', brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
    { category: "신발", gender: '여성', brand: 'Nike', product: '에어포스 1', price: '137,000' },
    { category: "패션잡화", gender: '공용', brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
    { category: "상의", gender: '남성', brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
    { category: "하의", gender: '남성', brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
    { category: "신발", gender: '여성', brand: 'Nike', product: '에어포스 1', price: '137,000' },
    { category: "패션잡화", gender: '공용', brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
    { category: "상의", gender: '남성', brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
    { category: "하의", gender: '남성', brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
    { category: "신발", gender: '여성', brand: 'Nike', product: '에어포스 1', price: '137,000' },
    { category: "패션잡화", gender: '공용', brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' }
    // ...
];
    
/* 테이블에 데이터 출력 */ 
const dataTable = document.getElementById('data-table');

function showData(){
    data.forEach((item) => {
        const row = dataTable.insertRow();

        // 테이블에 체크박스 넣기
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.classList.add('checkboxes');
        const checkCell = row.insertCell(0);
        checkCell.append(checkBox);

        row.insertCell(1).innerHTML = item.category;
        row.insertCell(2).innerHTML = item.gender;
        row.insertCell(3).innerHTML = item.brand;
        row.insertCell(4).innerHTML = item.product;
        row.insertCell(5).innerHTML = item.price;
    });
}
showData();

/* 현재 날짜 및 시간 */
let today = setInterval(function(){

    const p = document.getElementById("today");

    const today = new Date();
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    // 년도
    let year = today.getFullYear();
    // 달 MM
    let month = today.getMonth();
    month = ('0' + (month + 1)).slice(-2);
    // 날짜 DD
    let date = today.getDate();
    date = ('0' + (date)).slice(-2);
    // 요일
    let day = week[today.getDay()];
    // 시간 HH
    let hour = today.getHours(); 
    hour = hour >= 10 ? hour : '0' + hour;
    // 분 MM
    let min = today.getMinutes();
    min = min >= 10 ? min : '0' + min;
    // 초 SS
    let sec = today.getSeconds();
    sec = sec >= 10 ? sec : '0' + sec;
    // 낮밤 구분
    let ampm = hour >= 12 ? 'PM' : 'AM'

    p.innerHTML = `TODAY : ${year}-${month}-${date} (${day}) ${hour}:${min}:${sec} ${ampm}`
    p.style.color = 'gray'

}, 1000)

/* 업데이트 날짜 (데이터 받고 작성하기) */
let updateTime = setInterval(function(){

    const p = document.getElementById("updateDay");

    const updateDay = new Date();

    let year = updateDay.getFullYear();
    let month = updateDay.getMonth();
    month = ('0' + (month + 1)).slice(-2);
    let date = updateDay.getDate();
    date = ('0' + (date)).slice(-2);

    p.innerHTML = `UPDATE : ${year}-${month}-${date}`
    p.style.color = 'gray'

}, 1000);

/* 성별 필터링 함수 */
function selectGender(gender) {
    dataTable.innerHTML = '';

    data.forEach(item => {
        if(item.gender === gender){
            row = dataTable.insertRow();

            // 테이블에 체크박스 넣기
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            const checkCell = row.insertCell(0);
            checkCell.append(checkBox);
        
            row.insertCell(1).innerHTML = item.category;
            row.insertCell(2).innerHTML = item.gender;
            row.insertCell(3).innerHTML = item.brand;
            row.insertCell(4).innerHTML = item.product;
            row.insertCell(5).innerHTML = item.price;
        }
    })
};

/* 성별 구분 출력 */
const genderAll = document.getElementById('genderAllCheck');
const unisex = document.getElementById('unisexCheck');
const male = document.getElementById('maleCheck');
const female = document.getElementById('femaleCheck');

// 공용
unisex.addEventListener('click', function() {
    if(unisex.checked) {
        // 공용 외 다른 버튼 해제
        genderAll.checked = false;
        male.checked = false;
        female.checked = false;
        selectGender('공용');
    }
});
// 남성
male.addEventListener('click', function() {
    if(male.checked) {
        genderAll.checked = false;
        unisex.checked = false;
        female.checked = false;
        selectGender('남성'); 
    }
});
// 여성
female.addEventListener('click', function() {
    if(female.checked) {
        genderAll.checked = false;
        unisex.checked = false;
        male.checked = false;
        selectGender('여성'); 
    }
});
// '전체' 버튼 클릭
genderAll.addEventListener('click', function() {
    if (genderAll.checked) {
        unisex.checked = false;
        male.checked = false;
        female.checked = false;
        showData(); // 전체 데이터 출력
    }
});

/* 전체 선택 체크박스 */
function selectCheckAll(){
    // 모든 체크박스
    const allCheckBoxes = document.querySelectorAll('.checkboxes');
    // 전체선택 체크박스
    const selectAll = document.getElementById('allCheck');

    // 전체선택 클릭 이벤트
    selectAll.addEventListener('click', function(){
        allCheckBoxes.forEach(function(checkbox){
            checkbox.checked = selectAll.checked;
        });
    });

    // 체크박스 하나라도 해제 시, 전체 선택 해제
    allCheckBoxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            let allChecked = true;
            allCheckBoxes.forEach(function(checkbox) {
                if (!checkbox.checked) {
                    allChecked = false;
                }
            });
            selectAll.checked = allChecked;
        });
    });
}
selectCheckAll();

/* 삭제 버튼 클릭 이벤트 - 다시 한 번 확인하기 */
function deleteButton(){
    const deleteBtn = document.getElementById('deleteBtn');

    deleteBtn.addEventListener('click', function(){
        const selectCheck = document.querySelectorAll('.checkboxes:checked');

        // 체크된 게 하나도 없을 경우
        if(selectCheck.length === 0){
            alert('삭제할 데이터를 선택해 주세요.');
        }else{
            confirm('해당 데이터를 정말 삭제하시겠습니까?');
        }
    });
};
deleteButton();

/* 삭제 기능 */

/* 상위 카테고리 선택 시, 하위 카테고리 자동 출력 */

/* 검색 */