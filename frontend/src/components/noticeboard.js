// src/components/NoticeBoard.js
import React from 'react';

const NoticeBoard = () => {
  return (
    <div className="bg-yellow-200 p-4 rounded-md shadow-md h-64 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-2">Notice Board</h2>
      <ul className="list-disc pl-5 text-xl">
        <li>Event registration opens on October 10.</li>
        <li>Practice sessions start from October 15.</li>
        <li>Finals will be held on November 1.</li>
        <li>Team meetings every Wednesday.</li>
        <li>New members are always welcome!</li>
        <li>Join our Discord server for updates.</li>
        <li>Check the schedule for practice timings.</li>
        <li>Stay tuned for special announcements!</li>
      </ul>
    </div>
  );
};

export default NoticeBoard;
