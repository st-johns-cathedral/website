/* ===== CALENDAR ===== */
/* Renders the event calendar and filterable list. */

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("[data-event-calendar]")) {
    renderEventCalendar();
  }
});

function renderEventCalendar() {
  const container = document.querySelector("[data-event-calendar]");
  if (!container) return;

  const events = window.siteData && window.siteData.events ? window.siteData.events : [];

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startingDay = (firstDayOfMonth.getDay() + 6) % 7;

  const dayGrid = [];
  const blanks = Array(startingDay).fill("");
  dayGrid.push(...blanks);

  for (let d = 1; d <= lastDayOfMonth.getDate(); d++) {
    dayGrid.push(d);
  }

  const calendarHtml = `
    <div class="calendar-header">
      <h3>${monthNames[month]} ${year}</h3>
    </div>
    <div class="calendar-weekdays">
      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
    </div>
    <div class="calendar-days">
      ${dayGrid.map((day) => {
        if (!day) return '<span class="day day-empty"></span>';
        const eventForDay = events.filter((event) => {
          const date = new Date(event.date);
          return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
        });
        return `
          <button class="day ${eventForDay.length ? "has-event" : ""}" type="button" data-day="${day}">
            <span>${day}</span>
            ${eventForDay.length ? `<small>${eventForDay.length}</small>` : ""}
          </button>
        `;
      }).join("")}
    </div>
  `;

  container.innerHTML = calendarHtml;

  container.querySelectorAll(".day.has-event").forEach((dayBtn) => {
    dayBtn.addEventListener("click", () => {
      const selectedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayBtn.dataset.day).padStart(2, "0")}`;
      const matches = events.filter((event) => event.date.startsWith(selectedDate));
      const list = document.querySelector("[data-event-list]");
      if (!list) return;

      list.innerHTML = matches.length
        ? matches.map((event) => `
            <article class="event-card">
              <span class="event-category">${event.category}</span>
              <h4>${event.title}</h4>
              <p>${event.description}</p>
              <ul>
                <li>${event.date}</li>
                <li>${event.time}</li>
                <li>${event.location}</li>
              </ul>
              <a href="#" class="btn btn-secondary">Add to calendar</a>
            </article>
          `).join("")
        : `<p class="empty-state">No events scheduled for this date.</p>`;
    });
  });
}
