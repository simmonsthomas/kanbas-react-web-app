import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Courses from './Courses';
import KanbasNavigation from './Navigation';

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <KanbasNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/*" element={<Courses />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
