import { Calendar, Clock, MapPin } from 'lucide-react';

function EventScheduleCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-5 w-5 mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-5 w-5 mr-2" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="h-5 w-5 mr-2" />
          <span>{event.location}</span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">{event.description}</p>
      </div>
    </div>
  );
}

export default EventScheduleCard; 