document.addEventListener('DOMContentLoaded', function () {
    // FullCalendar 초기화
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        selectable: true,
        selectHelper: true,
        select: function (start, end) {
            const selectedDate = start.format('YYYY-MM-DD');
            // 날짜 선택 시 해당 날짜에 대한 정보를 입력받을 수 있는 UI 표시
            document.querySelector('#saveBtn').addEventListener('click', function () {
                const time = document.querySelector('#time').value;
                const people = document.querySelector('#people').value;
                const notes = document.querySelector('#notes').value;

                // 저장된 일정 목록에 추가
                const listItem = document.createElement('li');
                listItem.textContent = `${selectedDate} | 시간: ${time} | 인원수: ${people} | 요청사항: ${notes}`;
                document.querySelector('#schedule-list').appendChild(listItem);

                // 입력 필드 초기화
                document.querySelector('#time').value = '';
                document.querySelector('#people').value = '';
                document.querySelector('#notes').value = '';
            });
        }
    });
});
