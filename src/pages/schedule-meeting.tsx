import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const CALENDAR_EMBED_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0R922ehLvuasYXMIYUwg5qxVwC2ZsJNLM2ZB2j3vt74pU4fzVttMU3yz8EQhghyJPipdFdCo5j?gv=true';

export default function ScheduleMeeting() {
  return (
    <Layout title="Schedule meeting" description="Book a meeting">
      <div className="schedule-page">
        <div className="schedule-page__inner">
          <Heading as="h1" className="schedule-page__title">
            Schedule a meeting
          </Heading>
          <p className="schedule-page__subtitle">
            Pick a time that works for you — coffee, code, or a quick chat.
          </p>
          <div className="schedule-page__card">
            <iframe
              src={CALENDAR_EMBED_URL}
              className="schedule-page__iframe"
              width={800}
              height={600}
              title="Google Calendar – schedule meeting"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
