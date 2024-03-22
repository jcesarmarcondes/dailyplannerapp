<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>

function colorCodeTimeblocks() {
 const timeblocks = document.querySelectorAll('.timeblock');
 const now = dayjs();
 timeblocks.forEach(timeblock => {
    const time = dayjs(timeblock.querySelector('.time').textContent, 'h:mm A');
    if (time.isBefore(now)) {
      timeblock.classList.add('past');
    } else if (time.isAfter(now)) {
      timeblock.classList.add('future');
    } else {
      timeblock.classList.add('present');
    }
 });
}

function generateTimeblocks() {
 const time = dayjs(timeblock.querySelector('.time').textContent, 'h:mm A').format('h:mm A');
 const event = localStorage.getItem(time);
 if (event) {
    timeblock.querySelector('.event').value = event;
    }
 }

document.addEventListener('DOMContentLoaded', function() {
 const saveButtons = document.querySelectorAll('.saveBtn');
 saveButtons.forEach(button => {
    button.addEventListener('click', function() {
      const timeblock = this.closest('.timeblock');
      const time = timeblock.querySelector('.time').textContent;
      const event = timeblock.querySelector('.event').value;
      localStorage.setItem(time, event);
    });
 });
});

