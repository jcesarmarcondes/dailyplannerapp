<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>

const todaysDate = dayjs().format('DD/MM/YYYY')

document.addEventListener('DOMContentLoaded', function() {
 const saveButtons = document.querySelectorAll('.saveBtn');
 saveButtons.forEach(button => {
    button.addEventListener('click', function() {
      const timeblock = this.closest('.timeblock');
      const time = timeblock.querySelector('.time').textContent;
      const event = timeblock.querySelector('.event').value;
      localStorage.setItem(time, event);
      alert('Event saved!'); // Simple feedback
      // Optionally, change the button's appearance to indicate success
    });
 });
});