import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const AvailabilityCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Mock availability data (in real app this would come from API)
  const unavailableDates = [
    "2024-03-15", "2024-03-16", "2024-03-22", "2024-03-28", "2024-03-29", "2024-03-30",
    "2024-04-05", "2024-04-06", "2024-04-12", "2024-04-13", "2024-04-20"
  ];
  
  const bookedDates = ["2024-03-25", "2024-03-26", "2024-03-27", "2024-04-08", "2024-04-09"];

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    while (current <= lastDay || current.getDay() !== 0) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const isUnavailable = (date: Date) => {
    const dateStr = formatDate(date);
    return unavailableDates.includes(dateStr) || bookedDates.includes(dateStr);
  };

  const isBooked = (date: Date) => {
    return bookedDates.includes(formatDate(date));
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth();
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Availability Calendar
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="sm" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h3 className="font-semibold text-lg">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <Button variant="ghost" size="sm" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const unavailable = isUnavailable(day);
            const booked = isBooked(day);
            const currentMonthDay = isCurrentMonth(day);
            const past = isPastDate(day);
            
            return (
              <button
                key={index}
                disabled={unavailable || past}
                className={`
                  aspect-square p-1 text-sm rounded-lg transition-colors relative
                  ${!currentMonthDay ? 'text-muted-foreground/50' : ''}
                  ${past ? 'text-muted-foreground/30 cursor-not-allowed' : ''}
                  ${booked && currentMonthDay && !past ? 'bg-destructive text-destructive-foreground' : ''}
                  ${unavailable && !booked && currentMonthDay && !past ? 'bg-muted text-muted-foreground' : ''}
                  ${!unavailable && !booked && !past && currentMonthDay ? 'hover:bg-ocean/10 hover:text-ocean' : ''}
                  ${!unavailable && !booked && !past && currentMonthDay ? 'bg-ocean/5 border border-ocean/20' : ''}
                `}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-ocean/20 border border-ocean/40 rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-destructive rounded"></div>
            <span>Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-muted rounded"></div>
            <span>Unavailable</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AvailabilityCalendar;